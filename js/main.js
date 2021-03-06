const request = require("request");
const url = "http://faker.hook.io/?property=lorem.paragraphs";

/**
 * COMPTER LE NOMBRE D'OCCURENCES DE CHAQUE MOT DANS UN TEXTE
 */
const countOccurences = (text) => {

    // Retire les ponctuations
    const myCleanedText = text.replace(/[^A-Za-z0-9_]/g," ");

    // Split le texte en un tableau de mots
    const wordsArray = myCleanedText.split(" ");

    // Contiendra chaque mot et son nombre d'occurences
    let result = {};

    // Parse chaque item du tableau
    wordsArray.forEach(function(word){

        // Supprime le cas de majuscule
        word = word.toLowerCase();

        // Verifie longueur du mot
        if(word.length > 2) {

            // premiere fois qu'on rencontre le mot
            if(!result[word]) {
                result[word] = 1;
            }
            else {
                // mot deja rencontre, on incremente son nombre
                result[word]++;
            }
        }
    });

    console.log("------------------------");
    console.log("Nombre d'occurences de chaque mot:");
    console.log(result);
    console.log("------------------------");

};

// const myText = "Not connected to power. Power is it good or bad. What is power? Dunno what power is but I know what it's not.";
console.log("------------------------");
console.log("Requests a fake text at ", url, "...");
console.log("------------------------");
request({
    url: url,
    json: true
}, function (error, response, data) {
    if (!error && response.statusCode === 200) {
        countOccurences(data);
    }
    else {
        console.log("It seems an error occured when requesting ", url);
    }
});





