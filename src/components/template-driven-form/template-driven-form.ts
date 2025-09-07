import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: false,
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.scss'
})
export class TemplateDrivenForm {

  formData = {
    name : '',
    email: '',
    password: ''
  }
  submitForm(form: NgForm) {
    console.log(form);
  }
 

}
