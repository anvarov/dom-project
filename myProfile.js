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

    const birthday = Date.parse('10 Sep 2021 00:00:00 GMT')
    console.log(birthday);
    // const bSeconds = birthday.getSeconds();
    // const bMinutes = birthday.getMinutes();
    // const bHours = birthday.getHours();
    
    function updateClock() {
        const date = Date.now();
        // console.log(date);
        const difference =  birthday - date;
        const newDate = new Date(difference);
        // console.log(difference);
        const seconds = newDate.getSeconds();
        const minutes = newDate.getMinutes();
        const hours = newDate.getHours();
        const days = newDate.getDay();
        const month = newDate.getMonth();
        clock.innerHTML = `${month} Months, ${days} Days, ${hours} Hours, 
            ${minutes} Minutes, and ${seconds} Seconds until my birthday!`
    };
    setInterval(updateClock, 1000);

    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('src', 'https://images.pexels.com/photos/4085642/pexels-photo-4085642.jpeg?cs=srgb&dl=pexels-matheus-bertelli-4085642.jpg&fm=jpg');
    img.setAttribute('height', '200px');
    imgDiv.appendChild(img);
    name.insertAdjacentElement('afterend', imgDiv);
    name.outerHTML = "<h1>Harry Higgins</h1>";
    const newH1 = document.getElementsByTagName("h1");
    newH1[0].classList.add("my-test-class");

    const click = () => {
        console.log('CLICK!');
    };

    imgDiv.addEventListener('click', click);

    newH1[0].addEventListener('click', () => {
        console.log('here');
        document.getElementsByTagName('div')[0].removeEventListener('click', click);
    });


//     new Promise((res, rej) => {
//         if(1=== 2){
//             rej();
//         } else {
//             res()
//         }

    
//     }).then(() => {
//         console.log("success")
//     }).catch((err) => {
//         console.log(err)
//         console.log("it is not equal")
//     })
//    fetch().then().then().then().catch()
});

window.addEventListener('DOMNodeInserted', () => {
    console.log('Node inserted');
})