import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ================== Styled Components ==================
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
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

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const Breadcrumb = styled.nav`
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
    margin: 0 5px;
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

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }

    @media (max-width: 480px) {
      font-size: 1.4rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 40px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 480px) {
      font-size: 1rem;
      margin-bottom: 30px;
    }
  }
`;

const MajorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const MajorCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 152, 0, 0.1),
    rgba(76, 175, 80, 0.1)
  );
  padding: 30px 20px;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: block;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
    border-color: #ff9800;
  }

  @media (max-width: 480px) {
    padding: 25px 15px;
  }
`;

const MajorIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
  display: block;
  color: #ff9800;

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const MajorTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2e7d32;
  margin-bottom: 12px;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const MajorDescription = styled.div`
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const MajorSkills = styled.div`
  font-size: 0.85rem;
  color: #f57f17;
  font-weight: 600;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const MajorCareer = styled.div`
  font-size: 0.85rem;
  color: #2e7d32;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Footer = styled.footer`
  background: rgba(46, 125, 50, 0.9);
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 15px;
  margin-top: 30px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 15px;
  }
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
const SsMajors = () => {
  const majors = [
    {
      title: "Accounting",
      icon: "💰",
      description:
        "Comprehensive study of financial accounting, management accounting, auditing, taxation, and financial reporting standards for business decision-making.",
      skills: "Financial Analysis • Auditing • Tax Planning • IFRS",
      career: "Accountant • Auditor • Financial Analyst • Tax Consultant",
    },
    {
      title: "Economics",
      icon: "📈",
      description:
        "Study of microeconomics, macroeconomics, econometrics, and economic policy to understand market behavior and economic systems.",
      skills: "Economic Analysis • Statistics • Policy Research • Forecasting",
      career: "Economist • Policy Analyst • Research Analyst • Consultant",
    },
    {
      title: "International Relations",
      icon: "🌍",
      description:
        "Examination of global politics, diplomacy, international law, and cross-cultural communication in the context of international affairs.",
      skills: "Diplomacy • Research • Communication • Cultural Analysis",
      career: "Diplomat • International Consultant • NGO Worker • Journalist",
    },
    {
      title: "Development Studies",
      icon: "🏗️",
      description:
        "Focus on social and economic development, policy-making, and strategies to improve communities and societies.",
      skills:
        "Policy Analysis • Research • Community Development • Project Management",
      career: "Development Officer • Policy Analyst • NGO Consultant",
    },
    {
      title: "Private and Public Law",
      icon: "⚖️",
      description:
        "Study of legal systems, including civil, criminal, constitutional, and administrative law, with focus on governance and legal practice.",
      skills: "Legal Research • Critical Thinking • Advocacy • Case Analysis",
      career: "Lawyer • Legal Advisor • Public Administrator • Judge",
    },
  ];

  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
      <Container>
        <Header>
          <H1>SS Track Majors</H1>
        </Header>

        <Breadcrumb>
          <Link to="/">Home</Link>
          <span>›</span>
          <Link to="/trackmajor">Select Track</Link>
          <span>›</span>
          <span>SS Majors</span>
        </Breadcrumb>

        <MajorsSection>
          <h2>Choose Your SS Major</h2>
          <p>
            Select your specific major within the Social Sciences track. Each
            major provides comprehensive study materials and exam resources for
            your academic journey.
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
                <MajorCard
                  as={Link}
                  to={`/years?track=ss&major=${encodeURIComponent(
                    major.title
                  )}`}
                >
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
            &copy; {new Date().getFullYear()} Sudanese Students Association in
            Rwanda. All rights reserved.
          </p>
        </Footer>
      </Container>
    </motion.div>
  );
};

export default SsMajors;
