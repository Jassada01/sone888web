document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".logo-background").forEach((box, index) => {
    if (index === 0) {
      box.style.setProperty("--logo-url", 'url("../media/img/sOneLogo.png")');
    } else if (index === 1) {
      box.style.setProperty(
        "--logo-url",
        'url("../media/img/GiraffeLogo.png")'
      );
    }
  });
});
