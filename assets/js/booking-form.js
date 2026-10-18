/**
 * Booking & Contact Form Handling
 * Dr. Firdous Shaikh — Diabetologist & Metabolic Specialist
 */
const FORM_ENDPOINT = "";
const FORM_RECIPIENT = "drfirdousshaikh@gmail.com";
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
    if (!FORM_ENDPOINT || !endpoint || endpoint === '#' || endpoint.indexOf('example.com') !== -1) {
      e.preventDefault();
      var data = new FormData(form);
      var subject = encodeURIComponent('Consultation enquiry');
      var body = encodeURIComponent('Name: ' + (data.get('name') || '') + '\nPhone: ' + (data.get('phone') || '') + '\nPreferred time: ' + (data.get('preferred_time') || '') + '\nReason: ' + (data.get('reason') || ''));
      window.location.href = 'mailto:' + FORM_RECIPIENT + '?subject=' + subject + '&body=' + body;
      if (statusMessage) {
        statusMessage.style.display = 'block';
        statusMessage.className = 'callout-doctor';
        statusMessage.innerHTML = '<strong>Opening your email app.</strong> Please review the drafted enquiry before sending.';
      }
    }
  });
});
