<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Perfecto Art Store</title>
  <link rel="stylesheet" href="styles/styles.css">
</head>
<body>


<div class="header">
  <div class="logo">Perfecto Logo</div>
  <div class="nav-search">
    <nav>
      <a href="#">New</a>
      <a href="#">Arrivals</a>
      <a href="#">Bronze</a>
      <a href="#">Stone</a>
      <a href="#">Wood</a>
    </nav>
    <input type="search" placeholder="Search Bar" class="search-bar"/>
    <a href="#" class="login">Login</a>
    <p> or </p>
    <a href="#" class="myAccount">My Account</a>
  </div>
</div>

<div class="banner"></div>

<div class="allContent">
    <div class="main-content">
        <section class="new-arrivals">
            <h2>New Arrivals</h2>
            <div class="grid">
            <?php for ($i = 1; $i <= 4; $i++): ?>
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
</div>

<div class="footer">
  <a href="#">Admin</a>
</div>

</body>
</html>