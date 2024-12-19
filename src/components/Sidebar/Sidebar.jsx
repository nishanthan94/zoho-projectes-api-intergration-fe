import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-dark text-white min-vh-100 p-3" style={{ width: '250px' }}>
      <h3 className="text-center mb-4">Zoho Projects</h3>
      <Nav className="flex-column">
        {/* <Nav.Link as={Link} to="/dashboard" className="text-white">Dashboard</Nav.Link> */}
        <Nav.Link as={Link} to="/projects" className="text-white">Projects</Nav.Link>
        {/* <Nav.Link as={Link} to="/reports" className="text-white">Reports</Nav.Link> */}
      </Nav>
    </div>
  );
};

export default Sidebar;