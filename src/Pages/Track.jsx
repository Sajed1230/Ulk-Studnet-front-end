// TracksPage.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// ====== Styled Components ======
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 20px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 30px;
  text-align: center;
`;

const Title = styled.h1`
  color: #2e7d32;
  font-size: 2.5rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Breadcrumb = styled.nav`
  background: rgba(255, 255, 255, 0.9);
  padding: 15px 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 5px;

  a {
    color: #2e7d32;
    font-weight: 600;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  span {
    color: #f57f17;
  }
`;

const TracksSection = styled.section`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const SectionTitle = styled.h2`
  color: #2e7d32;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const TracksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const TrackCard = styled(Link)`
  background: linear-gradient(
    135deg,
    rgba(255, 235, 59, 0.1),
    rgba(76, 175, 80, 0.1)
  );
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: block;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    border-color: #f57f17;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const TrackIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 20px;
`;

const TrackTitle = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #2e7d32;
  margin-bottom: 15px;
`;

const TrackDescription = styled.div`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const TrackMajors = styled.div`
  font-size: 0.9rem;
  color: #f57f17;
  font-weight: 600;
`;

const TrackYears = styled.div`
  font-size: 0.9rem;
  color: #2e7d32;
  font-weight: 600;
  margin-top: 10px;
`;

const Footer = styled.footer`
  background: rgba(46, 125, 50, 0.9);
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 15px;
  margin-top: 30px;
`;

// ====== React Component ======
const TracksPage = () => {
  return (
    <Container>
      <Header>
        <Title>Select Your Academic Track</Title>
      </Header>

      <Breadcrumb>
        <Link to="/">Home</Link>
        <span>{">"}</span>
        <span>Select Track</span>
      </Breadcrumb>

      <TracksSection>
        <SectionTitle>Choose Your Academic Path</SectionTitle>
        <SectionText>
          Select your academic track to access relevant exam materials and
          resources. Each track contains specialized majors with comprehensive
          exam collections.
        </SectionText>

        <TracksGrid>
          <TrackCard to="/cssemajors">
            <TrackIcon>💻</TrackIcon>
            <TrackTitle>Scientific Track (CSSE)</TrackTitle>
            <TrackDescription>
              Computer Science, Software Engineering, and Data Science programs
              with comprehensive technical curriculum and practical
              applications.
            </TrackDescription>
            <TrackMajors>
              Majors: Software Engineering • Computer Science • Data Science
            </TrackMajors>
            <TrackYears>Years Available: 1 - 4</TrackYears>
          </TrackCard>

          <TrackCard to="/ssmajors">
            <TrackIcon>📚</TrackIcon>
            <TrackTitle>Literary Track (SS)</TrackTitle>
            <TrackDescription>
              Social Sciences including Accounting, Economics, and International
              Relations with focus on analytical and communication skills.
            </TrackDescription>
            <TrackMajors>
              Majors: Accounting • Economics • International Relations
            </TrackMajors>
            <TrackYears>Years Available: 1 - 3</TrackYears>
          </TrackCard>
        </TracksGrid>
      </TracksSection>

      <Footer>
        &copy; 2024 Sudanese Students Association in Rwanda. All rights
        reserved.
      </Footer>
    </Container>
  );
};

export default TracksPage;
