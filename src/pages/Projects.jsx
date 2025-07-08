import ProjectsCards from '../components/ProjectsCards/ProjectsCards'
import ProjectsTitlesAndBtn from '../components/ProjectsTitlesAndBtn/ProjectsTitlesAndBtn'
import './Projects.css'

const Projects = ({projectsTitlesAndBtn , projectsCards}) => {
    return (
        <div id='projects'>
            {projectsTitlesAndBtn.map((item , index)=>(
                <ProjectsTitlesAndBtn
                    key={index}
                    mainTitle={item.mainTitle}
                    secondTitle={item.secondTitle}
                    secondTitleSpecial={item.secondTitleSpecial}
                    btn={item.btn}
                    btnIcon={item.btnIcon}
                />
            ))}
            <div className="projectCards">
                {projectsCards.map((item , index)=>(
                    <ProjectsCards 
                        key={index}
                        projectImg={item.projectImg}
                        title={item.title}
                        desc={item.desc}
                        icon={item.icon}
                        demoUrl={item.demoUrl}
                        id ={item.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects