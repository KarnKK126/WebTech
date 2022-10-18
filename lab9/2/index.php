<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <title>lab9_2</title>
</head>
<body>
    <div class="container-fluid">
        <h1 class="mb-3">Employee Form</h1>
        <form method="POST">
            <div class="mb-3">
                <lable>ID : </lable><input name="ID" type="number" class="form-control" style="width: 200px;">
            </div>
            <div class="mb-3">
                <lable>Name : </lable><input name="Name" type="text" class="form-control" style="width: 400px;">
            </div>
            <div class="mb-3">
                <lable>Age : </lable><input name="Age" type="number" class="form-control" style="width: 100px;">
            </div>
            <div class="mb-3">
                <lable>Salary : </lable><input name="Salary" type="text" class="form-control" style="width: 200px;">
            </div>
            <div class="mb-3">
                <lable>Address : </lable><textarea name="Address" class="form-control" cols="30" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-dark">Submit</button>
        </form>

        <h1>List of employee</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Salary</th>
                </tr>
            </thead>

    <?php
    class MyDB extends SQLite3
    {
        function __construct()
        {
            $this->open('company.db');
        }
    }
    $db = new MyDB();

    //เช็คว่ามีค่าใน input นั้นหรือป่าว
    if (isset($_POST['ID'])) {
        $id = $_POST['ID'];
    }
    if (isset($_POST['Name'])) {
        $name = $_POST['Name'];
    }
    if (isset($_POST['Age'])) {
        $age = $_POST['Age'];
    }
    if (isset($_POST['Salary'])) {
        $salary = $_POST['Salary'];
    }
    if (isset($_POST['Address'])) {
        $address = $_POST['Address'];
        $sql = <<<EOF
        INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
        VALUES ($id,'$name',$age,'$address',$salary);
        EOF;
        $ret = $db->exec($sql);
    }
    //get ค่ามา
    $sql = "SELECT * from COMPANY";

    $ret = $db->query($sql);
    while ($row = $ret->fetchArray(SQLITE3_ASSOC)) {//loop แสดงค่า
        echo "
        <tr>
        <td>" . $row['ID'] . "</td>
        <td>" . $row['NAME'] . "</td>
        <td>" . $row['AGE'] . "</td>
        <td>" . $row['ADDRESS'] . "</td>
        <td>" . $row['SALARY'] . "</td>
        </tr>
        ";
    }
    // $sql = "DELETE from COMPANY where ID = 3";
    // $ret = $db->exec($sql);
    ?>
        </table>
    </div>
</body>
</html>
