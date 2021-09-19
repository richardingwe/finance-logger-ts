import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('paul', 'work on the paul house', 550);

// let invoices: Invoice[] = [];

//form
const form = document.querySelector('.new-item-form') as HTMLFormElement;

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

	console.log(doc);
});
