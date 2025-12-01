import { createComponent as createInputListComponent } from './input-list-component.js';

// container ใส่ section ทั้งหมด
const sectionList = document.getElementById('app-section-list');

// template ของ section
const sectionTemplate = document.getElementById('app-section-template');

// อัปเดตหมายเลข Section และปิดปุ่มลบเมื่อมีแค่ 1 section
function updateSectionStatus() {
  const sections = [...sectionList.querySelectorAll('.app-cmp-section')];

  sections.forEach((sec, index) => {
    sec.querySelector('.app-title-number').textContent = index + 1;

    const removeBtn = sec.querySelector('.app-cmd-remove-section');
    removeBtn.disabled = sections.length === 1;
  });
}

// ฟังก์ชันสร้าง section
function createSection() {
  const sectionElem = sectionTemplate.content.cloneNode(true).firstElementChild;

  // ติดตั้ง input-list component (number list)
  createInputListComponent(sectionElem);

  // ปุ่มลบ section
  sectionElem.addEventListener('click', (ev) => {
    if (ev.target.closest('.app-cmd-remove-section')) {
      sectionElem.remove();
      updateSectionStatus();
    }
  });

  // เพิ่ม section ลง container
  sectionList.append(sectionElem);

  updateSectionStatus();
}

// ปุ่มเพิ่ม Section
document
  .querySelector('.app-cmd-add-section')
  .addEventListener('click', () => createSection());

// สร้าง section เริ่มต้น
createSection();
