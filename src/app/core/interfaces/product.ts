import { Status as ProductStatus } from "../enum/product/status"

export interface Product {
    title: string,
    price: number,
    description?: string,
    quantity: number,
    image: string | Blob
    status: ProductStatus
}