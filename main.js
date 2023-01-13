const rouletteLabel = document.getElementsByClassName("label")[0];

let nominations = [
    "Karissa Sharlotte",
    "Nekoyama Sena",
    "Shumi Shumikea",
    "Yua Misaki",
    "Mikan Mii"
];

let selectedNomination;
let loop;

window.addEventListener("click", () => {
    let iterations = Math.round(Math.random() * 15) + 10;
    let i = 0;

    loop = setInterval(() => {
        console.log("Running");
        if (iterations==++i) { 
            clearInterval(loop);
        }

        else {
            selectedNomination = nominations[
                Math.floor(Math.random() * nominations.length)
            ];
            rouletteLabel.innerHTML = selectedNomination;
        }
    }, 50);
})

