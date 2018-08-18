var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient')

console.log(body);

function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value +
		", "
		+ color2.value +
		")";
}
color1.setAttribute("value", color1.value);
color2.setAttribute("value", color2.value);

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient)

//
const first = () => {
	const greet = 'Hi';
	const secound = () -> {
		alert(greet);
	}
	return secound;
}

const newFunc = first();
newFunc();


// reference type
var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};

// context
const object4 = {
	a: function() {
			console.log(this);
	}
}
// instantiation
class Player {
	constructor(name, type) {
		console.log('payer', this);
		this.name = name;
		this.type =type;
	}

	introduce() {
		console.log(`hi i am ${this.name}, i'm a ${this.type}`);
	}
}

class Wizard extends Player{
	constructor(name, type) {
		super(name, type)
		console.log('wizard', this);
	}
		play() {
			console.log(`weee i'm  a ${this.type}`);
		}
	}


const wizard1 = new Wizard('Shelby', 'healer');
const wizard2 = new Wizard('john', 'dark magic');
//
const flattened = [[0, 1 ], [2, 3], [4, 5]].reduce(
	(accumulator, array) => {
		console.log('array', array);
		console.log('accumulator', accumulator);
		accumulator.concat(array)
	}, []);
