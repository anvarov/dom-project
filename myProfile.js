window.addEventListener("DOMContentLoaded", () => {
    const name = document.createElement("h1");
    name.setAttribute("id", "name");
    const nameText = document.createTextNode("Akmal");
    name.appendChild(nameText);
    document.body.appendChild(name);

    const ulItems = ["DOB: 1990", "Last Name: Anvarov", "Project: dom-project", "Date: 08/04/2020"];
    const ul = document.createElement("ul");

});
