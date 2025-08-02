function generateLogo() {
  const name = document.getElementById("nameInput").value || "LOGOO";
  const font = document.getElementById("fontSelect").value;
  const style = document.getElementById("styleSelect").value;
  const bgColor = document.getElementById("bgColorPicker").value;

  const canvas = document.getElementById("logoCanvas");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `bold 54px ${font}`;
  const x = canvas.width / 2;
  const y = canvas.height / 2;
  const text = name;

  if (style === "3d") {
    // إعدادات الطبقات الثلاثية
    const depth = 6;
    for (let i = depth; i > 0; i--) {
      ctx.fillStyle = `rgba(0,0,0,${0.1 + i * 0.07})`;
      ctx.fillText(text, x + i, y + i);
    }

    // النص الأساسي
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#0f0f0f";
    ctx.lineWidth = 2;
    ctx.fillText(text, x, y);
    ctx.strokeText(text, x, y);
  }

  else if (style === "geometric") {
    ctx.fillStyle = "#00ffd0";
    ctx.strokeStyle = "#111";
    ctx.lineWidth = 3;
    ctx.fillText(text, x, y);
    ctx.strokeText(text, x, y);
  }

  else if (style === "artistic") {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, "#ff6a00");
    gradient.addColorStop(1, "#ffd700");

    ctx.fillStyle = gradient;
    ctx.shadowColor = "rgba(255, 200, 0, 0.4)";
    ctx.shadowBlur = 10;
    ctx.fillText(text, x, y);
  }
}
