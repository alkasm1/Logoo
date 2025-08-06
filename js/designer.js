window.onload = () => {
  const canvas = document.getElementById("designCanvas");
  const ctx = canvas.getContext("2d");

  const logoData = localStorage.getItem("generatedLogo");
  if (!logoData) {
    alert("الرجاء إنشاء شعار أولاً.");
    window.location.href = "../index.html";
    return;
  }

  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 250, 150, 400, 200);
  };
  img.src = logoData;
};

function download() {
  const canvas = document.getElementById("designCanvas");
  const link = document.createElement("a");
  link.download = "design.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}
