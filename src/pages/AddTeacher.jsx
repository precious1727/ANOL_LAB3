import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTeacher({ teacher, setTeacher }) {
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [department, setDepartment] = useState("");
  const [sex, setSex] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSpecChange = (e) => {
    setSpecialization(e.target.value);
  };

  const handleDeptChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleSexChange = (e) => {
    setSex(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTeacher = {
      id: Date.now(),
      name,
      specialization,
      department,
      sex
    };

    //We use the ... para mashow pa rin yung existing na data under sa teacher, like the old datas
    setTeacher([...teacher, newTeacher]);
    setName("");
    setSpecialization("");
    setDepartment("");
    setSex("");
    
    // Kapag nag add, maga navigate sa teachers
    navigate("/teachers");
  };

  return (
    <div className="details-container">
      <h2>Add New Teacher</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
        
        <div>
          <label><strong>Name:</strong></label><br />
          <input 
            type="text" 
            value={name} 
            onChange={handleNameChange} 
            placeholder="Enter full name"
            required
            style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }} 
          />
        </div>

        <div>
          <label><strong>Specialization:</strong></label><br />
          <input 
            type="text" 
            value={specialization} 
            onChange={handleSpecChange} 
            placeholder="e.g. Programming"
            required
            style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }} 
          />
        </div>

        <div>
          <label><strong>Department:</strong></label><br />
          <input 
            type="text" 
            value={department} 
            onChange={handleDeptChange} 
            placeholder="e.g. DIT"
            required
            style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }} 
          />
        </div>

        <div>
          <label><strong>Sex:</strong></label><br />
          <select 
            value={sex} 
            onChange={handleSexChange}
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
          Submit Teacher
        </button>
      </form>
    </div>
  );
}