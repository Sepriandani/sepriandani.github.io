import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 50vh;
    border-radius: 12px;
    overflow: hidden;
    border: 3px solid var(--gray-2);
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  .stack {
    width: 100%;
    margin: 10px 0px 10px 0px;
  }
  .stackTitle {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 10px;
  }
  .stackList {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 1.6rem;

    li {
      background-color: #333;
      padding: 6px;
      border-radius: 5px;
    }
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({ title, desc, img, tags }) {
  return (
    <ProjectItemStyles>
      <div className="projectItem__img">
        <Link to="/projects">
          <img src={img} alt="project img" className="images" />
        </Link>
      </div>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
        <div className="stack">
          <h3 className="stackTitle">Stack</h3>
          <ul className="stackList">
            {tags.map((t) => (
              <li>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </ProjectItemStyles>
  );
}
