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
    const total = this.calculateTotal();
    // Se poenen los 3 puntos porque si quiero copiar los datos del this y modificarlos tengo 
    // que hacer eso ya que voy a modificar total 
    return { ... this.invoice, total: total };
  }

  /**
   * @param id 
   * @returns la factura modificada si se borra algún item
   */
  remove(id: number): Invoice {
    this.invoice.items = this.invoice.items.filter(item => item.id != id);
    const total = this.calculateTotal();
    return { ... this.invoice, total: total };
  }

  calculateTotal() {
    /*let total = 0;
    this.invoice.items.forEach(item => {
      total += (item.price * item.quantity);
    });
    return total;*/
    // Hace lo mismo que el anterior pero con reduce(), también se puede hacer con string.
    // reduce() es una función de array que recibe un array y un callback y devuelve un solo valor
    return this.invoice.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
