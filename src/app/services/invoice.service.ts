import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  //Atributo invoice que es de la clase Invoice que es igual a los datos de esta misma factura
  private invoice: Invoice = invoiceData;

  constructor() { }

  /**
   * @returns Datos de la factura
   */
  getInvoice(): Invoice {
    return this.invoice;
  }
}
