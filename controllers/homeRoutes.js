const router = require('express').Router();
const { Comment, Post } = require('../models');

// Works
router.get('/', async(req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: Comment,
        },
      ],
    });

    // Serialize data
    const posts = postData.map((post) => post.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Works
router.get('/post/:id', async (req, res) => {
  try {
    const postsData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
        },
      ],
    });

    const posts = postsData.get({ plain: true });
    // res.json(posts);

    res.render('post', {
      ...posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('signup');
});

module.exports = router;
