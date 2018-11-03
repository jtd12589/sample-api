import mysql from 'mysql';

const config = {
    database: 'testchirp',
    user: 'root',
    password: 'helloworld',
    port: 3306,
};

const pool = mysql.createPool(config);

const formatArguments = (args = []) => {
    if (!Array.isArray(args) || args.length === 0) {
        return '();';
    }

    let sql = '(';

    for (let i = 0, length = args.length - 1; i < length; ++i) {
        sql += '?, ';
    }

    sql += '?);';

    return sql;
};

const query = (sql, args) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            } else {
                connection.query(sql, args, (err, resultsets) => {
                    connection.release();

                    if (err) {
                        reject(err);
                    } else {
                        resolve(resultsets);
                    }
                });
            }
        });
    });
};

export const procedure = (procedure, args) => {
    console.log(procedure);
    console.log(args);
    return query(`CALL ${procedure}${formatArguments(args)}`, args);
};
