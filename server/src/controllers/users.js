import Users from '../procedures/users';

function all(req, res, next) {
    Users.all().then((users) => {
        res.json(users);
    });
}

function create(req, res, next) {
    const { avatar, username } = req.body;

    Users.create([avatar, username]).then((id) => {
        res.json(id);
    });
}

function read(req, res, next) {
    const id = req.params.id;

    Users.read([id]).then((user) => {
        res.json(user);
    });
}

function update(req, res, next) {
    const { id, avatar, username } = req.body;

    Users.update([id, avatar, username]).then(() => {
        res.end();
    });
}

function destroy(req, res, next) {
    const id = req.body.id;

    Users.destroy([id]).then(() => {
        res.end();
    });
}

export default {
    all,
    create,
    read,
    update,
    destroy,
};
