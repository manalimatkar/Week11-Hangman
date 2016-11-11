//Lets Begine by selecting a word to display
//Below constructor when called selects a random word from the collection array
function SelectRandomWord() {
    this.wordCollection = ["mazda", "hyundai", "toyota", "buwick", "ford"];
    this.wordSelected = "";
    this.lettersArr = [];
    this.selectWord = function() {

        // create random number between one to 4 ie the length of array
        var wordIndex = Math.floor((Math.random() * 4) + 1);

        // Select word at the random index and set it to wordSelected
        this.wordSelected = this.wordCollection[wordIndex];
        // console.log(this.wordSelected);

        // Split the word and store the result in lettersArr
        this.lettersArr = this.wordSelected.split('');
        // console.log(this.lettersArr);
    }
}

module.exports = SelectRandomWord;
