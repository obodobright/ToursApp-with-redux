import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedTour, removeSelected } from "../redux/Actions/ToursAction";
import { IsLoading } from "../hooks/isLoading";

export const TourDetails = () => {
  const [loading, setLoading] = useState(false);
  const tour = useSelector((state) => state.selectedTour);
  const dispatch = useDispatch();
  const { id } = useParams();

  // const url = "https://course-api.com/react-tours-project";
  const fetchSingleTour = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://course-api.com/react-tours-project`);
      const data = await res.json();
      console.log(data[id]);
      dispatch(selectedTour(data[id]));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  console.log(tour);
  useEffect(() => {
    fetchSingleTour();
    return () => {
      dispatch(removeSelected());
    };
  }, [id]);
  return (
    <Container>
      <Wrapper>
        {loading && <IsLoading />}
        <ImageHolder src={tour?.image} />

        <Content>
          <Name>{tour?.name}</Name>
          <Desc>{tour?.info}</Desc>
          {tour && (
            <Div>
              <Price>${tour?.price}</Price>

              <Ticket>
                <button>+</button>
                <span>Book Ticket</span>
                <button>+</button>
              </Ticket>
            </Div>
          )}
        </Content>
      </Wrapper>
    </Container>
  );
};

const Ticket = styled.div`
  width: 200px;
  height: 40px;
  background: grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  margin: 20px 0;

  button {
    outline: none;
    background: grey;
    height: 40px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0;
    cursor: pointer;
    color: white;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageHolder = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ;
  opacity: ;
  object-fit: cover;
  z-index: 0;
`;

const Content = styled.div`
  position: absolute;
  top: 30%;
  right: 100px;
  width: 500px;
`;
const Desc = styled.div`
  font-size: 19px;
  line-height: 1.2;
  font-weight: 500;
`;
const Price = styled.div`
  width: 100px;
  height: 40px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-radius: 50px 0 0px 50px;
  margin: 20px 0;
`;
const Name = styled.div`
  font-size: 50px;
  position: relative;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
