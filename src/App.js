import React, { useState } from 'react';


import logo from './logo.svg';
import './App.css';

function App() {


  const [formData, setFormData] = useState({name: "",description: "",category: "",quantity:"",price:""  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
alert(`
    -------------------------------------
      New Product Added Successfully
    ------------------------------------
    Name: ${formData.name},
    Description: ${formData.description},
    Category: ${formData.category},
    Quantity: ${formData.quantity},
    Price: ${formData.price}
     ----------------------------------
      Thanks for Visiting My Website
     ----------------------------------
    `);
 
  };

  const resetAll = () => {
    setFormData({name: "",description: "",category: "",quantity:"",price:"" });
  

};



  return (
    <>
    <div className="container">
    

      <h1>New Product</h1>


        <form onSubmit={handleSubmit} onReset={resetAll} >

          <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="" name="name" value={formData.name} onChange={handleChange}/>
          </div>


          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" placeholder="" name="description" value={formData.description} onChange={handleChange}/>
          </div>
        
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <input type="text" className="form-control" id="category" placeholder="" name="category" value={formData.category} onChange={handleChange}/>
          </div>
        

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">Quantity</label>
            <input type="number" className="form-control" id="quantity" placeholder="" min='0' name="quantity" value={formData.quantity} onChange={handleChange}/>
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="number" className="form-control" id="price" placeholder="" min='0' name="price" value={formData.price} onChange={handleChange}/>
          </div>

          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="submit" className="btn btn-primary btn-lg me-md-2">SUBMIT</button>
                
                <button type="reset" id= 'reset'className="btn btn-secondary btn-lg" >CANCEL</button>
            </div>


            </form>

</div>
    
      <div>
        <hr/>
      Copyright © 2023 Areebah Nadeem

    </div>  
    
    
    
    </>
  );
}

export default App;