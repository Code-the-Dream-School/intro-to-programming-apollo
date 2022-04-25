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

let messageForm = document.querySelector("form[name=Message]");
    messageForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let fname = event.target.fname.value;
        let lname = event.target.lname.value;
        let email = event.target.email.value;
        let msg = event.target.message.value;
        console.log(fname, lname, email, msg);
        
        messageForm.reset(); let messageSection=document.getElementById('messages');
        let messageList = messageSection.querySelector("ul");
        let newMessage = document.createElement("li");
        newMessage.innerHTML = `<a href='mailto:${email}'>${fname}</a> ${msg}`
        messageList.appendChild(newMessage);
        let removeButton = document.createElement('button');
        removeButton.innerHTML="remove";
        removeButton.type="button";
        removeButton.addEventListener("click", function(event){
            let entry = removeButton.parentNode;
            entry.remove();
        });

        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);

    });   


