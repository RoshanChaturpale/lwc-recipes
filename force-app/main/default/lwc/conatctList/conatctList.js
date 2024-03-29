import { LightningElement, api, wire } from 'lwc';
import findContactByAccountId from '@salesforce/apex/ContactController.findContactByAccountId';


// const columns =[
//     {label: 'First Name' , fieldName:'FirstName'},
//     {label: 'Last Name' , fieldName:'LastName'},
//     {label: 'Email' , fieldName:'Email' , type: 'Email'},
// ];
export default class ConatctList extends LightningElement {

    columns =  [
        { label: 'First Name', fieldName: 'FirstName' },
        { label: 'Last Name', fieldName: 'LastName'},
        { label: 'Email', fieldName: 'Email', type: 'email' },    
    ];
    @api accountId;
    @wire(findContactByAccountId,{accountId:'$accountId'}) contacts;   
}