const Footer = () => {
    return (
        <>
        <footer className="py-4 m-0" style={{ backgroundColor: "#007BFF" }}>
          <div className="container-fluid px-4">
            <div className="d-flex align-items-center justify-content-between small">
              <div className=" text-light ">Copyright © BookStore 2024 </div>
              <div>
                <a href="/" className=" text-light ">Privacy Policy</a>·
                <a href="/" className=" text-light ">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
        </>
    )
}
export default Footer;