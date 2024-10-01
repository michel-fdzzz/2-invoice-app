import { Invoice } from "../models/invoice";

//Exportamos los datos de la fastura que vienen de la clase Invoice de invoice.ts
export const invoiceData: Invoice = {
    id: 1,
    name: 'COmponentes de PC',
    client: {
        name: 'Andres',
        lastname: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 15
        }
    },
    company: {
        name: 'New Age',
        fiscalNumber: 312123,
    },
    items: [
        {
            id: 1,
            product: 'CPU Intel i9',
            price: 599,
            quantity: 1
        },
        {
            id: 2,
            product: 'Corsair Teclado Mecanico',
            price: 399,
            quantity: 2
        },
        {
            id: 3,
            product: 'Monitor Asus ',
            price: 899,
            quantity: 3
        },
    ]
}