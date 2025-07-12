<!DOCTYPE html>
<html>
<head>
  <title>Form Login</title>
</head>
<body>
  <form onsubmit="getFormvalue(event)">
    <label>First Name: <input type="text" name="fname" /></label><br><br>
    <label>Last Name: <input type="text" name="lname" /></label><br><br>
    <button type="submit">Submit</button>
  </form>

  <script>
    function getFormvalue(event) {
      event.preventDefault(); // prevent form from reloading the page
      
      const firstName = document.forms[0].fname.value.trim();
      const lastName = document.forms[0].lname.value.trim();

      const fullName = `${firstName} ${lastName}`.trim();

      if (fullName) {
        alert(fullName);
      } else {
        alert("Please enter your name.");
      }
    }
  </script>
</body>
</html>

