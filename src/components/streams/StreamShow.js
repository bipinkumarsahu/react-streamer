import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'
import { FlvJs as flv} from 'flv.js'

const StreamShow = (props) => {

  const {id} = props.match.params

  const videoRef = useRef();

  
  console.log(props)
  useEffect(()=>{
    props.fetchStream(id)
  },[])

  

  const renderContent =()=>{
    if(props.stream){ 
      const {title, description} = props.stream
      return(
        <>
        <video ref={videoRef} style={{width:'100%'}} controls />
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