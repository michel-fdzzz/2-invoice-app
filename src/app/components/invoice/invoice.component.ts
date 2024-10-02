import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { TotalComponent } from '../total/total.component';
import { FormItemComponent } from '../form-item/form-item.component';
import { Item } from '../../models/item';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [InvoiceViewComponent,
    ClientViewComponent,
    CompanyViewComponent,
    ListItemsComponent,
    TotalComponent,
    FormItemComponent],
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit {


  invoice!: Invoice;

  constructor(private service: InvoiceService) { }

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

  /**removeItem(id: number) {
   * @filter crea un nuevo array si se cumple el filtro con los elementos que lo cumplan
   * En este caso al darle a remove va a crear el array con los 
   * elementos que tengan id diferente del seleccionado por lo 
   * que si seleccionamos el msimo id se borra ya que no cumple el 
  this.invoice.items = this.invoice.items.filter(item => item.id != id)
  }
  */

  /**
   * Entra en els ervicio que es invoice.service.ts y ejecuta la funcion remove(id)
   * @param id 
   */
  removeItem(id: number) {
    this.invoice = this.service.remove(id);
  }

  addItem(item: Item) {
    this.invoice = this.service.save(item);
  }
}