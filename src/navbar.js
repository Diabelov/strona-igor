import Form from 'react-bootstrap/form'
import Button from 'react-bootstrap/button'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/navbar.css';
import React, { useState } from 'react';


function Navigation() {
    const [searchValue, setSearchValue] = useState('');

    function handleSearch() {
        if (searchValue.trim() !== '') {
            window.location.href = `/anime/${searchValue}`;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleSearch();
    }



    return (

<nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong">

  <div class="container-fluid">

    <a class="navbar-brand" href="/">Ryo Bot</a>


    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>


    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Invite</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1">Support</a>
        </li>
      </ul>

    </div>

  </div>

</nav>
    )
}

export default Navigation;