for (var i = 0; i < 5; i++) {
    console.log("Hello World");
}

const heros = ["dani", "chuya", "nanda", "gg geming"];

for(var i = 0; i < heros.length; i++) {
    console.log(heros[i]);
}

for (var i = 0; i < heros.length; i += 2) {
  console.log(index, heros[i]);
}

for (item in heros) {
  console.log(item, heros[item]);
}

for(item of heros) {
  console.log(item);
}
