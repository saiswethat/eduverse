import React, { useState } from 'react';
import './css/MentorshipProgram.css';
import Header from './Header';

const MentorshipProgram = () => {
    const [studentName, setStudentName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [mentor, setMentor] = useState('');
    const [reason, setReason] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ studentName, email, phone, mentor, reason });
    };
  
    return (
        <>
        <Header/>

        <div className="mentorship-message">
          <h2>Take Your Career to the Next Level!</h2>
          <p>
            Are you passionate about technology, business, or any other field? Join our Mentorship Program to connect with
            experienced professionals who can guide you through your career journey. Whether you're looking to improve your
            skills, network with industry experts, or get personalized career advice, this program is tailored to support
            your goals. Don't miss out on this opportunity to fast-track your success!
          </p>
        </div>

      <form className="mentorship-form-container" onSubmit={handleSubmit}>
        <h2 className="mentorship-form-heading">Mentorship Program Application</h2>
  
        <label className="mentorship-form-label" htmlFor="studentName">Student Name</label>
        <input
          className="mentorship-form-input"
          type="text"
          id="studentName"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
        />
  
        <label className="mentorship-form-label" htmlFor="email">Email</label>
        <input
          className="mentorship-form-input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
  
        <label className="mentorship-form-label" htmlFor="phone">Phone</label>
        <input
          className="mentorship-form-input"
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
  
        <label className="mentorship-form-label" htmlFor="mentor">Select Mentor</label>
        <select
          className="mentorship-form-select"
          id="mentor"
          value={mentor}
          onChange={(e) => setMentor(e.target.value)}
          required
        >
          <option value="">-- Select Mentor --</option>
          <option value="Mentor 1">Mentor 1</option>
          <option value="Mentor 2">Mentor 2</option>
          <option value="Mentor 3">Mentor 3</option>
        </select>
  
        <label className="mentorship-form-label" htmlFor="reason">Why do you want to choose this mentor? What guidance/support do you need?</label>
        <textarea
          className="mentorship-form-textarea"
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          rows="4"
          required
        ></textarea>
  
        <button className="mentorship-form-submit" type="submit">Submit</button>
      </form>
      </>
    );
  };

export default MentorshipProgram;
