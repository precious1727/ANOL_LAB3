function Teachers({ teachersData }) {
  return (
    <div>
      <h2>Teacher List</h2>
      <div className="teacher-list">
        {teachersData.map((teacher) => (
         <div key={teacher.id} className="card">
            <h3>{teacher.name}</h3>
            <p>Teacher Number: {teacher.teacherNumber}</p>
            <p>Department: {teacher.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachers;