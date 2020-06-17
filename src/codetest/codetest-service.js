const CodeService = {
  getUserWithID(db, id) {
    return db.raw(`
    select * 
    from "user"
    where id = 1;
    `)
  }
};

module.exports = CodeService;