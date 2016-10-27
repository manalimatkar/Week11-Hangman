var randomWordSelected = require("./game.js");

var WordToGuess = function(){	
	
	this.randomWordArr = [];	
	this.placeHolderArr= [];

	this.getWordToGuess = function(){
		// Create randomWordSelected object 
		var word = new randomWordSelected();
		// call selectWord method to get a ramdom word
		word.selectWord();
		// set the randomWordArr to the word array generated for selected word
		this.randomWordArr = word.lettersArr;
		// console.log(this.randomWordArr);
		// Create a placeholder array filled with blank "_" letter to match the length of randomWordArr
		for (var i = 0; i < this.randomWordArr.length ; i++){
			this.placeHolderArr.push("_");
			// console.log(this.placeHolderArr);
		}
	}

	

}

module.exports = WordToGuess;
