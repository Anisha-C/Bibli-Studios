const checkLoggedIn = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };

  //all js files attempt to use best practices by describing function in the name of the file
  
  module.exports = checkLoggedIn;
  