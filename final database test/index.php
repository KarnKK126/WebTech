<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php</title>
</head>
<body>
    <?php

        // Connect to Database
    class MyDB extends SQLite3 {
        function __construct() {
            $this->open('wt-company.db');
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
