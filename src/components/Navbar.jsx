import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/students">Students</Link>
      <Link to="/add-student">Add Student</Link> {/* New link added */}
    </nav>
  );
}

export default Navbar;