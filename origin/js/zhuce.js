;
(function() {
    //实现用户名验证功能
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var submitBtn = document.getElementById("submitBtn");
    // 定义两把锁 一把决定用户名是否通过 一把决定密码是否验证通过
    var user_lock = false;
    var pass_lock = false;
    // 输入框失去焦点的时候 发送请求
    username.onblur = function() {
        //获取用户输入的文本
        var val = username.value;
        //定义正则表达式
        var reg = /^[^\d]\w{6,10}$/;
        //验证是否符合正则的规则
        if (!reg.test(val)) {
            console.log("请输入符合正则验证的字符串");
            user_lock = false;
            return;
        }
        //发送请求
        TE.pGet("/php/checkusername.php", {
                username: val
            })
            .then(function(data) {
                console.log(data);
                if (!data.error) {
                    alert(data.msg);
                    user_lock = true;
                } else {
                    throw new Error(data.msg);
                }
            })
            .catch(function(err) {
                console.log(err);
                user_lock = false;
            });
    }

    password.onblur = function() {
        var val = password.value;
        var reg = /^[^\d]\w{6,10}$/;
        if (!reg.test(val)) {
            console.log("密码不符合正则验证");
            pass_lock = false;
            return;
        }
        pass_lock = true;
    }

    submitBtn.onclick = function() {
        // 思路： 我们不可以直接发送请求 而是要先看用户名和密码是否都通过了验证 都通过才发送  任何一个不通过的话 不发送请求
        // 通过判定 两把锁的状态决定是否发送请求
        if (!(user_lock && pass_lock)) {
            return;
        }
        //发送AJAX
        TE.pPost("php/regist.php", {
                username: username.value,
                password: password.value
            })
            .then(function(data) {
                if (!data.error) {
                    console.log(data.msg);
                    //成功之后跳转登录页面
                    location.href = "login.html";
                } else {
                    throw new Error(data.msg);
                }
            })
            .catch(function(e) {
                alert("注册失败");
            })
    }
})();