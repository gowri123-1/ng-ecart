import { Component, signal } from '@angular/core';
import { TemplateDrivenForm } from '../components/template-driven-form/template-driven-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-class-demo');
}
