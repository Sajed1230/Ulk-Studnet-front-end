import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
`;



const Main = styled.main`
  padding: 2rem;
  background-color: #ffffff;
`;

export default function Layout() {
  return (
    <Container>
      

      <Main>
        {/* This renders the current route */}
        <Outlet />
      </Main>
    </Container>
  );
}
