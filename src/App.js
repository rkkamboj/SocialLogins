import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';	


class App extends Component {
  render() {
	  
	  const responseFacebook = (response) => {
      console.log(response);
    }
	
	const responseGoogle = (response) => {
      console.log(response);
    }
	
return (
      <div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

      <FacebookLogin				
        appId="124167923125048" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <br />
	   <GoogleLogin
        clientId="135899586465-ogak40r1goijijsbii2upjoim8gkf05d.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
       
			
      </div>
    );
  }
}

export default App;
