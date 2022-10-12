<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <div class="container-fluid">
        <h1 class="mb-3">Employee Form</h1>
        <form>
            <div class="mb-3">
                <lable>ID : </lable><input id="UserID" type="text" style="width: 200px;">
            </div>
            <div class="mb-3">
                <lable>Name : </lable><input id="Name" type="text" style="width: 400px;">
            </div>
            <div class="mb-3">
                <lable>Age : </lable><input id="Age" type="text" style="width: 100px;">
            </div>
            <div class="mb-3">
                <lable>Salary : </lable><input id="Salary" type="text" style="width: 200px;">
            </div>
            <div class="mb-3">
                <lable>Address : </lable><textarea id="Address" cols="30" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>

    <?php

        // Connect to Database
    class MyDB extends SQLite3 {
        function __construct() {
        $this->open('Profile.db');
        }
    }

    // Open Database
    $db = new MyDB();
    if(!$db) {
        echo $db->lastErrorMsg();
    } else {
        echo "Opened database successfully<br>";
    }

    // Query process




    // Close database
    $db->close();

    ?>

</body>
</html>
