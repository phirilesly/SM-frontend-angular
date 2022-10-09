export interface ApplicationUser {
    email: string
    password: string
    confirmPassword: string
    user: User
  }
  
  export interface User {
    id: string
    userId: number
    firstName: string
    lastName: string
    street: string
    city: string
    state: string
    zip: string
    country: string
  }