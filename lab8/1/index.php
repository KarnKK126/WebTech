<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lab8/1</title>
</head>
<style>
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    .text-box {
        position: relative;
        display: inline-block;
        border: 1px solid rgb(118, 118, 118);
        padding: 9px 165px 9px 0px;
        border-radius: 2px;
        top: 6px;
    }

    button {
        margin-top: 10px;
    }

    button:hover {
        cursor: pointer;
    }
</style>

<body>
    <form action="index.php" method="POST">
        <label>From :</label>
        <select id="from" name="from">
            <option value="THB">THB</option>
            <option value="JPY">JPY</option>
            <option value="CNY">CNY</option>
            <option value="SGD">SGD</option>
            <option value="USD">USD</option>
        </select>
        <input type="number" name="money"><br>
        <div><label>To : </label>
            <select id="to" name="to">
                <option value="THB">THB</option>
                <option value="JPY">JPY</option>
                <option value="CNY">CNY</option>
                <option value="SGD">SGD</option>
                <option value="USD">USD</option>
            </select>
            <div class="text-box" name="ans" id="ans"></div>
        </div>
        <button type="submit">Convert</button>
    </form>
    <?php
    $url = "http://10.0.15.20/lab8/restapis/currencyrate";
    $response = file_get_contents($url);
    $result = json_decode($response);
    $rate = $result->rates;

    if (isset($_POST['from'])) {
        $money_from = $_POST['from'];
        $from = $rate->$money_from;

        $money = $_POST['money'];

        $money_to = $_POST['to'];
        $to = $rate->$money_to;
    }

    ?>
    <script>
        document.getElementById("ans").innerHTML = "<?php echo round($money / $from * $to, 2) ?>";
    </script>
</body>

</html>
