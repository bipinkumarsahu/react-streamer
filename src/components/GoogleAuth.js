import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut,signIn } from '../actions';

export class GoogleAuth extends Component {
 
    
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId: '664190366124-u4e43o5dsev8it6268vovedr37lpg08n.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn)=>{
       if(isSignedIn){
           this.props.signIn(this.auth.currentUser.get().getId());

       }

       else{
           this.props.signOut();
       }
    }
 
    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return <div>Confirming Login Status</div>
        }
        else if(this.props.isSignedIn){
            return (<button className='ui red google button' onClick={()=>this.auth.signOut()}>
                <i className='ui google icon'/>
                Logout</button>)
        }
        else{
            return  (
                <button className='ui red google button' onClick={()=>this.auth.signIn()}>
                    <i className='ui google icon'/>
                    Login in with Google

                </button>
            
            )
        }
    }


    render() {
        //console.log(this.props)
    return (
      <div className='ui header' >{this.renderAuthButton()}</div>
    )
  }
}

const mapStateToProps = (state)=>{
   // console.log(state)
    return{
        isSignedIn: state.auth.isSignedIn
    }
    
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);