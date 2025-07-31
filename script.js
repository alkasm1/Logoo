function generateLogo() {
  const name = document.getElementById("nameInput").value || "Logoo";
  const canvas = document.getElementById("logoCanvas");
  const ctx = canvas.getContext("2d");

  const font = document.getElementById("fontSelect").value;
  const bgColor = document.getElementById("bgColorPicker").value;

  ctx.clearRect(0, 0, canvas.width, canvas.height); // تنظيف الكانفس أولاً
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // ظل خفيف
  ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
  ctx.shadowOffsetX = 4;
  ctx.shadowOffsetY = 4;
  ctx.shadowBlur = 6;

  // نص ثلاثي الأبعاد عبر طبقتين متداخلتين
  ctx.font = `bold 50px ${font}`;
  ctx.fillStyle = "#ffffff";
  ctx.fillText(name.toUpperCase(), canvas.width / 2, canvas.height / 2);

  // طبقة سفلية داكنة لتأثير البروز
  ctx.shadowColor = "transparent"; // إزالة الظل من الطبقة الثانية
  ctx.fillStyle = "#222222";
  ctx.fillText(name.toUpperCase(), canvas.width / 2 + 2, canvas.height / 2 + 2);
}
