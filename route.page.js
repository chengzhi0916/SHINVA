var marked = require('marked');
var express = require('express');
var router = express.Router();
var PostModel = require('./models/post');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'html' });
});

/* GET posts page. */
router.get('/posts', function(req, res, next) {
  res.render('posts', { title: 'posts'} );
});

/* GET posts edit page. */
router.get('/posts/create', function(req, res, next) {
  res.render('create');
});

router.get('/posts/show', function (req, res, next) {
  var id = req.query.id;

  PostModel.findOne({_id: id}, function (err, post) {
    post.content = marked(post.content);
    res.render('show', {post});
  });
});

/* GET posts edit page. */
router.get('/posts/edit', function (req, res, next) {
  var id = req.query.id;

  res.render('edit', { id });
});

router.get('/tp', function(req, res, next) {
  res.render('tp', { title: 'tp'} );
});

module.exports = router;