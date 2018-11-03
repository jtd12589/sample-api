DROP PROCEDURE IF EXISTS spDeleteChirp;
DELIMITER $$
CREATE PROCEDURE spDeleteChirp(
    IN p_id INT
)
BEGIN
    DELETE
    FROM
        Chirps
    WHERE
        id = p_id;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spGetChirp;
DELIMITER $$
CREATE PROCEDURE spGetChirp(
    IN p_id INT
)
BEGIN

    SELECT
        c.*,
        u.avatar,
        u.username
    FROM
        Chirps c
    JOIN
        Users u
    ON
        c.userid = u.id
    WHERE
        c.id = p_id
    LIMIT
        1;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spGetChirpsByUser;
DELIMITER $$
CREATE PROCEDURE spGetChirpsByUser(
    IN p_userid INT
)
BEGIN

    SELECT
        *
    FROM
        Chirps
    WHERE
        userid = p_userid;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spGetChirps;
DELIMITER $$
CREATE PROCEDURE spGetChirps(

)
BEGIN

    SELECT
        c.*,
        u.username,
        u.avatar
    FROM
        Chirps c
    JOIN 
        Users u
    ON
        c.userid = u.id;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spInsertChirp;
DELIMITER $$
CREATE PROCEDURE spInsertChirp(
    IN p_userid INT,
    IN p_message VARCHAR(280)
)
BEGIN

    INSERT INTO Chirps (
        userid,
        message
    )
    VALUES (
        p_userid,
        p_message
    );

    SELECT
        LAST_INSERT_ID() AS id;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spUpdateChirp;
DELIMITER $$
CREATE PROCEDURE spUpdateChirp(
    IN p_id INT,
    IN p_message VARCHAR(280)
)
BEGIN

    UPDATE
        Chirps
    SET
        message = COALESCE(p_message, message)
    WHERE
        id = p_id
    LIMIT
        1;

END$$
DELIMITER ;