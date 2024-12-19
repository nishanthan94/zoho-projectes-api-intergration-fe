import { Container } from 'react-bootstrap';
import Sidebar from '../components/Sidebar/Sidebar';
import TopNavbar from '../components/Navbar/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <TopNavbar />
        <Container fluid>
          {children}
        </Container>
      </div>
    </div>
  );
};

export default MainLayout;