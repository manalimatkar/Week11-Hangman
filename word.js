var randomWordSelected = require("./game.js");

var WordToGuess = function(){	
	
	this.randomWordArr = [];	
	this.placeHolderArr= [];

	this.getWordToGuess = function(){
		var word = new randomWordSelected();
		word.selectWord();
		this.randomWordArr = word.lettersArr;
		// console.log(this.randomWordArr);
		for (var i = 0; i < this.randomWordArr.length ; i++){
			this.placeHolderArr.push("_");
			// console.log(this.placeHolderArr);
		}
	}

	

}

module.exports = WordToGuess;
