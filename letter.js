function DisplayLetters(guessedLetter,wordArr,placeArr){

	// console.log("inside display letters" + wordArr + placeArr);

	this.guessedLetter = guessedLetter;
	this.gameStatus = true;
	this.wordArr = wordArr;
	this.placeArr = placeArr;

	this.checkLetter = function(){
		//check the indexOf letter entered by user and see if its present in the word's letter array
		var letterExist = this.wordArr.indexOf(this.guessedLetter);
		//if indexOf is doestnot return -1 then letter exist
		if(letterExist !== -1){

				// compare the letter with each item in word arr to get the index of 
				// letter each time it appears in the wordarray
				for(i=0; i<this.wordArr.length ;i++){
					if (this.wordArr[i] === this.guessedLetter) {
						// At the index where the letter matches the word array element remove "_"
						// from the placeholder array and place the correct word in placeholderarray
						this.placeArr.splice(i,1, this.guessedLetter);
					}
				}
				// Diaply the placeholder array with gussed letters places in the right places
				console.log(this.placeArr);
				// Check if there are any  blank space left in placeholder array
				if (this.placeArr.indexOf("_") == -1){
					// If no blanks left display win
					console.log("Congratulations!! You Won");
					// change the gameStatus
					this.gameStatus = false;

				}else{
					// Else prompt user to make next guess
					console.log("Correct Guess");
					console.log("Guess another Letter");
				}

		}else {
			// else if letter is not present prompt user to guess another letter
			console.log("Wrong Guess");
			console.log("Guess another Letter");
		}

		// console.log(this.gameStatus);
		return this.gameStatus;
	}

}
module.exports = DisplayLetters;