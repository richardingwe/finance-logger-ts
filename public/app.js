import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payment.js';
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
//form
const form = document.querySelector('.new-item-form');
//input
const type = document.querySelector('#type');
const toForm = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//add event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toForm.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toForm.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// tuples
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
let tup = ['ryu', 25, true];
// tup[0] = false;
tup[0] = 'ken';
let student;
//student = [23564, 'chun-li'];
student = ['chun-li', 23564];
