import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  padding: 20px;
  height: 95vh;
  margin: 0 20px;
  background: ${({ theme }) => theme.bg};
  border-radius: 12px 12px 0 0;
  overflow-y: scroll;
`;

const Image = styled.img`
  width: 50%;
  border-radius: 6px;
  object-fit: cover;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
`;

const MetaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Author = styled.div`
  font-size: 14px;
`;

const Date = styled.div`
  font-size: 14px;
`;

const BlogDetails = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  // This data could come from an API or be dynamic
  const blog = {
    img: "https://via.placeholder.com/500",
    title: "Amazing Beach Destination",
    desc: "Discover the hidden gems of the beach that offer relaxation and adventure for everyone.",
    author: "Jane Doe",
    date: "December 10, 2024",
  };

  const handleReadMore = () => {
    navigate(`/blogs/${blogId}`); // Redirect to the full blog post page
  };

  return (
    <Container>
      <Image src={blog?.img} />
      <Right>
        <Title>{blog?.title}</Title>
        <Desc>{blog?.desc}</Desc>
        <MetaContainer>
          <Author>Author: {blog.author}</Author>
          <Date>{blog.date}</Date>
        </MetaContainer>
        
      </Right>
    </Container>
  );
};

export default BlogDetails;