import React from 'react';

function Review() {
  const questions = {
    "1": sessionStorage.getItem('question1'),
    "2": sessionStorage.getItem('question2'),
    "3": sessionStorage.getItem('question3'),
    "4": sessionStorage.getItem('question4'),
    "5": sessionStorage.getItem('question5'),
    "6": sessionStorage.getItem('question6'),
    "7": sessionStorage.getItem('question7'),
    "8": sessionStorage.getItem('question8'),
    "9": sessionStorage.getItem('question9'),
    "10": sessionStorage.getItem('question10'),
    "11": sessionStorage.getItem('question11'),
    "12": sessionStorage.getItem('question12')
  };

  const handleSubmit = () => {
    alert(`Submission Successful! Data: ${JSON.stringify(questions)}`);
    // Here you would normally make a backend call
  };

  return (
    <div>
      <h1>Review Your Answers</h1>
      {Object.keys(questions).map((key) => (
        <p key={key}>Question {key}: {questions[key]}</p>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Review;
