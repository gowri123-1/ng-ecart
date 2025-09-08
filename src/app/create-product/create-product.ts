import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  standalone: false,
  templateUrl: './create-product.html',
  styleUrl: './create-product.scss'
})
export class CreateProduct {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      ratings: this.fb.array([]),
      tags: this.fb.array([]),
    });
  }

  get ratings(): FormArray {
    return this.productForm.get('ratings') as FormArray;
  }
  get tags(): FormArray {
    return this.productForm.get('tags') as FormArray;
  }

  addRating(event: any) {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      this.ratings.push(this.fb.control(value));
      event.target.value = '';
    }
  }

  removeRating(index: number) {
    this.ratings.removeAt(index);
  }

  addTag(value: string) {
    if (value && value.trim().length > 0) {
      this.tags.push(this.fb.control(value.trim()));
    }
  }

  removeTag(index: number) {
    this.tags.removeAt(index);
  }

  onSubmit() {
    console.log(this.productForm.value);
  }
}
