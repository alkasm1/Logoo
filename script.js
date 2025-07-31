function generateLogo() {
  const name = document.getElementById("nameInput").value || "Logoo";
  const canvas = document.getElementById("logoCanvas");
  const ctx = canvas.getContext("2d");

  const font = document.getElementById("fontSelect").value;
  const bgColor = document.getElementById("bgColorPicker").value;

  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const firstChar = name.trim()[0]?.toUpperCase();
  const icons = {
    A: "★", B: "⚙", C: "☕", D: "🎯", E: "🎵", F: "📷", G: "🔥", H: "🧠",
    I: "🌟", J: "📚", K: "🚀", L: "💡", M: "🖌️", N: "🍀", O: "🎧", P: "🧩",
    Q: "📍", R: "🎈", S: "🐍", T: "🕹️", U: "🍉", V: "🌈", W: "🛡️", X: "⚡",
    Y: "🧸", Z: "🔮"
  };
  const symbol = icons[firstChar] || "🔷";

  ctx.font = "40px " + font;
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.fillText(symbol, canvas.width / 2, canvas.height / 2 - 40);

  ctx.font = "bold 50px " + font;
  ctx.fillText(name.toUpperCase(), canvas.width / 2, canvas.height / 2 + 30);
}

function downloadLogo() {
  const canvas = document.getElementById("logoCanvas");
  const link = document.createElement('a');
  link.download = "logoo.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}
