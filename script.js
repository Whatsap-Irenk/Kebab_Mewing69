document.getElementById('cta-btn').addEventListener('click', () => {
  document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
});

const form = document.getElementById('form-daftar');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Terima kasih, data Anda telah dikirim!');
  form.reset();
});