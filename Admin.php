<?php session_start(); include($_SERVER['DOCUMENT_ROOT']."/projekt/config.php"); ?>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>SOPITAS.COM</title>
    <meta charset="UTF-8">
</head>
<body>
<nav class="navigation">
    <div class="container">
        <div class="row contain nav">
            <div class="col-md-2 col-12  align-self-center">     
                <a href="#" class="logo"><img src="./img/logo.png"></a>
            </div>
            <div class="col-md-10 col-12 align-self-center">
                <nav class="center">
                    <ul>
                    <li><a href="./index.php">Home</a></li>
                    <?php include($root.'funkcije/linkovi.php'); ?>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</nav>

<main class="container center-text contain">
                <?php 
                if(isset($_SESSION['razina'])) {
                    if($_SESSION['razina'] == 1) {
                        if(strpos($_SERVER['REQUEST_URI'], "administracija.php?type=create")) {
                            include($root."funkcije/create.php");
                        }
                        else if(strpos($_SERVER['REQUEST_URI'], 'administracija.php?type=edit')) {
                            include($root."funkcije/uredi.php");
                        }
                        else if(strpos($_SERVER['REQUEST_URI'], 'administracija.php?type=delete')) {
                            include($root."funkcije/izbrisi.php");
                        }
                        else {
                            echo '<a href="administracija.php?type=create" class="createGumb">Stvori clanak</a>';

                        }
                    }
                    else { header("Location: ./index.php");}
                }
                else { header("Location: ./index.php");}

                ?>
    
</main>
<script type="text/javascript" src="./funkcije/validacija.js"></script>

 <footer class="center-text contain  align-self-center">
     <p>
        Napravljeno: 17.06.2019<br>
        Viktorija Brozinčević<br>
        TVZ
    </p>
 </footer>
</body>

</html>
