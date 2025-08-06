function generateLogo() {
  const name = document.getElementById("nameInput").value || "شعارك";
  const font = document.getElementById("fontSelect").value;
  const style = document.getElementById("styleSelect").value;
  const shape = document.getElementById("shapeSelect").value;
  const bgColor = document.getElementById("bgColorPicker").value;

  const canvas = document.getElementById("logoCanvas");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = `bold 60px ${font}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const x = canvas.width / 2;
  const y = canvas.height / 2;

  if (style === "3d") {
    for (let i = 6; i > 0; i--) {
      ctx.fillStyle = `rgba(0,0,0,${0.1 + i * 0.1})`;
      ctx.fillText(name, x + i, y + i);
    }
    ctx.fillStyle = "#000";
    ctx.fillText(name, x, y);
  } else if (style === "glow") {
    ctx.shadowColor = "rgba(0,255,255,0.8)";
    ctx.shadowBlur = 15;
    ctx.fillStyle = "#00fff0";
    ctx.fillText(name, x, y);
    ctx.shadowBlur = 0;
  } else {
    ctx.fillStyle = "#000";
    ctx.fillText(name, x, y);
  }
}

function saveAndGo() {
  const canvas = document.getElementById("logoCanvas");
  const dataURL = canvas.toDataURL("image/png");
  localStorage.setItem("generatedLogo", dataURL);
  window.location.href = "pages/designer.html";
}
