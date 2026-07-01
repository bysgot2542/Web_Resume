const languageStorageKey = 'thanaphat-portfolio-language';

const portfolioCopy = {
  th: {
    pageTitle: 'ธนภัทร ชุมแก้ว | Web Developer Portfolio',
    metaDescription: 'Portfolio ของ ธนภัทร ชุมแก้ว Web Developer พร้อมประสบการณ์พัฒนาเว็บ ระบบบริหารจัดการข้อมูล และ Dashboard',
    'language.switchLabel': 'เลือกภาษา',
    'nav.backTop': 'กลับด้านบน',
    'nav.openMenu': 'เปิดเมนู',
    'nav.about': 'เกี่ยวกับ',
    'nav.work': 'ผลงาน',
    'nav.demo': 'Demo',
    'nav.skills': 'ทักษะ',
    'nav.contact': 'ติดต่อ',
    'hero.eyebrow': 'Web Developer Portfolio',
    'hero.name': 'ธนภัทร ชุมแก้ว',
    'hero.lead': 'นักพัฒนาระบบรุ่นใหม่ที่ถนัดงานเว็บแอปพลิเคชัน ระบบบริหารจัดการข้อมูล และ Dashboard สำหรับใช้งานจริงในองค์กร',
    'hero.viewWork': 'ดูผลงาน',
    'hero.tryDemo': 'ลองระบบ',
    'hero.openResume': 'เปิดเรซูเม่',
    'hero.quickInfoLabel': 'ข้อมูลสรุป',
    'hero.location': 'Songkhla, Thailand',
    'hero.availability': 'Available for Web Developer',
    'hero.graduation': 'Graduating 2026',
    'hero.profileLabel': 'ภาพโปรไฟล์',
    'hero.profileAlt': 'ธนภัทร ชุมแก้ว',
    'hero.statusTitle': 'Ready to join your team',
    'hero.statusSkills': 'PHP, JavaScript, MySQL, Bootstrap',
    'about.eyebrow': 'About Me',
    'about.title': 'พัฒนาเว็บให้ใช้งานง่าย จัดการข้อมูลได้ชัดเจน และต่อยอดได้จริง',
    'about.body': 'ผมเป็นนักพัฒนาระบบที่มีประสบการณ์พัฒนาเว็บแอปพลิเคชันด้านบริหารจัดการข้อมูล โดยใช้ HTML, CSS, Bootstrap, PHP, JavaScript และฐานข้อมูล MySQL จุดแข็งของผมคือการทำงานเป็นทีม สื่อสารชัดเจน ใส่ใจคุณภาพงาน และพร้อมเรียนรู้เทคโนโลยีใหม่เพื่อพัฒนาระบบให้ตอบโจทย์ธุรกิจในระยะยาว',
    'contact.title': 'ติดต่อ',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.line': 'Line',
    'contact.locationLabel': 'Location',
    'contact.location': 'Natawee, Songkhla, Thailand',
    'education.eyebrow': 'Education',
    'education.title': 'ประวัติการศึกษา',
    'education.schoolDate': '2564-2565',
    'education.schoolName': 'โรงเรียนมหาวชิราวุธ จังหวัดสงขลา',
    'education.schoolProgram': 'สายการเรียน วิทย์-คณิต',
    'education.universityDate': '2564-2565',
    'education.universityName': 'มหาวิทยาลัยราชภัฏสงขลา',
    'education.universityProgram': 'คณะวิทยาการจัดการ เอกคอมพิวเตอร์ธุรกิจ',
    'work.eyebrow': 'Selected Work',
    'work.title': 'ผลงานและประสบการณ์ระหว่างศึกษา',
    'work.project1.title': 'ระบบบริหารร้าน อ.วัสดุ',
    'work.project1.body': 'พัฒนาระบบบริหารและจัดการข้อมูลเพื่อให้การทำงานสะดวกขึ้น มีประสิทธิภาพ และลดขั้นตอนจากระบบเดิม',
    'work.project2.title': 'ระบบบริหารจัดการข้อมูลโรงงานน้ำ',
    'work.project2.body': 'ออกแบบโครงสร้างระบบ จัดการข้อมูลบริษัท และรองรับการใช้งานจริงสำหรับการทำงานและการตัดสินใจของผู้เกี่ยวข้อง',
    'work.project3.title': 'Graphic for Content Creator',
    'work.project3.body': 'ออกแบบและตกแต่งภาพสำหรับงานคอนเทนต์ ช่วยให้สื่อมีความชัดเจนและน่าสนใจมากขึ้น',
    'work.project4.title': 'Dashboard รายงานความพึงพอใจ',
    'work.project4.body': 'ออกแบบ Dashboard ด้วย Looker เพื่อสรุปรายงานประเมินความพึงพอใจต่อบริการข้อมูลข่าวสารรายปี',
    'work.project5.title': 'บริษัท แอ็บโซลูท เทคโนวัน จำกัด',
    'work.project5.body': 'ดูแลและพัฒนาระบบในตำแหน่ง Programmer สนับสนุนการเขียนโปรแกรม ปรับปรุงระบบให้ใช้งานต่อเนื่อง และร่วมแก้ไขปัญหากับทีมพัฒนา',
    'demo.eyebrow': 'Featured Project',
    'demo.title': 'โปรเจคระบบจัดการสต็อกสำหรับธุรกิจ',
    'demo.projectTitle': 'StockFlow Mini ERP',
    'demo.body': 'ระบบจัดการสต็อกและคำสั่งซื้อสำหรับร้านวัสดุ มี Dashboard, ค้นหา/กรองสินค้า, เพิ่ม/ลบข้อมูล, แจ้งเตือนของใกล้หมด และกราฟสรุปมูลค่าสต็อก เพื่อช่วยให้การติดตามสินค้าและรายงานประจำวันชัดเจนขึ้น',
    'demo.openProject': 'เปิดโปรเจค',
    'demo.viewCase': 'ดูแนวคิดโปรเจค',
    'demo.previewLabel': 'เปิด StockFlow Mini ERP',
    'skills.eyebrow': 'Skills',
    'skills.title': 'ทักษะและเครื่องมือ',
    'skills.softwareTitle': 'Software',
    'skills.softwareBody': 'Adobe Illustrator, Photoshop, Visual Studio Code, Microsoft Excel, Word, PowerPoint',
    'skills.interestTitle': 'Interest',
    'skills.interestBody': 'Coding, Games, AI, Design, Web Technology',
    'resume.eyebrow': 'Original Resume',
    'resume.title': 'ดูเรซูเม่ฉบับภาพ',
    'resume.switchLabel': 'เลือกภาษาเรซูเม่',
    'resume.openFull': 'เปิดเรซูเม่ขนาดเต็ม',
    'resume.imageAlt': 'เรซูเม่ของ ธนภัทร ชุมแก้ว',
    'footer.copy': '© 2026 Thanaphat Chumkaew. Web Developer Portfolio.',
    'footer.backTop': 'Back to top'
  },
  en: {
    pageTitle: 'Thanaphat Chumkaew | Web Developer Portfolio',
    metaDescription: 'Portfolio of Thanaphat Chumkaew, a Web Developer experienced in web applications, data management systems, and dashboards.',
    'language.switchLabel': 'Choose language',
    'nav.backTop': 'Back to top',
    'nav.openMenu': 'Open menu',
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.demo': 'Demo',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Web Developer Portfolio',
    'hero.name': 'Thanaphat Chumkaew',
    'hero.lead': 'A junior system developer focused on web applications, data management systems, and practical dashboards for real business use.',
    'hero.viewWork': 'View Work',
    'hero.tryDemo': 'Try Demo',
    'hero.openResume': 'Open Resume',
    'hero.quickInfoLabel': 'Summary information',
    'hero.location': 'Songkhla, Thailand',
    'hero.availability': 'Available for Web Developer',
    'hero.graduation': 'Graduating 2026',
    'hero.profileLabel': 'Profile image',
    'hero.profileAlt': 'Thanaphat Chumkaew',
    'hero.statusTitle': 'Ready to join your team',
    'hero.statusSkills': 'PHP, JavaScript, MySQL, Bootstrap',
    'about.eyebrow': 'About Me',
    'about.title': 'Building websites that are easy to use, clear with data, and ready to grow',
    'about.body': 'I am a system developer with experience building data-management web applications using HTML, CSS, Bootstrap, PHP, JavaScript, and MySQL. My strengths are teamwork, clear communication, attention to quality, and a willingness to learn new technologies that help systems support long-term business needs.',
    'contact.title': 'Contact',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.line': 'Line',
    'contact.locationLabel': 'Location',
    'contact.location': 'Natawee, Songkhla, Thailand',
    'education.eyebrow': 'Education',
    'education.title': 'Education',
    'education.schoolDate': '2021-2022',
    'education.schoolName': 'Mahavajiravudh Songkhla School',
    'education.schoolProgram': 'Science-Mathematics Program',
    'education.universityDate': '2021-2022',
    'education.universityName': 'Songkhla Rajabhat University',
    'education.universityProgram': 'Faculty of Management Sciences, Business Computer',
    'work.eyebrow': 'Selected Work',
    'work.title': 'Projects and experience during study',
    'work.project1.title': 'O.Watsadu Store Management System',
    'work.project1.body': 'Developed a management system that makes daily operations more convenient, improves efficiency, and reduces steps from the previous workflow.',
    'work.project2.title': 'Water Factory Data Management System',
    'work.project2.body': 'Designed the system structure, organized company data, and supported practical use for operations and decision-making.',
    'work.project3.title': 'Graphic for Content Creator',
    'work.project3.body': 'Designed and retouched visuals for content work, helping media look clearer and more engaging.',
    'work.project4.title': 'Satisfaction Report Dashboard',
    'work.project4.body': 'Designed a Looker dashboard to summarize yearly satisfaction assessments for information-service reporting.',
    'work.project5.title': 'Absolute Techno One Co., Ltd.',
    'work.project5.body': 'Worked as a Programmer, supporting development, maintaining systems for continuous use, and solving issues with the development team.',
    'demo.eyebrow': 'Featured Project',
    'demo.title': 'Stock management project for business',
    'demo.projectTitle': 'StockFlow Mini ERP',
    'demo.body': 'A stock and order management system for material stores, including a dashboard, product search and filters, add/delete actions, low-stock alerts, and stock-value charts for clearer daily tracking and reporting.',
    'demo.openProject': 'Open Project',
    'demo.viewCase': 'View Case Study',
    'demo.previewLabel': 'Open StockFlow Mini ERP',
    'skills.eyebrow': 'Skills',
    'skills.title': 'Skills and tools',
    'skills.softwareTitle': 'Software',
    'skills.softwareBody': 'Adobe Illustrator, Photoshop, Visual Studio Code, Microsoft Excel, Word, PowerPoint',
    'skills.interestTitle': 'Interest',
    'skills.interestBody': 'Coding, Games, AI, Design, Web Technology',
    'resume.eyebrow': 'Original Resume',
    'resume.title': 'View Resume Image',
    'resume.switchLabel': 'Choose resume language',
    'resume.openFull': 'Open full-size resume',
    'resume.imageAlt': 'Resume of Thanaphat Chumkaew',
    'footer.copy': '© 2026 Thanaphat Chumkaew. Web Developer Portfolio.',
    'footer.backTop': 'Back to top'
  }
};

const resumeFiles = {
  th: 'assets/resume.png',
  en: 'assets/Resume-en.png'
};

const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#navMenu');

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
  const nextLanguage = portfolioCopy[language] ? language : 'th';
  const dictionary = portfolioCopy[nextLanguage];
  const metaDescription = document.querySelector('meta[name="description"]');

  document.documentElement.lang = nextLanguage;
  document.title = dictionary.pageTitle;

  if (metaDescription) {
    metaDescription.setAttribute('content', dictionary.metaDescription);
  }

  applyText('[data-i18n]', 'i18n', dictionary);
  applyAttribute('[data-i18n-aria-label]', 'i18nAriaLabel', 'aria-label', dictionary);
  applyAttribute('[data-i18n-alt]', 'i18nAlt', 'alt', dictionary);

  document.querySelectorAll('[data-resume-link]').forEach((link) => {
    link.setAttribute('href', resumeFiles[nextLanguage]);
  });

  document.querySelectorAll('[data-resume-img]').forEach((image) => {
    image.setAttribute('src', resumeFiles[nextLanguage]);
  });

  document.querySelectorAll('[data-lang]').forEach((button) => {
    const isActive = button.dataset.lang === nextLanguage;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  saveLanguage(nextLanguage);
}

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    document.body.classList.toggle('menu-open', !expanded);
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    });
  });
}

document.querySelectorAll('[data-lang]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

setLanguage(getSavedLanguage() || 'th');
