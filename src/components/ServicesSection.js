import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Frontend web developer"
            desc="I create a unique look and professional website appearance"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Backend web developer"
            desc="Create database, scripting, and website architecture so that the frontend of the website can communicate with the database"
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="IoT developer"
            desc="Creating tools that can be monitored and controlled remotely using websites and apps"
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
