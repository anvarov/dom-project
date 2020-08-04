window.addEventListener("DOMContentLoaded", () => {
    const name = document.createElement("h1");
    name.setAttribute("id", "name");
    const nameText = document.createTextNode("Akmal");
    name.appendChild(nameText);
    document.body.appendChild(name);

    // const ulItems = ["DOB: 1990", "Last Name: Anvarov", "Project: dom-project", "Date: 08/04/2020"];
    const ul = document.createElement("ul");

    // ulItems.forEach(item => {
    //     const li = document.createElement('li');
    //     const liText = document.createTextNode(item);
    //     li.appendChild(liText);
    //     ul.appendChild(li);
    // })
    document.body.appendChild(ul);

    const ulItems = ["<li>DOB: 1990</li>", "<li>Last Name: Anvarov</li>", "<li>Project: dom-project</li>", "<li>Date: 08/04/2020</li>"];

    const ulString = ulItems.join(' ');
    ul.innerHTML = ulString;
});
