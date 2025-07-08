
const FooterContent = ({rightsYear , developer , facebookIcon , linkedinIcon , instaIcon}) => {
    return (
        <div className="footerContent">
            <p>{rightsYear}</p>
            <p>{developer}</p>
            <div className="icons">
                <a href="https://www.facebook.com/mayyar.tello.2025?mibextid=ZbWKwL">{facebookIcon}</a>
                <a href="https://www.instagram.com/mayyar_tello?igsh=MXgxeDM5N3p0ZmFsbg==">{instaIcon}</a>
                <a href="https://www.linkedin.com/in/mayyar-tello-182573344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">{linkedinIcon}</a>
            </div>
        </div>
    )
}

export default FooterContent