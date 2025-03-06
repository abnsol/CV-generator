import styles from "./PersonalInfoForm.module.css"

function PersonalInfoForm({personalInfo,setResumeData,onClose}) {

    // handle change when form is submitted
    const handleChange = (e) => {
        const {name,value} = e.target;

        setResumeData((prevData) => ({
            ...prevData,
            personalInfo: {
                ...prevData.personalInfo,
                [name]: value, 
            }
        }))
    }

    return (
        <div className={styles.formContainer}>
            <h2>Personal Information</h2>
            <form className={styles.form} onSubmit={onClose}>
                <div className={styles.inputLabel}>
                    {/* <label htmlFor="name">Full Name</label> */}
                    <input type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    value={personalInfo.name}
                    onChange={handleChange} 
                    className={styles.inputField}
                    />
                </div>
                
                <div className={styles.inputLabel}>
                    {/* <label htmlFor="email">Email</label> */}
                    <input type="email" 
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={personalInfo.email}
                    onChange={handleChange}
                    className={styles.inputField}
                    />
                </div>

                <div className={styles.inputLabel}>
                    {/* <label htmlFor="phone">Phone</label> */}
                    <input type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    value={personalInfo.phone}
                    onChange={handleChange} 
                    className={styles.inputField}
                    />
                </div>
                
                <div className={styles.inputLabel}>
                    {/* <label htmlFor="github">GitHub</label> */}
                    <input 
                    id="github"
                    type="url"
                    name="github"
                    placeholder="account@github.com"
                    value={personalInfo.github}
                    onChange={handleChange}
                    className={styles.inputField}
                    />
                </div>
                
                <div className={styles.inputLabel}>
                    {/* <label htmlFor="website">Personal Website</label> */}
                    <input type="url" 
                    id="website"
                    name="website"
                    placeholder="portfolio.com"
                    value={personalInfo.website} 
                    onChange={handleChange}
                    className={styles.inputField}
                    />
                </div>

                <button>Submit</button>
                
            </form>
        </div>
    )
}

export default PersonalInfoForm;