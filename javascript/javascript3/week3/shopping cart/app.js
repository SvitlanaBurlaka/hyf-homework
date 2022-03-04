// Shopping cart using Classes
const body = document.querySelector("body");

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    convertToCurrency(currency) {
        let convertedPrice = this.price;
        switch (currency) {
            case "dollars":
                convertedPrice = this.price * 0.15;
                break;
            case "euros":
                convertedPrice = this.price * 0.13;
                break;
            case "NOK":
                convertedPrice = this.price * 1.32;
                break;
        }
        return convertedPrice;
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {
        this.products.splice(this.products.indexOf(product), 1);
    }

    searchProduct(productName) {
        let searchedProduct = {};
        this.products.forEach((product) => {
            if (product.name === productName) {
                searchedProduct = product;
            }
        });
        return searchedProduct;
    }

    getTotal() {
        let sum = 0;
        for (let i = 0; i < this.products.length; i++) {
            sum += this.products[i].price;
        }
        return sum;
    }

    renderProducts() {
        for (let i = 0; i < this.products.length; i++) {
            const p = document.createElement("p");
            p.innerHTML = ` <span>${this.products[i].name}</span> - <span>${this.products[i].price}</span>  `;
            body.appendChild(p);
        }
    }

    getUser(user) {
        return new Promise(function(resolve, reject) {
            fetch(` https://jsonplaceholder.typicode.com/users/${user}`)
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);
console.log(shoppingCart.products);
// shoppingCart.removeProduct(flatscreen);
// console.log(shoppingCart.products);
console.log(shoppingCart.searchProduct("flat-screen"));
const smartphone = new Product("iphone", 7000);
shoppingCart.addProduct(smartphone);
console.log(shoppingCart.getTotal());
// shoppingCart.renderProducts();
shoppingCart.getUser(1).then((user) => {
    shoppingCart.renderProducts();
    const userName = document.createElement("p");
    userName.innerText = user.name;
    const totalPrice = document.createElement("p");
    totalPrice.innerText = shoppingCart.getTotal();
    body.appendChild(userName);
    body.appendChild(totalPrice);
});
console.log(flatscreen.convertToCurrency("dollars"));