const openConn = require('./base');

class Article {
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.authors = obj.authors;
    this.keywords = obj.keywords;
    this.year = obj.year;
    this.fileName = obj.fileName;
    this.personalComment = obj.personalComment;
    this.sic = obj.sic;
  }
}

exports.create = async (article) => {
  const art = new Article(article);

  const db = await openConn();

  db.run('INSERT INTO tblArticle (Title, Year) VALUES (:Title, :Year)', {
    ':Title': art.title,
    ':Year': art.Year,
  });
};
