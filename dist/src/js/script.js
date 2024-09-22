document.addEventListener("DOMContentLoaded", function () {
  const searchButtons = document.querySelectorAll(".search-btn");
  searchButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const input = this.previousElementSibling;
      if (input.value.trim() !== "") {
        alert("กำลังค้นหา: " + input.value);
        // ที่นี่คุณสามารถเพิ่มโค้ดสำหรับส่งคำค้นหาไปยังเซิร์ฟเวอร์
      } else {
        alert("กรุณากรอกหมายเลขติดตาม");
      }
    });
  });
});
