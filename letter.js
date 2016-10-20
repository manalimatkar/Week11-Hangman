function DisplayLetters(guessedLetter,wordArr,placeArr){

	// console.log("inside display letters" + wordArr + placeArr);

	this.guessedLetter = guessedLetter;
	this.gameStatus = true;
	this.wordArr = wordArr;
	this.placeArr = placeArr;

	this.checkLetter = function(){
		
		var letterExist = this.wordArr.indexOf(this.guessedLetter);

		if(letterExist !== -1){
			this.letterPresent = true;

			// this.placeArr.splice(letterExist,1, this.guessedLetter);
				// this.placeArr.length = 0;
				for(i=0; i<this.wordArr.length ;i++){
					if (this.wordArr[i] === this.guessedLetter) {
						this.placeArr.splice(i,1, this.guessedLetter);
					}
				}
				console.log(this.placeArr);

				if (this.placeArr.indexOf("_") == -1){
					console.log("Congratulations!! You Won");
					this.gameStatus = false;

				}else{
					console.log("Correct Guess");
					console.log("Guess another Letter");
				}

		}else {
			
			console.log("Wrong Guess");
			console.log("Guess another Letter");
		}

		// console.log(this.gameStatus);
		return this.gameStatus;
	}

}
module.exports = DisplayLetters;