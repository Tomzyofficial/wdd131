// Footer js
const d = new Date();
const fullyear = d.getFullYear();

document.getElementById("currentyear").innerHTML = fullyear;
document.getElementById("lastModified").innerHTML = document.lastModified;

// Menu js
const menuButton = document.querySelector('#menuButton');
const nav = document.querySelector('nav');
menuButton.addEventListener('click', function () {
  let isOpen = false;
  if (!isOpen) {
    nav.classList.toggle('show');
    menuButton.classList.toggle('open');
    isOpen = true;
  } else {
    isOpen = false;
    return null;
  }
})

// temples object
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    dedicateYear: 2005,
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    dedicateYear: 1888,
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    dedicateYear: 2015,
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    dedicateYear: 2020,
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    dedicateYear: 1974,
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    dedicateYear: 1986,
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    dedicateYear: 1983,
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Accra Ghana Temple",
    location: "Accra",
    dedicated: "2004, January, 11",
    dedicateYear: 2004,
    area: 17500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    templeName: "Adelaide Australia Temple",
    location: "Marden, South Australia  5070 Australia",
    dedicated: "2000, June, 15",
    dedicateYear: 2000,
    area: 10700,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359-main.jpg"
  },
  {
    templeName: "Anchorage Alaska Temple",
    location: "Anchorage, Alaska  99516 United States",
    dedicated: "1999, January, 9-10",
    dedicateYear: 1999,
    area: 11937,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-13886-main.jpg"
  },
];

// Nav anchor tags click function
document.addEventListener("DOMContentLoaded", () => {
  const home = document.querySelector("#home");
  home.addEventListener("click", () => {
    templeLoop(temples);
  })
  const old = document.querySelector("#old");
  old.addEventListener("click", () => {
    templeLoop(temples.filter(temple => temple.dedicateYear < 1900));
  });
  const neww = document.querySelector("#new");
  neww.addEventListener("click", () => {
    templeLoop(temples.filter(temple => temple.dedicateYear > 2000));
  })
  const large = document.querySelector("#large");
  large.addEventListener("click", () => {
    templeLoop(temples.filter(temple => temple.area > 90000));
  })
  const small = document.querySelector("#small");
  small.addEventListener("click", () => {
    templeLoop(temples.filter(temple => temple.area < 10000));
  })
})

function templeLoop(filteredTemples) {
  document.querySelector(".container").innerHTML = "";

  filteredTemples.forEach(elem => {
    const card = document.createElement("div");
    card.classList.add("card-design");

    const name = document.createElement("h3");
    name.innerHTML = elem.templeName;

    const location = document.createElement("h4");
    location.innerHTML = "Location: " + elem.location;

    const dedicate = document.createElement("h5");
    dedicate.innerHTML = "Dedicated: " + elem.dedicated;

    const size = document.createElement("h5");
    size.innerHTML = "Size: " + elem.area + " sq ft";

    const image = document.createElement("img");
    image.src = elem.imageUrl;
    image.alt = `${elem.templeName}`;
    image.loading = "lazy";



    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicate)
    card.appendChild(size);
    card.appendChild(image);

    document.querySelector(".container").appendChild(card);
  })
}
templeLoop(temples);