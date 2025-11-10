import { Nav, Navbar, Image } from 'react-bootstrap';

function SideNavBar() {
    return (
        <Navbar expand="lg" variant="dark" bg="primary" fixed="top" id="sideNav" >
            <Navbar.Brand className="js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">나문수</span>
                <span className="d-none d-lg-block">
                    <Image className='mg-fluid img-profile rounded-circle mx-auto mb-2' src={require('../assets/images/common/MyImage.jpg')} alt='...' />
                </span>
            </Navbar.Brand>
            <Navbar.Toggle type='button' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation' />
            <Navbar.Collapse id='navbarResponsive'>
                <Nav className="flex-column">
                    <Nav.Link className="js-scroll-trigger" href="#introduce">ABOUT</Nav.Link>
                    <Nav.Link className="js-scroll-trigger" href="#experience">CARRER</Nav.Link>
                    <Nav.Link className="js-scroll-trigger" href="#skills">SKILLS</Nav.Link>
                    <Nav.Link className="js-scroll-trigger" href="#project">PROJECTS</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default SideNavBar;