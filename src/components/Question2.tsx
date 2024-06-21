import image from '../.././src/assets/img/tải xuống.jfif';

const Question2 = () => {
  return (
    <div>
        <div className="helloForm">
            <h3 className="question question--red">Hello World</h3>
            <h3 className="question question--blue">Hello World</h3>
            <h3 className="question question--green">Hello World</h3>
        </div>
        <div className="styleB">
            <h2>Học lập trình có đơn giản không?</h2>
            <img src={image} alt="ảnh" />
            <h4>Đây là tiêu đề bài viết</h4>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            magnam in placeat unde necessitatibus sit perspiciatis dolor
            consequuntur aliquid eveniet, ipsam consectetur cumque facilis tempore
            fugiat eligendi laborum reiciendis corrupti rerum. 
            </p>
            <div className='btn'>
                <button className="btnRead">Đọc thêm</button>
            </div>
        </div>
        <div className='formLogin'>
            <h2>Login Form</h2>
            <div className='formInput'>
                <input type="text" placeholder='Email or Username'/>
                <input type="text" placeholder='Password'/>
                <button>Login</button>
                <a href="#">Or Login With</a>
            </div>
            <div className='btnFG'>
                <button className='btnFB'>Facebook</button>
                <button className='btnGG'>Google</button>
            </div>
            <span>Not a member?</span>
            <span><a href="#">Signup now</a></span>
        </div>
    </div>
  );
};

export { Question2 };
