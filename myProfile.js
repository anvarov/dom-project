window.addEventListener("DOMContentLoaded", () => {
    const name = document.createElement("h1");
    name.setAttribute("class", "name");
    const nameText = document.createTextNode("Akmal");
    name.appendChild(nameText);
    document.body.appendChild(name);

    // const ulItems = ["DOB: 1990", "Last Name: Anvarov", "Project: dom-project", "Date: 08/04/2020"];
    const ul = document.createElement("ul");
    ul.setAttribute("class", "my-details");
    // ulItems.forEach(item => {
    //     const li = document.createElement('li');
    //     const liText = document.createTextNode(item);
    //     li.appendChild(liText);
    //     ul.appendChild(li);
    // })
    document.body.appendChild(ul);

    const ulItems = ["<li>DOB: 1990</li>", "<li>Last Name: Anvarov</li>", 
                        "<li>Project: dom-project</li>", "<li>Date: 08/04/2020</li>"];

    const ulString = ulItems.join(' ');
    ul.innerHTML = ulString;
    const liNodeList = document.querySelectorAll("li");
    liNodeList.forEach(element => {
        element.className = "detail";
    });
    const clock = document.createElement("p");
    document.body.appendChild(clock);
    function updateClock() {
        const date = new Date();
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        clock.innerHTML = `${hours}:${minutes}:${seconds}`
    };
    setInterval(updateClock, 1000);
});

