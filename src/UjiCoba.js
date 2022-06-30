import React, { useEffect, useState } from 'react';

const UjiCoba = ({ data }) => {
  const [firstName, setFirstName] = useState('new comment');

  useEffect(() => {
    setFirstName('');
  }, [firstName]);

  console.log(firstName);
  return (
    <div>
      <p onClick={() => setFirstName('you bad !!')}>{firstName}</p>
    </div>
  );
};

export default UjiCoba;
