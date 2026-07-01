const languageStorageKey = 'thanaphat-portfolio-language';

const copy = {
  th: {
    pageTitle: 'StockFlow Mini ERP | Thanaphat Portfolio Project',
    metaDescription: 'StockFlow Mini ERP ระบบจัดการสต็อกและคำสั่งซื้อสำหรับร้านวัสดุและธุรกิจขายสินค้า',
    'language.switchLabel': 'เลือกภาษา',
    'sidebar.label': 'เมนูโปรเจค',
    'sidebar.dashboard': 'Dashboard',
    'sidebar.inventory': 'Inventory',
    'sidebar.orders': 'Orders',
    'sidebar.report': 'Report',
    'sidebar.back': 'กลับ Portfolio',
    'top.eyebrow': 'Business Web Application',
    'top.title': 'ระบบจัดการสต็อกและคำสั่งซื้อ',
    'top.export': 'Export CSV',
    'top.reset': 'รีเซ็ตข้อมูล',
    'hero.title': 'Mini ERP สำหรับร้านวัสดุ / ธุรกิจขายสินค้า',
    'hero.body': 'ระบบนี้ออกแบบมาเพื่อจัดการข้อมูลสินค้า คำสั่งซื้อ สถานะสต็อก และรายงานเบื้องต้นในหน้าจอเดียว โดยใช้ HTML, CSS และ JavaScript',
    'hero.healthLabel': 'สถานะระบบ',
    'hero.storageNote': 'ข้อมูลถูกจัดเก็บด้วย LocalStorage ในเครื่องผู้ชม',
    'kpi.label': 'การ์ดสรุปข้อมูล',
    'kpi.stockValue': 'มูลค่าสต็อก',
    'kpi.totalItems': 'จำนวนสินค้า',
    'kpi.lowStock': 'สินค้าใกล้หมด',
    'kpi.monthlyOrders': 'คำสั่งซื้อเดือนนี้',
    'inventory.eyebrow': 'Inventory',
    'inventory.title': 'คลังสินค้า',
    'inventory.search': 'ค้นหาสินค้า',
    'inventory.categoryFilter': 'กรองหมวดหมู่',
    'category.all': 'ทุกหมวดหมู่',
    'category.materials': 'วัสดุก่อสร้าง',
    'category.tools': 'เครื่องมือ',
    'category.plumbing': 'ประปา',
    'category.electrical': 'ไฟฟ้า',
    'table.product': 'สินค้า',
    'table.category': 'หมวดหมู่',
    'table.qty': 'คงเหลือ',
    'table.price': 'ราคา',
    'table.status': 'สถานะ',
    'form.eyebrow': 'Add Item',
    'form.title': 'เพิ่มสินค้า',
    'form.nameLabel': 'ชื่อสินค้า',
    'form.namePlaceholder': 'เช่น ปูนซีเมนต์',
    'form.categoryLabel': 'หมวดหมู่',
    'form.qtyLabel': 'จำนวน',
    'form.priceLabel': 'ราคา',
    'form.submit': 'เพิ่มสินค้า',
    'form.note': 'รายการที่เพิ่มจะแสดงทันทีในตารางและคำนวณ Dashboard ใหม่อัตโนมัติ',
    'analytics.eyebrow': 'Analytics',
    'analytics.title': 'มูลค่าสต็อกตามหมวดหมู่',
    'alerts.eyebrow': 'Alerts',
    'alerts.title': 'รายการที่ควรเติมสต็อก',
    'case.eyebrow': 'Case Study',
    'case.title': 'สรุปแนวคิดโปรเจค',
    'case.problemTitle': 'ปัญหาที่แก้',
    'case.problemBody': 'ร้านค้าขนาดเล็กมักตรวจสต็อกยาก ไม่เห็นสินค้าที่ควรเติม และต้องสรุปยอดด้วยมือ',
    'case.solutionTitle': 'สิ่งที่ระบบทำได้',
    'case.solutionBody': 'รวมข้อมูลสินค้า คำสั่งซื้อ สถานะสต็อก และรายงานเบื้องต้นไว้ในหน้าจอเดียว',
    'case.skillsTitle': 'ทักษะที่แสดง',
    'case.skillsBody': 'DOM manipulation, form validation, LocalStorage, filtering, calculations, responsive UI',
    'orders.eyebrow': 'Orders',
    'orders.title': 'คำสั่งซื้อวันนี้',
    healthReady: 'ระบบพร้อมใช้งาน',
    healthLow: 'มีสินค้าควรเติมสต็อก',
    statusLow: 'ใกล้หมด',
    statusOk: 'พร้อมขาย',
    delete: 'ลบ',
    qtyControl: 'ปรับจำนวน',
    noProducts: 'ไม่พบข้อมูลสินค้า',
    alertRemaining: 'เหลือ {qty} ชิ้น - ควรเติมสต็อก',
    restock: 'เติมเป็น 20 ชิ้น',
    noAlerts: 'ยังไม่มีสินค้าใกล้หมด',
    reportStockValue: 'มูลค่าคงคลังทั้งหมด',
    reportTotalQty: 'จำนวนสินค้ารวม',
    reportLowStock: 'รายการที่ควรเติมสต็อก',
    reportCategories: 'หมวดหมู่สินค้า',
    csvFile: 'stockflow-report-thai.csv',
    csvStatusLow: 'ใกล้หมด',
    csvStatusOk: 'พร้อมขาย'
  },
  en: {
    pageTitle: 'StockFlow Mini ERP | Thanaphat Portfolio Project',
    metaDescription: 'StockFlow Mini ERP, an inventory and order management demo for material stores and product businesses.',
    'language.switchLabel': 'Choose language',
    'sidebar.label': 'Project navigation',
    'sidebar.dashboard': 'Dashboard',
    'sidebar.inventory': 'Inventory',
    'sidebar.orders': 'Orders',
    'sidebar.report': 'Report',
    'sidebar.back': 'Back to Portfolio',
    'top.eyebrow': 'Business Web Application',
    'top.title': 'Inventory and Order Management System',
    'top.export': 'Export CSV',
    'top.reset': 'Reset Data',
    'hero.title': 'Mini ERP for material stores and product businesses',
    'hero.body': 'This demo manages products, orders, stock status, and basic reports in one screen using HTML, CSS, and JavaScript.',
    'hero.healthLabel': 'System health',
    'hero.storageNote': 'Data is saved with LocalStorage on the viewer device',
    'kpi.label': 'Summary cards',
    'kpi.stockValue': 'Stock Value',
    'kpi.totalItems': 'Total Items',
    'kpi.lowStock': 'Low Stock',
    'kpi.monthlyOrders': 'Orders This Month',
    'inventory.eyebrow': 'Inventory',
    'inventory.title': 'Inventory',
    'inventory.search': 'Search products',
    'inventory.categoryFilter': 'Filter category',
    'category.all': 'All Categories',
    'category.materials': 'Building Materials',
    'category.tools': 'Tools',
    'category.plumbing': 'Plumbing',
    'category.electrical': 'Electrical',
    'table.product': 'Product',
    'table.category': 'Category',
    'table.qty': 'Stock',
    'table.price': 'Price',
    'table.status': 'Status',
    'form.eyebrow': 'Add Item',
    'form.title': 'Add Product',
    'form.nameLabel': 'Product Name',
    'form.namePlaceholder': 'e.g. Cement',
    'form.categoryLabel': 'Category',
    'form.qtyLabel': 'Quantity',
    'form.priceLabel': 'Price',
    'form.submit': 'Add Product',
    'form.note': 'New products appear in the table immediately and update the dashboard automatically.',
    'analytics.eyebrow': 'Analytics',
    'analytics.title': 'Stock Value by Category',
    'alerts.eyebrow': 'Alerts',
    'alerts.title': 'Items to Restock',
    'case.eyebrow': 'Case Study',
    'case.title': 'Project Concept Summary',
    'case.problemTitle': 'Problem Solved',
    'case.problemBody': 'Small shops often struggle to check stock, spot items that need restocking, and summarize totals manually.',
    'case.solutionTitle': 'What the System Does',
    'case.solutionBody': 'It brings product data, orders, stock status, and basic reports into one clear workspace.',
    'case.skillsTitle': 'Skills Demonstrated',
    'case.skillsBody': 'DOM manipulation, form validation, LocalStorage, filtering, calculations, responsive UI',
    'orders.eyebrow': 'Orders',
    'orders.title': 'Today Orders',
    healthReady: 'System ready',
    healthLow: 'Some items need restocking',
    statusLow: 'Low stock',
    statusOk: 'Ready',
    delete: 'Delete',
    qtyControl: 'Adjust quantity for',
    noProducts: 'No products found',
    alertRemaining: '{qty} left - restock recommended',
    restock: 'Restock to 20',
    noAlerts: 'No low-stock items',
    reportStockValue: 'Total stock value',
    reportTotalQty: 'Total quantity',
    reportLowStock: 'Items to restock',
    reportCategories: 'Product categories',
    csvFile: 'stockflow-report-en.csv',
    csvStatusLow: 'Low stock',
    csvStatusOk: 'Ready'
  }
};

const categoryLabels = {
  th: {
    all: 'ทุกหมวดหมู่',
    'วัสดุก่อสร้าง': 'วัสดุก่อสร้าง',
    'เครื่องมือ': 'เครื่องมือ',
    'ประปา': 'ประปา',
    'ไฟฟ้า': 'ไฟฟ้า'
  },
  en: {
    all: 'All Categories',
    'วัสดุก่อสร้าง': 'Building Materials',
    'เครื่องมือ': 'Tools',
    'ประปา': 'Plumbing',
    'ไฟฟ้า': 'Electrical'
  }
};

const productTranslations = {
  'ปูนซีเมนต์ตราเพชร': 'Diamond Brand Cement',
  'ท่อ PVC 1 นิ้ว': '1-inch PVC Pipe',
  'สว่านไฟฟ้า 650W': '650W Electric Drill',
  'สายไฟ VAF 2x2.5': 'VAF 2x2.5 Cable',
  'ข้อต่อสามทาง PVC': 'PVC Tee Fitting',
  'ลูกหมูเจียร 4 นิ้ว': '4-inch Angle Grinder',
  'สีทาภายนอก 1 แกลลอน': 'Exterior Paint, 1 Gallon'
};

const orderTranslations = {
  customers: {
    'หจก.ณัฐวัสดุ': 'Nat Materials LP',
    'โรงงานน้ำดื่มสไมล์': 'Smile Drinking Water Factory',
    'ช่างเอก เซอร์วิส': 'Aek Service'
  },
  statuses: {
    'รอจัดสินค้า': 'Preparing',
    'กำลังจัดส่ง': 'Shipping',
    'สำเร็จแล้ว': 'Completed'
  }
};

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
let currentLanguage = getSavedLanguage() || 'th';

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

function getSavedLanguage() {
  try {
    return localStorage.getItem(languageStorageKey);
  } catch (error) {
    return null;
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem(languageStorageKey, language);
  } catch (error) {
    // Ignore private browsing or blocked storage.
  }
}

function t(key) {
  return copy[currentLanguage][key] || copy.th[key] || key;
}

function money(value) {
  const locale = currentLanguage === 'en' ? 'en-US' : 'th-TH';
  return new Intl.NumberFormat(locale, { style: 'currency', currency: 'THB', maximumFractionDigits: 0 }).format(value);
}

function number(value) {
  const locale = currentLanguage === 'en' ? 'en-US' : 'th-TH';
  return Number(value).toLocaleString(locale);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[char]));
}

function labelCategory(category) {
  return categoryLabels[currentLanguage][category] || category;
}

function labelProduct(product) {
  return currentLanguage === 'en' ? productTranslations[product.name] || product.name : product.name;
}

function labelOrderCustomer(customer) {
  return currentLanguage === 'en' ? orderTranslations.customers[customer] || customer : customer;
}

function labelOrderStatus(status) {
  return currentLanguage === 'en' ? orderTranslations.statuses[status] || status : status;
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
    const productName = product.name.toLowerCase();
    const translatedName = labelProduct(product).toLowerCase();
    const categoryName = product.category.toLowerCase();
    const translatedCategory = labelCategory(product.category).toLowerCase();
    const matchKeyword = productName.includes(keyword) || translatedName.includes(keyword) || categoryName.includes(keyword) || translatedCategory.includes(keyword);
    const matchCategory = category === 'all' || product.category === category;
    return matchKeyword && matchCategory;
  });

  rows.innerHTML = filtered.map((product) => {
    const status = getStatus(product);
    const displayName = labelProduct(product);
    return `
      <tr>
        <td><strong>${escapeHtml(displayName)}</strong><small>SKU-${String(product.id).padStart(4, '0')}</small></td>
        <td>${escapeHtml(labelCategory(product.category))}</td>
        <td>
          <div class="qty-control" aria-label="${escapeHtml(`${t('qtyControl')} ${displayName}`)}">
            <button type="button" data-adjust="-1" data-id="${product.id}">-</button>
            <span>${product.qty}</span>
            <button type="button" data-adjust="1" data-id="${product.id}">+</button>
          </div>
        </td>
        <td>${money(product.price)}</td>
        <td><span class="status-pill status-${status}">${status === 'low' ? t('statusLow') : t('statusOk')}</span></td>
        <td><button class="delete-btn" type="button" data-delete="${product.id}">${t('delete')}</button></td>
      </tr>
    `;
  }).join('') || `<tr><td colspan="6">${t('noProducts')}</td></tr>`;
}

function renderSummary() {
  const summary = totals();
  document.querySelector('#stockValue').textContent = money(summary.stockValue);
  document.querySelector('#totalItems').textContent = number(summary.totalQty);
  document.querySelector('#lowStock').textContent = summary.lowStock;
  document.querySelector('#monthlyOrders').textContent = orders.length;
  document.querySelector('#healthText').textContent = summary.lowStock > 0 ? t('healthLow') : t('healthReady');
  document.querySelector('#reportSummary').innerHTML = `
    <span><strong>${money(summary.stockValue)}</strong>${t('reportStockValue')}</span>
    <span><strong>${number(summary.totalQty)}</strong>${t('reportTotalQty')}</span>
    <span><strong>${summary.lowStock}</strong>${t('reportLowStock')}</span>
    <span><strong>${summary.categories}</strong>${t('reportCategories')}</span>
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
      <strong>${escapeHtml(labelCategory(name))}</strong>
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
      <strong>${escapeHtml(labelProduct(item))}</strong>
      <span>${t('alertRemaining').replace('{qty}', item.qty)}</span>
      <button class="restock-btn" type="button" data-restock="${item.id}">${t('restock')}</button>
    </div>
  `).join('') || `<div class="empty-state">${t('noAlerts')}</div>`;
}

function renderOrders() {
  const board = document.querySelector('#orderBoard');
  board.innerHTML = orders.map((order) => `
    <article class="order-card">
      <span>${order.id}</span>
      <p>${escapeHtml(labelOrderCustomer(order.customer))}</p>
      <strong>${money(order.amount)}</strong><br>
      <small>${escapeHtml(labelOrderStatus(order.status))}</small>
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

function applyText(selector, attribute, dictionary) {
  document.querySelectorAll(selector).forEach((element) => {
    const key = element.dataset[attribute];
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });
}

function applyAttribute(selector, dataAttribute, domAttribute, dictionary) {
  document.querySelectorAll(selector).forEach((element) => {
    const key = element.dataset[dataAttribute];
    if (dictionary[key]) {
      element.setAttribute(domAttribute, dictionary[key]);
    }
  });
}

function setLanguage(language) {
  currentLanguage = copy[language] ? language : 'th';
  const dictionary = copy[currentLanguage];
  const metaDescription = document.querySelector('meta[name="description"]');

  document.documentElement.lang = currentLanguage;
  document.title = dictionary.pageTitle;

  if (metaDescription) {
    metaDescription.setAttribute('content', dictionary.metaDescription);
  }

  applyText('[data-i18n]', 'i18n', dictionary);
  applyAttribute('[data-i18n-placeholder]', 'i18nPlaceholder', 'placeholder', dictionary);
  applyAttribute('[data-i18n-aria-label]', 'i18nAriaLabel', 'aria-label', dictionary);

  document.querySelectorAll('[data-lang]').forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  saveLanguage(currentLanguage);
  renderAll();
}

function exportCsv() {
  const header = currentLanguage === 'en'
    ? ['SKU', 'Name', 'Category', 'Quantity', 'Price', 'Stock Value', 'Status']
    : ['SKU', 'ชื่อสินค้า', 'หมวดหมู่', 'จำนวน', 'ราคา', 'มูลค่าสต็อก', 'สถานะ'];
  const lines = products.map((item) => [
    `SKU-${String(item.id).padStart(4, '0')}`,
    labelProduct(item),
    labelCategory(item.category),
    item.qty,
    item.price,
    item.qty * item.price,
    getStatus(item) === 'low' ? t('csvStatusLow') : t('csvStatusOk')
  ]);
  const csv = [header, ...lines].map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
  const utf8Bom = '\uFEFF';
  const blob = new Blob([utf8Bom + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = t('csvFile');
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

document.querySelectorAll('[data-lang]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
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

setLanguage(currentLanguage);
