import React, { useState } from 'react'
import { projectsData } from '../../data'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { useParams } from 'react-router-dom'
import "../../../node_modules/swiper/swiper-bundle.min.css"
import ProjectsCards from '../ProjectsCards/ProjectsCards'
import { Swiper, SwiperSlide } from 'swiper/react'
import "./OtherProject.css"
import { Navigation } from 'swiper/modules'
const OtherProject = () => {

    const [swiper, setSwiper] = useState(null)
    const slidePrev = () => {
        if (swiper) swiper.slidePrev()
    }
    
    const slideNext = () => {
        if (swiper) swiper.slideNext();
    }
    
    const {id} = useParams()
    return (
        <div className="otherProject">
            <div className="container">
                <div className="title">
                    <div className="mainTitle">
                        <p>portfolio</p>
                        <h2>The Best <span>Projects</span></h2>
                    </div>
                    <ul>
                        <li><MdOutlineKeyboardArrowLeft onClick={slidePrev} /></li>
                        <li><MdOutlineKeyboardArrowRight onClick={slideNext} /></li>
                    </ul>
                </div>
                <div className="projects">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        modules={[Navigation]}
                        style={{
                            padding:"25px 0"
                        }}
                        navigation={{
                            prevEl: ".arrow-left",
                            nextEl: ".arrow-right"
                        }}
                        breakpoints={{
                            300:{
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            480:{
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            640:{
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768:{
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            1024:{
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1400:{
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1500:{
                                slidesPerView: 3,
                                spaceBetween: 20,
                            }
                        }}
                        onSwiper={setSwiper}
                        >
                        {
                            projectsData.map((element,index)=>{
                                if(element.id!=id){
                                    return(
                                        <SwiperSlide>
                                            <ProjectsCards projectImg={element.projectImg} title={element.title} desc={element.lang} id= {element.id} demoUrl={element.demoUrl} key={index}/>
                                        </SwiperSlide>
                                    )
                                }
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default OtherProject