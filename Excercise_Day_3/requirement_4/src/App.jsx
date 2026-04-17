import styled from 'styled-components'

const Nav = styled.nav`
  background-color: #1e1e2e;
  padding: 14px 32px;
  display: flex;
  gap: 24px;
  align-items: center;
`

const NavLink = styled.a`
  color: #cdd6f4;
  text-decoration: none;
  font-size: 0.95rem;
  font-family: sans-serif;
  padding: 6px 2px;
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: red;
    border-bottom-color: red;
  }

  @media (max-width: 600px) {
    display: none;
  }
`

const Brand = styled.span`
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  font-family: sans-serif;
  margin-right: auto;
`

function App() {
  return (
    <Nav>
      <Brand>Bisnu</Brand>
      <NavLink href="#">Home</NavLink>
      <NavLink href="#">About</NavLink>
      <NavLink href="#">Contact</NavLink>
    </Nav>
  )
}

export default App
