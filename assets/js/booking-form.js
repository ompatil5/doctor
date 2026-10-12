/**
 * Booking & Contact Form Handling
 * Dr. Firdous Shaikh — Diabetologist & Metabolic Specialist
 */
document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('#consultation-form');
  var statusMessage = document.querySelector('#form-status');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    // Check honeypot field
    var hp = form.querySelector('input[name="hp_website"]');
    if (hp && hp.value) {
      e.preventDefault();
      // Silently reject bot submission
      return false;
    }

    var endpoint = form.getAttribute('action');
    if (!endpoint || endpoint === '#' || endpoint.indexOf('example.com') !== -1) {
      e.preventDefault();
      if (statusMessage) {
        statusMessage.style.display = 'block';
        statusMessage.className = 'callout-doctor';
        statusMessage.innerHTML = '<strong>Note:</strong> Online submission endpoint is currently being configured. Please contact the clinic directly via WhatsApp or phone to book your slot.';
      }
    }
  });
});
