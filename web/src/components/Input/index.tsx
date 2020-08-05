import React, {InputHTMLAttributes} from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;

}

// Como o input pode receber vários atributos, 
// usamos o ...rest que pega tudo que sobra e colocamos no input dentro da div
const Input: React.FC<InputProps> = ({name, label, ...rest}) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}/>
        </div>
    );
}

export default Input;