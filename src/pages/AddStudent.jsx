import { useState } from 'react';

function AddStudent() {
  const [studentData, setStudentData] = useState({
    name: '',
    studentNumber: '',
    course: '',
    yearLevel: '',
    sex: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmittedData(studentData); 
  };

  return (
    <div className="details-container">
      <h2>Add New Student</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
        <div>
          <label><strong>Name: </strong></label><br />
          <input 
            type="text" 
            name="name" 
            value={studentData.name} 
            onChange={handleChange} 
            placeholder="Enter full name"
            required
            style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label><strong>Student Number: </strong></label><br />
          <input 
            type="text" 
            name="studentNumber" 
            value={studentData.studentNumber} 
            onChange={handleChange} 
            placeholder="e.g. 202400000"
            required
            style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label><strong>Course: </strong></label><br />
          <select 
            name="course" 
            value={studentData.course} 
            onChange={handleChange}
            required
            style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="">Select a Course</option>
            <option value="BSIT">BSIT</option>
            <option value="BSCS">BSCS</option>
            <option value="BSCpE">BSCpE</option>
          </select>
        </div>

        <div>
          <label><strong>Year Level: </strong></label><br />
          <select 
            name="yearLevel" 
            value={studentData.yearLevel} 
            onChange={handleChange}
            required
            style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="">Select Year Level</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </div>

        <div>
          <label><strong>Sex: </strong></label><br />
          <select 
            name="sex" 
            value={studentData.sex} 
            onChange={handleChange}
            required
            style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="">Select Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <button 
          type="submit" 
          style={{ padding: '10px', background: '#7b8c9c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px', fontSize: '1rem', fontWeight: 'bold' }}
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '2rem', background: '#faf9f6', padding: '1.5rem', borderRadius: '8px', border: '1px solid #eaeaea' }}>
          <h3>Submitted Details</h3>
          <hr style={{ margin: '1rem 0', border: 'none', borderTop: '1px solid #e0dce3' }} />
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Student Number:</strong> {submittedData.studentNumber}</p>
          <p><strong>Course:</strong> {submittedData.course}</p>
          <p><strong>Year Level:</strong> {submittedData.yearLevel}</p>
          <p><strong>Sex:</strong> {submittedData.sex}</p>
        </div>
      )}
    </div>
  );
}

export default AddStudent;