import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

//form
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//input
const type = document.querySelector('#type') as HTMLInputElement;
const toForm = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//add event listener
form.addEventListener('submit', (e: Event) => {
	e.preventDefault();

	let doc: HasFormatter;
	if (type.value === 'invoice') {
		doc = new Invoice(toForm.value, details.value, amount.valueAsNumber);
	} else {
		doc = new Payment(toForm.value, details.value, amount.valueAsNumber);
	}

	list.render(doc, type.value, 'end');
});

// tuples
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
// tup[0] = false;
tup[0] = 'ken';

let student: [string, number];
//student = [23564, 'chun-li'];
student = ['chun-li', 23564];
