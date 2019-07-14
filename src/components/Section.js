import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  margin: 40px 0;

  h1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    background: rgba(255,255,255,.2);
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

const Section = React.memo(({
  title,
  toggle,
  children,
}) => {
  const [toggleChildren, setToggleChildren] = useState(true);
  const handleToggle = () => {
    setToggleChildren(!toggleChildren)
  }
  
  return (
    <Container>
      <h1>
        <span>{title}</span>
        { toggle && <i onClick={handleToggle} className="material-icons">{toggleChildren ?  'arrow_drop_up' : 'arrow_drop_down'}</i> }
      </h1>
      <div>
        { toggleChildren && children }
      </div>
    </Container>
  )
});

export default Section;