import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const MenuBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={`./src/assets/usd.png`}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            USD Argentina Cotization
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}
