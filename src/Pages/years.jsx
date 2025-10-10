// YearSelection.jsx
import React from "react";
import styled from "styled-components";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

// ====================== Styled Components ======================
const Container = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled(motion.header)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 20px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 30px;
  text-align: center;
`;

const Breadcrumb = styled(motion.nav)`
  background: rgba(255, 255, 255, 0.9);
  padding: 15px 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  a {
    color: #2e7d32;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }

  span {
    color: #f57f17;
  }
`;

const YearsSection = styled(motion.section)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const MajorInfo = styled(motion.div)`
  background: rgba(46, 125, 50, 0.1);
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 30px;
  border-left: 4px solid #2e7d32;

  h3 {
    color: #2e7d32;
    font-size: 1.4rem;
    margin-bottom: 10px;
  }

  p {
    color: #555;
    font-size: 1rem;
  }
`;

const YearsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const YearCard = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(255, 235, 59, 0.2),
    rgba(76, 175, 80, 0.2)
  );
  padding: 40px 20px;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  color: inherit;
  text-align: center;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    border-color: #f57f17;
  }
`;

const YearNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #2e7d32;
  margin-bottom: 15px;
`;

const YearTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  color: #f57f17;
  margin-bottom: 10px;
`;

const YearDescription = styled.div`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
`;

const Footer = styled(motion.footer)`
  background: rgba(46, 125, 50, 0.9);
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 15px;
  margin-top: 30px;
`;

// ====================== Component ======================
const YearSelection = () => {
  const [searchParams] = useSearchParams();
  const track = searchParams.get("track");
  const major = searchParams.get("major");

  const majorInfo = {
    "Software Engineering": {
      title: "Software Engineering",
      description:
        "Systematic approach to software development with focus on design patterns and project management.",
    },
    Network: {
      title: "Network",
      description:
        "Study of computer networks, communication protocols, network architecture, and security.",
    },
    "Data Science": {
      title: "Data Science",
      description:
        "Interdisciplinary field combining statistics, machine learning, and data visualization.",
    },
    "Electrical Engineering": {
      title: "Electrical Engineering",
      description:
        "Study of electrical systems, circuits, electronics, and energy technologies.",
    },
    Architecture: {
      title: "Architecture",
      description:
        "Designing and planning buildings and structures with sustainability principles.",
    },
  };

  const yearDescriptions = {
    1: "Foundation Year - Core concepts and fundamentals",
    2: "Intermediate Level - Building on basics",
    3: "Advanced Level - Specialized knowledge",
    4: "Final Year - Capstone and specialization",
  };

  const maxYear = track === "ss" ? 3 : 4;

  return (
    <Container
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>Select Academic Year</h1>
      </Header>

      <Breadcrumb
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <a href="/">Home</a>
        <span>/</span>
        <a href="/trackmajor">Select Track</a>
        <span>/</span>
        <a href="#" onClick={() => window.history.back()}>
          Select Major
        </a>
        <span>/</span>
        <span>Select Year</span>
      </Breadcrumb>

      <YearsSection
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <MajorInfo
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3>{majorInfo[major]?.title || major}</h3>
          <p>
            {majorInfo[major]?.description ||
              "Please select your academic year."}
          </p>
        </MajorInfo>

        <h2>Choose Your Year</h2>
        <p>
          Select the academic year for which you need exam materials and study
          resources.
        </p>

        <YearsGrid
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {Array.from({ length: maxYear }, (_, i) => {
            const year = i + 1;
            return (
              <Link
                key={year}
                to={`/exams?track=${track}&major=${encodeURIComponent(
                  major
                )}&year=${year}`}
                style={{ textDecoration: "none" }}
              >
                <YearCard
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.9 + i * 0.1,
                    duration: 0.6,
                  }}
                >
                  <YearNumber>{year}</YearNumber>
                  <YearTitle>Year {year}</YearTitle>
                  <YearDescription>{yearDescriptions[year]}</YearDescription>
                </YearCard>
              </Link>
            );
          })}
        </YearsGrid>
      </YearsSection>

      <Footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        &copy; 2024 Sudanese Students Association in Rwanda. All rights
        reserved.
      </Footer>
    </Container>
  );
};

export default YearSelection;
