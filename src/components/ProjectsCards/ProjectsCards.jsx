import { Link } from "react-router-dom"
import { LuCircleArrowOutUpRight } from 'react-icons/lu'
const ProjectsCards = ({projectImg , title , desc , demoUrl ,id}) => {
    return (
        <>
            <div className="card">
                <a href={demoUrl}>
                <img src={projectImg}/>
                </a>
                <h1>{title}</h1>
                <p>{desc} <Link to = {`/project/${id}`}><LuCircleArrowOutUpRight /></Link></p>
            </div>
        </>
    )
}

export default ProjectsCards