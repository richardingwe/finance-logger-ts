import { Invoice } from './classes/invoice.js';

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('paul', 'work on the paul house', 550);

let invoices: Invoice[] = [];

//form
const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toForm = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//add event listener
form.addEventListener('submit', (e: Event) => {
	e.preventDefault();

	console.log(type.value, toForm.value, details.value, amount.valueAsNumber);
});
