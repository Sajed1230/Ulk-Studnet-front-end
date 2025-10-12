// SudaneseStudents.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ====================== Animations ======================
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// ====================== Styled Components ======================
const Container = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px 10px;
  }
`;

const Header = styled(motion.header)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 25px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px 10px;
  }
`;

const Title = styled.h1`
  color: #2e7d32;
  font-size: 2.2rem;
  margin-bottom: 8px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  color: #f57f17;
  font-size: 1.1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const HeroSection = styled(motion.section)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 20px;
  margin-bottom: 25px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const HeroHeading = styled.h2`
  color: #2e7d32;
  font-size: 1.8rem;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const HeroText = styled.p`
  font-size: 1rem;
  color: #555;
  max-width: 100%;
  margin: 0 auto 20px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.4;
    margin-bottom: 15px;
  }
`;

// ====================== Buttons ======================
const CtaButtons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 14px 25px;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: white;
  text-align: center;
  background: ${({ variant }) =>
    variant === "primary"
      ? "linear-gradient(135deg, #2e7d32, #4caf50)"
      : "linear-gradient(135deg, #f57f17, #ffb300)"};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;

// ====================== President Section ======================
const PresidentSection = styled(motion.section)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 20px;
  margin-bottom: 25px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const PresidentCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 235, 59, 0.1),
    rgba(76, 175, 80, 0.1)
  );
  padding: 25px;
  border-radius: 15px;
  border-left: 4px solid #f57f17;
  max-width: 90%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const PresidentPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #2e7d32;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const PresidentName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #2e7d32;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PresidentMajor = styled.div`
  color: #f57f17;
  font-weight: 600;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const PresidentAdvice = styled.div`
  font-style: italic;
  color: #555;
  line-height: 1.5;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const PresidentBio = styled.p`
  color: #444;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-top: 12px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Footer = styled(motion.footer)`
  background: rgba(46, 125, 50, 0.9);
  color: white;
  text-align: center;
  padding: 15px;
  border-radius: 15px;
  margin-top: 25px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

// ====================== Component ======================
export default function SudaneseStudents() {
  return (
    <Container initial="hidden" animate="visible" variants={fadeUp}>
      <Header variants={fadeUp}>
        <Title>Sudanese Students in Rwanda</Title>
        <Subtitle>Your Gateway to Academic Excellence</Subtitle>
      </Header>

      <main>
        <HeroSection variants={fadeUp}>
          <HeroHeading>Welcome to Your Exam Repository</HeroHeading>
          <HeroText>
            We are dedicated to supporting Sudanese students studying in Rwanda
            by providing easy access to past exams, study materials, and
            academic resources. Our mission is to help you excel in your studies
            and achieve your academic goals through collaborative learning and
            resource sharing.
          </HeroText>
          <CtaButtons>
            <Button to="/trackmajor" variant="primary">
              Browse Exams
            </Button>
            <Button to="#president" variant="secondary">
              Meet Our President
            </Button>
          </CtaButtons>
        </HeroSection>

        <PresidentSection id="president" variants={fadeUp}>
          <h3>Message from Our Association President</h3>
          <PresidentCard>
            <PresidentPhoto src="misterHassen.jpg" alt="President" />
            <PresidentName>Ahmed Hassan Mohamed</PresidentName>
            <PresidentMajor>
              Computer Science & Software Engineering
            </PresidentMajor>
            <PresidentAdvice>
              "Dear fellow students, education is the key to unlocking our
              potential and building a brighter future. Through collaboration,
              dedication, and mutual support, we can overcome any challenge."
            </PresidentAdvice>
            <PresidentBio>
              I am honored to serve as the President of the Sudanese Students
              Association in Rwanda. My goal is to foster unity, provide
              opportunities for academic growth, and ensure that every Sudanese
              student feels supported during their journey abroad.
            </PresidentBio>
          </PresidentCard>
        </PresidentSection>
      </main>

      <Footer variants={fadeUp}>
        &copy; 2025 Sudanese Students Association in Rwanda. All Rights
        Reserved.
      </Footer>
    </Container>
  );
}
