
interface InputProps {
    label: string;
    type: string;
    placeholder: string;
    id: string;
}

const Input = ({label, type, placeholder, id}: InputProps) => {
    return (
        <div className="">
            <label 
                htmlFor={id}
                className=""
            >What should we call you?{label}</label>
            <input 
                type={type} 
                className=""
                placeholder={placeholder}
                id={id}
                name={name}
            />
        </div>
    )
}
export default Input;