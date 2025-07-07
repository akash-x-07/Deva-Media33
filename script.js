document.addEventListener("DOMContentLoaded", function () {
  const buyButtons = document.querySelectorAll('.buy-button, .hard-button');

  buyButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert("Payment integration coming soon...");
    });
  });
});
