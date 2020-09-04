// ErrorMessage.tsx

import * as React from "react";

interface IOwnProps {
  error: any;
}

const ErrorMessage: React.FC<IOwnProps> = (props) => {
  if (!props.error) {
    return null;
  }

  return (
    <>
      <div className="error">
        <small className="text-danger">{props.error.toString()}</small>
      </div>
    </>
  );
};

export default ErrorMessage;
