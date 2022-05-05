import React from "react";
import Modal from "../Modal";
import history from "../../history";
const StreamDelete = () => {
  const actions = (
    <>
      <div className="ui button red">Delete</div>
      <div className="ui button">Cancel</div>
    </>
  );

  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content=" Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={() => {
          history.push("/");
        }}
      />
    </div>
  );
};

export default StreamDelete;
