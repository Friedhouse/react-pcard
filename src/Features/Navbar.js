import  
    { Navbar, Nav, NavbarBrand, NavbarToggler, 
    Collapse, NavItem, NavLink, DropdownToggle, 
    DropdownMenu, DropdownItem, UncontrolledDropdown,
     } 
    from 'reactstrap';
import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false); //Collapse isOpen state
    

    return (
        <>
        <Navbar
        fixed='top'
        expand='md'
        light
        >
            <NavbarBrand href='#'>    
            </NavbarBrand>
            <NavbarToggler onClick = {() => {setIsOpen(!isOpen)}} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mx-auto" navbar>
                    <NavItem>
                        <NavLink href='/'>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='features'>
                            Features
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='about'>
                            About
                        </NavLink>
                    </NavItem>
                    <UncontrolledDropdown inNavbar nav>
                        <DropdownToggle caret nav>
                            Cards
                        </DropdownToggle>
                        <DropdownMenu right dark>
                            <DropdownItem href='#'>
                                Private
                            </DropdownItem>
                            <DropdownItem href="#">
                                Public
                            </DropdownItem>
                            <DropdownItem href="example">
                                Examples
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink href='contact'>
                            Contact
                        </NavLink>
                    </NavItem>       
                </Nav>
            </Collapse>
        </Navbar>
        {/* <Modal 
            size=''
            modalOpen={modalOpen}
            hide={toggle}
        >
            <Form>
            <ModalHeader>
                <h5>Sign In</h5>
            </ModalHeader>
            <ModalBody>
                <div className='mb-3'>
                    <label for="Username">Username<span class="text-danger">*</span></label>
                    <input type="text" name="username" class="form-control" id="Username" placeholder="Enter Username" />
                </div>
                <div class="mb-3">
                      <label for="Password">Password<span class="text-danger">*</span></label>
                      <input type="password" name="password" class="form-control" id="Password" placeholder="Enter Password" />
                </div>
                <div class="mb-3">
                      <input class="form-check-input" type="checkbox" value="" id="remember" required />
                      <label class="form-check-label" for="remember">Remember Me</label>
                      <button href="#" class="float-end">Forgot Password</button>
                  </div>
            </ModalBody>
            <ModalFooter className='pt-4'>
                <Button className='mx-auto'>Login</Button>
            </ModalFooter>
            </Form>
        </Modal> */}
        </>
    );
}

export default Navigation;