import {z} from 'zod'

export const registerSchema=z.object({
    username: z.string({
        required_error:'Nombre de Usuario Requerido'
    }),
    password: z.string({
        required_error:'La Contraseña es requerida'
    })
})
export const loginSchema=z.object({
    username: z.string({
        required_error:'Nombre de Usuario Requerido'
    }),
    password: z.string({
        required_error:'La Contraseña es requerida'
    })
})