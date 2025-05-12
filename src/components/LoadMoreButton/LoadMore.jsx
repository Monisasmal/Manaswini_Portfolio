// LoadMore.js

import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  border: none;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary + "80"};
  }
`;

const LoadMoreProjects = ({ onClick }) => {
  return <Button onClick={onClick}>Load More</Button>;
};

export default LoadMoreProjects;
