import React, { useRef, useEffect } from 'react';

const MyComponent = () => {
  const myRef = useRef(null);

  useEffect(() => {
    // ... your logic using myRef.current ...
    return () => {
      myRef.current = null; // Clean up the ref
    };
  }, []);

  return (
    <div>
      {/* ... your JSX using myRef ... */}
    </div>
  );
};

export default MyComponent;