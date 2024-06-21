const Question1 = () => {

    const onClickHelloWorld = () => {
        alert("hello world");
      };

  return (
      <>
          <div className="card">
            <h1 onClick={onClickHelloWorld}>Hello World</h1>
            <p>My first paragraph</p>
          </div>
          <div style={{ display: "flex", gap: "95", justifyContent:'center' }}>
            <div>
              <h2 style={{ textTransform: "uppercase" }}>danh sách lớp học</h2>
              <ol>
                <li>Nguyễn Ngọc Duy</li>
                <li>Tống Duy Anh</li>
                <li>Đinh Thu Loan</li>
                <li>Hà Văn Tiến</li>
                <li>Nguyễn Hải Đăng</li>
                <li>Nguyễn Tiến Quang</li>
                <li>Nguyễn Văn Chiến</li>
              </ol>
            </div>
            <div style={{ marginTop: "12px" }}>
              <ul>
                1. Cơm Trưa
                <li>Cơm Chiên Hải Sản</li>
                <li>Cơm Chiên Hải Sản</li>
                <li>Cơm Chiên Hải Sản</li>
              </ul>
              <ul>
                1. Trái Cây Tráng Miệng
                <li>Nho tươi</li>
                <li>Nho tươi</li>
                <li>Nho tươi</li>
              </ul>
            </div>
          </div>
      </>
    );
}

export {Question1};