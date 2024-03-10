const revealButton = document.getElementById('revealButton');
const babyName = document.getElementById('babyName');

revealButton.addEventListener('click', () => {
  babyName.style.display = 'block';
  revealButton.style.display = 'none';
  document.body.classList.add('revealed'); // Add the 'revealed' class to body
});
