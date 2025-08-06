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
      designElements.forEach(el => el.classList.remove('active'));
      
      // تفعيل العنصر المحدد
      this.classList.add('active');
    });
  });
  
  // إخفاء عناصر التحكم عند النقر في أي مكان آخر
  document.addEventListener('click', function() {
    designElements.forEach(el => el.classList.remove('active'));
  });
  
  // تهيئة canvas عند التحميل
  initCanvas();
  
  // تحميل بيانات التصميم من الصفحة الرئيسية
  loadDesignData();
  
  // تهيئة وظيفة السحب والإفلات
  initDragAndDrop();
  
  function initCanvas() {
    // مسح canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // تعيين خلفية بيضاء
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // إضافة شبكة خفيفة
    ctx.strokeStyle = '#f0f0f0';
    ctx.lineWidth = 1;
    
    // رسم خطوط الشبكة الأفقية
    for (let y = 0; y < canvas.height; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    
    // رسم خطوط الشبكة العمودية
    for (let x = 0; x < canvas.width; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    
    // إضافة نص إرشادي
    ctx.font = '24px Cairo';
    ctx.fillStyle = '#cccccc';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('اسحب وأسقط العناصر هنا لإنشاء شعارك', canvas.width/2, canvas.height/2);
  }
  
  function loadDesignData() {
    const designData = JSON.parse(localStorage.getItem('logoDesign'));
    if (designData) {
      // يمكنك استخدام البيانات لتهيئة التصميم
      console.log('تصميم تم تحميله:', designData);
      // مثال: تعيين نص الشعار
      document.querySelector('.design-element div').textContent = designData.name || 'شعارك هنا';
    }
  }
  
  function initDragAndDrop() {
    const elements = document.querySelectorAll('.design-element');
    
    elements.forEach(element => {
      element.addEventListener('mousedown', function(e) {
        e.preventDefault();
        
        // إحضار العنصر للأمام
        elements.forEach(el => {
          el.style.zIndex = '1';
        });
        this.style.zIndex = '10';
        
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        
        function elementDrag(e) {
          e.preventDefault();
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          
          // تحديث موضع العنصر
          element.style.top = (element.offsetTop - pos2) + "px";
          element.style.left = (element.offsetLeft - pos1) + "px";
        }
        
        function closeDragElement() {
          document.onmouseup = null;
          document.onmousemove = null;
        }
      });
    });
  }
});
