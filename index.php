<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>HELLO!!</h1>

<?php

function binarySearch($list, $item)
{
    $low = 0;
    $high = count($list) - 1;

    while ($low <= $high) {
        $mid = floor(($low + $high) / 2);
        $guess = $list[$mid];

        if ($guess == $item) {
            return $mid;
        } elseif ($guess > $item) {
            $high = $mid - 1;
        } else {
            $low = $mid + 1;
        }
    }

    return null;
}

echo binarySearch([1,3,5,7,9], 7);






















//    $i = 1;
//    if ($i < 3) {
//        $double = $i * 2;
//        echo $i . ' * 2 = ' . $double;
//        $i++;
//    }


?>


<script src="main.js?<?= rand(0, PHP_INT_MAX); ?>">

</script>

</body>
</html>