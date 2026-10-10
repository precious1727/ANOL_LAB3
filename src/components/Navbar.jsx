import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/students">Student Lists</Link>
      <Link to="/add-student">Add Student</Link>
      <Link to="/teachers">Teacher Lists</Link>
      <Link to="/add-teacher">Add Teacher</Link>
    </nav>
  );
}

export default Navbar;