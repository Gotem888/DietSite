const DIETS = [
  {
    id: 1,
    name: "Ketogenic Diet",
    img: "./img/keto-1.jpg",
    description:
      "Essentially the keto diet is a low-carb, moderate-protein and very high-fat eating plan.“The goal of this kind of diet is to reduce carbohydrates enough (less than 20-50g per day) that you put the body into a state of ketosis, in which it prioritizes burning fat for fuel,” says nutritionist Flo, founder of FBF Collective.    In the 1920s, the keto diet was used as a treatment for children with epilepsy. However, over time, it has become more and more popular as a diet to lose weight. Although different forms of the keto diet exist, the plan generally focuses on different consumer food groups - carbohydrates, proteins, and fats.",
    products: [
      {
        title: "Soup Diet",
        url: "https://03c6f0xn70ppdl2ifqvipt145o.hop.clickbank.net",
        img: "./img/soupdiet.png",
      },
      {
        title: "28-Day Keto Challenge",
        url: "https://191e861pwxay7v5jue-kgm1s7o.hop.clickbank.net",
        img: "./img/28keto.png",
      },
    ],
  },
  {
    id: 2,
    name: "Vegan Food",
    img: "./img/vegan-1.jpg",
    description:
      "A vegan diet is void of any animal products, such as meat, eggs, milk and honey. It consists exclusively of plant-based products, but there are plant-based alternatives for many non-vegan foods. For some, veganism is not just their diet, but a lifestyle. In this case, they may avoid beauty products that have been tested on animals, avoid wearing real fur or leather, and consider whether something had a detrimental impact on animals before buying it.",
    products: [
      {
        title: "Plant-Based Recipe Cookbook",
        url: "https://ddf1c33buvgy5qdgo0zhp5au4h.hop.clickbank.net",
        img: "./img/veganbooks.png",
      },
    ],
  },
  {
    id: 3,
    name: "Paleolithic Diet",
    img: "./img/paleo-1.jpg",
    description:
      "A paleo diet is a whole-foods approach loosely based on ancestral practices. It's a diet that goes back to a time before what we now call modern agriculture or farming.",
    products: [
      {
        title: "Visual Impact",
        url: "https://c5a822xi14exfy2spryc0ves8l.hop.clickbank.net/",
        img: "./img/visualimpact.png",
      },
    ],
  },
  {
    id: 4,
    name: "Fitness & Healthy Food",
    img: "./img/fitness.png",
    description:
      " Fitness is a type of physical activity that aims to maintain good overall physical fitness, achieved primarily through proper nutrition, rest and moderate physical activity. In a broader sense, the general physical fitness of the human body for a certain type of physical activity.",
    products: [
      {
        title: "Smoothie",
        url: "https://33597a2l81cm1lffvkyir-t5y8.hop.clickbank.net",
        img: "./img/smoothie.png",
      },
      {
        title: "Alpilean",
        url: "https://0dad38qez1lx3l890jlit3upce.hop.clickbank.net",
        img: "./img/alpilean-home.png",
      },
      {
        title: "Exipure",
        url: "https://cbb1330qv7aq5w8445-r43dp4r.hop.clickbank.net",
        img: "./img/exipure.png",
      },
      {
        title: "DuoTrim",
        url: "https://1187betd30fp7say69xhxc5le4.hop.clickbank.net",
        img: "./img/duotrim.png",
      },
      {
        title: "Ikaria",
        url: "https://826951vo1xpteq69efzeg4fl09.hop.clickbank.net",
        img: "./img/ikaria.png",
      },
      {
        title: "LeanBiome",
        url: "https://9e8dd-ql03lkeq5etvy5xdp2d3.hop.clickbank.net",
        img: "./img/leanbiome.png",
      },
    ],
  },
];

const LINKS = [];

const nav = document.querySelector(".nav__list");
const contentWrapper = document.querySelector(".content");
const burger = document.querySelector("#btn-menu");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector("#modal-content");
const link = document.querySelector(".diets__title");
const returnButton = document.querySelector(".to__main");
const productsWrapper = document.querySelector(".products__wrapper");

burger.addEventListener("click", () => {
  nav.classList.toggle("visible");
  contentWrapper.classList.toggle("hidden");
});

const createNavElement = (img, id, name) => {
  const navElement = `
  <li class="nav__element" id=${id}>
    <img class="picture"  id="${id}" src="${img}">
    <div id="${id}" class="nav__title__wrapper">
      <p id="${id}" class="nav__name">${name}</p>
    </div>
  </li>`;
  return navElement;
};

const createModal = (title, url, img) => {
  const modalCard = `
    <a href="${url}">
      <div class="modal__card" style="background-image: url(${img})">
      <p class="title">${title}</p>
      </div>
    </a>
  `;
  return modalCard;
};
const generateModalElements = (data) => {
  let productsContent = "";
  data.forEach((products) => {
    productsContent += createModal(products.title, products.url, products.img);
  });
  contentWrapper.innerHTML += productsContent;
};
const generateNavElements = (data) => {
  let navContent = "";

  data.forEach((diets) => {
    navContent += createNavElement(diets.img, diets.id, diets.name);
  });
  nav.innerHTML = navContent;
};

const filterData = (data, searchId) => {
  return data.filter((diets) => {
    if (diets.id === +searchId) return diets;
  });
};

const filterProductsData = (data, searchId) => {
  return data.filter((diets) => {
    if (diets.id + "id" === +searchId + "id") return diets;
  });
};

const createContent = (diets) => {
  const content = `
  <img class="diets__img" src="${diets.img}" id="${diets.id + "id"}" alt="${
    diets.name
  }" avatar />
    <div class="diets__title">
      <h2>${diets.name}</h2>
      <div class="description"><p>${diets.description}</p></div>
    </div>`;
  return content;
};

returnButton.addEventListener("click", (e) => {
  contentWrapper.classList.remove("visible");
  contentWrapper.innerHTML = `
      <div class="products__wrapper"><h2>Products</h2></div>
  `;
  e.target = generateNavElements(DIETS);
  e.target.classList.remove("visible");
});

nav.addEventListener("click", (e) => {
  const linkName = e.target.id;
  const result = filterProductsData(DIETS, linkName);
  let productsFind = result[0].products;
  contentWrapper.classList.toggle("visible");
  generateModalElements(productsFind);
});
nav.addEventListener("click", (e) => {
  const linkName = e.target.id;
  const result = filterData(DIETS, linkName);
  nav.innerHTML = createContent(result[0]);
  e.target = returnButton.classList.add("visible");
});
generateNavElements(DIETS);
