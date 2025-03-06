import { useState } from "react"
import ResumePreview from "./components/ResumeTemplate";
import styles from "./components/PersonalInfoForm.module.css"

function App() {
  const [resumeData,setResumeData] = useState({
    personalInfo : {
      name: "Abenezer Solomon",
      email: "abnsoltibebe@gmail.com",
      phone: "+251-97-425-8080",
      github: "https://github.com/abnsol",
      website: "https://google.com"
    },
    education: [{
      school: "Addis Ababa University",
      degree: "Bsc. Software Engineering",
      startYear: "2022",
      endYear: "2027",
      gpa: "3.7",
      coursework: "Object oriented programming, Operating systems, computer organization, DBMS",
  }],
    professionalExperience: [{company: 'TOP',
      role: 'Software Developer',
      from: '2023',
      to: 'present',
      responsibilities: 'Web Development'}]
  });

  return (
    <div className={styles.app}>
      {/* <h1>Resume Builder</h1> */}
      <ResumePreview resumeData={resumeData} setResumeData={setResumeData}/>

    </div>
  );
}

export default App
