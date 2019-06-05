import React from 'react';

class GoogleAuth extends React.Component{
    state = { isSignedIn : null};
    componentDidMount(){
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId:'239994460842-qamjt8vh7uilnqjvhstt03lutaornprc.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get()});
    }
    onSignIn = () => {
        this.auth.signIn();
    }
    onSignOut = () => {
        this.auth.signOut();
    }
    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return <div>Loading...</div>;
        } else if (this.state.isSignedIn){
            return(
                <button onClick= {this.onSignOut} className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
                )
         } else{
                return (
                    <button onClick={this.onSignIn}  className="ui red google button">
                        <i className="google icon">
                            Sign In With Google
                        </i>
                    </button>
                )
            }
        }
    render(){
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }

}
export default GoogleAuth;