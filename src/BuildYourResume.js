import React, { useState } from 'react';
import './css/BuildYourResume.css'; // Ensure you import your CSS for styling
import Header from './Header'; // Import your Header component

const BuildYourResume = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: [],
    experience: [],
    skills: [],
    interests: '',
    strengths: [],
    weaknesses: [],
    summary: '',
  });

  const [resumes, setResumes] = useState([]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addEducationField = () => {
    setFormData((prevData) => ({
      ...prevData,
      education: [...prevData.education, ''],
    }));
  };

  const handleEducationChange = (index, e) => {
    const newEducation = [...formData.education];
    newEducation[index] = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      education: newEducation,
    }));
  };

  const addExperienceField = () => {
    setFormData((prevData) => ({
      ...prevData,
      experience: [...prevData.experience, ''],
    }));
  };

  const handleExperienceChange = (index, e) => {
    const newExperience = [...formData.experience];
    newExperience[index] = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      experience: newExperience,
    }));
  };

  const addSkillField = () => {
    setFormData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, ''],
    }));
  };

  const handleSkillsChange = (index, e) => {
    const newSkills = [...formData.skills];
    newSkills[index] = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      skills: newSkills,
    }));
  };

  const addStrengthField = () => {
    setFormData((prevData) => ({
      ...prevData,
      strengths: [...prevData.strengths, ''],
    }));
  };

  const handleStrengthsChange = (index, e) => {
    const newStrengths = [...formData.strengths];
    newStrengths[index] = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      strengths: newStrengths,
    }));
  };

  const addWeaknessField = () => {
    setFormData((prevData) => ({
      ...prevData,
      weaknesses: [...prevData.weaknesses, ''],
    }));
  };

  const handleWeaknessesChange = (index, e) => {
    const newWeaknesses = [...formData.weaknesses];
    newWeaknesses[index] = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      weaknesses: newWeaknesses,
    }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; 
    return phoneRegex.test(phone);
  };

  const nextStep = () => {
    if( !formData.name || !formData.email || !formData.phone || !formData.summary ){
      alert("Please enter all the details to move forward.");
      return;
    }
    if(!isValidEmail(formData.email)){
      alert("Enter valid email.");
      return;
    }
    if(!isValidPhoneNumber(formData.phone)){
      alert("Enter valid phone number.");
      return;
    }
    if (currentStep < 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCreateResume = (e) => {
    e.preventDefault();
  
    const form = e.target;
    
    if (!form.reportValidity()) {
      return;
    }
  
    const newResume = {
      ...formData,
      creationDate: new Date().toLocaleString() 
    };
  
    setResumes((prevResumes) => [newResume, ...prevResumes]);
    setShowForm(false); 
  };
  const handleDeleteResume = (indexToDelete) => {
    setResumes((prevResumes) =>
      prevResumes.filter((_, index) => index !== indexToDelete)
    );
  };  
  

  const downloadResume = (resume) => {
    const resumeContent = `
      Name: ${resume.name}\n
      Email: ${resume.email}\n
      Phone: ${resume.phone}\n
      Summary: ${resume.summary}\n
    `;
  
    const blob = new Blob([resumeContent], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `${resume.name}_resume.doc`; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  

  return (
    <>
      <Header />
      <div className="build-resume-resume-page">
        <h1>Build Your Resume</h1>
        
        <button className="build-resume-create-resume-button" onClick={() => {
          setShowForm(true);
          setCurrentStep(0); 
          setFormData({
            name: "",
            email: "",
            phone: "",
            education: [],
            experience: [],
            skills: [],
            interests: "",
            strengths: [],
            weaknesses: [],
            summary: "",
          }); // Reset form data
        }}>
          Create New Resume
        </button>

        {showForm && (
          <div className="resume-form-overlay">
            <div className="resume-form-popup">
              <div className="resume-form-popup-header">
                <h2>Create New Resume</h2>
                <span className="resume-close-icon" onClick={() => setShowForm(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </div>

              <form className="resume-form" onSubmit={handleCreateResume}>
                {/* Step 1: Personal Information and Summary */}
                {currentStep === 0 && (
                  <>
                    <label>
                      Name:
                      <input
                        type="text"
                        name="name"
                        className="resume-input"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </label>
                    <label>
                      Email:
                      <input
                        type="email"
                        name="email"
                        className="resume-input"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </label>
                    <label>
                      Phone:
                      <input
                        type="tel"
                        name="phone"
                        className="resume-input"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </label>
                    <label>
                      Summary:
                      <textarea
                        name="summary"
                        value={formData.summary}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </>
                )}

                {/* Step 2: Resume Details */}
                {currentStep === 1 && (
                  <>
                    <h3>Education</h3>
                    {formData.education.map((edu, index) => (
                      <input
                        key={index}
                        type="text"
                        value={edu}
                        onChange={(e) => handleEducationChange(index, e)}
                        placeholder="Enter your education"
                      />
                    ))}
                    <button className="resume-button" onClick={addEducationField}>
                      Add Education
                    </button>

                    <h3>Experience</h3>
                    {formData.experience.map((exp, index) => (
                      <input
                        key={index}
                        type="text"
                        value={exp}
                        onChange={(e) => handleExperienceChange(index, e)}
                        placeholder="Enter your work experience"
                      />
                    ))}
                    <button type="button" className="resume-button" onClick={addExperienceField}>
                      Add Experience
                    </button>

                    <h3>Skills</h3>
                    {formData.skills.map((skill, index) => (
                      <input
                        key={index}
                        type="text"
                        value={skill}
                        onChange={(e) => handleSkillsChange(index, e)}
                        placeholder="Enter your skill"
                      />
                    ))}
                    <button type="button" className="resume-button" onClick={addSkillField}>
                      Add Skill
                    </button>

                    <h3>Strengths</h3>
                    {formData.strengths.map((strength, index) => (
                      <input
                        key={index}
                        type="text"
                        value={strength}
                        onChange={(e) => handleStrengthsChange(index, e)}
                        placeholder="Enter your strength"
                      />
                    ))}
                    <button type="button" className="resume-button" onClick={addStrengthField}>
                      Add Strength
                    </button>

                    <h3>Weaknesses</h3>
                    {formData.weaknesses.map((weakness, index) => (
                      <input
                        key={index}
                        type="text"
                        value={weakness}
                        onChange={(e) => handleWeaknessesChange(index, e)}
                        placeholder="Enter your weakness"
                      />
                    ))}
                    <button type="button" className="resume-button" onClick={addWeaknessField}>
                      Add Weakness
                    </button>

                    <label>
                      Interests:
                      <input
                        type="text"
                        name="interests"
                        value={formData.interests}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </>
                )}

                <div className="resume-button-container">
                  {currentStep > 0 && (
                    <button type="button" className="prev-button" onClick={prevStep}>
                      Back
                    </button>
                  )}
                  {currentStep < 1 ? (
                    <button type="button" className="next-button" onClick={nextStep}>
                      Next
                    </button>
                  ) : (
                    <button type="submit" className="submit-button">Build Resume</button>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}

<div className="build-resume-resumes-list">
  <h2>Your Resumes</h2>
  {resumes.length === 0 ? (
    <p>No resumes created yet.</p>
  ) : (
    <div className="resume-cards-container">
      {resumes.map((resume, index) => (
        <div key={index} className="resume-card">
            
          <h3>Resume_{index}</h3>
          <p>Created on: {resume.creationDate}</p>

          <div className="resume-actions">
          <div className="delete-icon" onClick={() => handleDeleteResume(index)}>
                <i className="fas fa-trash-alt"></i>
              </div>
            <button className="download-button" onClick={() => downloadResume(resume)}>
              Download Resume
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

      </div>
    </>
  );
};

export default BuildYourResume;
