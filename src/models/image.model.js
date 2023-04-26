const database = require("../../db-config")


const create = (data)=>{
    return database
        .query("INSERT INTO images  SET ?", data)
        .then(([results]) => results);
}

module.exports = {
    create
}