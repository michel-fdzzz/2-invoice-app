import { Component, Input } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'client-view',
  standalone: true,
  imports: [],
  templateUrl: './client-view.component.html'
})
export class ClientViewComponent {
  @Input() client: Client = new Client();
  /*@Input() name!: string;
  @Input() lastname!: number;
  @Input() country!: string;
  @Input() street!: string;
  @Input() number!: number;*/
}
