<?php
$sql = "INSERT INTO publishers(name) VALUES(:name)";
$statement = $pdo->prepare($sql);