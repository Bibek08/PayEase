import React from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./admin/mangestudent/CreateStudent";

function MangeStudent() {
  const [student, setStudent] = useState([]);
  const [show, setShow] = useState(false);
  const [updatedStudent, setUpdatedStudent] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/students").then((res) => {
      setStudent(res.data);
    });
  }, []);

  //function to delete Student
  const deleteStudent = (id) => {
    axios
      .delete(`/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  };

  //function to goBack after click of Add Student Btn
  const goBack = () => {
    navigate("/create");
  };

  const updateStudent = (student) => {
    handleShow();
    setUpdatedStudent(student);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStudent((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const saveUpdatedStudent = () => {
    axios
      .put(`/update/${updatedStudent._id}`, updatedStudent)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
  };
  return (
    <div>
      <div>
        <Button onClick={() => goBack()}>Add Student </Button>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>Email</th>
            <th>Guardian Name</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {student.map((student) => (
            <tr key={student._id}>
              <td>{student.Name} </td>
              <td>{student.Roll} </td>
              <td>{student.Email} </td>
              <td>{student.GuardianName} </td>
              <td>{student.Contact} </td>

              <Button
                variant="outline-success"
                style={{ marginRight: "5px" }}
                onClick={() => updateStudent(student)}
              >
                Edit
              </Button>

              <Button
                variant="outline-danger"
                onClick={() => deleteStudent(student._id)}
              >
                Delete
              </Button>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                name="Name"
                placeholder="Name of Student"
                type="text"
                value={updatedStudent.Name ? updatedStudent.Name : ""}
                onChange={handleChange}
              />

              <Form.Control
                name="Roll"
                placeholder="Roll number"
                type="number"
                value={updatedStudent.Roll ? updatedStudent.Roll : ""}
                onChange={handleChange}
              />

              <Form.Control
                name="Email"
                placeholder="Email"
                type="email"
                value={updatedStudent.Email ? updatedStudent.Email : ""}
                onChange={handleChange}
              />

              <Form.Control
                name="GuardianName"
                placeholder="Guardian Name"
                value={
                  updatedStudent.GuardianName ? updatedStudent.GuardianName : ""
                }
                onChange={handleChange}
              />

              <Form.Control
                name="Contact"
                placeholder="Contact"
                type="number"
                value={updatedStudent.Contact ? updatedStudent.Contact : ""}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdatedStudent}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MangeStudent;
