import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  name : FormControl = new FormControl('');
  price : FormControl = new FormControl('');

  form1 : FormGroup = new FormGroup(
    {
      'name' : new FormControl('')
      ,'price' : new FormControl('')
    }
  );

  form2 = new FormGroup({    
      name : new FormControl('')
    , address : new FormGroup({ street : new FormControl('')})    
  });
  
  constructor() { }

  ngOnInit() {
  }

  updateValues1() {
    this.name.setValue('Product 1');
    this.price.setValue('Product 2');
  }

  updateValues2() {
    this.form1.patchValue({ name : 'bbbb', price : 200.00})
  }

  submitForm2() {
    console.log('Form = ' + JSON.stringify(this.form1.value));
    console.log('Name = ' + this.form1.value.name2);
    console.log('Price = ' + this.form1.value.price2);
  }

  updateValues3() {
    const prod = { name : 'Product 2' , address : {street : 'Street A'} };
    this.form2.patchValue(prod);
  }

  submitForm3() {
    console.log('Form = ' + JSON.stringify(this.form2.value));
    console.log('Name = ' + this.form2.value.name);
    console.log('Street = ' + this.form2.value.address.street);
  }

}
