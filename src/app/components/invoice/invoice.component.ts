import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { TotalComponent } from '../total/total.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [InvoiceViewComponent,
    ClientViewComponent,
    CompanyViewComponent,
    ListItemsComponent,
    TotalComponent],
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit {


  invoice!: Invoice;

  constructor(private service: InvoiceService) { }

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

  removeItem(id: number) {
    /**@filter crea un nuevo array si se cumple el filtro con los elementos que lo cumplan
     * En este caso al darle a remove va a crear el array con los 
     * elementos que tengan id diferente del seleccionado por lo 
     * que si seleccionamos el msimo id se borra ya que no cumple el 
     * filtro de que tengan un id diferente al que viene por parametro
    */
    this.invoice.items = this.invoice.items.filter(item => item.id != id)
  }
}
