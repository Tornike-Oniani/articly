const openConn = require('./base');

class Article {
  constructor(obj) {
    this.id = obj.id || null;
    this.title = obj.title || null;
    this.authors = obj.authors || null;
    this.keywords = obj.keywords || null;
    this.year = obj.year || null;
    this.fileName = obj.fileName || null;
    this.personalComment = obj.personalComment || null;
    this.sic = obj.sic || null;
  }
}

exports.create = async (article) => {
  const art = new Article(article);

  const db = await openConn();

  // 1. Generate file name from id

  // 2. Insert core article fields

  // 3. Insert authors & keywords (with relationships)

  // 4. Insert personal comment & SIC in user database

  //? 5. Insert ArticleID in tblUserArticles so we know which user added this article

  db.run('INSERT INTO tblArticle (Title, Year) VALUES (:Title, :Year)', {
    ':Title': art.title,
    ':Year': art.Year,
  });

  await db.close();
};
