/* Get current status */
   FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

/* fb login button */
/* 
<fb:login-button 
  scope="public_profile,email"
  onlogin="checkLoginState();">
</fb:login-button>
 */

function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }