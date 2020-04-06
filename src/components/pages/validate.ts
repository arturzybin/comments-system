import emailValidator from 'email-validator';

interface IForm {
   username?: string,
   email?: string,
   password?: string,
   passwordOne?: string,
   passwordTwo?: string
}


export function checkFormInvalid(form: IForm): boolean {
   for (let [field, value] of Object.entries(form)) {

      switch (field) {
         case 'username':
            if (value.length < 3 || value.length > 15) {
               return true
            }
            break

         case 'email':
            if (!emailValidator.validate(value)) {
               return true
            }
            break
            
         case 'password':
         case 'passwordOne':
            if (value.length < 6 || value.length > 25) {
               return true
            }
            break

         case 'passwordTwo':
            if (value !== form.passwordOne) {
               return true
            }
            break
      }
   }

   return false
}



export function getInputClassname(field: Exclude<keyof IForm, 'passwordTwo'>, value: string): string
export function getInputClassname(field: 'passwordTwo', value: string, passwordOne: string): string

export function getInputClassname(field: keyof IForm, value: string, passwordOne?: string): string {
   let className = 'auth-form__input'

   switch (field) {
      case 'username':
         if (value && (value.length < 3 || value.length > 15)) {
            className += ' auth-form__input_invalid'
         }
         break

      case 'email':
         if (value && !emailValidator.validate(value)) {
            className += ' auth-form__input_invalid'
         }
         break
         
      case 'password':
      case 'passwordOne':
         if (value && (value.length < 6 || value.length > 25)) {
            className += ' auth-form__input_invalid'
         }
         break

      case 'passwordTwo':
         if (value && (value !== passwordOne)) {
            className += ' auth-form__input_invalid'
         }
         break
   }

   return className
}