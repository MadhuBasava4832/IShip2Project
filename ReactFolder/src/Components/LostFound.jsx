import React, { useState } from 'react';
import './LostFound.css';
import axios from "axios";

export const LostFound = () => {

  const [currentForm, setCurrentForm] = useState(null);
  const [IsSubmitted, setIsSubmitted] = useState(false);

  const initialFormData = {
    name: '',
    rollNo: '',
    type: '',
    mobileNo: '',
    place: '',
    date: '',
    selectedOption: '',
    customOption: '',
    description: '',
    photo: null
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (formName) => {
    setCurrentForm(formName);
    setFormData({ ...initialFormData, type: formName });
    setIsSubmitted(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setFormData({ ...formData, photo: file });  // Storing the file itself for later use in FormData
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Prepare form data for submission
    const formData1 = new FormData();
    formData1.append("name", formData.name);
    formData1.append("rollNo", formData.rollNo);
    formData1.append("type", formData.type);
    formData1.append("mobileNo", formData.mobileNo);
    formData1.append("place", formData.place);
    formData1.append("date", formData.date);
    formData1.append("selectedOption", formData.selectedOption);
    formData1.append("customOption", formData.customOption);
    formData1.append("description", formData.description);
    
    // Add the file to form data, if a file is uploaded
    if (formData.photo) {
      formData1.append("anyname", formData.photo);  // 'anyname' matches the key used in multer
    }

    // Axios post request
    axios.post('http://localhost:9001/LF/LostFound', formData1)
      .then(result => {
        console.log('Successfully uploaded to MongoDB', result);
        setFormData(initialFormData);  // Reset the form
        setCurrentForm(null);  // Reset the form view
      })
      .catch(err => {
        console.log('Error uploading data:', err);
      });
  };

  return (
    <div className="container">
      <div className="buttondiv">
        <button onClick={() => handleFormChange('lost')} className="form-button">
          Lost
        </button>
        <button onClick={() => handleFormChange('found')} className="form-button">
          Found
        </button>
      </div>

      {currentForm === 'lost' && (
        <form onSubmit={handleSubmit} className="form">
          <h3>Lost Form</h3>          
             <div className="form-group">
               <label>Name :  <span>*</span>  </label>
               <input type="text" placeholder="Enter name" name='name' value={formData.name} onChange={handleInputChange} disabled={IsSubmitted} required />
             </div>
             <div className="form-group">
               <label>Roll No :  <span>*</span>  </label>
               <input type="text" placeholder="Enter roll number" name='rollNo' value={formData.rollNo} onChange={handleInputChange} disabled={IsSubmitted} required />
             </div>
             <div className="form-group">
               <label>Mobile No :  <span>*</span>  </label>
               <input type="text" placeholder="Enter mobile number" name='mobileNo' value={formData.mobileNo} onChange={handleInputChange} disabled={IsSubmitted} required />
             </div>
             <div className="form-group">
               <label>Place :  <span>*</span>  </label>
               <input type="text" placeholder="Enter place" name='place' value={formData.place} onChange={handleInputChange} disabled={IsSubmitted} required />
             </div>
             <div className="form-group">
               <label>Date :  <span>*</span>  </label>
               <input type="date" name='date' value={formData.date} onChange={handleInputChange} disabled={IsSubmitted} required />
             </div>
             <div className="form-group">
               <label>Found Item  <span>*</span>  </label>
               <select name='selectedOption' value={formData.selectedOption} onChange={handleInputChange} disabled={IsSubmitted} required>
                 <option value='' >Select</option>
                 <option value='Debit/CreditCard' >Debit / Credit Card</option>
                 <option value='wallet' >Wallet</option>
                 <option value='mobile' >Mobile</option>
                 <option value='buds' >Buds</option>
                 <option value='other' >Other</option>
               </select>
             </div>
             {formData.selectedOption === 'other' && (
               <div className="form-group">
                 <label>Specify Other:  <span>*</span>  </label>
                 <input type="text" name='customOption' value={formData.customOption}
                   onChange={handleInputChange} disabled={IsSubmitted} placeholder="Enter your option" required />
               </div>
             )}
             <div className="form-group">
               <label>Additional Information:  <span>*</span>  </label>
               <textarea name="description" value={formData.description} onChange={handleInputChange} disabled={IsSubmitted}
                 placeholder="Enter additional information here ..." rows="4" required />
             </div>
          <div className="form-group">
            <label>Upload Photo:</label>
            <input type="file" accept="image/*" onChange={handlePhotoUpload} />
          </div>
          {formData.photo && (
            <div className="photo-preview">
              <img src={URL.createObjectURL(formData.photo)} alt="Preview" />
            </div>
          )}
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      )}

      {currentForm === 'found' && (
        <form onSubmit={handleSubmit} className="form">
          <h3>Found Form</h3>
          <div className="form-group">
               <label>Name :  <span>*</span>  </label>
               <input type="text" placeholder="Enter name" name='name' value={formData.name} onChange={handleInputChange} disabled={IsSubmitted} required />
             </div>
             <div className="form-group">
               <label>Roll No :  <span>*</span>  </label>
               <input type="text" placeholder="Enter roll number" name='rollNo' value={formData.rollNo} onChange={handleInputChange} disabled={IsSubmitted} required />
             </div>
             <div className="form-group">
               <label>Mobile No :  <span>*</span>  </label>
               <input type="text" placeholder="Enter mobile number" name='mobileNo' value={formData.mobileNo} onChange={handleInputChange} disabled={IsSubmitted} required />
             </div>
             <div className="form-group">
               <label>Place :  <span>*</span>  </label>
               <input type="text" placeholder="Enter place" name='place' value={formData.place} onChange={handleInputChange} disabled={IsSubmitted} required />
             </div>
             <div className="form-group">
               <label>Date :  <span>*</span>  </label>
               <input type="date" name='date' value={formData.date} onChange={handleInputChange} disabled={IsSubmitted} required />
             </div>
             <div className="form-group">
               <label>Found Item  <span>*</span>  </label>
               <select name='selectedOption' value={formData.selectedOption} onChange={handleInputChange} disabled={IsSubmitted} required>
                 <option value='' >Select</option>
                 <option value='Debit/CreditCard' >Debit / Credit Card</option>
                 <option value='wallet' >Wallet</option>
                 <option value='mobile' >Mobile</option>
                 <option value='buds' >Buds</option>
                 <option value='other' >Other</option>
               </select>
             </div>
             {formData.selectedOption === 'other' && (
               <div className="form-group">
                 <label>Specify Other:  <span>*</span>  </label>
                 <input type="text" name='customOption' value={formData.customOption}
                   onChange={handleInputChange} disabled={IsSubmitted} placeholder="Enter your option" required />
               </div>
             )}
             <div className="form-group">
               <label>Additional Information:  <span>*</span>  </label>
               <textarea name="description" value={formData.description} onChange={handleInputChange} disabled={IsSubmitted}
                 placeholder="Enter additional information here ..." rows="4" required />
             </div>          <div className="form-group">
            <label>Upload Photo:</label>
            <input type="file" accept="image/*" onChange={handlePhotoUpload} />
          </div>
          {formData.photo && (
            <div className="photo-preview">
              <img src={URL.createObjectURL(formData.photo)} alt="Preview" />
            </div>
          )}
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      )}
    </div>
  );
};










