<script language="php">
</script>

<html>
<head>
  <title>hEx</title>
</head>
<body>

<script type="text/javascript" src="//api.filepicker.io/v1/filepicker.js">
filepicker.setKey('A7ciU9H3SRJiaEFhSGSXSz');
    
/*      url: 'https://...',
        data: {
        filename: 'filename.txt', 
        size: 100, 
        type: 'text/plain'*/

</script>

    

<form>
<input id="pic_url" onchange="alert(event.fpfile.url); document.getElementById('pic_url').value = "Loading...";" data-fp-services="COMPUTER,DROPBOX,FACEBOOK,FLICKR,INSTAGRAM,URL,WEBCAM" data-fp-container="modal" data-fp-mimetypes="image/*" data-fp-apikey="A7ciU9H3SRJiaEFhSGSXSz" type="filepicker">
</form>

<script type="text/javascript">
var _url = document.getElementById('pic_url').value;
</script>


<div id="fb-root"></div>
  <fb:login-button perms="email,read_stream,publish_stream"></fb:login-button>
<script type="text/javascript">
  window.fbAsyncInit = function() {
    FB.init({appId: '349867401786110', status: true, cookie: true, xfbml: true});
    FB.Event.subscribe('auth.login', function(response) {
      login();
    });
    FB.Event.subscribe('auth.logout', function(response) {
      logout();
    });
    FB.getLoginStatus(function(response) {
      if (response.session) {
      greet();
      }
    });
  };(function() {
      var e = document.createElement('script');
      e.type = 'text/javascript';
      e.src = document.location.protocol +
      '//connect.facebook.net/en_US/all.js';
      e.async = true;
      document.getElementById('fb-root').appendChild(e);
      }());
      function login(){
      FB.api('/me', function(response) {
      alert('You have successfully logged in, '+response.name+"!");
      });
      }
      function logout(){
      alert('You have successfully logged out!');
      }
      function greet(){
      FB.api('/me', function(response) {
      alert('Welcome, '+response.name+"!");
      });
      }
      function setStatus(){
      // check if user is logged in:
      FB.getLoginStatus(function(response) {
      if (response.session) {
      new_status = document.getElementById('status').value;
      FB.api(
      {
      method: 'status.set',
      status: new_status
      },
      function(response) {
      if (response == 0){
      alert('Your facebook status not updated. Give Status Update Permission.');
      }
      else{
      alert('Your facebook status updated');
      }
      }
      );
      } else {
      alert('please log in first :)');
      }
      });
      }
</script>

<script src="http://code.jquery.com/jquery-1.9.0.min.js"></script>
<script src="http://code.jquery.com/jquery-1.9.0.js"></script>
<script src="/js/bootstrap-transition.js"></script>
<script src="/js/bootstrap-alert.js"></script>
<script src="/js/bootstrap-modal.js"></script>
<script src="/j/bootstrap-dropdown.js"></script>
<script src="/js/bootstrap-scrollspy.js"></script>
<script src="/js/bootstrap-tab.js"></script>
<script src="/js/bootstrap-tooltip.js"></script>
<script src="/js/bootstrap-popover.js"></script>
<script src="/js/bootstrap-button.js"></script>
<script src="/js/bootstrap-collapse.js"></script>
<script src="/js/bootstrap-carousel.js"></script>
<script src="/js/bootstrap-typeahead.js"></script>

<script type="text/javascript">$("#primary-btn").click(function(){
  $("#welcome-unit").hide();
  
  FB.api(
    {
      method: 'fql.query',
      query: 'SELECT actor_id, message FROM stream WHERE source_id=me()'
    },
    function(response) {
      for(var i=0; i<=response.length; ++i)
      {
        document.getElementById("txtbox").innerHTML += response[i].message + '\n';
      }
    });
});
</script>

</body>
</html>

