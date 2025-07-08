import React, { useState } from 'react'
import { projectsData } from '../../data'
import { BsArrowsFullscreen } from "react-icons/bs";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { useParams } from 'react-router-dom';
import "./ContentOfOpenProject.css"
const ContentOfOpenProject = () => {
    const {id} = useParams()
    const [full,setfull] = useState(false)
    return (
        <div className='contentOfOpenProject'>
            {
                projectsData.map((projectData,index)=>{
                    if(id==projectData.id){
                        return(
                            <div key={index}>
                                <div className="container">
                                    <div className="image">
                                        <img src={projectData.projectImg} className={`image ${full? "full":""}`}  onClick={()=>setfull(false)}/>
                                        <div className='controller'>
                                            <ul>
                                                <a href={projectData.demoUrl}>
                                                    <li><LuCircleArrowOutUpRight className="cursor-pointer"/></li>
                                                </a>
                                                <li><BsArrowsFullscreen className="cursor-pointer" onClick={()=>setfull(true)}/></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <div className="titleAndLink">
                                            <h2>{projectData.title}</h2>
                                            <a href={projectData.demoUrl}><LuCircleArrowOutUpRight/></a>
                                        </div>
                                        <p>{projectData.desc}</p>
                                        <ul>
                                            <li><span>Basic Languages :</span> {projectData.lang}</li>
                                            <li><span>Framework :</span> {projectData.frameWork}</li>
                                            <li><span>Libraries :</span> {projectData.library}</li>
                                        </ul>
                                        <a href='https://github.com/Mayyar-Tello?tab=repositories'>
                                            <button>
                                                Github Repo
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default ContentOfOpenProject