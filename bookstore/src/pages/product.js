import "bootstrap/dist/css/bootstrap.min.css";
const Product = [
  {
    ma_sp: "S001",
    tieude: "Nỗi Buồn Chiến Tranh",
    tacgia: "Bảo Ninh",
    price: 200000,
    total: 20,
  },
  {
    ma_sp: "S002",
    tieude: "Tắt Đèn",
    tacgia: "Ngô Tất Tố",
    price: 150000,
    total: 30,
  },
  {
    ma_sp: "S003",
    tieude: "Số Đỏ",
    tacgia: "Vũ Trọng Phụng",
    price: 180000,
    total: 25,
  },
  {
    ma_sp: "S004",
    tieude: "Chí Phèo",
    tacgia: "Nam Cao",
    price: 160000,
    total: 15,
  },
  {
    ma_sp: "S005",
    tieude: "Dế Mèn Phiêu Lưu Ký",
    tacgia: "Tô Hoài",
    price: 120000,
    total: 40,
  },
];
const Products = () => {
  return (
    <>
      <main>
        <div className="container-fluid px-4 mt-4">
          <button className="btn btn-primary mb-4">Nhập Hàng Mới</button>
          <input
              type="text"
              className="form-control w-25 mb-4"
              placeholder="Tìm kiếm theo mã sản phẩm"
              /* value={}
              onChange={} */
            />
          <div className="card mb-4 ">
            <div className="card-header">
              <i className="fas fa-table me-1" />
              Danh sách sản phẩm
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Mã Sách</th>
                    <th>Tiêu Đề</th>
                    <th>Tác Giả</th>
                    <th>Số Lượng</th>
                    <th>Giá Tiền</th>
                    <th>Thao Tác</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Tổng Tiền: </th>
                    <th></th>
                    <th></th>
                  </tr>
                </tfoot>
                <tbody>
                  {Product.map((product, index) => (
                    <tr key={index}>
                      <td>{product.ma_sp}</td>
                      <td>{product.tieude}</td>
                      <td>{product.tacgia}</td>
                      <td>{product.total}</td>
                      <td>{product.price}</td>
                      <td><button type="button" class="btn btn-danger">Delete</button> <button type="button" class="btn btn-warning">edit</button> <button type="button" class="btn btn-info">+</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;
