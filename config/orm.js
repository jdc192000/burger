var connection = require("../config/connection.js");

// selectAll() below
var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "select * from ??;";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // insertOne() below
    insertOne: function (tableInput, val, cb) {
        var queryString = "insert into ?? set ?";
        connection.query(queryString, [tableInput, val], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // updateOne() below
    updateOne: function (tableInput, val, id, cb) {
        var queryString = "update ?? set ? where id = ?;"
        connection.query(queryString, [tableInput, val, id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // most popular burger
    mostPopular: function (tableInput, col, cb) {
        // var queryString = "select ?? as popular_burger, count(*) as popular from ?? group by ?? having count(*) = (select max(popular) from select count(*) as popular from ?? group by ??) SubQueryAlias);";

        var queryString = "select ?? as popular_burger,";
        queryString += "count(*) as popular";
        queryString += "   From  ??";
        queryString += " group by ??";
        queryString += "    having  count(*) = (";
        queryString += "    select  max(popular)";
        queryString += "    from    (";
        queryString += "    select  count(*) as popular";
        queryString += "    from ??";
        queryString += "    group by ??";
        queryString += "     ) SubQueryAlias);"

        connection.query(queryString, [col, tableInput, col, tableInput, col], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;
