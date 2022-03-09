// Getting into promises

function renderData(data) {
    {
        const ul = document.createElement("ul");
        ul.innerHTML = data.items[0].owner.login;
        document.body.appendChild(ul);
        data.items.forEach((element) => {
            const li = document.createElement("li");
            ul.appendChild(li);
            li.innerHTML = `${element.full_name}  - ${element.url}`;
        });
    }
}

function getData1() {
    fetch("https://api.github.com/search/repositories?q=user:MJanOthman")
        .then((response) => response.json())
        .then((data) => renderData(data));
}

// getData1();

function getData2() {
    fetch("https://api.github.com/search/repositories?q=user:oleksandra-lavryk")
        .then((response) => response.json())
        .then((data) => renderData(data));
}

// getData2();

function getData3() {
    fetch("https://api.github.com/search/repositories?q=user:rebeccahockley")
        .then((response) => response.json())
        .then((data) => renderData(data));
}

// getData3();

Promise.all([getData1(), getData2(), getData3()]);