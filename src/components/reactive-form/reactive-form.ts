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


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-reactive-form',
//   templateUrl: './reactive-form.html',
//   styleUrls: ['./reactive-form.scss'],
//   standalone: false   // ⬅️ not standalone
// })
// export class ReactiveForm implements OnInit {
//   myForm!: FormGroup;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {
//     this.myForm = this.fb.group({
//       name: ['', [Validators.required, Validators.minLength(3)]],
//       age: ['', [Validators.required, Validators.min(18)]],
//       email: ['', [Validators.required, Validators.email]]
//     });
//   }

//   onSubmit() {
//     if (this.myForm.valid) {
//       console.log('✅ Form Data:', this.myForm.value);
//     } else {
//       console.log('❌ Form Invalid');
//     }
//   }
// }
