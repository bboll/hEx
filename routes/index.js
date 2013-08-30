
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('test.html', { title: 'Test' });
  console.log('Handling GET request');
};
