import classes from "./FncComponent6.module.css";

const FncComponent6Table = () => {
  return (
    <div className={classes["table"]}>
      <thead>
        <tr>
          <th>MÃ</th>
          <th>TÊN</th>
          <th>Số Lượng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sanpham1</td>
          <td>Sp2017</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Sanpham2</td>
          <td>Sp2016</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Sanpham3</td>
          <td>Sp2015</td>
          <td>20</td>
        </tr>
      </tbody>
      <div className={classes['table-btn']}>
        <button>Hủy</button>
        <button>Thêm mới</button>
      </div>
    </div>
  );
};

export { FncComponent6Table };
