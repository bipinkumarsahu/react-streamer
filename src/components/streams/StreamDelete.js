import React, { useEffect } from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";


const StreamDelete = (props) => {

  console.log(props)


  useEffect(()=>{
    props.fetchStream(props.match.params.id)
  },[])

  const { id } = props.match.params
  const actions = (
    <>
      <Link onClick={()=>props.deleteStream(id)} className="ui button red">Delete</Link>
      <Link to={'/'} className="ui button">Cancel</Link>
    </>
  );

  const renderContent = ()=>{
    if(!props.stream){
      return "Are you sure you want to delete this stream?"
    }
    else{
      return `Are you sure you want to delete ${props.stream.title} ?`
    }
    
  }
  return (
  
      
      <Modal
        title="Delete Stream"
        content={renderContent()}
        actions={actions}
        onDismiss={() => {
          history.push("/");
        }}
      />
    
  );
};

const mapStateToProps = (state,ownProps)=>{
  return{
    stream: state.streams[ownProps.match.params.id]
  }
}

export default  connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
