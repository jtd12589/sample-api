DROP PROCEDURE IF EXISTS spDeleteUser;
DELIMITER $$
CREATE PROCEDURE spDeleteUser(
    IN p_id INT
)
BEGIN
    DELETE
    FROM
        Users
    WHERE
        id = p_id;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spGetUser;
DELIMITER $$
CREATE PROCEDURE spGetUser(
    IN p_id INT
)
BEGIN

    SELECT
        *
    FROM
        Users
    WHERE
        id = p_id
    LIMIT
        1;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spGetUsers;
DELIMITER $$
CREATE PROCEDURE spGetUsers(
    
)
BEGIN

    SELECT
        *
    FROM
        Users;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spInsertUser;
DELIMITER $$
CREATE PROCEDURE spInsertUser(
    IN p_avatar TEXT,
    IN p_username VARCHAR(255)
)
BEGIN

    INSERT INTO Users (
        avatar,
        username
    )
    VALUES (
        p_avatar,
        p_username
    );

    SELECT
        LAST_INSERT_ID() AS id;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spUpdateUser;
DELIMITER $$
CREATE PROCEDURE spUpdateUser(
    IN p_id INT,
    IN p_avatar TEXT,
    IN p_username VARCHAR(255)
)
BEGIN

    UPDATE
        Users
    SET
        avatar = COALESCE(p_avatar, avatar),
        username = COALESCE(p_username, username)
    WHERE
        id = p_id
    LIMIT
        1;

END$$
DELIMITER ;