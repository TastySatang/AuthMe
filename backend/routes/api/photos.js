const express = require('express')
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth')
const { handleValidationErrors } = require('../../utils/validation')
const { Image } = require("../../db/models");
const {
  singleMulterUpload,
  singlePublicFileUpload,
} = require("../../awsS3");

const router = express.Router();

const validatePost = [
]

// to make sure environment is properly set up
router.get('/health', asyncHandler(async (req, res) => {
  return res.json({ 'photos healtily setup': 'yes' });
}))

// Post image
router.post('/', singleMulterUpload('image'), asyncHandler(async (req, res) => {
  // console.log('fokadebug2', req.user, req.body)
  const { userId, albumId, content } = req.body
  const imageUrl = await singlePublicFileUpload(req.file);
  const image = await Image.create({
    userId,
    albumId,
    imageUrl,
    content,
  });

  return res.json({ image });
}));

// Read image


module.exports = router;
