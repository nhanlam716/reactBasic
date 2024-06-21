import classes from "./FncComponent5.module.css";

const FncComponent5 = () => {
  return (
    <div className={classes["table"]}>
      <div className={classes["table-1"]}>
        <thead>
          <tr>
            <th>No</th>
            <th>Language</th>
            <th>Framework</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>PHP</td>
            <td>laravel</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Adroid</td>
            <td>Webkit</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Java</td>
            <td>Meteor</td>
          </tr>
        </tbody>
      </div>
      <div className={classes["table-2"]}>
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
      </div>
    </div>
  );
};

export { FncComponent5 };
