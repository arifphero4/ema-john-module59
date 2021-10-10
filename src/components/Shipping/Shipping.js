import React from 'react';
import './Shipping.css'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const {user} =useAuth();
  const onSubmit = data => {
    console.log(data)
  };
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
      
                <input defaultValue={user.displayName} {...register("name", { required: true })} />
                
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="city" {...register("city", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="address" {...register("address", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="phone number" {...register("phone", { required: true })} />
                
                {errors.email && <span className="error">This field is required</span>}
        
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;