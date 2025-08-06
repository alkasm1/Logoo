window.onload = () => {
  const canvas = document.getElementById("designCanvas");
  const ctx = canvas.getContext("2d");

  // جلب الشعار من localStorage إن وُجد
  const data = localStorage.getItem("generatedLogo");
  if (data) {
    const img = new Image();
    img.onload = () => ctx.drawImage(img, 0, 0);
    img.src = data;
  }

  // أدوات التحديد – لاحقًا سنربطها مع عناصر قابلة للتحريك
  const textTools = document.getElementById("textTools");
  canvas.addEventListener("click", () => {
    textTools.classList.remove("hidden");
  });

  // التبويبات
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      // لاحقًا: عرض الأدوات حسب التبويب
    });
  });
};
