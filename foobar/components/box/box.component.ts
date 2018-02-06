import { Component, Input } from '@angular/core';

@Component({
  selector: 'foo-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent {
  @Input() title: string;
}
