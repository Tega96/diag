import { useState } from 'react';
import Input from "../ui/input"
import RadioInput from '../ui/radioInput';


const Register = () => {

    const [formData, setFormData] = useState();

    const handleChange = (e) => {
        e.target.
    }
    return (
        <div className="">
            <form action="">
                <Input 
                    label="What should we call you?"
                    placeholder='eg. Orimadegun Promise'
                    type="text"
                    id="Name"
                    name="Name"
                />
                <Input 
                    label="label"
                    placeholder='placeholder'
                    type="type"
                    id="id"
                    name="name"
                />
                <RadioInput />
            </form>

        </div>
    )
}
export default Register;