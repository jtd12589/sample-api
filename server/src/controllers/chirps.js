import Chirps from '../procedures/chirps';

function all(req, res, next) {
    Chirps.all().then((chirps) => {
        res.json(chirps);
    });
}

function allByUser(req, res, next) {
    const userid = req.params.id;

    Chirps.allByUser([userid]).then((chirps) => {
        res.json(chirps);
    });
}

function create(req, res, next) {
    const { userid, message } = req.body;

    Chirps.create([userid, message]).then((id) => {
        res.json(id);
    });
}

function read(req, res, next) {
    const id = req.params.id;
    console.log('id', id);
    Chirps.read([id]).then((chirp) => {
        res.json(chirp);
    });
}

function update(req, res, next) {
    const { userid, message } = req.body;

    Chirps.update([userid, message]).then(() => {
        res.end();
    });
}

function destroy(req, res, next) {
    const id = req.body.id;

    Chirps.destroy([id]).then(() => {
        res.end();
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
