import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'


const StreamShow = (props) => {

  const {id} = props.match.params

  
  console.log(props)
  useEffect(()=>{
    props.fetchStream(id)
  },[])

  

  const renderContent =()=>{
    if(props.stream){ 
      const {title, description} = props.stream
      return(
        <>
        <div className='ui big header'>{title}</div>
        <div className='ui content'>{description}</div>
        </>        
      )
    }
    else{
      <div className="ui active inline loader"></div>
    }
  }
  

  return (
    <div className='ui placeholder segment'>
     {renderContent()}
    </div>
  )
}


const mapStateToProps = (state,ownProps) =>{
  return{
    stream: state.streams[ownProps.match.params.id]
  }
}



export default connect(mapStateToProps, {fetchStream}) (StreamShow)