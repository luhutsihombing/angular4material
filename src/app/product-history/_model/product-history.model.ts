export interface ProductHistoryData{
    id: number,
    code: string,
    name: string,
    description: string,
    shortDescription: string,
    price: number,
    stock: number,
    productCategoryId: number,
    userId: number,
    productId: number,
    createdBy: string,
    createdTime: Date,
    updatedBy : string,
    updatedTime: Date
    }

export interface ProductHistorySearchList {
    body: ProductHistoryData[];
  }

  export interface ProductHistorySaveData{
    code: string,
    name: string,
    description: string,
    shortDescription: string,
    price: number,
    stock: number,
    productCategoryId: number,
    userId: number,
    productId: number
}
