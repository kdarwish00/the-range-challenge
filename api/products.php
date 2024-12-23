<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');


//If we were using a database, we would connect to it here instead of using a JSON file. This would allow us to send a query to the database to get the products we want to display.
//If it was a large database, we would also want to limit the number of products we are getting back to a reasonable number, so we would use a LIMIT clause in our query.
//We would also want to sort the products in some way, so we would use an ORDER BY clause in our query.
//We would also want to filter the products in some way, so we would use a WHERE clause in our query.

$data = file_get_contents('../data/products.json');
echo $data;
?>
