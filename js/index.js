let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = '&copy; Zahra '+thisYear;
footer.appendChild(copyright);
let skills = ["JavaScript", "Python", "HTML", "CSS"];
let skillsSection = document.querySelector("#skills");
let skillslist = skillsSection.querySelector("ul")

for (let i = 0; i < skills.length; i++){
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillslist.appendChild(skill);  
};

