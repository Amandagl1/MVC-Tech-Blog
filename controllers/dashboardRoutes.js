const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Comment, Post } = require('../models');

router.get('/', withAuth, async(req, res) => {
    console.log('Hey');
    const userId = req.session.userId || req.session.user_id
    // try {
    //     const userData = await User.findByPk(userId, {
    //       attributes: { exclude: ['password'] },
    //       include: [{ model: Post }],
    //     });
    
    //     const user = userData.get({ plain: true });
    //     // console.log(user);
    //     res.json(user);
    //     // res.render('profile', {
    //     //   ...user,
    //     //   logged_in: true
    //     // });
    //   } catch (err) {
    //     res.status(500).json(err);
    //   }
})

module.exports = router;