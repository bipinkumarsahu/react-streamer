import { render } from '@testing-library/react'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { formValues } from 'redux-form'
import { fetchStream,editStream } from '../../actions'
import StreamForm from './StreamForm'
import _ from 'lodash';

const StreamEdit = (props) => {

  useEffect(()=>{
    props.fetchStream(props.match.params.id)
  },[])


  const onSubmit = (formValues)=>{
   // console.log(formValues);
   props.editStream(props.match.params.id, formValues)
  }

  const renderStream =()=>{
    if(!props.stream){
      return(<div className='ui active inline loader'></div>)
    }
    else{
      return (
        <div><h3>Edit your Stream</h3><StreamForm initialValues={_.pick(props.stream,'title','description')} onSubmit={onSubmit}/></div>
      )
    }
  }

  console.log(props)
  return (
   <div>{renderStream()}</div>
  )
}

const mapStateToProps = (state,ownProps) =>{
  return{
    stream:state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps,{ fetchStream, editStream })(StreamEdit)