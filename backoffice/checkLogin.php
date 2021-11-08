<?php

$username = $_POST['username'];
$password  = $_POST['password'];

if($username=='jds@mototracker.com' || $password=='jds!')
{
    header("Location:../tracker.html");
}
else
    header("Location:../index.html");