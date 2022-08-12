import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import React from 'react';
import { Link } from 'react-router-dom';


export default function Sidebar() {
  return (
    <div>
        <ProSidebar>
            <Menu iconShape='square'>
                <SidebarHeader>
                    Beyond the Scalpel
                
                    <MenuItem>
                        Home
                        <Link to='/' />
                    </MenuItem>
                    <MenuItem>
                        Contact
                        <Link to='contact' />
                    </MenuItem>
                </SidebarHeader>

                <SidebarHeader>
                    Surgeons
                    <MenuItem>
                        General
                    </MenuItem>
                    <MenuItem>
                        OBGYN
                    </MenuItem>
                    <MenuItem>
                        Vascular
                    </MenuItem>
                    <MenuItem>
                        Cardiac
                    </MenuItem>
                    <MenuItem>
                        Thoracic
                    </MenuItem>
                    <MenuItem>
                        Orthopedic
                    </MenuItem>
                    <MenuItem>
                        Neuro
                    </MenuItem>
                    <MenuItem>
                        Urology
                    </MenuItem>
                    <MenuItem>
                        Plastic
                    </MenuItem>
                    <MenuItem>
                        Pediatric
                    </MenuItem>
                    <MenuItem>
                        Trauma
                    </MenuItem>
                </SidebarHeader>
            </Menu>
        </ProSidebar>
    </div>
  )
}
