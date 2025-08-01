function generateLogo() {
  const name = document.getElementById("nameInput").value || "LOGOO";
  const font = document.getElementById("fontSelect").value;
  const style = document.getElementById("styleSelect").value;
  const bgColor = document.getElementById("bgColorPicker").value;

  const canvas = document.getElementById("logoCanvas");
  const ctx = canvas.getContext("2d");

  // تنظيف اللوحة
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // تعيين خلفية
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // إعدادات النص
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `bold 54px ${font}`;

  // أسلوب 3D
  if (style === "3d") {
    ctx.shadowColor = "rgba(0, 0, 0, 0.35)";
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 4;
    ctx.shadowBlur = 8;
    ctx.fillStyle = "#ffffff";
    ctx.fillText(name.toUpperCase(), canvas.width / 2, canvas.height / 2);

    ctx.shadowColor = "transparent";
    ctx.fillStyle = "#2b2b2b";
    ctx.fillText(name.toUpperCase(), canvas.width / 2 + 2, canvas.height / 2 + 2);
  }
  
  // أسلوب هندسي
  else if (style === "geometric") {
    ctx.fillStyle = "#00ffd0";
    ctx.strokeStyle = "#111";
    ctx.lineWidth = 3;
    ctx.fillText(name.toUpperCase(), canvas.width / 2, canvas.height / 2);
    ctx.strokeText(name.toUpperCase(), canvas.width / 2, canvas.height / 2);
  }
  
  // أسلوب فني (Artistic)
  else if (style === "artistic") {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, "#ff6a00");
    gradient.addColorStop(1, "#ffd700");

    ctx.fillStyle = gradient;
    ctx.shadowColor = "rgba(255, 200, 0, 0.4)";
    ctx.shadowBlur = 10;
    ctx.fillText(name.toUpperCase(), canvas.width / 2, canvas.height / 2);
  }
}
