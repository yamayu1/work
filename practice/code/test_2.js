const array = [1,2,3];

let sum = array.reduce((total,addition) => {
	return total + addition;
})

console.log(sum/array.length);