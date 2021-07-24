const express = require("express");
const hamburgersRouter = express.Router();

let hamburgers = [
  {
    id: 8,
    name: "Vegetarian Burger",
    restaurant: "Indian Burgers",
    web: "https://www.cookwithmanali.com/vegetarian-burger-indian-style/",
    description:
      "With summer around the corner, I had to share a vegetarian burger recipe with you guys. Actually I plan to share more in the next month but I thought I will start with this Indian style Vegetarian Burger aka Masala Burger!",
    ingredients: [
      "american cheese",
      "burger sauce",
      "french mustard",
      "pickes",
      "onion",
      "Veggies",
    ],
  },
  {
    id: 9,
    name: "Fat Santa",
    restaurant: "Sky City Hamilton",
    web: "https://skycityhamilton.co.nz/eat-drink/eat-burger/",
    description: "A Christmas themed burger",
    ingredients: [
      "chicken thigh",
      "champagne ham",
      "sage and onion stuffing",
      "gravy mash",
      "lettuce",
      "tomato",
      "cranberry sauce",
    ],
  },
  {
    id: 10,
    name: "Blondie",
    restaurant: "Yankys",
    web: "http://yankyslambton.co.za/menu/",
    description: "Delicious steak burger",
    ingredients: [
      "steak",
      "BBQ sauce",
      "bacon",
      "egg",
      "cheese",
      "lettuce",
      "tomato",
      "onion",
      "gerkins",
    ],
  },
  {
    id: 11,
    name: "Monster Burger",
    restaurant: "Yankys",
    web: "http://yankyslambton.co.za/menu/",
    description: "Massive meaty burger - the size of a dinner plate",
    ingredients: [
      "250g patty",
      "bacon",
      "cheese",
      "2 eggs",
      "steak",
      "BBQ sauce",
      "lettuce",
      "tomato",
      "onion",
      "gerkins",
    ],
  },
];

hamburgersRouter.get("/", (req, res) => {
  res.json({ hamburgers });
});

hamburgersRouter.get("/:id", (req, res) => {
  let hamburgerId = Number(req.params.id);

  const hamburger = hamburgers.find(
    (hamburger) => hamburger.id === hamburgerId
  );

  res.json({ hamburger });
});

hamburgersRouter.post("/", (req, res) => {
  const newBurger = req.body;
  hamburgers = [...hamburgers, newBurger];
  res.json({ newBurger });
});

hamburgersRouter.patch("/:id", (req, res) => {
  let { id } = req.params;
  id = Number(id);

  const hamburger = hamburgers.find((hamburger) => hamburger.id === id);
  let responseHamburger = null;

  if (hamburger) {
    const updatedHamburger = req.body;
    hamburgers = hamburgers.map((hamburger) => {
      if (hamburger.id === id) {
        responseHamburger = { ...hamburger, ...updatedHamburger };
        return responseHamburger;
      } else {
        return hamburgers;
      }
    });
  } else {
    responseHamburger = "Can't find the hamburger to update";
  }

  res.json({ updatedHamburger: responseHamburger });
});

module.exports = hamburgersRouter;
