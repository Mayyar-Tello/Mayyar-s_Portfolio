import ContentOfOpenProject from '../components/ContentOfOpenProject/ContentOfOpenProject'
import OtherProject from '../components/OtherProject/OtherProject'
import './OpenProject.css'
const OpenProject = () => {
    if(document.documentElement.scrollTop>0){
        window.scrollTo({
            top: 0,
            behavior: "instant",
        })
    }
    return (
        <div>
            <ContentOfOpenProject/>
            <OtherProject/>
        </div>
    )
}

export default OpenProject