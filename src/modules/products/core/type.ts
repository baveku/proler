import { EntityId } from '@reduxjs/toolkit';

enum ProductType {
    Aliexpress = 'Aliexpress',
}

export interface Product {
    id: EntityId;
    type: ProductType;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    description: string;
    title: string;
}
