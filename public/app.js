const me = {
    name: 'Richard',
    age: 22,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount;
    },
};
import { Invoice } from './classes/invoice.js';
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('paul', 'work on the paul house', 550);
let invoices = [];
//form
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toForm = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//add event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toForm.value, details.value, amount.valueAsNumber);
});
