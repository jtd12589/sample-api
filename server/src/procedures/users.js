import { procedure } from '../database';

function all(args) {
    return procedure(`spGetUsers`, args).then((res) => {
        return res[0];
    });
}

function create(args) {
    return procedure(`spInsertUser`, args).then((res) => {
        return res[0][0];
    });
}
function read(args) {
    return procedure(`spGetUser`, args).then((res) => {
        return res[0][0];
    });
}
function update(args) {
    return procedure(`spUpdateUser`, args).then((res) => {
        return true;
    });
}
function destroy(args) {
    return procedure(`spDeleteUser`, args).then((res) => {
        return true;
    });
}

export default {
    all,
    create,
    read,
    update,
    destroy,
};
