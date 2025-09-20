import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

// =================== Styled Components ===================
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

  h1 {
    color: #2e7d32;
    font-size: 2.5rem;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
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

const CourseInfo = styled.section`
  background: rgba(46, 125, 50, 0.1);
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 30px;
  border-left: 4px solid #2e7d32;

  h2 {
    color: #2e7d32;
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
`;

const CourseDetails = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Detail = styled.div`
  .label {
    font-weight: bold;
    color: #2e7d32;
  }
  .value {
    color: #555;
  }
`;

const ExamsSection = styled.section`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    color: #2e7d32;
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const SearchFilter = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 30px;

  input,
  select {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }
`;

const ExamsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
`;

const ExamCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 235, 59, 0.2),
    rgba(76, 175, 80, 0.2)
  );
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    transform: translateY(-10px);
    border-color: #f57f17;
  }

  .exam-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-weight: bold;
    color: #2e7d32;
  }

  .exam-type {
    color: #f57f17;
    text-transform: capitalize;
  }

  .exam-details {
    font-size: 0.9rem;
    margin-bottom: 10px;
    color: #444;
  }

  .exam-description {
    font-size: 0.95rem;
    margin-bottom: 15px;
    color: #555;
  }

  .exam-actions {
    display: flex;
    gap: 10px;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  border: none;
  color: white;
  transition: 0.3s ease;

  &.primary {
    background: #2e7d32;
  }

  &.secondary {
    background: #f57f17;
  }

  &:hover {
    opacity: 0.85;
  }
`;

const Footer = styled.footer`
  background: rgba(46, 125, 50, 0.9);
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 15px;
  margin-top: 30px;
`;

// =================== Data ===================
const examData = {
  csse: {
    "software-engineering": {
      1: [
        {
          title: "Introduction to Programming",
          type: "midterm",
          semester: "Fall 2023",
          description: "Basic programming concepts and syntax",
        },
        {
          title: "Mathematics for Computing",
          type: "final",
          semester: "Fall 2023",
          description: "Discrete mathematics and logic",
        },
        {
          title: "Computer Systems Fundamentals",
          type: "quiz",
          semester: "Spring 2024",
          description: "Hardware and software basics",
        },
      ],
    },
  },
};

const majorInfo = {
  "software-engineering": "Software Engineering",
  "computer-science": "Computer Science",
  "data-science": "Data Science",
  accounting: "Accounting",
  economics: "Economics",
  "international-relations": "International Relations",
};

// ====================== Component ======================
const ExamPage = () => {
  const [searchParams] = useSearchParams();

  // Get track, major, year from URL
  const track = searchParams.get("track") || "csse";
  const major = searchParams.get("major") || "software-engineering";
  console.log(major)
  const year = parseInt(searchParams.get("year")) || 1;

  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [filteredExams, setFilteredExams] = useState([]);

  useEffect(() => {
    const exams = examData[track]?.[major]?.[year] || [];

    const filtered = exams.filter((exam) => {
      const matchesSearch =
        exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exam.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = !typeFilter || exam.type === typeFilter;
      return matchesSearch && matchesType;
    });

    setFilteredExams(filtered);
  }, [searchTerm, typeFilter, track, major, year]);

  return (
    <Container>
      <Header>
        <h1>Exam Repository</h1>
      </Header>

      <Breadcrumb>
        <a href="/">Home</a>
        <span>&gt;</span>
        <a href="/trackmajor">Select Track</a>

        <span>&gt;</span>
        <span>Exams</span>
      </Breadcrumb>

      <CourseInfo>
        <h2>{`${major} - Year ${year}`}</h2>
        <CourseDetails>
          <Detail>
            <div className="label">Track</div>
            <div className="value">{track.toUpperCase()}</div>
          </Detail>
          <Detail>
            <div className="label">Major</div>
            <div className="value">{major}</div>
          </Detail>
          <Detail>
            <div className="label">Year</div>
            <div className="value">{year}</div>
          </Detail>
        </CourseDetails>
      </CourseInfo>

      <ExamsSection>
        <h3>Available Exams</h3>
        <SearchFilter>
          <input
            type="text"
            placeholder="Search exams..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="cat11">cat11</option>
            <option value="fat">fat</option>
            <option value="quiz">Quiz</option>
            <option value="practical">Practical</option>
          </select>
        </SearchFilter>

        <ExamsGrid>
          {filteredExams.length > 0 ? (
            filteredExams.map((exam, index) => (
              <ExamCard key={index}>
                <div className="exam-header">
                  <div className="exam-title">{exam.title}</div>
                  <div className="exam-type">{exam.type}</div>
                </div>
                <div className="exam-details">
                  <div>
                    <strong>Semester:</strong> {exam.semester}
                  </div>
                  <div>
                    <strong>Type:</strong>{" "}
                    {exam.type.charAt(0).toUpperCase() + exam.type.slice(1)}
                  </div>
                </div>
                <div className="exam-description">{exam.description}</div>
                <div className="exam-actions">
                  <Button className="primary">Download PDF</Button>
                  <Button className="secondary">Preview</Button>
                </div>
              </ExamCard>
            ))
          ) : (
            <div>No exams available for this year.</div>
          )}
        </ExamsGrid>
      </ExamsSection>

      <Footer>
        &copy; {new Date().getFullYear()} Sudanese Students Association in
        Rwanda. All rights reserved.
      </Footer>
    </Container>
  );
};
export default ExamPage;