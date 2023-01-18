const Article = require("../models/article_model");


async function getArticle(req, res){
    try{
    const articleData = await Article.find({})
    res.send(articleData);
    }catch(e){
        res.send(e);
    }
}

async function addarticle (req, res){
    console.log(req.body);
    const article = new Article(req.body);
    article.save().then(()=>{
        res.status(201).send(article)
    }).catch((e)=>{
        res.send(e);
    })
}


module.exports = {
    getArticle,addarticle
}