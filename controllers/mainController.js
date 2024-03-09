const mainController = {};

mainController.index = (req, res) => {
  res.render('index');
};

mainController.contact = (req, res) => {
  res.render('contact');
};

mainController.about = (req, res) => {
  res.render('about');
};

module.exports = mainController;