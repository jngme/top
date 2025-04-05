const redp = document.createElement("p");
redp.style.color = "red";
redp.textContent = "Hey I'm red";
document.body.appendChild(redp);

const blueh3 = document.createElement("h3");
blueh3.style.color = "blue";
blueh3.textContent = "im a blue h3";
document.body.appendChild(blueh3);

const blackbox = document.createElement("div")
blackbox.style.border = "1px solid black";
blackbox.style.backgroundColor = "pink"

const inbox1 = document.createElement("h1")
inbox1.textContent = "im in a div";
blackbox.appendChild(inbox1);
const inbox2 = document.createElement("p")
inbox2.textContent = "me too";
blackbox.appendChild(inbox2);

document.body.appendChild(blackbox);

