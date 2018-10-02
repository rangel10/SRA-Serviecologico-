import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import {withTracker} from 'meteor/react-meteor-data';

import AccountsUIWrapper from './AccountsUIWrapper.js';

class Navbar extends Component {
  render() {
    if(this.props.user){
      if(this.props.user.profile.rol === 'asesor'){
        return (
          <nav class="navbar navbar-dark bg-dark  fixed-top" >
            <a class="navbar-brand" href="#">
                 <img src="http://www.serviecologico.com/wp-content/uploads/2017/09/Logo.png" width="50" height="25" class="d-inline-block align-top" alt=""/>
                 SRA
             </a>
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <div class="navbar-nav">
                 
                   <a class="nav-item nav-link active" href="#">Dashboard <span class="sr-only">(current)</span></a>
                   <a class="nav-item nav-link" href="#">Agregar empresa</a>
                   <a class="nav-item nav-link" href="#">Precio materiales</a>
                   <a class="nav-item nav-link disabled" href="#">Agregar recolector</a>
                   <AccountsUIWrapper/> 
             </div>
             </div>
           </nav>
         )
      }else if(this.props.user.profile.rol === 'recolector'){
        return(
        <nav class="navbar navbar-dark bg-dark  fixed-top" >
        <a class="navbar-brand" href="#">
             <img src="http://www.serviecologico.com/wp-content/uploads/2017/09/Logo.png" width="50" height="25" class="d-inline-block align-top" alt=""/>
             SRA
         </a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
             <div class="navbar-nav">
               <a class="nav-item nav-link disabled" href="#">Ver recolecciones</a>
               <AccountsUIWrapper/> 
         </div>
         </div>
       </nav>
        )
      }

    }else{
      return(
      <nav class="navbar navbar-dark bg-dark  fixed-top" >
        <a class="navbar-brand" href="#">
             <img src="http://www.serviecologico.com/wp-content/uploads/2017/09/Logo.png" width="50" height="25" class="d-inline-block align-top" alt=""/>
             SRA
             <AccountsUIWrapper/>  
         </a>
         
         
        
       </nav>
      )
    }
  }
}

Navbar.propTypes = {
  user: PropTypes.object
};

export default withTracker(() => {  
  return {
    user: Meteor.user()
  };
})(Navbar);
