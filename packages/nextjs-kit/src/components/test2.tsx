// This file can be removed when development
// starts in the components directory.
// This file is to prove submodules are working
import React from 'react';

interface Props {
  title: string;
  greeting: string;
}

const Test2: React.FC<Props> = (props: Props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <h3>{props.greeting}</h3>
    </>
  );
};

export default Test2;
