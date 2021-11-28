const router = require('express').Router();
const { Blog_Post, User } = require('../../models');

// get all users
router.get('/', (req, res) => {
  Blog_Post.findAll({
    attributes: ["id", "title", "blog_text", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username"]
      }
    ]
  })
  .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Blog_Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'title', "blog_text", 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Blog_Post.create({
    title: req.body.title,
    blog_text: req.body.blog_text,
    user_id: req.body.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;