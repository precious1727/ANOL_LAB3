import StudentCard from '../components/StudentCard'; 

function Students({ studentsData }) {
  return (
    <div>
      <h2>Student List</h2>
      <div className="student-list">
        {studentsData.map((student) => (
          <StudentCard key={student._id} student={student} />
        ))}
      </div>
    </div>
  );
}

export default Students;