
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 1999,
    colors: [
      {
        code: "black",
        img: "./img/Product/air.png",
      },
      {
        code: "darkblue",
        img: "./img/Product/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 1899,
    colors: [
      {
        code: "lightgray",
        img: "./img/Product/jordan.png",
      },
      {
        code: "green",
        img: "./img/Product/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 1799,
    colors: [
      {
        code: "lightgray",
        img: "./img/Product/blazer.png",
      },
      {
        code: "green",
        img: "./img/Product/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 1699,
    colors: [
      {
        code: "black",
        img: "./img/Product/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/Product/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 1599,
    colors: [
      {
        code: "gray",
        img: "./img/Product/hippie.png",
      },
      {
        code: "black",
        img: "./img/Product/hippie2.png",
      },
    ],
  },
  {
    id: 6,
    title: "MOVA",
    price: 5999,
    colors:[
      {
        code:"gray",
      img:"./img/Product/mova.png",
      },
      {
        code:"black",
        img:"./img/Product/mova2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});