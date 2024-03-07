function sayHello(name) {
  console.log(name);
}
const sayHelloAnotherFunction = function (name) {
  console.log(name);
};

function sayHelloWithNumber(name = "nanda", number) {
  console.log(name, number);
}

sayHello("nanda");
sayHelloAnotherFunction("nanda");
sayHelloWithNumber(undefined, 10);

const defense = () => {
  console.log("defense attack");
};

const attack = () => {
  console.log("print attac,");
};

const defenseAndAttack = (defenseFn, attackFn) => {
  defenseFn();
  attackFn();
};

const defenseAndAttack2 = (defenseFn, attackFn = () => {}) => {
  if (defenseFn === null) {
    defense = () => {};
  }
  defenseFn();
  attackFn();
};

defenseAndAttack(attack, defense);
defenseAndAttack2(undefined,attack);