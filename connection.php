<?php /*Attempt to connect to the database, but I don't have php.ini and I made all possible attempts, but I couldn't.*/
try {
    $pdo = new PDO("mysql:dbname=Mysql;host=localhost","root","--");
} catch (PDOException $e) {
    echo "Erro: ".$e->getMessage();
}
catch(Exception $e)
{
    echo "Erro generico: ".$e->getMessage();
}

?>