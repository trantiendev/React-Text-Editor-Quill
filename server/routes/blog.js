const express = require('express');
const router = express.Router();
const { Blog } = require("../models/Blog");

const { auth } = require("../middleware/auth");

//=================================
//             Blog
//=================================

router.post("/createPost", (req, res) => {

  const blog = new Blog(req.body);

  blog.save((err, postInfo) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true, postInfo
    })
  })
})

module.exports = router;
