import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BlogCard from "./Cards/BlogCard.jsx";
import { getAllBlogs } from "../api"; // You can implement an API call to fetch blog data
import { CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  padding: 20px 0;
  height: 95vh;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 12px;
    flex-direction: column;
    overflow-y: scroll;
  }
  background: ${({ theme }) => theme.bg};
  margin: 0 20px;
  border-radius: 12px 12px 0 0;
`;

const Blog = styled.div`
  padding: 12px;
  overflow: hidden;
  height: fit-content;
  @media (min-width: 768px) {
    width: 100%;
    overflow-y: scroll;
    height: 100%;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  @media (max-width: 750px) {
    gap: 14px;
  }
`;

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([
    {
      _id: "1",
      img: "https://via.placeholder.com/250",
      title: "How to Build a React App",
      desc: "A comprehensive guide to building your first React app from scratch.",
      date: "Dec 1, 2024",
      author: "John Doe",
    },
    {
      _id: "2",
      img: "https://via.placeholder.com/250",
      title: "Understanding JavaScript Closures",
      desc: "Dive deep into the concept of closures in JavaScript with examples.",
      date: "Nov 20, 2024",
      author: "Jane Smith",
    },
    {
      _id: "3",
      img: "https://via.placeholder.com/250",
      title: "CSS Flexbox vs Grid",
      desc: "Learn the key differences between Flexbox and Grid for responsive designs.",
      date: "Oct 15, 2024",
      author: "Mark Wilson",
      rating: 3
    },
    
  ]);

  return (
    <Container>
      <Blog>
        <CardWrapper>
          {
            blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))
          }
        </CardWrapper>
      </Blog>
    </Container>
  );
};

export default BlogsPage;
