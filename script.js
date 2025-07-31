function generate3DLogo({ name = "Logoo", font = "Cairo", bgColor = "#1e1e1e", canvasId = "logoCanvas" }) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `bold 54px ${font}`;

  // الطبقة الرئيسية البيضاء
  ctx.shadowColor = "rgba(0, 0, 0, 0.35)";
  ctx.shadowOffsetX = 4;
  ctx.shadowOffsetY = 4;
  ctx.shadowBlur = 8;
  ctx.fillStyle = "#ffffff";
  ctx.fillText(name.toUpperCase(), canvas.width / 2, canvas.height / 2);

  // طبقة سفلية داكنة تخلق تأثير ثلاثي الأبعاد
  ctx.shadowColor = "transparent";
  ctx.fillStyle = "#2b2b2b";
  ctx.fillText(name.toUpperCase(), canvas.width / 2 + 2, canvas.height / 2 + 2);
}
