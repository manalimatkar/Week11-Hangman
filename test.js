var letterArr = ["t","o","y","o","t","a"];
var placeArr = ["_","_","_","_","_","_"];
var guess = "o";

for(i=0; i<letterArr.length ;i++){
	if (letterArr[i] === guess) {
  		placeArr.splice(i,1,guess);
	}
}
console.log(placeArr);
