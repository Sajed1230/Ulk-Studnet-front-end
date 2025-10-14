import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { motion } from "framer-motion";

// =================== Styled Components ===================
const Container = styled(motion.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const Header = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  padding: 25px 0;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  margin-bottom: 40px;
  text-align: center;

  h1 {
    color: #05b37d;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }
`;

const Breadcrumb = styled.nav`
  background: rgba(255, 255, 255, 0.92);
  padding: 18px 25px;
  border-radius: 12px;
  margin-bottom: 35px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  a {
    color: #05b37d;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    color: #888;
    margin: 0 5px;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const CourseInfo = styled.section`
  background: rgba(5, 179, 125, 0.12);
  padding: 25px;
  border-radius: 18px;
  margin-bottom: 40px;
  border-left: 6px solid #05b37d;

  h2 {
    color: #05b37d;
    font-size: 2rem;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }

    @media (max-width: 480px) {
      font-size: 1.4rem;
    }
  }
`;

const CourseDetails = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    gap: 15px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    font-size: 0.95rem;
  }
`;

const Detail = styled.div`
  .label {
    font-weight: bold;
    color: #05b37d;
    margin-bottom: 4px;
  }
  .value {
    color: #555;
  }
`;

const ExamsSection = styled.section`
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(10px);
  padding: 35px 20px;
  border-radius: 25px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.12);
  text-align: center;

  h3 {
    color: #05b37d;
    font-size: 2.5rem;
    margin-bottom: 25px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.6rem;
    }
  }
`;

const SearchFilter = styled.div`
  display: flex;
  gap: 18px;
  justify-content: center;
  margin-bottom: 35px;
  flex-wrap: wrap;

  input,
  select {
    padding: 12px 15px;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 1.05rem;
    outline: none;
    min-width: 200px;

    @media (max-width: 480px) {
      width: 100%;
    }
  }

  input:focus,
  select:focus {
    border-color: rgba(46, 125, 50, 0.9);
  }
`;

const ExamsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ExamCard = styled(motion.div)`
  background: white;
  padding: 25px 20px;
  border-radius: 25px;
  border-left: 6px solid rgba(46, 125, 50, 0.9);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  text-align: left;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.12);
  }

  .exam-header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 1.25rem;
    color: rgba(40, 194, 48, 0.9);

    @media (max-width: 480px) {
      flex-direction: column;
      font-size: 1.1rem;
      gap: 8px;
    }
  }

  .exam-type {
    color: #f57f17;
    font-size: 1rem;
    text-transform: capitalize;
  }

  .exam-details {
    font-size: 1rem;
    margin-bottom: 15px;
    color: #444;

    @media (max-width: 480px) {
      font-size: 0.95rem;
    }

    div {
      margin-bottom: 5px;
    }
  }

  .exam-actions {
    display: flex;
    gap: 12px;
    margin-top: 10px;

    @media (max-width: 480px) {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

const Button = styled.a`
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  color: white;
  font-weight: 600;
  transition: 0.3s ease;
  text-align: center;
  display: inline-block;

  &.primary {
    background: #05b37d;
  }

  &.secondary {
    background: #f57f17;
  }

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  color: #777;
  padding: 60px 0;
  font-size: 1.4rem;

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 40px 0;
  }
`;

const Footer = styled.footer`
  background: #4ba820;
  color: white;
  text-align: center;
  padding: 25px;
  border-radius: 18px;
  margin-top: 40px;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 20px;
  }
`;

// ====================== Component ======================
const ExamPage = () => {
  const [searchParams] = useSearchParams();
  const track = searchParams.get("track") || "csse";
  const major = searchParams.get("major") || "software-engineering";
  const year = parseInt(searchParams.get("year")) || 1;

  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(false);

const downloadPdf = async (url, fileName) => {
  try {
    // Fetch the file as a blob
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");

    const blob = await response.blob();

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `${fileName}.pdf`; // <-- force the filename with .pdf
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (err) {
    console.error("Download failed", err);
  }
};



  useEffect(() => {
    const fetchExams = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://ulk-studnet-back-end.onrender.com/user/api/exams",
          {
            params: {
              track,
              major,
              year,
              search: searchTerm,
              type: typeFilter,
            },
          }
        );
        setExams(res.data);
      } catch (err) {
        console.error("Error fetching exams:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchExams();
  }, [track, major, year, searchTerm, typeFilter]);

  return (
    <Container
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Header>
        <h1>Exam Repository</h1>
      </Header>

      <Breadcrumb>
        <Link to="/">Home</Link>
        <span>&gt;</span>
        <Link to="/trackmajor">Select Track</Link>
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
            <option value="all">All Types</option>
            <option value="Cat 11">Cat 11</option>
            <option value="Fat">Fat</option>
            <option value="Quiz">Quiz</option>
          </select>
        </SearchFilter>

        {loading ? (
          <EmptyState>Loading exams...</EmptyState>
        ) : exams.length > 0 ? (
          <ExamsGrid>
            {exams.map((exam, index) => (
              <ExamCard
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="exam-header">
                  <div className="exam-title">{exam.name}</div>
                  <div className="exam-type">{exam.typeExam}</div>
                </div>
                <div className="exam-details">
                  <div>
                    <strong>Year:</strong> {exam.year}
                  </div>
                  <div>
                    <strong>Track:</strong> {exam.track}
                  </div>
                  <div>
                    <strong>Major:</strong> {exam.major}
                  </div>
                </div>
                <div className="exam-actions">
                  <Button
                    className="primary"
                    onClick={() => downloadPdf(exam.pdfPath, exam.name)}
                  >
                    Download PDF
                  </Button>
                </div>
              </ExamCard>
            ))}
          </ExamsGrid>
        ) : (
          <EmptyState>No exams available for this selection.</EmptyState>
        )}
      </ExamsSection>

      <Footer>
        &copy; {new Date().getFullYear()} ULK Sudanese Community. All rights
        reserved.
      </Footer>
    </Container>
  );
};

export default ExamPage;
