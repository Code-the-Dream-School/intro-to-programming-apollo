let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = `&copy; MOHAMED MBARECK ${thisYear}`;
footer = footer.appendChild(copyright);

//Create List of Skills//
let skills = ["HTML", "CSS", "JavaScript", "Photoshop"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
//Create Messages
let messageForm = document.getElementsByName("leave_message")[0];

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let name = event.target.name.value;
  let email = event.target.email.value;
  let message = event.target.message.value;
  console.log(name, email, message);
  event.target.reset();

  let messageSection = document.getElementById("messages");

  let messageList = messageSection.querySelector("ul");

  let newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href= 'mailto:${email}'>${name}</a><span>&nbsp;wrote:&nbsp;</span><span class= "messages-text">${message}</span>`;
  newMessage.classList.add("messages-content");
  messageList.appendChild(newMessage);
  let removeButton = document.createElement("button");
  removeButton.innerHTML = "remove";

  removeButton.type = "button";
  removeButton.classList.add("button", "messages-btn");
  removeButton.addEventListener("click", function (event) {
    let entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
});
