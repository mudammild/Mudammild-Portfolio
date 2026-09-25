const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));


const certificateModal = document.querySelector('#certificateModal');
const modalImage = document.querySelector('#modalImage');
document.querySelectorAll('.certificate-image').forEach(button => {
  button.addEventListener('click', () => {
    modalImage.src = button.dataset.full;
    certificateModal.classList.add('open');
    certificateModal.setAttribute('aria-hidden', 'false');
  });
});
document.querySelector('.modal-close')?.addEventListener('click', closeCertificate);
certificateModal?.addEventListener('click', e => { if (e.target === certificateModal) closeCertificate(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCertificate(); });
function closeCertificate() {
  certificateModal?.classList.remove('open');
  certificateModal?.setAttribute('aria-hidden', 'true');
  if (modalImage) modalImage.src = '';
}
const introScreen = document.getElementById("intro-screen");
const openBtn = document.getElementById("open-btn");

openBtn.addEventListener("click", function () {
    introScreen.classList.add("hide");
});