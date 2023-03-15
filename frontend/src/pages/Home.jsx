import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
import { Loader } from "../components/Loader";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios.get(`videos/${type}`);
      console.log(res.data);
      setVideos(res.data);
    };
    fetchVideo();
  }, [type]);
  console.log(videos);
  return (
    <Container>
      {videos.length > 0 ? (
        videos.map((video) => <Card key={video._id} video={video} />)
      ) : (
        <Loader></Loader>
      )}
    </Container>
  );
};

export default Home;
