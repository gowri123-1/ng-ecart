import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  standalone: false,
  templateUrl: './pipe-demo.html',
  styleUrl: './pipe-demo.scss'
})
export class PipeDemo {
name = "'Angular'";
date = new Date();
amount = '23450';
text = "Gowri";
}
