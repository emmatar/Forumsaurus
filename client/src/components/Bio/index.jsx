import { useMutation } from "@apollo/client";
import { EDIT_BIO } from "../../utils/mutations";
import { useState } from "react";
import { QUERY_ME } from "../../utils/queries";
import { Form, Button, Modal } from "react-bootstrap";

export const EditBio = ({ show, handleClose }) => {
  const [newBio, setNewBio] = useState("");
  const [error, setError] = useState(false);
  const [editBio] = useMutation(EDIT_BIO);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newBio) {
      setError(true);
      return;
    }

    await editBio({
      variables: { bio: newBio },
      refetchQueries: [QUERY_ME, "me"],
    });
    handleClose();
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Bio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Update Bio</Form.Label>
              <Form.Control
                className={error ? "has-error" : ""}
                type="text"
                value={newBio}
                onChange={(e) => setNewBio(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditBio;
