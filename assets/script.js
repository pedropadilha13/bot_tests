var Database = require('./Database');

function isNull(element) {
    return element == null || element === false || (typeof element === typeof Object() && element.length === 0);
}

function personExists(telegramId) {
    /*Database.query(`SELECT * FROM Aluno WHERE telegramId = ${telegramId}`, (error, results, fields) => {
        if (error) {
            console.log(error);
            return;
        } else {
            if (results.length > 0) {
                return results;
            } else {
                return false;
            }
        }
    });*/
    return true;
}

module.exports = {
    isNull: isNull,
    personExists: personExists
}