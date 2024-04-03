// Assuming balance is a variable holding the balance value

var balance = 200

if (balance < 0) {
    document.querySelector('.posMain').style.display = 'none';
    document.querySelector('.negMain').style.display = 'block';

    // Array of negative quotes
    const negQuotes = [
        "Martijn was zwak en heeft het toch gekocht!",
        "Weet jij waar het geld is?! Martijn ook niet!",
        "Wat een idioot is het eigenlijk ook!",
        "Kaaaaaaaaaaaaaaaaa",
        // Add more negative quotes here if needed
    ];

    // Selecting a random quote from the negQuotes array
    const randomQuote = negQuotes[Math.floor(Math.random() * negQuotes.length)];

    // Creating an h2 element and setting its innerText to the random quote
    const quoteElement = document.querySelector('.negMain h2');
    quoteElement.innerText = randomQuote;
} else {
    document.querySelector('.posMain').style.display = 'block';
    document.querySelector('.negMain').style.display = 'none';

    const posQuotes = [
        "Martijn heeft nog geen impulsaankopen gedaan deze week!",
        "Hoe is het mogelijk?!",
        "Maar dit kan zo veranderen.",
        "Maar dat onnodige prulding wil ik wel graag kopen! Het is maar 150 euro!!!",
        // Add more negative quotes here if needed
    ];

    const randomQuotePos = posQuotes[Math.floor(Math.random() * posQuotes.length)];

    const quoteElementPos = document.querySelector('.posMain h2');
    quoteElementPos.innerText = randomQuotePos;
}