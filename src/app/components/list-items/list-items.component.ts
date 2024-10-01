import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';
import { RowItemsComponent } from '../row-items/row-items.component';

@Component({
  selector: 'list-items',
  standalone: true,
  imports: [RowItemsComponent],
  templateUrl: './list-items.component.html'
})
export class ListItemsComponent {
  @Input() items: Item[] = [];
}
