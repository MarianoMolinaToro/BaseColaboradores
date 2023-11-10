
import React from 'react';

const Alert = ({ error, msg, color }) => {
  return (
    <div>
      {error ? (
        <div className={`alert alert-${color}`} role="alert">
          {msg}
        </div>
      ) : null}
    </div>
  );
}

export default Alert;
