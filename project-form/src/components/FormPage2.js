import React from "react"
import {useForm} from "react-hook-form"

function FormPage(){

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {console.log(data)}; 
    
    return (
        <div>
            <h2 className="text-center">React Hook Form</h2>
            <form onSubmit= {handleSubmit(onSubmit)}>
            <div className="form-group">
                
                <label>Full Name</label>
                <input
                className = "form-control font-weight-bold" 
                type="text"  
                placeholder="Enter Name" 
                {...register("fullName",{required:true})}/>
                {errors.fullName && <p className="text-danger">Name can't be blank</p>}
                
            </div>

            <div className="form-group">
                
                <label>Email</label>
                <input 
                className = "form-control font-weight-bold"
                type="text"  
                placeholder="Enter Email" 
                {...register("email",{
                    required:"Email cant be blank", 
                    pattern : {value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ , message:"Invalid Email ID"}})}/>
                {errors.email && <p className="text-danger">{errors.email.message}</p> }
                
            </div>

            <div className="form-group">
                
                <label>Password</label>
                
                <input 
                className = "form-control font-weight-bold"
                type="password"  
                placeholder="Your Name" 
                {...register("password",{required:"Password cant be blank", 
                minLength : { value:6, message:"password should be at least 6 character"}})}/>
                {errors.password && <p className="text-danger">{errors.password.message}</p>}
                
            </div><br/>

            <input type="submit" value="SUBMIT" class="btn btn-primary"/>
            </form>
        </div>
    )
}

export default FormPage