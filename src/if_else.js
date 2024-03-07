var nilai = 70

if (nilai >= 90) {
    console.log("A");
} else if (nilai >= 80) {
    console.log("B");
} else if (nilai >= 70) {
    console.log("C");
} else if (nilai >= 60) {
    console.log("D");
} else if (nilai >= 50) {
    console.log("E");

} else {
    console.log("gk lulus");
}


const state = "login";
if (state === "login") {
    console.log("Login");
} else if (state === "idle"){
    console.log("Idle");
} else{
    console.log("Login dulu");
}


var nilaiTennaryOperator = 70;
var hasil = (nilaiTennaryOperator >= 70) ? "Lulus" : "Gagal";
console.log(hasil);