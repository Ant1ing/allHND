<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Perfecto Sculptures</title>
    <link href="reset.css" rel="stylesheet">
    <link href="styles.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--[if lt IE 9]>
 <script src="/js/html5shiv.js"></script>
<![endif]-->
    <style>
        table {
            border-collapse: separate;
            border-spacing: 10px 40px;
        }
        
        .tabletext {
            font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
            color: purple;
        }
        
        .basket {
            background-color: white;
            color: white;
            border: none;
            padding 5px;
            text-align: center;
        }
        
        .centre {
            text-align: center;
        }
    </style>
</head>

<body>
    <hr class="psBlue">
    <header> <a href="index.php"><img src="images/ps_logo.png" alt="Perfecto Logo" class="logo" href="index.php"></a>
        <div class="header-content">
            <form class="search" action="search.php" method="post">
                <input type="text" placeholder="Search for your product" required class="formField">
                <input type="submit" value="Search" class="formSubmit"> </form>
        </div>
    </header>
    <hr class="psBlue">
    <div class="nav">
        <nav class="left"> <a href="index.html">New Arrivals</a> <a href="index.html">Bronze</a> <a href="index.html">Stone</a> <a href="index.html">Wood</a> </nav>
        <div class="right">
            <nav> <a href="login.php">Login</a></nav>
            <nav> <a href="register.php">Sign Up</a></nav>
        </div>
    </div>
    <main class="content">

        <div class="main-content">
            <section class="new-arrivals">
                <h2>New Arrivals</h2>
                <div class="grid">
                <?php for ($i = 1; $i <= 6; $i++): ?>
                    <div class="item">
                    <img src="https://placehold.co/200x200" alt="Placeholder image for new arrival item <?= $i ?>">
                    </div>
                <?php endfor; ?>
                </div>
            </section>

            <div class="rightHand">
                <section class="autumn-offers">
                    <h2>Autumn Offers</h2>
                    <div class="offer">
                    <img src="https://placehold.co/200x200" alt="Placeholder image for autumn offer">
                    </div>
                </section>

                <section class="featured-artist">
                    <h2>Featured Artist</h2>
                    <div class="artist">
                    <img src="https://placehold.co/200x200" alt="Placeholder image for featured artist">
                    </div>
                </section>
            </div>
        </div>
    </main>
    <hr class="psBlue">
    <footer> </footer>
</body>

</html>