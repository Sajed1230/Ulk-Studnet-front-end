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

// const PresidentName = styled.div`
//   font-size: 1.2rem;
//   font-weight: bold;
//   color: #2e7d32;
//   margin-bottom: 5px;

//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

// const PresidentMajor = styled.div`
//   color: #f57f17;
//   font-weight: 600;
//   margin-bottom: 12px;

//   @media (max-width: 768px) {
//     font-size: 0.9rem;
//   }
// `;

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
const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  text-align: center;

  @media (max-width: 768px) {
    margin: 30px auto;
  }
`;

const Logo = styled.img`
  width: 180px;
  height: auto;
  margin-bottom: 10px;
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.2));

  @media (max-width: 768px) {
    width: 120px;
  }
`;

const LogoCaption = styled.p`
  font-size: 1.1rem;
  color: #2e7d32;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;


// ====================== Component ======================
export default function SudaneseStudents() {
  return (
    <Container initial="hidden" animate="visible" variants={fadeUp}>
      <Header variants={fadeUp}>
        <Title>Sudanese Students Association At ULK-Rwanda</Title>
        <Subtitle>Your Gateway to Academic Excellence</Subtitle>
      </Header>

      <main>
        <HeroSection variants={fadeUp}>
          <HeroHeading>Welcome to Your Exam Repository</HeroHeading>
          <HeroText>
            We are dedicated to supporting Sudanese students who are studying at
            ULK by providing easy access to past exams, study materials, and
            academic resources. Our mission is to help you excel in your studies
            and achieve your academic goals through collaborative learning and
            resource sharing.
          </HeroText>
          <CtaButtons>
            <Button to="/trackmajor" variant="primary">
              Browse Exams
            </Button>
          </CtaButtons>
        </HeroSection>

        <PresidentSection id="#president" variants={fadeUp}>
          <h3>Message from SSA-ULK to Sudanese Students</h3>
          <PresidentCard>
            <PresidentPhoto src="sudancelogo.jpeg" alt="President" />

            <PresidentAdvice>
              "Dear fellow students, education is the key to unlocking our
              potential and building a brighter future. Through collaboration,
              dedication, and mutual support, we can overcome any challenge and
              success proudly." SSA-ULK is honoured to serve Sudanese students.
              Our goal is to foster unity, provide opportunities for academic
              growth, and ensure that every Sudanese student feels supported
              during the journey abroad."
            </PresidentAdvice>
            
          </PresidentCard>
          <LogoSection>
            <Logo
              src="data:image/png;base64,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"
              alt="ULK Logo"
            />
            <LogoCaption>kigali independent university (-ULK-)</LogoCaption>
          </LogoSection>
        </PresidentSection>
      </main>

      <Footer variants={fadeUp}>
        &copy; 2025 Sudanese Students Association in Rwanda. All Rights
        Reserved.
      </Footer>
    </Container>
  );
}
