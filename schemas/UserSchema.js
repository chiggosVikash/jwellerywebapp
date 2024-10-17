import {z} from 'zod';

const userSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().min(10,'Phone number must be at least 10 characters long'),
    password: z.string().min(8,'Password must be at least 8 characters long'),
    name: z.string().min(3,'Name must be at least 3 characters long'),

});

export default userSchema;