const form = document.querySelector('[data-onboarding-form]');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const consent = form.querySelector('#sms-consent');
    const status = document.querySelector('#form-status');

    if (!consent.checked) {
      consent.focus();
      status.textContent = 'Please check the SMS consent box before continuing with text updates.';
      status.classList.remove('hidden');
      return;
    }

    status.textContent = 'Consent flow confirmed. This public review page does not store or transmit the information entered here.';
    status.classList.remove('hidden');
  });
}
