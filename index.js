const icon = document.querySelector(".fa-bars");
const navlist = document.querySelector("#navlist");
const copyright = document.querySelector(".copyright");

const today = new Date();
const year = today.getFullYear();
copyright.innerHTML = `<p>&copy; ${year} Jamal Salim</p>`;

icon.addEventListener("click", () => {
  if (navlist.style.display === "none" || navlist.style.display === "") {
    navlist.style.display = "block";
  } else {
    navlist.style.display = "none";
  }
});

const typed = new Typed(".auto-type", {
  strings: ["Web", "Full Stack Developer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

(function () {
  emailjs.init("ssB6v88rswISwPAaT");
})();

document.getElementById("send").addEventListener("click", SendMail);

function SendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_6t2tivr", "template_0bjrj9b", params)
    .then(function (res) {
      alert("Success! " + res.status);
    });
}
