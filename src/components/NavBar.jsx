import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <Navbar className='shadow p-3 mb-5 rounded sticky-top' >
      <Container>
        <Navbar.Brand className='text-white' href="#home">Dafilm</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-light p-2'>
            <a className='text-light nav-link' href="#Popular">Popular</a>
          </Navbar.Text>
          <Navbar.Text className='text-light'>
            <a className='text-light nav-link' href="#NowPlaying">Now Playing</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
