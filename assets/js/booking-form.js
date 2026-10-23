const FORM_ENDPOINT = "";
const FORM_RECIPIENT = "drfirdousshaikh@gmail.com";
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-booking-form]").forEach((form) => form.addEventListener("submit", async (event) => {
    event.preventDefault();
    form.querySelectorAll(".form-error").forEach((el) => el.textContent = "");
    const data = new FormData(form); let valid = true;
    ["name", "phone", "consent"].forEach((name) => { const field=form.elements[name]; if (!field || !field.checkValidity()) { valid=false; field.closest(".form-field").querySelector(".form-error").textContent="This field is required."; } });
    if (!valid || data.get("website")) return;
    const status=form.querySelector(".form-status");
    if (FORM_ENDPOINT) { try { const response=await fetch(FORM_ENDPOINT,{method:"POST",body:data,headers:{Accept:"application/json"}}); if(!response.ok) throw new Error(); status.textContent="Request sent."; form.reset(); } catch { status.textContent="Unable to send your request. Please try again later."; } return; }
    const subject=form.dataset.subject || "Appointment request";
    const body=["Name: "+data.get("name"),"Phone: "+data.get("phone"),data.get("clinic") ? "Preferred clinic: "+data.get("clinic") : "","Preferred day or time: "+data.get("preferred_time"),"Reason: "+data.get("reason")].filter(Boolean).join("\n");
    window.location.href="mailto:"+FORM_RECIPIENT+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body); status.textContent="Opening your email app";
  }));
});