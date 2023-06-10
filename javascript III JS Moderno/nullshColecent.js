const a = 0;

const b = null;

const c = "Teste";

console.log(a || b || c); // ele devolve no primeiro true q encontrar

console.log(a ?? b ?? c); // ele devolve o primeiro q n for null e nem undefained que ele encontrar

const d = a || c;
const e = a ?? c;
const f = b ?? a;
const g = b ?? c;
console.log({d, e, f, g});
