// designer.js
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('designCanvas');
  const ctx = canvas.getContext('2d');
  const templatesModal = document.querySelector('.templates-modal');
  const closeModal = document.querySelector('.close-modal');
  const templatesBtn = document.getElementById('templatesBtn');
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  const panelContents = document.querySelectorAll('.panel-content');
  
  // فتح نافذة التصاميم الجاهزة
  templatesBtn.addEventListener('click', function() {
    templatesModal.classList.add('active');
  });
  
  // إغلاق نافذة التصاميم الجاهزة
  closeModal.addEventListener('click', function() {
    templatesModal.classList.remove('active');
  });
  
  // إغلاق النافذة عند النقر خارجها
  templatesModal.addEventListener('click', function(e) {
    if (e.target === templatesModal) {
      templatesModal.classList.remove('active');
    }
  });
  
  // تغيير لوحة التحكم عند النقر على عنصر في الشريط الجانبي
  sidebarItems.forEach(item => {
    item.addEventListener('click', function() {
      // إزالة النشاط من جميع العناصر
      sidebarItems.forEach(i => i.classList.remove('active'));
      panelContents.forEach(p => p.classList.remove('active'));
      
      // إضافة النشاط للعنصر المحدد
      this.classList.add('active');
      
      // إظهار لوحة التحكم المناسبة
      const panelId = this.getAttribute('data-panel') + '-panel';
      document.getElementById(panelId).classList.add('active');
    });
  });
  
  // تفعيل عناصر التصميم عند النقر عليها
  const designElements = document.querySelectorAll('.design-element');
  designElements.forEach(element => {
    element.addEventListener('click', function(e) {
      e.stopPropagation();
      
      // إزالة النشاط من جميع العناصر
