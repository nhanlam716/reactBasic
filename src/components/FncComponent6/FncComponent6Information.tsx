import classes from "./FncComponent6.module.css";

const FncComponent6Information = () => {
  return (
    <div>
      <header className={classes["header"]}>Taọ dự án</header>
      <div className={classes["information"]}>
        <div className={classes["information-left"]}>
          <div className={classes['information-item']}>
            <label htmlFor="">Tên dự án:</label>
            <input type="text" placeholder="Nhập tên dự án" />
          </div>
          <div className={classes['information-item']}>
            <label htmlFor="">Ngày bắt đầu:</label>
            <input type="date" placeholder="Nhập tên dự án" />
          </div>
          <div className={classes['information-item']}>
            <label htmlFor="">Ngày kết thúc:</label>
            <input type="date" placeholder="Nhập tên dự án" />
          </div>
        </div>
        <div className={classes["information-right"]}>
          <div className={classes['information-item']}>
            <label htmlFor="">Mã dự án:</label>
            <input type="text" placeholder="Nhập mã dự án" />
          </div>
          <div className={classes['information-item']}>
            <label htmlFor="">Tên khách hàng:</label>
            <input type="text" placeholder="Nhập tên khách hàng" />
          </div>
          <div className={classes['information-item']}>
            <label htmlFor="">Ghi chú:</label>
            <textarea name="" id="" rows={1} cols={50}>
              Ghi chú
            </textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FncComponent6Information };
