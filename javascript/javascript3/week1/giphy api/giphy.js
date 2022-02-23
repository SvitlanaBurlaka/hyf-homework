const button = document.getElementById("findGif");
const message = document.querySelector(".message");
const divTag = document.querySelector(".gifImage");

button.addEventListener("click", () => {
    let inputNameGif = document.getElementById("search");
    let inputNumber = document.getElementById("numberOfGif");
    let limitOfGifNumber = inputNumber.value;
    if (limitOfGifNumber === "") {
        limitOfGifNumber = 50;
    }

    if (inputNameGif.value === "") {
        message.innerHTML = "Remember to write gif name";
    } else {
        message.innerHTML = "";
        fetch(
                `http://api.giphy.com/v1/gifs/search?api_key=GCDZcMQpPFDqYTrGxqLYRsTJGzXwIEOb&q=${inputNameGif.value}&limit=${limitOfGifNumber}`
            )
            .then((response) => response.json())
            .then((content) => {
                divTag.innerHTML = "";
                for (let i = 0; i < limitOfGifNumber; i++) {
                    divTag.innerHTML += `<img src ="${content.data[i].images.fixed_width.url}"><br/>`;
                }
            });
    }
});