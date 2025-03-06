import { useEffect, useState } from "react"
import styles from "./PersonalInfoForm.module.css"

const edu = {
    school: "",
    degree: "",
    startYear: "",
    endYear: "",
    gpa: "",
    coursework: "",
}

const EducationalForm = ({setResumeData, onClose, editData, setEditData}) => {
    // lets control the form data by our self
    const [formData, setFormData] = useState(edu);   

    useEffect(() => {
        if (editData) {
            setFormData(editData)
        }
    },[editData])

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //append new education to our resumeData
        setResumeData((prevData) => {
            if (editData){
                const updateEducation = prevData.education.map((entry) => 
                entry.id === formData.id ? formData: entry)

                return {
                    ...prevData,
                    education : updateEducation
                }
            }else{
                const newEducation = {...formData,id: Date.now()}
                return {
                    ...prevData,
                    education: [...prevData.education,newEducation]
                }
            }
            
        })

        //reset formData
        setFormData(edu);
        setEditData(null);
        onClose();
    }

    return (
        <div className={styles.formContainer}>
            <h2>Educational Experience</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" name="school" placeholder="School Name" value={formData.school} onChange={handleChange} className={styles.inputField}/>
                <input type="text" name="degree" placeholder="Degree" value={formData.degree} onChange={handleChange} className={styles.inputField}/>
                <input type="text" name="startYear" placeholder="Start Year" value={formData.startYear} onChange={handleChange} className={styles.inputField}/>
                <input type="text" name="endYear" placeholder="End Year" value={formData.endYear} onChange={handleChange} className={styles.inputField}/>
                <input type="text" name="gpa" placeholder="GPA" value={formData.gpa} onChange={handleChange} className={styles.inputField}/>
                <input type="text" name="coursework" placeholder="Coursework" value={formData.coursework} onChange={handleChange} className={styles.inputField}/>
                <button type="submit">Add Education</button>
            </form>
        </div>
    )

}

export default EducationalForm;