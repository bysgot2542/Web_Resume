const seedProducts = [
  { id: 1, name: 'ปูนซีเมนต์ตราเพชร', category: 'วัสดุก่อสร้าง', qty: 42, price: 165 },
  { id: 2, name: 'ท่อ PVC 1 นิ้ว', category: 'ประปา', qty: 18, price: 48 },
  { id: 3, name: 'สว่านไฟฟ้า 650W', category: 'เครื่องมือ', qty: 7, price: 1190 },
  { id: 4, name: 'สายไฟ VAF 2x2.5', category: 'ไฟฟ้า', qty: 24, price: 920 },
  { id: 5, name: 'ข้อต่อสามทาง PVC', category: 'ประปา', qty: 5, price: 16 },
  { id: 6, name: 'ลูกหมูเจียร 4 นิ้ว', category: 'เครื่องมือ', qty: 9, price: 850 },
  { id: 7, name: 'สีทาภายนอก 1 แกลลอน', category: 'วัสดุก่อสร้าง', qty: 13, price: 690 }
];

const orders = [
  { id: 'SO-2401', customer: 'หจก.ณัฐวัสดุ', amount: 8420, status: 'รอจัดสินค้า' },
  { id: 'SO-2402', customer: 'โรงงานน้ำดื่มสไมล์', amount: 12680, status: 'กำลังจัดส่ง' },
  { id: 'SO-2403', customer: 'ช่างเอก เซอร์วิส', amount: 3570, status: 'สำเร็จแล้ว' }
];

const storageKey = 'stockflow-products-v1';
let products = loadProducts();

const rows = document.querySelector('#inventoryRows');
const searchInput = document.querySelector('#searchInput');
const categoryFilter = document.querySelector('#categoryFilter');
const form = document.querySelector('#productForm');
const resetBtn = document.querySelector('#resetData');
const exportBtn = document.querySelector('#exportReport');

function loadProducts() {
  const saved = localStorage.getItem(storageKey);
  return saved ? JSON.parse(saved) : [...seedProducts];
}

function saveProducts() {
  localStorage.setItem(storageKey, JSON.stringify(products));
}

function money(value) {
  return new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB', maximumFractionDigits: 0 }).format(value);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[char]));
}

function getStatus(product) {
  return product.qty <= 10 ? 'low' : 'ok';
}

function totals() {
  return {
    stockValue: products.reduce((sum, item) => sum + item.qty * item.price, 0),
    totalQty: products.reduce((sum, item) => sum + item.qty, 0),
    lowStock: products.filter((item) => item.qty <= 10).length,
    categories: new Set(products.map((item) => item.category)).size
  };
}

function renderInventory() {
  const keyword = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const filtered = products.filter((product) => {
    const matchKeyword = product.name.toLowerCase().includes(keyword) || product.category.toLowerCase().includes(keyword);
    const matchCategory = category === 'all' || product.category === category;
    return matchKeyword && matchCategory;
  });

  rows.innerHTML = filtered.map((product) => {
    const status = getStatus(product);
    return `
      <tr>
        <td><strong>${escapeHtml(product.name)}</strong><small>SKU-${String(product.id).padStart(4, '0')}</small></td>
        <td>${escapeHtml(product.category)}</td>
        <td>
          <div class="qty-control" aria-label="ปรับจำนวน ${escapeHtml(product.name)}">
            <button type="button" data-adjust="-1" data-id="${product.id}">-</button>
            <span>${product.qty}</span>
            <button type="button" data-adjust="1" data-id="${product.id}">+</button>
          </div>
        </td>
        <td>${money(product.price)}</td>
        <td><span class="status-pill status-${status}">${status === 'low' ? 'ใกล้หมด' : 'พร้อมขาย'}</span></td>
        <td><button class="delete-btn" type="button" data-delete="${product.id}">ลบ</button></td>
      </tr>
    `;
  }).join('') || '<tr><td colspan="6">ไม่พบข้อมูลสินค้า</td></tr>';
}

function renderSummary() {
  const summary = totals();
  document.querySelector('#stockValue').textContent = money(summary.stockValue);
  document.querySelector('#totalItems').textContent = summary.totalQty.toLocaleString('th-TH');
  document.querySelector('#lowStock').textContent = summary.lowStock;
  document.querySelector('#monthlyOrders').textContent = orders.length;
  document.querySelector('#healthText').textContent = summary.lowStock > 0 ? 'มีสินค้าควรเติมสต็อก' : 'ระบบพร้อมใช้งาน';
  document.querySelector('#reportSummary').innerHTML = `
    <span><strong>${money(summary.stockValue)}</strong>มูลค่าคงคลังทั้งหมด</span>
    <span><strong>${summary.totalQty.toLocaleString('th-TH')}</strong>จำนวนสินค้ารวม</span>
    <span><strong>${summary.lowStock}</strong>รายการที่ควรเติมสต็อก</span>
    <span><strong>${summary.categories}</strong>หมวดหมู่สินค้า</span>
  `;
}

function renderChart() {
  const chart = document.querySelector('#chartBars');
  const categoryTotals = products.reduce((result, item) => {
    result[item.category] = (result[item.category] || 0) + item.qty * item.price;
    return result;
  }, {});
  const max = Math.max(...Object.values(categoryTotals), 1);
  chart.innerHTML = Object.entries(categoryTotals).map(([name, value]) => `
    <div class="chart-row">
      <strong>${escapeHtml(name)}</strong>
      <div class="chart-track"><div class="chart-fill" style="width: ${Math.max((value / max) * 100, 4)}%"></div></div>
      <span class="chart-value">${money(value)}</span>
    </div>
  `).join('');
}

function renderAlerts() {
  const alertList = document.querySelector('#alertList');
  const lows = products.filter((item) => item.qty <= 10).sort((a, b) => a.qty - b.qty);
  alertList.innerHTML = lows.map((item) => `
    <div class="alert-item">
      <strong>${escapeHtml(item.name)}</strong>
      <span>เหลือ ${item.qty} ชิ้น - ควรเติมสต็อก</span>
      <button class="restock-btn" type="button" data-restock="${item.id}">เติมเป็น 20 ชิ้น</button>
    </div>
  `).join('') || '<div class="empty-state">ยังไม่มีสินค้าใกล้หมด</div>';
}

function renderOrders() {
  const board = document.querySelector('#orderBoard');
  board.innerHTML = orders.map((order) => `
    <article class="order-card">
      <span>${order.id}</span>
      <p>${escapeHtml(order.customer)}</p>
      <strong>${money(order.amount)}</strong><br>
      <small>${order.status}</small>
    </article>
  `).join('');
}

function renderAll() {
  renderInventory();
  renderSummary();
  renderChart();
  renderAlerts();
  renderOrders();
}

function exportCsv() {
  const header = ['SKU', 'Name', 'Category', 'Quantity', 'Price', 'Stock Value', 'Status'];
  const lines = products.map((item) => [
    `SKU-${String(item.id).padStart(4, '0')}`,
    item.name,
    item.category,
    item.qty,
    item.price,
    item.qty * item.price,
    getStatus(item) === 'low' ? 'Low stock' : 'Ready'
  ]);
  const csv = [header, ...lines].map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
  const utf8Bom = '\uFEFF';
  const blob = new Blob([utf8Bom + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'stockflow-report-thai.csv';
  link.click();
  URL.revokeObjectURL(url);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nextId = products.length ? Math.max(...products.map((item) => item.id)) + 1 : 1;
  products.unshift({
    id: nextId,
    name: document.querySelector('#productName').value.trim(),
    category: document.querySelector('#productCategory').value,
    qty: Number(document.querySelector('#productQty').value),
    price: Number(document.querySelector('#productPrice').value)
  });
  saveProducts();
  form.reset();
  document.querySelector('#productQty').value = 10;
  document.querySelector('#productPrice').value = 120;
  renderAll();
});

rows.addEventListener('click', (event) => {
  const adjustButton = event.target.closest('[data-adjust]');
  const deleteButton = event.target.closest('[data-delete]');
  if (adjustButton) {
    const id = Number(adjustButton.dataset.id);
    const delta = Number(adjustButton.dataset.adjust);
    products = products.map((item) => item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item);
    saveProducts();
    renderAll();
  }
  if (deleteButton) {
    products = products.filter((item) => item.id !== Number(deleteButton.dataset.delete));
    saveProducts();
    renderAll();
  }
});

document.querySelector('#alertList').addEventListener('click', (event) => {
  const button = event.target.closest('[data-restock]');
  if (!button) return;
  const id = Number(button.dataset.restock);
  products = products.map((item) => item.id === id ? { ...item, qty: 20 } : item);
  saveProducts();
  renderAll();
});

searchInput.addEventListener('input', renderInventory);
categoryFilter.addEventListener('change', renderInventory);
exportBtn.addEventListener('click', exportCsv);
resetBtn.addEventListener('click', () => {
  products = [...seedProducts];
  saveProducts();
  searchInput.value = '';
  categoryFilter.value = 'all';
  renderAll();
});

renderAll();
