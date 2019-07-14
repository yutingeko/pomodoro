import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavList from "./NavList";

const Layout = styled.div`
  display: flex;
  width: ${({ width }) => width || "100%"};
  height: 100vh;
  color: #fff;
  background: #003164;
  padding: 30px;
`;

const Title = styled.span`
  position: absolute;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  bottom: 100px;
  right: 0;
  transform: rotate(90deg);
`;

const Nav = styled.div`
  margin-right: 15vw;
`;

const Close = styled.i`
  color: #fff;
  position: absolute;
  right: 3rem;
  top: 2rem;
  font-size: 3rem;
  padding: 10px;
`;

const Children = styled.div`
  display: flex;
  flex-direction: column;
`;

const BasicLayout = React.memo(({ width, children, withNav }) => {
  return (
    <Layout width={width}>
      {withNav && (
        <>
          <Link to="/">
            <Close className="material-icons">close</Close>
          </Link>
          <Nav>
            <NavList withText={true} />
          </Nav>
        </>
      )}
      <Children>{children}</Children>
      <Title>POMODORO</Title>
    </Layout>
  );
});

export default BasicLayout;
