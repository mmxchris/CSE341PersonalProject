const req = require("express/lib/request");
const res = require("express/lib/response");
const passport = require('passport');

module.exports = {
    ensureAuth: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.redirect('/auth/google/')
        }
    }
}