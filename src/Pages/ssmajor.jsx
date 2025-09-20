import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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

const MajorCard = styled.a`
  background: linear-gradient(
    135deg,
    rgba(255, 152, 0, 0.1),
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
    border-color: #ff9800;
  }
`;

const MajorIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 20px;
  display: block;
  color: #ff9800;
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
    <Container>
      <Header>
        <H1>SS Track Majors</H1>
      </Header>

      <Breadcrumb>
        <a href="/">Home</a>
        <span></span>
        <a href="/trackmajor">Select Track</a>
        <span></span>
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
            <MajorCard
              key={index}
              as={Link} // ✅ use React Router Link
              to={`/years?track=ss&major=${encodeURIComponent(major.title)}`}
            >
              <MajorIcon>{major.icon}</MajorIcon>
              <MajorTitle>{major.title}</MajorTitle>
              <MajorDescription>{major.description}</MajorDescription>
              <MajorSkills>Key Skills: {major.skills}</MajorSkills>
              <MajorCareer>Career Paths: {major.career}</MajorCareer>
            </MajorCard>
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
  );
};


export default SsMajors;
