import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// ================== Styled Components ==================
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

const H1 = styled.h1`
  color: #2e7d32;
  font-size: 2.5rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Breadcrumb = styled.nav`
  background: rgba(255, 255, 255, 0.9);
  padding: 15px 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

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
    margin: 0 10px;
  }
`;

const MajorsSection = styled.section`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;

  h2 {
    color: #2e7d32;
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 40px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const MajorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;
`;

const MajorCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(33, 150, 243, 0.1),
    rgba(76, 175, 80, 0.1)
  );
  padding: 35px;
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
    border-color: #2196f3;
  }
`;

const MajorIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 20px;
  display: block;
  color: #2196f3;
`;

const MajorTitle = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  color: #2e7d32;
  margin-bottom: 15px;
`;

const MajorDescription = styled.div`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const MajorSkills = styled.div`
  font-size: 0.9rem;
  color: #f57f17;
  font-weight: 600;
  margin-bottom: 10px;
`;

const MajorCareer = styled.div`
  font-size: 0.9rem;
  color: #2e7d32;
  font-weight: 600;
`;

const Footer = styled.footer`
  background: rgba(46, 125, 50, 0.9);
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 15px;
  margin-top: 30px;
`;

// ================== Animation Variants ==================
const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: index * 0.15 },
  }),
};

// ================== React Component ==================
const CsseMajors = () => {
  const navigate = useNavigate();

  const majors = [
    {
      title: "Software Engineering",
      icon: "⚙️",
      description:
        "Focus on systematic approach to software development, including design patterns, software architecture, project management, and quality assurance.",
      skills: "System Design • Project Management • Testing • DevOps",
      career: "Software Engineer • Technical Lead • Product Manager",
    },
    {
      title: "Network",
      icon: "🌐",
      description:
        "Study of computer networks, communication protocols, network architecture, and security to design and manage reliable network systems.",
      skills: "Networking • Security • Protocols • Troubleshooting",
      career:
        "Network Engineer • System Administrator • Network Security Analyst",
    },
    {
      title: "Data Science",
      icon: "📊",
      description:
        "Interdisciplinary field combining statistics, machine learning, data visualization, and domain expertise to extract insights from complex datasets.",
      skills: "Machine Learning • Statistics • Python/R • Visualization",
      career: "Data Scientist • ML Engineer • Business Analyst",
    },
    {
      title: "Electrical Engineering",
      icon: "⚡",
      description:
        "Study of electrical systems, circuits, electronics, and energy technologies, with practical applications in modern devices and infrastructure.",
      skills: "Circuit Design • Power Systems • Electronics • Control Systems",
      career: "Electrical Engineer • Systems Engineer • Electronics Designer",
    },
    {
      title: "Architecture",
      icon: "🏛️",
      description:
        "Focus on designing and planning buildings and structures, combining creativity, technical skills, and sustainability principles.",
      skills: "Design • CAD • Urban Planning • Project Management",
      career: "Architect • Urban Planner • Interior Designer",
    },
  ];

  const handleMajorClick = (majorName) => {
    navigate(`/years?track=csse&major=${encodeURIComponent(majorName)}`);
  };

  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
      <Container>
        <Header>
          <H1>CSSE Track Majors</H1>
        </Header>

        <Breadcrumb>
          <Link to="/">Home</Link>
          <span>›</span>
          <Link to="/trackmajor">Select Track</Link>
          <span>›</span>
          <span>CSSE Majors</span>
        </Breadcrumb>
        <MajorsSection>
          <h2>Choose Your CSSE Major</h2>
          <p>
            Select your specific major within the Computer Science, Software
            Engineering track. Each major offers specialized courses and exam
            materials tailored to your field of study.
          </p>

          <MajorsGrid>
            {majors.map((major, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <MajorCard onClick={() => handleMajorClick(major.title)}>
                  <MajorIcon>{major.icon}</MajorIcon>
                  <MajorTitle>{major.title}</MajorTitle>
                  <MajorDescription>{major.description}</MajorDescription>
                  <MajorSkills>Key Skills: {major.skills}</MajorSkills>
                  <MajorCareer>Career Paths: {major.career}</MajorCareer>
                </MajorCard>
              </motion.div>
            ))}
          </MajorsGrid>
        </MajorsSection>

        <Footer>
          <p>
            &copy; 2024 Sudanese Students Association in Rwanda. All rights
            reserved.
          </p>
        </Footer>
      </Container>
    </motion.div>
  );
};

export default CsseMajors;
