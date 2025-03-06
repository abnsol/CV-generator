import { useState,useEffect } from "react"
import styles from "./PersonalInfoForm.module.css"

const exp = {
    company: '',
    role: '',
    from: '',
    to: '',
    responsibilities: '',
}

const Experience = ({setResumeData, onClose, editData, setEditData}) => {
    const [formData,setFormData] = useState(exp);

    useEffect(() => {
        if (editData) {
          setFormData(editData);
        }
      }, [editData]);

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setResumeData((prevData) => {
            // edit data is not null
            if (editData) {
                console.log(editData)
                console.log(formData)
                
                const updatedExperience = prevData.professionalExperience.map((exp) => 
                exp.id === formData.id ? formData : exp
            );
            console.log(updatedExperience)

            console.log({
                ...prevData,
                professionalExperience: updatedExperience
            }) 
            return {
                ...prevData,
                professionalExperience: updatedExperience
            }
          }
          else{
            const newExperience = {...formData,id:Date.now()}
            return {
                ...prevData,
                professionalExperience:[...prevData.professionalExperience,newExperience] 
            }
          }
        });
    
        setEditData(null);
        onClose();
      };
    

    return (
        <div className={styles.formContainer}>
            <h2>Professional Experience</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input value={formData.company} type="text" name="company" id="company" placeholder="Company Name" onChange={handleChange} className={styles.inputField}/>
                <input value={formData.role} type="text" name="role" id="role" placeholder="Role" onChange={handleChange} className={styles.inputField}/>
                <input value={formData.from} type="text" name="from" id="Start Date" placeholder="Start Date" onChange={handleChange} className={styles.inputField}/>
                <input value={formData.to} type="text" name="to" id="to" placeholder="End Date" onChange={handleChange} className={styles.inputField}/>
                <input value={formData.responsibilities} type="text" name="responsibilities" id="responsibilities" placeholder="Responsibilities" onChange={handleChange} className={styles.inputField}/>
                <button onClick={handleSubmit}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </form>
        </div>
    )
}

export default Experience