
// index page brief contents

const elems = [
  {
    img: "images/website-design.webp",
    name: " Website/App Development"
  },
  {
    img: "images/e-commerce.webp",
    name: "E-commerce"
  },
  {
    img: "images/responsive-site.webp",
    name: "Responsive Designs"
  },
  {
    img: "images/monitoring.webp",
    name: "Website / App Monitoring",
  },
]
const displayObjects = (elem) => {
  const div = document.querySelector(".brief");
  let con = document.createElement("div");
  // con.classList.add("web-dev");
  // con.classList.add("e-commerce");
  // con.classList.add("responsive-design");
  // con.classList.add("monitoring");

  elem.forEach(element => {
    const img = document.createElement("img");
    img.src = element.img;
    img.setAttribute("alt", element.name);
    img.loading = "lazy";

    const name = document.createElement("p");
    name.innerHTML = element.name;

    con.append(img);
    con.append(name);

    div.append(con);
  });
}

displayObjects(elems)