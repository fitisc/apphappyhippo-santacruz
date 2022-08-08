import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('db.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
db.transaction(tx => {
    tx.executeSql(
        'create table if not exists items (id integer primary key not null, name text, price integer)',
        [],
        () => {
            resolve('Table items created successfully!');
        },
        (_, err) => {
            reject(err);
        })
})
return promise;
});
}

export const inserItems = ( id, name, price ) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO items (id, name, price) VALUES(?, ?, ?)',
                [id, name, price, JSON.stringify(items)],
                (_, result) => {
                    console.log(result);
                    resolve(result)
                },
                (_, err) => {
                    console.log(err);
                    reject(err)
                }
            )
        })
    })

    return promise;
}

export const getItems = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM items',
                [],
                (_, result) => {
                    resolve(result)
                },
                (_, err) => {
                    reject(err)
                }
            )
        })}
    )

    return promise;
}

