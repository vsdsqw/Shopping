;
(function() {
    //实现用户名验证功能
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var submitBtn = document.getElementById("submitBtn");
    // 定义两把锁 一把决定用户名是否通过 一把决定密码是否验证通过
    var user_lock = false;
    var pass_lock = false;

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
        user_lock = true;
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
        // 验证两把锁
        if (!(user_lock && pass_lock)) {
            return;
        }

        // 发送请求
        TE.pPost("/php/login.php", {
                username: username.value,
                password: password.value
            })
            .then((data) => {
                if (!data.error) {
                    // 提示用户
                    alert(data.msg);
                    // 登录成功 跳转到列表页
                    location.href = "../index.html";
                } else {
                    throw new Error(data.msg);
                }
            })
            .catch(function(data) {
                console.log(data);
            });
    }
})();