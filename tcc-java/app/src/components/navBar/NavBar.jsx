import React from 'react';
import { Redirect, Link, Route } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Badge,
  DropdownItem } from 'reactstrap';
import Button from '../button/Button';
import UserService from '../../services/UserService';
import './navBar.css'

import swal from 'sweetalert2'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      deveRedirecionarParaLogin: false,
      isOpen: false
    }

    this.userService = new UserService
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  deslogar = (event) => {
    this.userService.removeToken()
    swal({
      position: 'center',
      type: 'success',
      title: 'Adeus',
      showConfirmButton: false,
      timer: 1500
    })  
   this.setState({
       deveRedirecionarParaLogin: true
   })
}
  render() {
    return (this.state.deveRedirecionarParaLogin ? <Redirect to="/login" />   :
      <div>
        <Navbar className="navBar" light expand="md">
          <NavbarBrand className="navBar_titulo" href="/dashboard"><span>Supernatural is life</span></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="navBar_link" href="/BuscarAmigos/"><span>Buscar amigos</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navBar_link" href="#"><span>Notificacoes</span><Badge color="secondary">{this.props.children}</Badge></NavLink>                    
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle  className="navBar_link" nav caret>
                <span>Opcoes</span>
                </DropdownToggle>
                <DropdownMenu right>
                  
                  <DropdownItem divider />
                  <DropdownItem>
                    <Button nome={"Sair"} onClick={this.deslogar} className={"naavBar_deslogar"}/>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}