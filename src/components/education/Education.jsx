
import edu from '../../assets/graduation.png'
import Card from '../../utils/Card'
import './education.css'

const Education = () => {

    const educationData = [
        {
            educationLevel: "Intermediate",
            instituteName: "Degree colledge",
            year: "2021 - 2023"
        },
        {
            educationLevel: "Matriculation",
            instituteName: "G.G.S.S",
            year: "2019- - 2020"
        },
    ]

    return (
        <div className='education' id='EducationPart'> 
            <h1 className='educationhead'> <span><img src={edu}/> </span>Education </h1>

              <div className='project-main-box'>
              <div className='educationCardss'>
                {educationData.map((i, index) => {
                    return (
                        <Card
                        key={index}
                        projectDesc={i.instituteName}
                            yearVisible={true}
                            projectTitle={i.educationLevel}
                            year={i.year}
                            isButtonVisible={false}
                        />
                    )
                })}
            </div>
              </div>
        </div>
    )
}

export default Education
