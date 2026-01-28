const LINKS = {
  cv: "", // optional: add a CV PDF URL here
  linkedin: "https://www.linkedin.com/in/tomer-atia",
  github: "https://github.com/Tomeratia",
  email: "tomeratia44@gmail.com"
};

function setLink(id, url){
  const el = document.getElementById(id);
  if (!el) return;
  el.href = url;
  if (url.startsWith("http")) {
    el.target = "_blank";
    el.rel = "noreferrer";
  }
}

function setMailto(id, email){
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = email;
  el.href = `mailto:${email}`;
}

document.getElementById("year").textContent = new Date().getFullYear();

setLink("linkedinBtn", LINKS.linkedin);
setLink("linkedinLink", LINKS.linkedin);
setLink("linkedinFooter", LINKS.linkedin);

setLink("githubBtn", LINKS.github);

setMailto("emailText", LINKS.email);
setMailto("emailLink", LINKS.email);
setMailto("emailFooter", LINKS.email);

if (LINKS.cv && LINKS.cv.trim().length > 0) {
  setLink("cvLink", LINKS.cv);
} else {
  const cv = document.getElementById("cvLink");
  if (cv) {
    cv.href = "#";
    cv.addEventListener("click", (e) => e.preventDefault());
    cv.title = "Add your CV link in script.js";
  }
}

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const from = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(`Portfolio message from ${name || "Someone"}`);
    const body = encodeURIComponent(`From: ${name}\\nEmail: ${from}\\n\\n${msg}`);

    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
  });
}
