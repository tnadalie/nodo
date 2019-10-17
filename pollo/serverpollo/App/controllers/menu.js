const Menu = require('../models/menu');


exports.createMenu = (req, res, next) => {
  if (req.busboy) {
    req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      console.log(filename);
    });
    req.pipe(req.busboy);
  }

  file = req.files.FormFieldName;
  console.log("Hello" + req.body.thomas);
  // req.body.menu = JSON.stringify(JSON.parse(req.body.menu));
  const url = req.protocol + '://' + req.get('host');
  const menu = new Menu({
    title: req.body.title,
    description: req.body.description,
    imageUrl: url + '/images/' + req.file.filename,
    price: req.body.price,
    userId: req.body.userId
  });
  menu.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getMenus = (req, res, next) => {
  Menu.find().then(
    (menus) => {
      res.status(200).json(menus);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.GetMenu = (req, res, next) => {
  Menu.findOne({
    _id: req.params.id
  }).then(
    (menu) => {
      res.status(200).json(menu);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};
