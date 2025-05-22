
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.login-form');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form from submitting

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      if (!email || !password) {
        alert('Please fill in both email and password.');
        return;
      }

      // You can add actual login logic here (e.g., fetch API)
      alert(`Logged in as ${email}`);
    });
  });
