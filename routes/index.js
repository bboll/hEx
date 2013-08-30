
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('layout.jade', { title: 'Test' });
  console.log('Handling GET request');
};
