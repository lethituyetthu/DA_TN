import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";

const CategoryList = ({ categories, deleteCate, updateCate }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  const handleDelete = async (id) => {
    try {
      await deleteCate(id);
      console.log(id);
    } catch (error) {
      console.error("Lỗi khi xóa danh mục: ", error.message);
    }
  };

  // mở modal
  const handleEdit = (category) => {
    setSelectedCategory(category);
    setUpdatedName(category.name); // Set initial value for editing
    setShowModal(true);
  };
  // đóng modal
  const handleClose = () => {
    setShowModal(false);
    setSelectedCategory(null);
  };
  
  const handleSave = async () => {
    if (updatedName.trim() === "") {
      alert("Tên danh mục không thể để trống");
      return;
    }
    try {
      await updateCate(selectedCategory.id, { name: updatedName });
      handleClose();
    } catch (error) {
      console.error("Lỗi khi cập nhật danh mục: ", error.message);
    }
  };

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Mã</th>
            <th>Tên</th>
            <th>Thao Tác</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cate, index) => (
            <tr key={index}>
              <td>{cate.id}</td>
              <td>{cate.name}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Thao Tác
                </button>
                <ul
                  className="dropdown-menu p-0 ro"
                  style={{ backgroundColor: "#d9d9d9" }}
                >
                  <li>
                    <button
                      onClick={() => handleDelete(cate.id)}
                      className="dropdown-item bg-danger rounded-top-1 text-light"
                    >
                      Xóa SP
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleEdit(cate)}
                      className="dropdown-item rounded-bottom-1 bg-warning"
                    >
                      Sửa SP
                    </button>
                  </li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cập Nhật Danh Mục</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formCategoryName">
              <Form.Label>Tên Danh Mục</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên danh mục mới"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CategoryList;
