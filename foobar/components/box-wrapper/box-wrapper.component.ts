import { Component, Input, QueryList, ViewChildren } from '@angular/core';

import { BoxComponent } from '../box';

@Component({
  selector: 'foo-box-wrapper',
  templateUrl: './box-wrapper.component.html'
})
export class BoxWrapperComponent {
  @Input() title: string;
  @ViewChildren(BoxComponent) boxes: QueryList<BoxComponent>;
}
