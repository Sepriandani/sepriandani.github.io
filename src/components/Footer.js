import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Seprian Dani</h1>
          <PText>
            I work as a freelance Full Stack Web Developer and IoT Developer. I
            like code and making things that make other people amazed with my
            work.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/portfolio',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/portfolio/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/portfolio/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/portfolio/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+6285348439684',
                path: 'tel:+6285348439684',
              },
              {
                title: 'sepriandanni@gmail.com',
                path: 'mailto:sepriandanni@gmail.com',
              },
              {
                title: 'Lampung, Indonesia',
                path: 'https://www.google.com/maps/@-5.3708749,105.3012279,17z',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Follow Me"
            links={[
              {
                title: 'LinkIn',
                path: 'http://facebook.com',
              },
              {
                title: 'Dribble',
                path: 'http://twitter.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2022 - Seprian Dani</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
