import FooterContent from '../components/FooterContent/FooterContent'
import './Footer.css'

const Footer = ({footerContent}) => {
    return (
        <div id='footer'> 
            {footerContent.map((item , index)=>(
                <FooterContent
                    key={index}
                    rightsYear={item.rightsYear}
                    developer={item.developer}
                    facebookIcon={item.facebookIcon}
                    linkedinIcon={item.linkedinIcon}
                    instaIcon={item.instaIcon}
                />
            ))}
        </div>
    )
}

export default Footer