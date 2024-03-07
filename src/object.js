const ultramen = {
  name: "dani",
  attack: 10,
  isDead: false,
  defense: () => {
    console.log("defense attack");
  },
  rush:(number) => console.log("rush attack", + number + "%"),
  address: {
    planet: {
      name: "earth",
      galaxy: "milkyway",
      moon: [
        {
          name: "moonligh",
          size: 100,
        },
        {
          name: "moondark",
          size: 20,
        },
        {
          name: "mooncuy",
          size: 20,
        },
      ],
    },
    weapons: ["sword", "gun", "knife"],

    
  },
};

// console.log(ultramen.name, ultramen.attack, ultramen.isDead);
// console.log(ultramen["name"], ultramen["attack"], ultramen["isDead"]);

// const props = "attack";
// console.log(ultramen[props]);

// ultramen.name = "nanda";
// console.log(ultramen);

// console.log(ultramen.address.planet.moon[0].name);

// add object color
// ultramen.color = "red";
// console.log(ultramen);



// const hero = ultramen;
// hero.color = "blue";
// console.log(ultramen);



// const heroUltramanTidakBerubah = ultramen;
// const heroUltramanBerubah = {...ultramen};


// heroUltramanBerubah.color = "blue";
// console.log(heroUltramanBerubah);
// console.log(ultramen);

ultramen.defense();
ultramen.rush(10);