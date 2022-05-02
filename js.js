let b = 0
document.getElementById('uspjesnost').innerHTML = b
document.getElementById("result").innerHTML = ("Pritisnite gumb da biste krenuli")
function random(){
    var a = prompt("Unesi broj između 1 i 10");
    var rand = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    if (a == rand){
        (document.getElementById("result").innerHTML) = ("Pogodili ste točan broj : " + rand)
        b = b + 1
        document.getElementById('uspjesnost').innerHTML = b
    }
    else {
        document.getElementById("result").innerHTML = ("Pogodili ste krivi broj, točan broj je: " + rand)
    }
}

if (0 == 0) {
    document.getElementById("lol").innerHTML = true }
else {
    document.getElementById("lol").innerHTML = false }