// This file can be removed when development
// starts in the components directory.
import React from 'react';

interface Props {
  title: string;
  greeting: string;
}

/**
 * This is a test component. This is an example typedoc comment
 *
 * @param {Props} props
 * @returns React.JSX.Element
 */
const Test: React.FC<Props> = (props: Props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <h3>{props.greeting}</h3>
    </>
  );
};

export default Test;
