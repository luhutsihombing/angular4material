export interface ProductCategory {
    id: number;
    code: string;
    name: string;
    activeStatus: string;
    createdBy: string;
    createdTime: Date;
    updatedBy: string;
    updatedTime: Date;
}

export interface Status {
    code: string;
    cause: string;
    message: string;
    description: string;
}

export interface ProductCategoryResponse {
    status: Status;
    body: ProductCategory[];   
}
