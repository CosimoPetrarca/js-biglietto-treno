'use strict'

/* chiedere la variabile chilometri con un prompt */
const chilometri = parseInt(prompt('Quanti chilometri dovrai percorrere?'));
console.log(chilometri);
document.getElementById('km').innerHTML =chilometri;


/* chiedere la variabile età del passeggero  con un prompt */
const eta = parseInt(prompt('Quanti anni ha il passeggero?'));
console.log(eta);
document.getElementById('eta').innerHTML =eta;

/* inserire la variabile prezzo per chilometri */
const prezzoPerKm = 0.21;

/* calcolare la variabile prezzo in base ai chilometri */
const prezzoTotale = chilometri * prezzoPerKm;
console.log("Prezzo totale senza sconti: " + prezzoTotale.toFixed(2) + " euro");
document.getElementById('prezzo').innerHTML =prezzoTotale;

/* applicare scontistica */
if (eta < 18) {
    const sconto = prezzoTotale * 0.2;
    const prezzoMinori = prezzoTotale - sconto;
    /* prezzo finale */
    console.log("Sconto del 20% per i minorenni: " + sconto.toFixed(2) + " euro, quindi prezzo totale è " + prezzoMinori.toFixed(2) + " euro");
    document.getElementById('prezzo').innerHTML =prezzoMinori;
} else if (eta >= 65) {
    const sconto = prezzoTotale * 0.4;
    const prezzoOver = prezzoTotale - sconto;
    /* prezzo finale */
    console.log("Sconto del 40% per gli over 65: " + sconto.toFixed(2) + " euro, quindi prezzo totale è " + prezzoOver.toFixed(2) + " euro");
    document.getElementById('prezzo').innerHTML =prezzoOver;
} else ('prezzo totale senza sconti');
