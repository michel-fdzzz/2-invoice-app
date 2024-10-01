import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr[row-item]',
  standalone: true,
  imports: [],
  templateUrl: './row-items.component.html'
})
export class RowItemsComponent {
  @Input() item!: Item;
}
