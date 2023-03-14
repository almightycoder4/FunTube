import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const NewComment = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #9999;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

function Comments() {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg"></Avatar>
        <Input placeholder="Add a comment.."></Input>
      </NewComment>
    </Container>
  );
}

export default Comments;
