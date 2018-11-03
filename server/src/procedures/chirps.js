import { procedure } from '../database';

function all(args) {
    return procedure(`spGetChirps`, args).then((res) => {
        return res[0];
    });
}

function allByUser(args) {
    return procedure(`spGetChirpsByUser`, args).then((res) => {
        return res[0];
    });
}

function create(args) {
    return procedure(`spInsertChirp`, args).then((res) => {
        return res[0][0];
    });
}
function read(args) {
    return procedure(`spGetChirp`, args).then((res) => {
        return res[0][0];
    });
}
function update(args) {
    return procedure(`spUpdateChirp`, args).then((res) => {
        return true;
    });
}
function destroy(args) {
    return procedure(`spDeleteChirp`, args).then((res) => {
        return true;
    });
}

export default {
    all,
    allByUser,
    create,
    read,
    update,
    destroy,
};
