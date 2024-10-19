import React from 'react';

interface SimpleComponentProps {
  message: string;
}

const SimpleComponent: React.FC<SimpleComponentProps> = ({ message }) => {
  return (
    <div>
      <h1>{message}</h1>
      <p>This is a simple component built using TypeScript in React.</p>
    </div>
  );
};

export default SimpleComponent;
