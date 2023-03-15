import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #9999;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 14px;
`;
function Comment() {
  return (
    <Container>
      <Avatar src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg"></Avatar>
      <Details>
        <Name>
          Pawan Singh <Date> 1 Day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum iusto,
          cum eveniet dolores similique nemo quam beatae illum. Tempore error
          sunt assumenda adipisci doloribus maxime inventore nobis voluptatum
          maiores earum!
        </Text>
      </Details>
    </Container>
  );
}

export default Comment;
