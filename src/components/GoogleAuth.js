import React from 'react';

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId:'239994460842-qamjt8vh7uilnqjvhstt03lutaornprc.apps.googleusercontent.com',
                scope:'email'
            });
        });
    }
    render(){
        return (
            <div>Google Auth</div>
        )
    }
}

export default GoogleAuth;