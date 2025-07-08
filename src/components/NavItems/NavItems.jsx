import { Link } from 'react-scroll'

const NavItems = ({ href , content }) => {
    return (
        <Link to={href} smooth={true} duration={500}>
            {content}
        </Link>
    )
}

export default NavItems