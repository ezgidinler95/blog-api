const Users = require('../models/Users');

exports.login = async (req, res, next) => {
    console.log("burya geliyor mu");
    if (!req.body.email || !req.body.password) {
        return res.json({
            code: 404,
            message: "Gerekli 'email' ve 'password' parametreleri gönderilmedi."
        });
    }
    if (req.body.email == "ezgidinler@mail.com") {
        console.log(req.body.email, "veriler dogru geliyor mu");
        if (req.body.password == "123456") {
            res.json({
                code: 200,
                data: {
                    user
                }
            });
        }
        else {
            res.json({
                code: 400,
                message: req.body.email + " Adlı kullanıcının şifresi eşleşmedi." // hata mesajı dön.
            });
        }
    }

    const { user, error } = await Users.login(req.body);
    if (!error) {
        if (user.password === req.body.password) {
            res.json({
                code: 200,
                data: {
                    user
                }
            });
            console.log("bitti");
        }
    }

}


