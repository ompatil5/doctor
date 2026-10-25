const FORM_ENDPOINT = "";
const FORM_RECIPIENT = "drfirdousshaikh@gmail.com";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-booking-form]").forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      form.querySelectorAll(".form-error").forEach((el) => { el.textContent = ""; });
      const data = new FormData(form);
      let valid = true;

      Array.from(form.elements).forEach((field) => {
        if (!field.name || field.type === "hidden" || field.name === "website") return;
        if (field.required && !field.checkValidity()) {
          valid = false;
          const container = field.closest(".form-field");
          const err = container ? container.querySelector(".form-error") : null;
          if (err) {
            if (field.validity.valueMissing) {
              err.textContent = "This field is required.";
            } else if (field.type === "email" && field.validity.typeMismatch) {
              err.textContent = "Please enter a valid email address.";
            } else {
              err.textContent = "Please enter a valid value.";
            }
          }
        }
      });

      if (!valid || data.get("website")) return;

      const status = form.querySelector(".form-status");

      if (FORM_ENDPOINT) {
        try {
          const response = await fetch(FORM_ENDPOINT, {
            method: "POST",
            body: data,
            headers: { Accept: "application/json" }
          });
          if (!response.ok) throw new Error();
          status.textContent = "Request sent.";
          form.reset();
        } catch {
          status.textContent = "Unable to send your request. Please try again later.";
        }
        return;
      }

      const isCollab = form.dataset.subject === "Collaboration enquiry" || form.dataset.subject === "Collaboration" || !!data.get("email");
      const subject = isCollab ? "Collaboration enquiry" : (form.dataset.subject || "Appointment request");
      const bodyParts = [
        "Name: " + (data.get("name") || ""),
        data.get("email") ? "Email: " + data.get("email") : "",
        data.get("phone") ? "Phone: " + data.get("phone") : "",
        data.get("clinic") ? "Preferred clinic: " + data.get("clinic") : "",
        data.get("preferred_time") ? "Preferred day or time: " + data.get("preferred_time") : "",
        data.get("reason") ? "Reason: " + data.get("reason") : ""
      ].filter(Boolean);

      const body = bodyParts.join("\n");
      window.location.href = "mailto:" + FORM_RECIPIENT + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      if (status) status.textContent = "Opening your email app";
    });
  });
});