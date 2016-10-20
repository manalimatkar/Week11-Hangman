//Lets Begine by selecting a word to display
//Below constructor when called selects a random word from the collection array
function SelectRandomWord(){
	this.wordCollection = ["mazda", "hundai","toyota","buwick","ford"];
	this.wordSelected = "";
	this.lettersArr = [];
	this.selectWord = function(){
		var wordIndex = Math.floor((Math.random() * 4) + 1);
		this.wordSelected = this.wordCollection[wordIndex];
		// console.log(this.wordSelected);
		this.lettersArr = this.wordSelected.split('');
		// console.log(this.lettersArr);
	}
}

module.exports = SelectRandomWord;

// var word = new SelectRandomWord();
// word.selectWord();
// console.log(word.wordSelected);