import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Options = styled.div``;
const Logo = styled.img``;
const Name = styled.p``;
export default function Userbox() {
  return (
    <Container>
      <Options>
        <Logo></Logo>
        <Name>My Profile</Name>
      </Options>
      <Options>
        <Logo></Logo>
        <Name>My Settings</Name>
      </Options>
      <Options>
        <Logo></Logo>
        <Name>Logout</Name>
      </Options>
    </Container>
  );
}
