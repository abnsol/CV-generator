import PersonalInfoForm from "./PersonalInfoFrom";
import EducationalForm from "./EducationalForm";
import Experience from "./Experience";
import { useState } from "react";
import styles from "./PersonalInfoForm.module.css"

const ResumePreview = ({resumeData,setResumeData}) => {
    const [showPersonalInfoForm,setShowPersonalInfoForm] = useState(false);
    const [showExperienceForm,setShowExperienceForm] = useState(false);
    const [showEducationForm,setShowEducationForm] = useState(false); 
    const [editExperience, setEditExperience] = useState(null);  // Track experience being edited
    const [editEducation, setEditEducation] = useState(null);  // Track education being edited


    const openPersonalInfoForm = () => setShowPersonalInfoForm(true);
    const closePersonalInfoForm = () => setShowPersonalInfoForm(false);

    const openExperienceForm = () => setShowExperienceForm(true);
    const closeExperienceForm = () => setShowExperienceForm(false);

    const openEducationForm = () => setShowEducationForm(true);
    const closeEducationForm = () => setShowEducationForm(false);

    const handleEditExperience = (exp) => {
        console.log(exp)
        setEditExperience(exp);  // Set the experience entry to edit
        setShowExperienceForm(true); // Show the form
    };
      
    const handleEditEducation = (edu) => {
        setEditEducation(edu); // Set the education entry to edit
        setShowEducationForm(true); // Show the form
    };

    const deleteEducationExperience = (id) => {
        setResumeData((prevData) => ({
            ...prevData,
            education: prevData.education.filter((edu) => edu.id !== id),
        }));
    }

    const deleteExperience = (id) => {
        setResumeData((prevData) => ({
            ...prevData,
            professionalExperience: prevData.professionalExperience.filter((exp) => exp.id !== id),
        }));
    }
      

    return (
        <div className={styles.resumeContainer}>
            <div className={styles.personalInfo}>
                <div className={styles.personalInfoEdit}>
                    <button onClick={openPersonalInfoForm}><img src="/edit.svg" alt="edit"/></button>
                </div>
                <h1>{resumeData.personalInfo.name}</h1>
                <div className={styles.personalContact}>
                    <p>{resumeData.personalInfo.phone}</p>
                    <p><a href={resumeData.personalInfo.email}>{resumeData.personalInfo.email}</a></p>
                    <p><a href={resumeData.personalInfo.github}>{resumeData.personalInfo.github}</a></p>
                    <p><a href={resumeData.personalInfo.website}>{resumeData.personalInfo.website}</a></p>
                </div>
                <hr/>
            </div>
            {showPersonalInfoForm && (
                <>
                    <div className={styles.modalOverlay}></div>
                <PersonalInfoForm 
                onClose={closePersonalInfoForm} 
                personalInfo={resumeData.personalInfo} 
                setResumeData={setResumeData}
                />
                </>
                )
            }

            <div className={styles.cardContainer}>
                <div className={styles.title}>
                    <h2>Professional Experience</h2>
                    <button onClick={openExperienceForm}><img src="/add.svg" alt="add" /></button>
                </div>
                {resumeData.professionalExperience.map((entry) => (
                    <div className={styles.card} key={entry.id}>
                        <h3>{entry.company}</h3>
                        <div>{entry.role}</div>
                        <div>{entry.from} - {entry.to}</div>
                        <div>{entry.responsibilities}</div>
                        <div className={styles.cardActions}>
                            <button onClick={() => handleEditExperience(entry)}><img src="/edit.svg" alt="edit"/></button>
                            <button onClick={() => deleteExperience(entry.id)}><img src="/delete.svg" alt="delete" /></button> 
                        </div>
                    </div>
                ))}
            </div>
            <hr />
            {console.log(editExperience)}
            {showExperienceForm && (
                <>
                    <div className={styles.modalOverlay}></div>
                    <Experience onClose={closeExperienceForm} 
                    setResumeData={setResumeData} 
                    editData={editExperience}
                    setEditData={setEditExperience}  
                />
                </>
            )}

            <div>
                <div className={styles.title}>
                    <h2>Educational Experience</h2>
                    <button onClick={openEducationForm}><img src="/add.svg" alt="add" /></button>
                </div>
                
                <div className={styles.cardContainer}>
                {resumeData.education.map((entry) => (
                    <div className={styles.card} key={entry.id}>
                        <h3>{entry.school}</h3>
                        <div>{entry.degree}</div>
                        <div>{entry.startYear} - {entry.endYear}</div>
                        <div>Gpa: {entry.gpa}</div>
                        <div>Relevant Coursework: {entry.coursework}</div>
                        <div className={styles.cardActions}>
                            <button onClick={() => handleEditEducation(entry)}><img src="/edit.svg" alt="edit" /></button>
                            <button onClick={() => deleteEducationExperience(entry.id)}><img src="/delete.svg" alt="delete" /></button>
                        </div>
                    </div>
                ))}
                </div>
                <hr />
            </div>
            {showEducationForm && (
                <>
                    <div className={styles.modalOverlay}></div>
                    <EducationalForm onClose={closeEducationForm} 
                    setResumeData={setResumeData}
                    editData={editEducation}
                    setEditData={setEditEducation}/>
                </>
            )}
        </div>
    )
}

export default ResumePreview