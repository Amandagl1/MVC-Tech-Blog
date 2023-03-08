const router = require('express').Router();
const { User, Comment, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async(req, res) => {
    // console.log();
    const userId = req.session.userId || req.session.user_id
    try {
        const postData = await Post.findAll({
            where: {id: userId},
            include:[User, Comment]
        });
    
        const posts = postData.map((post) => post.get({ plain: true }));
        // res.json(posts)
        res.render('profile', {
          posts,
          logged_in: req.session.logged_in
        });
      } catch (err) {
        res.status(500).json(err);
      }
});

module.exports = router;