
const ContactTitles = ({mainTitle , secondTitle , secondTitleSpecial}) => {
    return (
        <>
            <h2>{mainTitle}</h2>
            <h1>{secondTitle} <span>{secondTitleSpecial}</span></h1>
        </>
    )
}

export default ContactTitles