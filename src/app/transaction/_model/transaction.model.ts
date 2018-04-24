export interface TransactionSaveTerm {
  totalPrice: number;
  transactionDetailRequest: TransactionDetailRequest[];
}

export interface TransactionDetailRequest {
  orderPrice: number;
  productId: number;
  quality: number;
  totalPrice: number;
  transactionId: 0;
}

export interface Status {
  code: number;
  cause: string;
  description: string;
  message: string;
}

export interface Autority {
  body: [
  {
    id: number;
    name: string;
  }
];
 status: Status[];
}

// export interface Transaction {
//   status: Status[];
//   transactionBodyResponses: TransactionBodyResponses[];
// }

// export interface TransactionBodyResponses {
//   id: number;
//   orderDate: string;
//   status: string;
//   totalPrice: number;
//   user: {
//     username: string;
//   };
// }

export interface Transaction {
  body: TransactionDetail[];
  status: Status[];
}

export interface TransactionDetail {
  details: {
    body: TransactionList[];
  };
  id: number;
  orderDate: string;
  status: string;
  totalPrice: number;
  userId: number;
}


export interface TransactionList {
    id: number;
    orderPrice:  number;
    productId:  number;
    quantity:  number;
    totalPrice:  number;

}


export interface UpdateTerm {
  body: TransactionList [];
  id: number;
  orderDate: string;
  status: string;
  totalPrice: number;
}



export interface Dummy {
  status: Status;
  body: [
    {
      id: number;
      userId: number;
      totalPrice: number;
      orderDate: string;
      status: string;
      details: {
        status: Status;
        body: TransactionList[];
      }
    }
  ];
}
