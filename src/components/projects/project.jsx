import "./project.css"
import projectPictur1 from '../../assets/aa.png'
import projectPictur2 from '../../assets/second.png'
import projectPictur5 from '../../assets/third.png'
import projectPictur6 from '../../assets/weather.png'
import projectPictur8 from '../../assets/zonayed.png'
import projectlogo  from  '../../assets/projects.png'
import Card from '../../utils/Card'


const Projects = () => {

    const projectData = [
        {
            projectPicture: projectPictur1,
            projectTitle: "Bussines Protfolio",
            projectDesc: "This protfolio is designed for bussines website.It features a modren and user-friendly design",
            projectLiveUrl: "www.google.com",
            projectCode: "https://github.com/MuhammadZohaib28/figmatoreact"
        },
        {
            projectPicture: projectPictur2,
            projectTitle: "Clone Website",
            projectDesc: "A clone website designed to replicate popular platforms.",
            projectLiveUrl: "www.google.com",
            projectCode: "https://github.com/MuhammadZohaib28/figmatoreact"
        },
        {
            projectPicture: projectPictur5,
            projectTitle: "Meusic Website",
            projectDesc: "A music website where users can explore and listen to their favorite tracks.",
            projectLiveUrl: "www.google.com",
            projectCode: "https://github.com/MuhammadZohaib28/figmatoreact"
        },
        {
            projectPicture: projectPictur6,
            projectTitle: "Weather Website",
            projectDesc: "A weather website to check city weather with a clean,user-friendly interface.",
            projectLiveUrl: "www.google.com",
            projectCode: "https://github.com/MuhammadZohaib28/figmatoreact"
        },
        {
            projectPicture: projectPictur8,
            projectTitle: "Protfolio Website",
            projectDesc: "This protfolio website showcases personal projects and skills in a clean,professional layout.",
            projectLiveUrl: "www.google.com",
            projectCode: "https://github.com/MuhammadZohaib28/figmatoreact"
        }
    ]

    return (
        <div className="project-section">
           <div className="para-section">
           <h1 className="first-heading">Projects  <span className="toggle"><img src={projectlogo} /></span></h1>
            <p>Explore my diverse projects that seamlessly blend creativity, innovation, and technical expertise to deliver exceptional results.</p>
 
           </div>
            <div className='projectCards'>
                {projectData.map((item, index) => {
                    return (
                        <Card
                        key={index}
                            projectPicture={item.projectPicture}
                            projectTitle={item.projectTitle}
                            projectDesc={item.projectDesc}
                            projectLiveUrl={item.projectLiveUrl}
                            projectCode={item.projectCode}
                            yearVisible={false}
                            pictureVisible={true}
                            isButtonVisible={true}
                             
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default Projects