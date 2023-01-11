const db = require('../db')

class Post{
    constructor(title ,body){
        this.title = title;
        this.body = body;
    }

    async save(){
        let sql = `
        INSERT INTO posts(title, body) VALUES ('${this.title}', '${this.body}')
        `;
        const [newPost, _] = await db.execute(sql);

        return newPost;
    }

    static findAll(){
        let sql = 'SELECT * FROM posts';
        return db.execute(sql);
    }

    static  findById(postId){
        let sql = `SELECT * FROM posts WHERE id = ${postId}`;
        return db.execute(sql);
    }

    static deleteById(postId){
        let sql = `DELETE FROM posts WHERE id = ${postId}`;
        return db.execute(sql);
    }
}

module.exports = Post;