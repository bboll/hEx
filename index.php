<script language="php">
</script>
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<title>hEx</title>
<meta name="author" content="hEx"><meta name="description" content="Makes cutting Facebook ties easy.">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-
combined.min.css" rel="stylesheet">
<style type="text/css"></style>
</head>

<body>
<div class="navbar navbar-inverse navbar-fixed-top">
  <div class="navbar-inner">
    <div class="container-fluid">
      <a data-toggle="collapse" data-target=".nav-collapse" class="btn btn-navbar">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span></a>
      <a href="#" class="brand">hEx</a>
      <div class="nav-collapse collapse">
        <p class="navbar-text pull-right" id="FBUser">Not logged in</p>
        <ul class="nav">
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </div>
  </div>
</div>
<div class="container-fluid">
  <div class="row-fluid">
    <div class="span9">
      <div id="welcome-unit" class="hero-unit">
        <h1>hEx</h1>
        <p></p>
        <p><a id="primary-btn" class="btn btn-primary btn-large">Go<i class="icon-play icon-white"></i></a></p>
        <p></p>
      </div>
    </div>
  </div>
</div>

<textarea id="txtbox" rows="12" columns="100">Works with jade!</textarea>

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
  };

  (function() {
      var e = document.createElement('script');
      e.type = 'text/javascript';
      e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
      e.async = true;
      document.getElementById('fb-root').appendChild(e);
      }());

      function login(){
        FB.api('/me', function(response) {
          alert('You have successfully logged in, '+response.name+"!");
          document.getElementById('FBUser').innerHTML = "Logged in as " + response.name;
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
                if (response == 0) {
                  alert('Your facebook status not updated. Give Status Update Permission.');
                }
                else {
                  alert('Your facebook status updated');
                }
              });
            }
            else {
              alert('Please log in first :)');
            }
        });
      }
</script>

<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

<script src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js"></script>

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

