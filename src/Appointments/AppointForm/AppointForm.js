import React from 'react';
import { useForm } from 'react-hook-form';
 
const AppointForm = ({modalTitle}) => {
  const { register, handleSubmit ,formState:{errors}  } = useForm();
  const onSubmit =( data,event )=>{ 
    alert('Succesfully Submit Data')  
    console.log(data)
event.preventDefault();


};

 

  return (
 <>
 <h3 className="text-center">{modalTitle}</h3>
    <form onSubmit={handleSubmit(onSubmit)} className="p-5">
                 {/* register your input into the hook by invoking the "register" function */}
      <div className="from-group">
      <label htmlFor="">Name</label>
      <br/>
      <input  {...register("name")} type="name" placeholder="Name" />
      </div>
      <div className="from-group">
      <label htmlFor="">Your Phone</label>
      <br/>
      <input {...register("phone", { required: true })} type="phone" placeholder="Phone" />
    </div>
    <div className="from-group">
    <label htmlFor="">Your Email</label>
      <br/>
      <input {...register("email", { required: true })} type="email" placeholder="Email" />
    </div>
    <div className="from-group">
    <label htmlFor="">Time</label>
      <br/>
      <input {...register("time", { required: true })} type="time" placeholder="Email" />
    </div>
    <div className="from-group">
    <label htmlFor="">Date</label>
      <br/>
      <input {...register("date", { required: true })} type="date" placeholder="Email" />
    </div>
     
       
       <button className="btn mt-5" type="submit" >Add Appointment</button>
       
    </form>
    </>
  );
};

export default AppointForm;