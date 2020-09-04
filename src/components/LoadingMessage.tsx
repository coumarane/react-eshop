// LoadingMessage.tsx

import * as React from "react";

interface IOwnProps {
  message?: any;
}

const LoadingMessage: React.FC<IOwnProps> = (props) => {
  return (
    <>
      <div className="loading">
        <small>{props.message ? props.message : "Loading..."}</small>
      </div>
    </>
  );
};

export default LoadingMessage;
