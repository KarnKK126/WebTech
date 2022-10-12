<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
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
        // while($row = $ret->fetchArray(SQLITE3_ASSOC) ) {
        //     echo "ID = ". $row['CustomerId'] . "<br>";
        //     echo "FIRSTNAME = ". $row['FirstName'] ."<br>";
        //     echo "LASTNAME = ". $row['LastName'] ."<br>";
        //     echo "ADDRESS = ". $row['Address'] . "<br>";
        //     echo "PHONE = ".$row['Phone'] ."<br>";
        //     echo "EMAIL = ".$row['Email'] ."<br><br>";

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

        while($row = $ret->fetchArray(SQLITE3_ASSOC) ) {
            $lastID = $row["CustomerId"];
        }


        $sql = "DELETE from customers where CustomerId = $lastID;";

        $ret = $db->exec($sql);

        // Close database
        $db->close();

    ?>
    <form>
    <button type="submit" class="btn btn-dark">Delete Last Row</button>
    </form>
</body>
</html>
