var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (val, cb) {
        orm.insertOne("burgers", val, function (res) {
            cb(res);
        });
    },
    updateOne: function (val, id, cb) {
        orm.updateOne("burgers", val, id, function (res) {
            cb(res);
        });
    }, 
    mostPopular: function (cb) {
        orm.mostPopular("burgers", "burger_name", function(res) {
            cb(res);
        });
    }
};

module.exports = burger;
