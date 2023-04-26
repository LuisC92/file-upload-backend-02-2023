const Image = require("../models/image.model");

const postImage = (req, res) => {
  // console.log(req.body)
  Image.create(req.body)
    .then((results) => {
      if (results.affectedRows > 0) {
        res.status(201).json({
          id: results.insertId,
          message: `The image ${results.insertId} has been created`,
        });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("can't create image");
    });
};

module.exports = {
  postImage,
};
