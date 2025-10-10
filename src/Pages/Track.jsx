// TracksPage.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ====== Styled Components ======
const Container = styled(motion.div)`
  max-width: 1300px;
  margin: 0 auto;
  padding: 30px 20px;
  background: #f9f9f9;
  min-height: 100vh;
`;

const Header = styled(motion.header)`
  background: linear-gradient(135deg, #2e7d32, #43a047);
  color: white;
  padding: 50px 20px;
  border-radius: 20px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #f9f9f9cc;
`;

const Breadcrumb = styled(motion.nav)`
  background: white;
  padding: 15px 25px;
  border-radius: 15px;
  margin-bottom: 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;

  a {
    color: #2e7d32;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    color: #f57f17;
  }

  span {
    color: #555;
    font-weight: 500;
  }
`;

const TracksSection = styled.section`
  background: white;
  padding: 50px 40px;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const SectionTitle = styled.h2`
  color: #2e7d32;
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 50px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
`;

const TracksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 35px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const TrackCard = styled(motion(Link))`
  background: linear-gradient(
    145deg,
    rgba(255, 235, 59, 0.15),
    rgba(76, 175, 80, 0.1)
  );
  padding: 45px 35px;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.15);
    border-color: #f57f17;
    background: linear-gradient(
      145deg,
      rgba(255, 235, 59, 0.25),
      rgba(76, 175, 80, 0.15)
    );
  }

  @media (max-width: 768px) {
    padding: 30px 25px;
  }
`;

const TrackIcon = styled.div`
  font-size: 4.5rem;
  margin-bottom: 25px;
`;

const TrackTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #2e7d32;
  margin-bottom: 15px;
`;

const TrackDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 25px;
  line-height: 1.7;
`;

const TrackMajors = styled.div`
  font-size: 1rem;
  color: #f57f17;
  font-weight: 600;
  margin-bottom: 10px;
`;

const TrackYears = styled.div`
  font-size: 0.95rem;
  color: #2e7d32;
  font-weight: 600;
`;

const Footer = styled.footer`
  background: #2e7d32;
  color: white;
  text-align: center;
  padding: 25px;
  border-radius: 20px;
  margin-top: 50px;
  font-size: 0.95rem;
`;

// ====== Animation Variants ======
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const cardAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

// ====== React Component ======
const TracksPage = () => {
  return (
    <Container initial="hidden" animate="visible" variants={fadeIn}>
      <Header variants={fadeUp}>
        <Title>Select Your Academic Track</Title>
        <Subtitle>
          Explore different paths to achieve your academic and career goals
        </Subtitle>
      </Header>

      <Breadcrumb variants={fadeUp}>
        <Link to="/">Home</Link>
        <span>›</span>
        <span>Select Track</span>
      </Breadcrumb>

      <TracksSection>
        <SectionTitle>Choose Your Academic Path</SectionTitle>
        <SectionText>
          Select your academic track to access relevant exam materials and
          resources. Each track offers specialized majors with detailed exam
          collections and curated study materials.
        </SectionText>

        <TracksGrid>
          {[
            {
              icon: "💻",
              title: "Scientific Track (CSSE)",
              desc: "Focused on Computer Science, Software Engineering, and Data Science programs with in-depth technical knowledge and hands-on applications.",
              majors:
                "Majors: Software Engineering • Computer Science • Data Science",
              years: "Years Available: 1 - 4",
              link: "/cssemajors",
            },
            {
              icon: "📚",
              title: "Literary Track (SS)",
              desc: "Dive into Social Sciences like Accounting, Economics, and International Relations with focus on research and communication skills.",
              majors:
                "Majors: Accounting • Economics • International Relations",
              years: "Years Available: 1 - 3",
              link: "/ssmajors",
            },
          ].map((track, i) => (
            <TrackCard
              to={track.link}
              key={track.title}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardAnimation}
            >
              <TrackIcon>{track.icon}</TrackIcon>
              <TrackTitle>{track.title}</TrackTitle>
              <TrackDescription>{track.desc}</TrackDescription>
              <TrackMajors>{track.majors}</TrackMajors>
              <TrackYears>{track.years}</TrackYears>
            </TrackCard>
          ))}
        </TracksGrid>
      </TracksSection>

      <Footer>
        &copy; 2025 Sudanese Students Association in Rwanda. All rights
        reserved.
      </Footer>
    </Container>
  );
};

export default TracksPage;
