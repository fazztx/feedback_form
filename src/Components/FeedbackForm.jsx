import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

  //Similar as declaring an object instance of a class with attributes: fullName, email, feedback
  //In  this case the class doesn't have to exist, rather you just declare an instance of a state
  const [dataForm, setDataForm] = useState({
    fullName: '',
    email: '',
    feedback: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target; //Extracts the name and value properties from the event object's target property. 
    setDataForm({
      ...dataForm,
      [name]: value //updates the state (fullName, email, feedback) with the new value
    });
  };

  const handleSubmit = (e) => {

      e.preventDefault();
      const confirmationMessage = `
        Full Name: ${dataForm.fullName}
        Email: ${dataForm.email}
        Feedback: ${dataForm.feedback}
        Rate: ${dataForm.rating}
      `;
      const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
      if (isConfirmed) {
        console.log('Submitting feedback:', dataForm);
        setDataForm({
          fullName: '',
          email: '',
          feedback: '',
          rating: ''
        });
        alert('Thank you for your valuable feedback!');
      }

  }


  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>

        {/* Added label for accesibility purposes */}

        {/* htmlFor instead of for */}
        {/* binds label with element using the id */}
        <label htmlFor='fullName'>Name:</label> 
        {/* value is binded with correspond9ing state & changes each time an onChange event happens */}
        <input type='text' id='fullName' name='fullName' placeholder='Enter your name...' value={dataForm.fullName} onChange={handleChange}></input>

        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' placeholder='Enter your email...' value={dataForm.email} onChange={handleChange}></input>

        <label htmlFor='feedback'>Enter your feedback: </label>
        <textarea name="feedback" id='feedback' placeholder='Give us your feedback...' value={dataForm.feedback} onChange={handleChange}></textarea>

        {/* name attribute groups all buttons */}
        <p>Rate us:</p>
        <input type='radio' id='r1' name='rating' value='1' onChange={handleChange}></input>
        <label htmlFor ='r1'>1</label><br></br>

        <input type='radio' id='r2' name='rating' value='2' onChange={handleChange}></input>
        <label htmlFor ='r2'>2</label><br></br>

        <input type='radio' id='r3' name='rating' value='3' onChange={handleChange}></input>
        <label htmlFor ='r3'>3</label><br></br>

        <input type='radio' id='r4' name='rating' value='4' onChange={handleChange}></input>
        <label htmlFor ='r1'>4</label><br></br>

        <input type='radio' id='r5' name='rating' value='5' onChange={handleChange}></input>
        <label htmlFor ='r5'>5</label><br></br>

        <button type='submit'>Submit Feedback</button>
        
      </form>
    </>
  );
};

export default FeedbackForm;
