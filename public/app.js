"use strict";
//classes
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
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
