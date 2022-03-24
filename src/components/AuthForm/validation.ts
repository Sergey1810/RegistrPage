const Required_field = 'Обязательно для заполнения';

export const loginValidation = {
    required: Required_field,
    validate: (value:string) => {
        if(value.match(/[а-яА-Я]/)){
            return 'Логин не может содержать русские буквы'
        }

        return true;
        
    }
}

export const passwordValidation = {
    required: Required_field,
    validate: (value:string) => {
        if(value.length<6){
            return 'Пароль не должен быть меньше 6 символов'
        }

        return true;
        
    }
}