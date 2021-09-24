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

//generics
const addUID = <T extends object>(obj: T) => {
	let uid = Math.floor(Math.random() * 100);
	return { ...obj, uid };
};

let docOne = addUID({ name: 'Richard', age: 40 });

console.log(docOne);

//  with interfaces
interface Resource<T> {
	uid: number;
	resourceName: string;
	data: T;
}
