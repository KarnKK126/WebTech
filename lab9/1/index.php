<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
    <title>lab9.1</title>
</head>
<body>
    <?php
        // Connect to Database
        class MyDB extends SQLite3 {
            function __construct() {
                $this->open('customers.db');
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

        // SQL SELECT
        $sql ="SELECT * from customers";

        $ret = $db->query($sql);

            echo "
            <table class=\"table\">
            <thead>
                <tr>
                <th scope=\"col\">ID</th>
                <th scope=\"col\">FirstName</th>
                <th scope=\"col\">LastName</th>
                <th scope=\"col\">Address</th>
                <th scope=\"col\">Phone</th>
                <th scope=\"col\">Email</th>
                </tr>
            </thead>";
            while($row = $ret->fetchArray(SQLITE3_ASSOC) ) {
            echo "
            <tbody>
                <tr>
                <th scope=\"row\">" . $row['CustomerId'] . "</th>
                <td>" . $row['FirstName'] ."</td>
                <td>" . $row['LastName'] ."</td>
                <td>" . $row['Address'] ."</td>
                <td>" . $row['Phone'] ."</td>
                <td>" . $row['Email'] ."</td>
                </tr>
            </tbody>";
            }
            echo "</table>";

        //loop get last row
        while($row = $ret->fetchArray(SQLITE3_ASSOC) ) {
            $lastID = $row["CustomerId"];
        }
        $db->close();
//first check var function name
        if(isset($_POST['functionname'])){
            //check value of functionname
            if ($_POST['functionname'] == "func") { func(); }
        }


        function func(){

            $db = new MyDB();
        if(!$db) {
            echo $db->lastErrorMsg();
        } else {
            echo "Opened database successfully<br>";
        }
            $lastID = $_POST['lastID'];
            $sql = "DELETE from customers where CustomerId = $lastID;";
            // echo $lastID;
            $ret = $db->exec($sql);

            $db->close();
        }
    ?>


    <form>
        <input id="lastID" name="lastID" type="hidden" value="<?php echo $lastID; ?>"/>
        <input type="submit" value="Delete last row" class="btn btn-dark"></input>
        <input type="hidden" id="functionname" name="functionname" value="func">
    </form>

    <script>

        $(document).ready(function(){
            $('form').submit(function(event){
                // event.preventDefault();
                var $form = $(this);
                var $inputs = $form.find('input');  //get input tag
                var serializedData = $form.serialize();     //  get all inputtag's value in form return obj
                $.ajax({url: "index.php",
                type: 'POST', data: serializedData , // http method

                success: function (data, status, xhr) {
                    console.log("success");
                },
                error: function (jqXhr, textStatus, errorMessage) {
                    console.log(errorMessage);
                }
            });
            });
        });
    </script>
</body>
</html>
