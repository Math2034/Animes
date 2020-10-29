/* ---------js do index------------ */

let h1 = document.getElementById("h1")
let txt1 = document.getElementById("nome");
let txt2 = document.getElementById("idade");
let txt3 = document.getElementById("genero");
let txt4 = document.getElementById("regiao");

function Button() {

    h1.innerHTML = "Obrigado!";

    const info = [txt1.value, txt2.value, txt3.value, txt4.value]

    for (let i in info)
    {
        console.log(info[i]);
    }
    
}

/* ---------js do Bó interagir------------ */

const textinho = document.getElementById("textinho");
const informar = document.getElementById("informar");

const animes = [
    {
        nome: "JoJo's Bizarre Adventure Part 4: Diamond is Unbreakable",
        ano: "2016",
        estilo: "Shounen",
        criador: "Hirohiko Araki"
    },
    {
        nome: "Shingeki No Kyojin",
        ano: "2016",
        estilo: "Shounen",
        criador: "Hajime Isayama"
    },
    {
        nome: "Mob Psycho 100",
        ano: "2018",
        estilo: "Shounen",
        criador: "One"
    },
    {
        nome: "JoJo's Bizarre Adventure Part 1: Phantom Blood",
        ano: "2012",
        estilo: "Shounen",
        criador: "Hirohiko Araki"
    },
    {
        nome: "Hunter x Hunter",
        ano: "2011",
        estilo: "Shounen",
        criador: "Yoshihiro Togashi"
    },
    {
        nome: "Naruto",
        ano: "2002",
        estilo: "Shounen",
        criador: "Masashi Kishimoto"
    }
]

function search() {
    console.log(informar.value);
    textinho.innerHTML = ""; 

    for (let i in animes) {
        if(animes[i].ano === parseInt(informar.value))
            textinho.innerHTML += "<li> #" + animes[i].nome + ": " + animes[i].ano + "</li>";
        }   
}