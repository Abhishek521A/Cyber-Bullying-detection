 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form-page</title>
</head>

<body class="container">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
 <link rel="stylesheet" href="style.css">
 
  <div class="row  ">
    <form    action="https://formspree.io/f/mbjvqwvn"
  method="POST"  class="form container row" id="form" onsubmit="window.location.reload()">
    
        <h1><a href="Home.html">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
        <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
      </svg></a>FILL THIS FORM</h1>
<div class="Username  row">
    <label for="Username" >Name</label>
    <input type="text"    name="name" id="user-name" required>
    <label for="fathername">FatherName</label>
    <input type="text"  name="fathername" id="father-name" required>
    <label for="mothername">MotherName</label>
    <input type="text"  name="mothername" id="mother-name" required>
</div>
<div   class="gender">
    <label for="gender">Gender:</label>
  <select  name="gender" id="gen">
    <option value="0">Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="others">Others</option>
  </select>
</div>
        <div class="religion" id="religion col"> 
            <label for="country" >Country Name : </label>
        <select name="country" style="width: 100%;" id="country" onchange="selectCountry()" required class="row" >
            <option  value="0"> -- Select Country -- </option>
            <option value="india">India</option>
        </select>
        <label for="CurrentState">State Name : </label>
        <select name="CurrentState" style="width: 100%;" id="state" onchange="selectState()" required class="row">
            <option  value="0"> -- Select State -- </option></select>
        
        <label for="city">City Name : </label>
        <select name="city" style="width: 100%;"   id="city" required class="row" >
        <option  value="0"> -- Select City -- </option>
    </select>
        </div>
        <br><br><br>
<div class="acdemic col" id="acdemic">
    
    <label for="Education">Level of Education :</label>
    <select name="education" id="edu" class="edu row" required>
        <option value="0">--Select level of education--</option>
        <option value="10th pass">10th pass</option>
        <option value="12th pass">12th pass</option>
        <option value="Graduation">Graduation </option>
        <option value="Master">Master</option>
        <option value="None">None</option>
    </select> &nbsp;&nbsp;&nbsp;&nbsp;
 
    
</div>
  
 <div class="other-details row" id="other-details">
    <label for="mobile_number">Mobile Number</label>
    <input type="number" value="mobile_number" name="mobile_number" id="mobile-number" required inputmode="tel" class="col">
    <label for="ISSUE">Description</label>
     <textarea name="ISSUE" id="textarea" cols="30" rows="10"></textarea>
       <!-- <a href="mailto:cellcyber88@gmail.com">SEND MAIL</a> -->
 </div>
       <div class="row" >
       <input type="submit"  name="submit" ><br>
      
       </div>
      
    </form>
    <div class="container">
        <input style="float: right;" type="submit" value="NEXT" id="next" onclick="next()">
       </div>
    <div class="col">
        <!-- <button onclick="sub()">submit</button> -->
        <!-- <h4>"Stand Together, End Cyberbullying. Spread Kindness, Not Hate.
             Protect the Internet, Empower Lives. Delete Hurtful Words,<br> Create a Safer Online World for All."</h4> -->
    </div>

  </div>
  <style>
    .bi-caret-left:hover{
color: red;
    }

  </style>
     <script>
function next(){
  location.href="cb.html"
}
function relo(){
    document.location.reload();
}
     </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="javascript.js"></script>
</body>
</html>

<?php
    // Database configuration
    $servername = "localhost";
    $username = "raja";
    $password = "";
    $dbname = "form";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

   
   else{
     // Prepare and bind
     $stmt = $conn->prepare("INSERT INTO form1 (Username, fathername, mothername, gender, country, CurrentState, city, education, mobile_number,ISSUE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)");
     $stmt->bind_param("ssssssssss", $_POST['Username'], $_POST['fathername'], $_POST['mothername'], $_POST['gender'], $_POST['country'], $_POST['CurrentState'], $_POST['city'], $_POST['education'],$POST['mobile_number'],$_POST['ISSUE']);
     
     // Execute the prepared statement
     $stmt->execute();
   
     
     // Close statement and connection
     $stmt->close();
     $conn->close();
   }
?>
