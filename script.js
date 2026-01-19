const plannerForm = document.getElementById("plannerForm");
const sessionList = document.getElementById("sessionList");
const scrollButton = document.getElementById("scrollToPlanner");

function addStudySession(subject, date, hours) {
  const li = document.createElement("li");
  li.textContent = `${subject} – ${hours} hour(s) on ${date}`;
  sessionList.appendChild(li);
}

plannerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const subject = document.getElementById("subject").value;
  const date = document.getElementById("date").value;
  const hours = document.getElementById("hours").value;

  addStudySession(subject, date, hours);
  plannerForm.reset();
});

scrollButton.addEventListener("click", function () {
  document.getElementById("planner").scrollIntoView({ behavior: "smooth" });
});

const contactForm = document.getElementById("contactForm");
const contactResponse = document.getElementById("contactResponse");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  contactResponse.textContent = "Thanks for reaching out! We'll get back to you soon.";
  contactResponse.style.color = "green";
  contactForm.reset();
});
