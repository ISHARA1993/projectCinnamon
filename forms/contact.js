/** @format */

(function () {
  emailjs.init("user_0Ylz3clKCCPNJahQkRZ63");
})();

function sendmail() {
  let fullName = document.getElementById("name").value;
  let userEmail = document.getElementById("email").value;
  let userSubject = document.getElementById("subject").value;
  let userMessage = document.getElementById("message").value;

  var contactParams = {
    from_name: fullName,
    from_email: userEmail,
    subject: userSubject,
    message_html: userMessage,
  };

  emailjs
    .send("service_linxr6j", "template_17n5jxs", contactParams)
    .then(function (res) {});
}

//  console.log('SUCCESS!', response.status, response.text);
// }, function(error) {
//    console.log('FAILED...', error);
