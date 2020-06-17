
BEGIN;

TRUNCATE
  "user";

INSERT INTO "user" ("username", "name", "password")
VALUES
  (
    'admin',
    'Dunder Mifflin Admin',
    -- password = "pass"
    '$2a$10$fCWkaGbt7ZErxaxclioLteLUgg4Q3Rp09WW0s/wSLxDKYsaGYUpjG'
  );

  COMMIT;