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
    //@filter si ese item (item.id) es diferente al id que recibimos se asigna ese id al item
    this.invoice.items = this.invoice.items.filter(item => item.id != id)
  }
}
