import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserValidator } from './validations';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;	  

  	constructor(private fb:FormBuilder){
 	this.form = fb.group({
  		name: ['',  Validators.compose([
  			Validators.required,
  			])], 
  		email: ['',  Validators.compose([
  			Validators.required,
  			])],
  		number: ['',  Validators.compose([
  			Validators.required
  			])],
  		message: ['',  Validators.compose([
  			Validators.required,
  			Validators.maxLength(250 ),
  			])]

  		})

 	}

  ngOnInit() {
  }

}
