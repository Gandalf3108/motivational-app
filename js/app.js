window.$ = require('./jQuery.js');

const quotes = [
    "Ostvari svoj potencijal!",
    "Nema problema koji ne možete riješiti!",
    "Svaki dan je nova prilika za uspjeh!",
    "Nikada nemojte odustati od svojih snova!",
    "Vi ste izvanredna osoba!"
];

$(function() {
    const quote = $("#quote");
    const generateBtn = $("#generate");

    generateBtn.on(
        {
            click: () => {
                const randomIndex = Math.floor(Math.random() * quotes.length);

                quote.fadeOut(1500, () => {
                    quote.text(quotes[randomIndex]);
                }).fadeIn();
            }
        }
    )
})