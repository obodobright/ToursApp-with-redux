import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Tour = ({ tour }) => {
  console.log(tour);
  return (
    <Container>
      <Wrapper>
        {tour?.map((tours, index) => {
          const { id, image, name } = tours;
          return (
            <Card key={id} to={`tourDetails/${index}`}>
              <Img src={image} />
              <Title>{name}</Title>
            </Card>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Tour;

const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  padding: 20px;
`;
const Img = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  background: ;
`;
const Card = styled(Link)`
  width: 400px;
  height: 400px;
  border-radius: 5px;
  background: transparent;
  margin: 20px;
  //   box-shadow: 1px 0px 2px 1px rgba(0, 0, 0, 0.6);
  border: 1px solid lightgray;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Container = styled.div``;
