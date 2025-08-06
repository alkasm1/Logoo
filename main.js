
// main.js
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('logoCanvas');
  const ctx = canvas.getContext('2d');
  const generateBtn = document.getElementById('generateBtn');
  const designBtn = document.getElementById('designBtn');
  
  // توليد شعار عشوائي عند التحميل
  generateRandomLogo();
  
  // توليد شعار عند النقر على الزر
  generateBtn.addEventListener('click', generateLogo);
  
  // الانتقال إلى صفحة التصميم
  designBtn.addEventListener('click', function() {
    // حفظ بيانات التصميم الحالية (يمكن استخدام localStorage)
    const designData = {
      name: document.getElementById('nameInput').value,
      font: document.getElementById('fontSelect').value,
      style: document.getElementById('styleSelect').value,
      shape: document.getElementById('shapeSelect').value,
      bgColor: document.getElementById('bgColorPicker').value,
      description: document.getElementById('description').value
    };
    
    localStorage.setItem('logoDesignData', JSON.stringify(designData));
    
    // الانتقال إلى صفحة التصميم
    window.location.href = 'designer.html';
  });
  
  function generateLogo() {
    // مسح الشعار الحالي
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // الحصول على القيم من المدخلات
    const name = document.getElementById('nameInput').value || 'شعارك هنا';
    const font = document.getElementById('fontSelect').value;
    const style = document.getElementById('styleSelect').value;
    const bgColor = document.getElementById('bgColorPicker').value;
    
    // تعيين خلفية الشعار
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // تطبيق أنماط مختلفة حسب الاختيار
    ctx.font = `bold 60px ${font}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    let textColor = '#000';
    let effect = null;
    
    switch(style) {
      case '3d':
        textColor = '#4361ee';
        effect = apply3DEffect;
        break;
      case 'neon':
        textColor = '#4cc9f0';
        effect = applyNeonEffect;
        break;
      case 'gold':
        textColor = '#ffd700';
        effect = applyGoldEffect;
        break;
      case 'glow':
        textColor = '#ff6b6b';
        effect = applyGlowEffect;
        break;
      case 'gradient':
        textColor = 'linear';
        effect = applyGradientEffect;
        break;
      default:
        textColor = '#3a0ca3';
    }
    
    // تطبيق التأثير المختار
    if (effect) {
      effect(name);
    } else {
      ctx.fillStyle = textColor;
      ctx.fillText(name, canvas.width/2, canvas.height/2);
    }
  }
  
  function generateRandomLogo() {
    // تعيين قيم عشوائية للعناصر
    const fonts = ['Cairo', 'Amiri', 'Tajawal', 'Arial', 'Helvetica'];
    const styles = ['3d', 'neon', 'gold', 'glow', 'gradient'];
    const names = ['الإبداع العربي', 'تكنولوجيا المستقبل', 'التميز والجودة', 'شركة الإبداع'];
    
    document.getElementById('nameInput').value = names[Math.floor(Math.random() * names.length)];
    document.getElementById('fontSelect').value = fonts[Math.floor(Math.random() * fonts.length)];
    document.getElementById('styleSelect').value = styles[Math.floor(Math.random() * styles.length)];
    document.getElementById('bgColorPicker').value = getRandomColor();
    
    // توليد الشعار
    generateLogo();
  }
  
  // وظائف التأثيرات
  function apply3DEffect(text) {
    ctx.fillStyle = '#3a0ca3';
    ctx.fillText(text, canvas.width/2 + 3, canvas.height/2 + 3);
    
    ctx.fillStyle = '#4cc9f0';
    ctx.fillText(text, canvas.width/2, canvas.height/2);
  }
  
  function applyNeonEffect(text) {
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#4cc9f0';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(text, canvas.width/2, canvas.height/2);
    ctx.shadowBlur = 0;
  }
  
  function applyGoldEffect(text) {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, '#ffd700');
    gradient.addColorStop(0.5, '#daa520');
    gradient.addColorStop(1, '#ffd700');
    
    ctx.fillStyle = gradient;
    ctx.fillText(text, canvas.width/2, canvas.height/2);
    
    ctx.strokeStyle = '#8b7500';
    ctx.lineWidth = 2;
    ctx.strokeText(text, canvas.width/2, canvas.height/2);
  }
  
  function applyGlowEffect(text) {
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#ff6b6b';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(text, canvas.width/2, canvas.height/2);
    ctx.shadowBlur = 0;
  }
  
  function applyGradientEffect(text) {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, '#4361ee');
    gradient.addColorStop(0.5, '#4cc9f0');
    gradient.addColorStop(1, '#3a0ca3');
    
    ctx.fillStyle = gradient;
    ctx.fillText(text, canvas.width/2, canvas.height/2);
  }
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
