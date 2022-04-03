let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = `&copy; MOHAMED MBARECK ${thisYear}.`;
footer = footer.appendChild(copyright);

//Create List of Skills//
let skills = ["HTML", "CSS", "JavaScript"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList = skillsList.appendChild(skill);
}
