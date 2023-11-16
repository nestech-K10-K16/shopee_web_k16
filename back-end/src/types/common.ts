export interface typeProduct {
    IdProduct: string
    Name: string
    Amount: number
    Price: number
    Image: Blob
}

export interface typeCart {
    Email: string
    IdProduct: string
    Amount: number
    IntoMoney: number
}

export interface typeUser {
    Email: string
    Password: string
    RePassword: string
    Name: string
    Role: number
    IdCustomer: string
}

export interface typeCustomer {
    IdCustomer: string
    Name: string
    CompanyName: string
    Country: string
    Address: string
    PostCode: string
    City: string
    Phone: number
    Email: string
}

export interface typeBill {
    IdBill: string
    IdCustomer: string
    OrderDate: Date
    Status: number
    TotalMoney: number
    PaymentMethods: number
    DeliveryOptions: number
}

export interface typeBillDetail {
    IdBill: string
    IdProduct: string
    Amount: number
    IntoMoney: number
}