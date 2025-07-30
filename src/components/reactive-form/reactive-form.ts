import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss'
})
export class ReactiveForm {

  contactForm: FormGroup | undefined | any;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', Validators.required]
      }
    )

  }

  submitForm() {
    console.log(this.contactForm)
  }

}
