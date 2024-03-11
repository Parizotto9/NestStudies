import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const newProduct = new Product(
      Math.random().toString(),
      title,
      desc,
      price,
    );
    this.products.push(newProduct);
    return newProduct.id;
  }

  allProducts() {
    return [...this.products];
  }

  getProduct(id: string) {
    const product = this.findProduct(id)[0];
    return { ...product };
  }

  updateProduct(id: string, title: string, desc: string, price: number) {
    const [product, index] = this.findProduct(id);
    const updatedProduct = { ...product };
    if (title) {
      updatedProduct.title = title;
    }
    if (desc) {
      updatedProduct.desc = desc;
    }
    if (price) {
      updatedProduct.price = price;
    }
    this.products[index] = updatedProduct;
  }

  removeProduct(id: string) {
    const index = this.findProduct(id)[1];
    this.products.splice(index, 1);
  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex(
      (item: Product) => item.id === id,
    );
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('Could not find product!');
    }
    return [product, productIndex];
  }
}
