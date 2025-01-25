import { z } from 'zod';
import { formateNumberWithDecimal } from './utils';

const currency = z

    .string()
    .refine((val) =>
        /^\d+(\.\d{2})?$/.test(formateNumberWithDecimal(Number(val))),
        "price must be a two decimal number"
    )

export const insertProductsSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    slug: z.string().min(3, 'Slug must be at least 3 characters long'),
    category: z.string().min(3, 'Category must be at least 3 characters long'),
    brand: z.string().min(3, 'Brand must be at least 3 characters long'),
    description: z.string().min(3, 'Description must be at least 3 characters long'),
    stock: z.coerce.number(),
    images: z.array(z.string()).min(1, 'At least one image is required'),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: currency
})