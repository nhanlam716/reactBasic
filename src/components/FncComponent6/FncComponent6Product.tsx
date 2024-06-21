import classes from "./FncComponent6.module.css";
const FncComponent6Product = () => {
  return (
    <div className={classes["product"]}>
      <button className={classes["btnProduct"]}>Sản Phẩm</button>
      <div className={classes["group"]}>
        <div className={classes["inputGroup"]}>
          <input type="text" placeholder="Sanpham3" />
          <input type="text" placeholder="sp2015" />
          <input type="text" placeholder="20" />
        </div>
        <div className={classes["btnGroup"]}>
          <button className={classes["btnGroup-item"]}>Thêm</button>
          <button className={classes["btnGroup-item"]}>Sửa</button>
          <button className={classes["btnGroup-item"]}>Xóa sản phẩm</button>
        </div>
      </div>
    </div>
  );
};

export { FncComponent6Product };
