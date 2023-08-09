function registerUser() {
    let data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        currentMoney: document.getElementById('currentMoney').value,
    };

    axios.post('http://localhost:3000/user/register', data).then(res => {
        alert('Đăng ký thành công!');
        loadLogin()
    }).catch(error => {
        console.error(error);
        alert('Đăng ký không thành công. Vui lòng thử lại sau.');
    });
}

function registerForm(){
    document.getElementById('displayLogin').innerHTML = `<div class="container-xxl position-relative bg-white d-flex p-0">
     
        <!-- Sign Up Start -->
        <div class="container-fluid">
            <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
                <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                         
                            <h3>Sign Up</h3>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="username" placeholder="Username">
                            <label for="floatingText">Username</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="password" class="form-control" id="password" placeholder="Password">
                            <label for="floatingPassword">Password</label>
                        </div>                      
                            <button onclick="registerUser()"  class="btn btn-primary py-3 w-100 mb-4">register</button>
                            <hr>
                            <button onclick="loadLogin()"  class="btn btn-primary py-3 w-100 mb-4">Sign In</button>
                            
                       
                    </div>
                </div>
            </div>
        </div>
        <!-- Sign Up End -->
    </div>`
}