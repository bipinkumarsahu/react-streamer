import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const StreamList = (props) => {
  useEffect(() => {
    props.fetchStreams();
  }, []);

  const renderAdmin = (stream) => {
    if (stream.userId) {
      if (stream.userId === props.currentUserId) {
        return (
          <div className="ui right floated content">
            <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
            <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
          </div>
        );
      }
    }
  };

  const renderList = () => {
    return props.streams.map((stream) => {
      return (
        <div className=" item" key={stream.id}>
          <div className=" ui centered" >{renderAdmin(stream)}</div>
          <i className="huge middle aligned icon camera" />
          <div className="middle aligned content">
            <div className="ui header">{stream.title}</div>
            <div className="ui description">{stream.description}</div> 
          
          </div> 
        </div>
      );
    });
  };


  const renderCreate = ()=>{
    if(props.isSignedIn){
      return(<div style={{textAlign: "right"}}>
        <Link className="ui primary huge button" to="/streams/new">Create Stream</Link>
      </div>
      )
    }
  }

  return (
    <div>
      <h3>Streams</h3>
      <div className="ui relaxed selection divided list">{renderList()}
     </div> {renderCreate()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
