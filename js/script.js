const routes = {
  home: `
      <header class="header-section">
        <div class="row h-100 align-items-center">
                <div id="intro" class="col-10 col-md-10 col-lg-6 col-xl-4  offset-md-1 offset-1">
                    <h1><b>Welcome to Yu-Gi-Oh!</b></h1>
                    <p>Welcome to the Beginner's Guide to Yu-Gi-Oh! This guide will help you learn the basics of the game, from rules to strategies, so you can start playing and enjoying thrilling duels right away!</p>
                    <br>
                    <a href="#sec1" class="btn">START LEARNING</a>
                </div>
        </div>
</header>


<main>



<section id="sec1">
    <div class="container-fluid p-5">
        <div class="row">
            <div class="col-md-8 offset-md-2 text-center">
                <h1>Your Starting Ultimate Guide <br> to Mastering the Game</h1><br><br>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card border-0">
                            <img src="./images/playing.png" class="rounded-top" alt="Playing with cards">
                            <div class="card-body">
                                <a href="how_to_play.html"><h2 class="card-title">How to Play</h2></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card border-0">
                            <img src="./images/cards.png" class="rounded-top" alt="Cards">
                            <div class="card-body">
                                <a href="deck_building.html"><h2 class="card-title">Deck Building</h2></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card border-0">
                            <img src="./images/locals.png" class="rounded-top" alt="Tournament">
                            <div class="card-body">
                                <a href="community.html"><h2 class="card-title">Community</h2></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="sec2">
    <div class="container-fluid p-5">
        <div class="text-center">
            <h1>THE MASTERMIND</h1><br><br>
        </div>
        <div class="row">
            <div class="col-10 offset-md-1">
                <div class="row">
                    <div class="col-md-3 offset-md-1">
                        <div class="card border-0" style="background-color: #f0e9e0;">
                            <a target="_blank" href="https://en.wikipedia.org/wiki/Kazuki_Takahashi"><img src="./images/kazuki.png" alt="Kazuki Takahashi" class="img-fluid"></a>
                        </div>
                    </div>

                    <div class="col-md-7 offset-md-1">
                        <br><br><h3>Kazuki Takahashi</h3>
                        <p style="margin-bottom: 8px;">Kazuki Takahashi was an absolute legend in the manga world, best known for creating Yu-Gi-Oh! Born on October 4, 1961, in Tokyo, Takahashi turned his imaginative ideas into an epic manga series that launched in 1996. What started as a cool story soon became a global phenomenon, blending awesome storytelling with strategic gameplay.</p>
                        <br><p style="margin-bottom: 8px;">Takahashi's journey wasn't a walk in the park, though. He faced plenty of bumps and rejections along the way, but his love for manga kept him going. Thanks to him, we have Yu-Gi-Oh! in all its glory—manga, anime, video games, and of course, the insanely popular trading card game that millions play and collect.</p>
                        <br><p>Throughout his career, Takahashi's creativity and dedication earned him tons of respect and left a mark that still influences artists and fans today. He passed away on July 4, 2022, but his legacy is far from over. His work continues to inspire and entertain, bringing joy to people all over the world. Talk about leaving a lasting impact!</p>
                        <a href="kazuki_details.html" class="btn btn-danger btn-primary mt-3">View More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section id="sec3">
    <div class="container p-5">
        <div class="text-center">
            <h1>Yu-Gi-Oh! Animes</h1><br><br>
        </div>
        <div id="carousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-target="#carousel" data-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-target="#carousel" data-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-target="#carousel" data-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-target="#carousel" data-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-target="#carousel" data-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-target="#carousel" data-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-target="#carousel" data-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-target="#carousel" data-slide-to="7" aria-label="Slide 8"></button>
            </div>

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="images/1.avif" class="d-block w-100" alt="Image 1">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Yu-Gi-Oh! Duel Monsters</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="images/2.avif" class="d-block w-100" alt="Image 2">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Yu-Gi-Oh! GX</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="images/3.avif" class="d-block w-100" alt="Image 3">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Yu-Gi-Oh! 5D's</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="images/4.avif" class="d-block w-100" alt="Image 4">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Yu-Gi-Oh! Zexal</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="images/5.avif" class="d-block w-100" alt="Image 5">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Yu-Gi-Oh! Arc-V</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="images/6.avif" class="d-block w-100" alt="Image 6">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Yu-Gi-Oh! Vrains</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="images/7.avif" class="d-block w-100" alt="Image 7">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Yu-Gi-Oh! Sevens</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="images/8.avif" class="d-block w-100" alt="Image 8">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Yu-Gi-Oh! Go Rush!!</h5>
                    </div>
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-target="#carousel" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-target="#carousel" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</section>

<section id="sec4">
    <div class="container p-5">
    <div class="row">
      <div class="col-md-9 mx-auto">
        <h1 class="text-center">Why Should You Start Playing Yu-Gi-Oh!</h1>
        <p class="lead text-center">Discover the thrill, strategy, and community behind one of the most iconic trading card games of all time!</p>
        
        <div class=" cardbg card my-4">
          <div class="card-body">
            <h5 class="card-title">A Game of Strategy and Skill</h5>
            <p class="card-text">Yu-Gi-Oh! is more than just drawing cards, it's about building strategies, predicting your opponent’s moves, and creating combos to win. It's a game that keeps your mind sharp and engaged.</p>
          </div>
        </div>
  
        <div class="cardbg card my-4">
          <div class="card-body">
            <h5 class="card-title">Connect with a Global Community</h5>
            <p class="card-text">With millions of players worldwide, Yu-Gi-Oh! brings together people of all ages to share their love for the game, whether online or at local tournaments. It’s a great way to make friends and be part of something big.</p>
          </div>
        </div>
  
        <div class="cardbg card my-4">
          <div class="card-body">
            <h5 class="card-title">Build Your Own Unique Deck</h5>
            <p class="card-text">Express your creativity by building a deck that reflects your personality and play style. The vast array of cards lets you create countless strategies and surprise your opponents.</p>
          </div>
        </div>
        
        <div class="text-center mt-4">
          <a href="how_to_play.html" class="btn btn-primary">How to play</a>
        </div>
      </div>
    </div>
</div>
  </section>

<section id="theme-switcher" class="container text-center mt-5">
    <button id="toggle-dark-theme" class="btn btn-dark btn-lg">Switch to Dark Theme</button>
    <br><br><br>
</section>

</main>
  `,
  "how-to-play": `
      <main>

<section style="margin-top: 90px;" id="video-section" class="container-fluid p-5">
    <div class="row">
        <div class="col-md-8 offset-md-2 text-center">
            <h1>Learn How to Play Yu-Gi-Oh!</h1><br>
            <div id="showhide2">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe 
                    class="embed-responsive-item" 
                    src="https://www.youtube.com/embed/bGZOiTcHLzM" 
                    title="How to Play Yu-Gi-Oh!" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
          </div>
        <br>
        <button id="toggle-video" class="btn btn-primary">Show Video</button>

        </div>
    </div>
</section>

<section id="card-types" class="py-5">
    <div class="container text-center">
        <h2 class="mb-4">Card Types</h2>
        <br><p><i>Click on a card to learn more about it!</i></p>
        <div class="row">
            <div class="col-md-4">
                <img src="images/dk.jpg" alt="Monster Card" class="img-fluid mb-3" data-toggle="modal" data-target="#monsterModal">
                <h4>Monster Cards</h4>
            </div>

            <div class="col-md-4">
                <img src="images/dh.jpg" alt="Spell Card" class="img-fluid mb-3" data-toggle="modal" data-target="#spellModal">
                <h4>Spell Cards</h4>
            </div>

            <div class="col-md-4">
                <img src="images/tp.webp" alt="Trap Card" class="img-fluid mb-3" data-toggle="modal" data-target="#trapModal">
                <h4>Trap Cards</h4>
            </div>
        </div>
    </div>

    <div class="modal fade" id="monsterModal" tabindex="-1" aria-labelledby="monsterModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="monsterModalLabel">Monster Cards</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    
                </div>
                <div class="modal-body">
                    Monster Cards are used to attack your opponent and defend your Life Points. They have Levels, Attributes, and Types.
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="spellModal" tabindex="-1" aria-labelledby="spellModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="spellModalLabel">Spell Cards</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    
                </div>
                <div class="modal-body">
                    Spell Cards provide various effects to support your strategy. They can be played during your Main Phase.
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="trapModal" tabindex="-1" aria-labelledby="trapModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="trapModalLabel">Trap Cards</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    
                </div>
                <div class="modal-body">
                    Trap Cards are activated in response to your opponent's moves. Set them face-down first, and then activate at the right moment.
                </div>
            </div>
        </div>
    </div>
</section>

<section id="game-phases" class="container py-5">
    <h2 class="text-center mb-4">Phases of the Game</h2>
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Draw Phase</h5>
          </div>
          <div class="card-body">
            <p>At the beginning of the turn, the player draws one card from their deck.</p>
          </div>
        </div>
      </div>
  
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Standby Phase</h5>
          </div>
          <div class="card-body">
            <p>Effects that activate during this phase, such as continuous effects, are triggered here.</p>
          </div>
        </div>
      </div>
  
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Main Phase 1</h5>
          </div>
          <div class="card-body">
            <p>This is when you can summon monsters, activate spells, and set traps.</p>
          </div>
        </div>
      </div>
    </div>
  
    <div class="row mt-4">
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Battle Phase</h5>
          </div>
          <div class="card-body">
            <p>The player can attack their opponent's monsters or life points here.</p>
          </div>
        </div>
      </div>
  
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Main Phase 2</h5>
          </div>
          <div class="card-body">
            <p>After the Battle Phase, players can perform additional actions like setting monsters or spells.</p>
          </div>
        </div>
      </div>
  
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">End Phase</h5>
          </div>
          <div class="card-body">
            <p>Effects that activate during the End Phase are triggered here, and the turn ends.</p>
          </div>
        </div>
      </div>
    </div>
</section>

<section id="winning-conditions">
<div  class="container py-5">
  <h2 class="text-center mb-4">Winning Conditions</h2>

  <div class="row align-items-center mb-4">
    <div class="col-md-6 order-md-1">
      <img src="images/lp.png" alt="Life Points" class="img-fluid">
    </div>
    <div class="col-md-6 order-md-2">
      <h5>Reduce Opponent's Life Points to 0</h5>
      <p>The primary way to win the game is by reducing your opponent's Life Points to 0 through direct attacks or effect damage.</p>
    </div>
  </div>
<hr>
  <div class="row align-items-center mb-4">
    <div class="col-md-6 order-md-2">
      <img src="images/do.png" alt="Deck Out" class="img-fluid">
    </div>
    <div class="col-md-6 order-md-1">
      <h5>Deck Out</h5>
      <p>If your opponent is unable to draw a card during the Draw Phase because their deck is empty, they lose the game.</p>
    </div>
  </div>
<hr>
  <div class="row align-items-center mb-4">
    <div class="col-md-6 order-md-1">
      <img src="images/ex.jpg" alt="Special Victory" class="img-fluid">
    </div>
    <div class="col-md-6 order-md-2">
      <h5>Special Victory Conditions</h5>
      <p>There are certain cards that allow players to win the game under specific conditions, such as "Exodia the Forbidden One" or "Destiny Board."</p>
    </div>
  </div>
<hr>
  <div class="row align-items-center mb-4">
    <div class="col-md-6 order-md-2">
      <img src="images/timer.jpg" alt="Time Limit" class="img-fluid">
    </div>
    <div class="col-md-6 order-md-1">
      <h5>Time Limit</h5>
      <p>In tournament settings, if time runs out, the game ends, and the player with the most Life Points remaining wins.</p>
    </div>
  </div>
</div>
</section>

</main>
  `,
  "deck-building": `
      <main>

<section id="resources" class="container py-5">
  <div class="row align-items-center">
    <div class="col-md-6">
      <img src="images/duelingbook.jpg" alt="Deck Building Resources" class="img-fluid rounded">
    </div>
    <div class="col-md-6">
      <h3>Best Resources for Deck Building</h3>
      <ul class="list-unstyled">
        <li class="mb-4">
          <strong><a href="https://www.yugioh-card.com" target="_blank" rel="noopener noreferrer">Yu-Gi-Oh! Official Website</a></strong>
          <p>The official source for rules, banlists, and product releases.</p>
        </li>
        <li class="mb-4">
          <strong><a href="https://www.ygoprodeck.com" target="_blank" rel="noopener noreferrer">YGOPRODeck</a></strong>
          <p>A hub for deck ideas, card reviews, and community discussions.</p>
        </li>
        <li class="mb-4">
          <strong><a href="https://www.duelingbook.com" target="_blank" rel="noopener noreferrer">DuelingBook</a></strong>
          <p>An online platform to test your deck against others in a virtual setting.</p>
        </li>
        <li>
          <strong><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></strong>
          <p>Explore tutorials and strategies from top players and creators.</p>
        </li>
      </ul>
    </div>
  </div>
</section>

<section id="drag">
<div class="container py-5">
    <h2 class="text-center mb-4">Add a Card to The Deck</h2>
    <div class="row">
      <div class="col-md-2 offset-md-3">
        <div id="placeholder" ondrop="drop(event)" ondragover="allowDrop(event)">
          DECK
        </div>
      </div>
      <div class="col-md-6 text-center">
        <img
          id="card"
          src="images/sibirski.webp"
          draggable="true"
          ondragstart="drag(event)"
          alt="Card"
          class="img-fluid"
        />
      </div>
    </div>
  </div>  
</section>

<section id="gallery">
  <div class="container py-5">
    <h2 class="text-center mb-4">Current META Yu-Gi-Oh! Cards</h2>
    <div class="row">
      <div class="col-md-3 col-sm-6 mb-4">
        <img src="./images/sp.png" alt="S:P Little Knight" class="img-fluid thumbnail" data-full="/images/sp.png">
        <h5 class="text-center mt-2">S:P Little Knight</h5>
      </div>
      <div class="col-md-3 col-sm-6 mb-4">
        <img src="./images/ip.png" alt="I:P Masquerena" class="img-fluid thumbnail" data-full="/images/ip.png">
        <h5 class="text-center mt-2">I:P Masquerena</h5>
      </div>
      <div class="col-md-3 col-sm-6 mb-4">
        <img src="./images/typhoon.png" alt="TY-PHON - Sky Crisis" class="img-fluid thumbnail" data-full="/images/typhoon.png">
        <h5 class="text-center mt-2">TY-PHON - Sky Crisis</h5>
      </div>
      <div class="col-md-3 col-sm-6 mb-4">
        <img src="./images/zeus.png" alt="AA-ZEUS - Sky Thunder" class="img-fluid thumbnail" data-full="/images/zeus.png">
        <h5 class="text-center mt-2">AA-ZEUS - Sky Thunder</h5>
      </div>
      <div class="col-md-3 col-sm-6 mb-4">
        <img src="./images/ash.png" alt="Ash Blossom" class="img-fluid thumbnail" data-full="/images/ash.png">
        <h5 class="text-center mt-2">Ash Blossom</h5>
      </div>
      <div class="col-md-3 col-sm-6 mb-4">
        <img src="./images/fuwalos.png" alt="Mulcharmy Fuwalos" class="img-fluid thumbnail" data-full="/images/fuwalos.png">
        <h5 class="text-center mt-2">Mulcharmy Fuwalos</h5>
      </div>
      <div class="col-md-3 col-sm-6 mb-4">
        <img src="./images/purulia.png" alt="Mulcharmy Purulia" class="img-fluid thumbnail" data-full="/images/purulia.png">
        <h5 class="text-center mt-2">Mulcharmy Purulia</h5>
      </div>
      <div class="col-md-3 col-sm-6 mb-4">
        <img src="./images/dominus.png" alt="Dominus Impulse" class="img-fluid thumbnail" data-full="/images/dominus.png">
        <h5 class="text-center mt-2">Dominus Impulse</h5>
      </div>
    </div>
  </div>
  
  <div id="modal" class="modal">
    <span id="close" class="close">&times;</span>
    <img id="modal-image" class="modal-content" alt="Full Image">
  </div>
</section>

<section id="cardSec">
  <div id="cardSection" class="container py-5">
    <h2 class="text-center mb-4">Yu-Gi-Oh! Cards & Prices</h2>
    <div id="cardContainer" class="row"></div>
  </div>

<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Edit Card</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="editForm">
          <div class="mb-3">
            <label for="editName" class="form-label">Card Name</label>
            <input type="text" class="form-control" id="editName" required>
          </div>
          <div class="mb-3">
            <label for="editPrice" class="form-label">Price</label>
            <input type="text" class="form-control" id="editPrice" required>
          </div>
          <div class="mb-3">
            <label for="editDescription" class="form-label">Description</label>
            <textarea class="form-control" id="editDescription" rows="3" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </form>
      </div>
    </div>
  </div>
</div>
</section>

<section id="email-section" class="py-5">
    <div class="text-center">
      <h2>Contact Amela Vatres for Deck Building Tips</h2>
      <p class="lead mb-4">Send an email to our world champion Amela Vatres for any deck building tips or advice!</p>
  
      <img style="width: 600px;" src="images/trophy.png" alt="Amela's Trophy" class="img-fluid mb-4">
  
      <form action="mailto:amela.vatres@stu.ibu.edu.ba" method="post" enctype="text/plain">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <label for="name" class="d-block">Your Name:</label>
              <input type="text" id="name" name="name" class="form-control mb-3" required>
  
              <label for="message" class="d-block">Message:</label>
              <textarea id="message" name="message" rows="4" class="form-control mb-3" required></textarea>
  
              <button style="background-color: #e9192d;" type="submit" class="btn btn-primary btn-block">Send Email</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
  
  
  

</main>
  `,
  community: `
      <main>

  <section id="tournament-info">
    <div class="container-fluid p-0">
      <div class="hero-image position-relative text-center text-white" style="background: url('images/background1.jpg') no-repeat center/cover; height: 400px;">
        <div class="overlay position-absolute w-100 h-100 d-flex flex-column justify-content-center" style="background: rgba(0, 0, 0, 0.5);">
          <h1 class="display-4">Local Yu-Gi-Oh! Tournament</h1>
          <p style="color: white;" class="lead">Join us for the ultimate duel of champions!</p>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <h2 class="text-center mb-4">Tournament Details</h2>
      <div id="showhide">
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Venue:</strong> Aria Shopping Mall</li>
        <li class="list-group-item"><strong>Date:</strong> 23th November 2024</li>
        <li class="list-group-item"><strong>Time:</strong> 10:30 AM - 4:00 PM</li>
        <li class="list-group-item"><strong>Rules:</strong> Official Konami guidelines</li>
        <li class="list-group-item"><strong>Prizes:</strong> Rare cards, merchandise, and packs</li>
      </ul>
    </div>
    <br>
    <button id="toggle-button" class="btn btn-primary">Show Tournament Info</button>
    </div>
   
    <hr>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6 mb-4">
          <img src="images/turnir.jpg" class="img-fluid rounded" alt="Tournament at Aria">
        </div>
        <div class="col-md-6 mb-4">
          <img src="images/tropik.jpg" class="img-fluid rounded" alt="Tropik">
        </div>
      </div>
    </div>
  </section>
  

<section id="distance-calculator" class="py-5">
  <div class="container text-center">
    <h2>Find Your Distance to the Tournament Venue</h2>
    <p>Click the button below to calculate your distance to the tournament venue at Aria Shopping Mall.</p>
    <br><p style="font-size: 15px;"><i>If it displays "Unable to retrieve your location." please use another browser</i></p>
    <button id="calculate-distance" class="btn btn-primary mt-3">Calculate Distance</button>
    <p id="distance-result" class="mt-4 text-info" style="font-size: 1.5rem;"></p>
  </div>
</section>

<section id="weather" class="py-5">
  <div class="container text-center">
    <h2 class="mb-4">Check the Weather in Your City</h2>
    <form id="weatherForm" class="mb-4">
      <div class="form-group">
        <label for="city">Enter City Name:</label>
        <input type="text" id="city" class="form-control mx-auto" style="max-width: 300px;" placeholder="City name" required>
      </div>
      <button type="submit" class="btn btn-danger btn-primary mt-3">Get Weather</button>
    </form>
    <div id="weatherResult" class="mt-4">
      
    </div>
  </div>
</section>


<section id="table" class="p-5">
  <div class="container my-4">
    <h2 class="text-center">Tuzla Regionals Results</h2><br>
    <div class="table-responsive">
      <table class="table table-bordered table-hover text-center align-middle">
        <thead class="table-dark">
          <tr>
            <th>Placement</th>
            <th>Player</th>
            <th>Archetypes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Winner</td>
            <td>🇷🇸 Marko Bundalo</td>
            <td><span class="badge bg-warning text-dark">Mimighoul</span></td>
          </tr>
          <tr>
            <td>Runner-Up</td>
            <td>🇧🇦 Meric Lihic</td>
            <td><span class="badge bg-info text-dark">Tenpai Dragon</span></td>
          </tr>
          <tr>
            <td>Top 4</td>
            <td>🇷🇸 Ivan Stojakovic</td>
            <td><span class="badge bg-danger">Fire King</span></td>
          </tr>
          <tr>
            <td>Top 4</td>
            <td>🇷🇸 Nikola Spasic</td>
            <td><span class="badge bg-danger">Snake-Eye</span></td>
          </tr>
          <tr>
            <td>Top 8</td>
            <td>🇷🇸 Djordje Nikolic</td>
            <td><span class="badge bg-danger">Snake-Eye</span></td>
          </tr>
          <tr>
            <td>Top 8</td>
            <td>🇷🇸 Aleksandar Josipovic</td>
            <td><span class="badge bg-success">Salamangreat</span></td>
          </tr>
          <tr>
            <td>Top 8</td>
            <td>🇷🇸 Kristijan Stankovic</td>
            <td><span class="badge bg-primary">Dragon Link</span></td>
          </tr>
          <tr>
            <td>Top 8</td>
            <td>🇧🇦 Armin Porca</td>
            <td><span class="badge bg-secondary">Chimera</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section  id="faq">
<div class="container py-5">
  <h2 class="text-center mb-4">Frequently Asked Questions (FAQ)</h2>

  <div class="accordion-container">
    <div class="accordion-card">
      <h3 class="accordion-card__header">
        What is Yu-Gi-Oh!?
        <span class="icon">+</span>
      </h3>
      <p class="accordion-card__content">
        Yu-Gi-Oh! is a popular Japanese trading card game created by Kazuki Takahashi. It revolves around players dueling each other with decks of cards representing magical creatures, spells, and traps.
      </p>
    </div>
<br>
    <div class="accordion-card">
      <h3 class="accordion-card__header">
        How do you win a Yu-Gi-Oh! duel?
        <span class="icon">+</span>
      </h3>
      <p class="accordion-card__content">
        A player wins by reducing their opponent’s Life Points to zero or fulfilling a specific win condition outlined by certain cards.
      </p>
    </div>
<br>
    <div class="accordion-card">
      <h3 class="accordion-card__header">
        What is a "Meta" in Yu-Gi-Oh!?
        <span class="icon">+</span>
      </h3>
      <p class="accordion-card__content">
        The "Meta" refers to the current popular deck strategies and archetypes that dominate the competitive scene, often determined by new releases and tournament results.
      </p>
    </div>
<br>
    <div class="accordion-card">
      <h3 class="accordion-card__header">
        What are the main card types in Yu-Gi-Oh!?
        <span class="icon">+</span>
      </h3>
      <p class="accordion-card__content">
        The main card types in Yu-Gi-Oh! include Monster Cards, Spell Cards, and Trap Cards. Monsters are used to battle, Spells provide various effects, and Traps are activated in response to an opponent's actions.
      </p>
    </div>
<br>
    <div class="accordion-card">
      <h3 class="accordion-card__header">
        How do you build a Yu-Gi-Oh! deck?
        <span class="icon">+</span>
      </h3>
      <p class="accordion-card__content">
        A Yu-Gi-Oh! deck typically consists of 40-60 cards, including a mix of Monsters, Spells, and Traps. Players can include cards based on a specific theme or strategy, often called an archetype.
      </p>
    </div>
  </div>
</div>
</section>


<section id="form" class="py-5">
  <div class="container">
    <h2 class="text-center mb-4">Sign Up for Our Local Yu-Gi-Oh! Tournament</h2>
    <form id="tournamentForm" action="https://jsonplaceholder.typicode.com/posts" method="POST" novalidate>
      <div class="form-group">
        <label for="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" class="form-control" required placeholder="Enter your full name">
      </div>

      <div class="form-group">
        <label for="email">Email Address:</label>
        <input type="email" id="email" name="email" class="form-control" required placeholder="Enter your email address">
      </div>

      <div class="form-group">
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" class="form-control" required placeholder="Enter your phone number">
      </div>

      <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" class="form-control" required min="13" max="100" placeholder="Enter your age">
      </div>

      <div class="form-group">
        <label for="experience">Experience Level:</label>
        <select id="experience" name="experience" class="form-control" required>
          <option value="">Select your experience level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div class="form-group">
        <label for="deck">Deck Type:</label>
        <input type="text" id="deck" name="deck" class="form-control" required placeholder="Enter your deck type (e.g., Blue-Eyes)">
      </div>

      <div class="form-group">
        <label for="favoriteCard">Favorite Card:</label>
        <input type="text" id="favoriteCard" name="favoriteCard" class="form-control" required placeholder="Enter your favorite Yu-Gi-Oh! card">
      </div>

      <div class="form-group">
        <label for="tournamentPreferences">Tournament Preferences (Optional):</label>
        <textarea id="tournamentPreferences" name="tournamentPreferences" class="form-control" rows="3" placeholder="Enter any preferences you have"></textarea>
      </div>

      <div class="form-group">
        <label for="tournamentDate">Preferred Tournament Date:</label>
        <input type="date" id="tournamentDate" name="tournamentDate" class="form-control" required>
      </div>

      <div class="form-group">
        <label for="password">Create Password:</label>
        <input type="password" id="password" name="password" class="form-control" required placeholder="Create a password">
        <small id="passwordHelp" class="form-text text-muted">
          Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.
        </small>
        <div class="progress mt-2">
          <div id="passwordStrengthBar" class="progress-bar" role="progressbar" style="width: 0%;" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      

      <div class="form-group form-check">
        <input type="checkbox" id="agree" name="agree" class="form-check-input" required>
        <label class="form-check-label" for="agree">I agree to the tournament rules and regulations</label>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</section>
</main>
  `,
  login: `
        <section id="login-page" class="py-5">
  <div class="container text-center">
    <h2 class="mb-4">Log In</h2>
    <p class="mb-4">Please enter your credentials to access your account.</p>
    <form id="loginForm" class="mb-4" novalidate>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" class="form-control mx-auto" style="max-width: 300px;" placeholder="Enter your username" required>
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" class="form-control mx-auto" style="max-width: 300px;" placeholder="Enter your password" required>
      </div>

      <button type="submit" class="btn btn-primary mt-3">Log In</button>
    </form>

    <p id="loginMessage" class="mt-4 text-danger" style="display: none;">Invalid username or password. Please try again.</p>
  </div>
</section>
    `

};

function renderRoute(route) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (!isLoggedIn && route !== 'login') {
    window.location.hash = 'login';
    return;
  }

  const appDiv = document.getElementById("app");
  appDiv.innerHTML = routes[route] || `<h1>404 - Page Not Found</h1>`;
  if (route === 'login') {
    addLoginFormEventListener();
  }
}

// Handle Login Form Submission
function addLoginFormEventListener() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('data/users.json'); 
                const data = await response.json();
                const users = data.users;

                const user = users.find(user => user.username === username && user.password === password);

                if (user) {
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('username', user.username);

                    window.location.hash = 'home';
                } else {
                    document.getElementById('loginMessage').style.display = 'block'; 
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        });
    }
}

//Redirect if Not Logged In
window.addEventListener('load', function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username');

    if (!isLoggedIn) {
        if (!window.location.hash.includes('login')) {
            window.location.hash = 'login';
        }
    } else {
        if (window.location.hash.includes('home')) {
            const appDiv = document.getElementById('app');
            if (appDiv) {
                appDiv.innerHTML += `<h1 class="text-center mt-5">Hello, ${username}!</h1>`;
            }
        }
    }
});

//Read Cookies
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

//Render Routes
function renderRoute(route) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn && route !== 'login') {
        window.location.hash = 'login';
        return;
    }

    const appDiv = document.getElementById('app');
    appDiv.innerHTML = routes[route] || `<h1>404 - Page Not Found</h1>`;

    if (route === 'login') {
        addLoginFormEventListener();
    }

    if (route === 'home' && isLoggedIn) {
        const username = localStorage.getItem('username');
        appDiv.innerHTML += `<h1 class="text-center mt-5">Hello, ${username}!</h1>`;
    }
}



//Navigation and Routing
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const route = e.target.getAttribute("data-route");
            window.history.pushState({}, "", `#${route}`);
            renderRoute(route);
            highlightActiveLink(route);
        });
    });

    function highlightActiveLink(route) {
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("data-route") === route) {
                link.classList.add("active");
            }
        });
    }

    // Handle initial load
    const initialRoute = window.location.hash.slice(1) || "home";
    renderRoute(initialRoute);
    highlightActiveLink(initialRoute);

    // Handle back/forward navigation
    window.addEventListener("popstate", () => {
        const route = window.location.hash.slice(1);
        renderRoute(route);
        highlightActiveLink(route);
    });

    window.addEventListener('hashchange', () => {
      const route = window.location.hash.slice(1);
      renderRoute(route);
  });

  // Dropdown
  const toggleBtn = document.querySelector('.toggle_btn');
  const toggleBtnIcon = document.querySelector('.toggle_btn i');
  const dropDownMenu = document.querySelector('.dropdown');

  if (toggleBtn) {
      toggleBtn.onclick = function () {
          dropDownMenu.classList.toggle('open');
          const isOpen = dropDownMenu.classList.contains('open');
          toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      };
  }

  // Drag and Drop
  const card = document.getElementById('card');
  const placeholder = document.getElementById('placeholder');

  function allowDrop(ev) {
      ev.preventDefault();
  }

  function drag(ev) {
      ev.dataTransfer.setData('text', ev.target.id);
  }

  function drop(ev) {
      ev.preventDefault();
      const data = ev.dataTransfer.getData('text');
      ev.target.innerHTML = '';
      ev.target.appendChild(document.getElementById(data));
  }

  if (card && placeholder) {
      card.addEventListener('dragstart', drag);
      placeholder.addEventListener('dragover', allowDrop);
      placeholder.addEventListener('drop', drop);
  }

  // Gallery
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const closeBtn = document.getElementById('close');
  const thumbnails = document.querySelectorAll('.thumbnail');

  if (modal && modalImage && closeBtn && thumbnails) {
      thumbnails.forEach(thumbnail => {
          thumbnail.addEventListener('click', () => {
              const fullImageSrc = thumbnail.getAttribute('data-full');
              modalImage.src = fullImageSrc;
              modal.style.display = 'flex';
          });
      });

      closeBtn.addEventListener('click', () => {
          modal.style.display = 'none';
      });

      modal.addEventListener('click', (e) => {
          if (e.target === modal) {
              modal.style.display = 'none';
          }
      });
  }

  // Toggle Show/Hide
  const toggleButton = document.getElementById('toggle-button');
  if (toggleButton) {
      toggleButton.addEventListener('click', function () {
          const section = document.getElementById('showhide');
          if (section.style.display === 'none' || section.style.display === '') {
              section.style.display = 'block';
              this.textContent = 'Hide Tournament Info';
          } else {
              section.style.display = 'none';
              this.textContent = 'Show Tournament Info';
          }
      });
  }

  // Toggle Show/Hide 2
  const toggleVideoButton = document.getElementById('toggle-video');
  if (toggleVideoButton) {
      toggleVideoButton.addEventListener('click', function () {
          const videoSection = document.getElementById('showhide2');
          if (videoSection.style.display === 'none' || videoSection.style.display === '') {
              videoSection.style.display = 'block';
              this.textContent = 'Hide Video';
          } else {
              videoSection.style.display = 'none';
              this.textContent = 'Show Video';
          }
      });
  }

  // Accordion
  const accordionBtnToggle = document.querySelectorAll('.accordion-card__header');
  accordionBtnToggle.forEach(button => {
      button.addEventListener('click', function () {
          this.nextElementSibling.classList.toggle('active');
          this.children[0].classList.toggle('toggleIcon');
      });
  });

  // Form Validation
   const tournamentForm = document.getElementById('tournamentForm');
   if (tournamentForm) {
    tournamentForm.addEventListener('submit', function (e) {
        e.preventDefault(); 

        let isValid = true;
        const fullName = document.getElementById('fullName');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const age = document.getElementById('age');
        const password = document.getElementById('password');

        if (!/^[a-zA-Z\s]+$/.test(fullName.value)) {
            toastr.error('Full Name should only contain letters.', 'Error');
            isValid = false;
        }
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
            toastr.error('Invalid email format.', 'Error');
            isValid = false;
        }
        if (!/^\d{9}$/.test(phone.value)) {
            toastr.error('Phone number must be 9 digits.', 'Error');
            isValid = false;
        }
        if (age.value < 13 || age.value > 100) {
            toastr.error('Age must be between 13 and 100.', 'Error');
            isValid = false;
        }
        if (isValid) {
            toastr.success('Form submitted successfully!', 'Success');
            this.submit();
        }
    });
}


  // Password Strength Checker
  const passwordInput = document.getElementById('password');
  const strengthBar = document.getElementById('passwordStrengthBar');

  if (passwordInput && strengthBar) {
      passwordInput.addEventListener('input', function () {
          const password = passwordInput.value;
          let strength = 0;

          if (password.length >= 8) strength += 25;
          if (/[A-Z]/.test(password)) strength += 25;
          if (/\d/.test(password)) strength += 25;
          if (/[\W_]/.test(password)) strength += 25;

          strengthBar.style.width = `${strength}%`;

          if (strength < 50) {
              strengthBar.className = 'progress-bar bg-danger';
          } else if (strength < 75) {
              strengthBar.className = 'progress-bar bg-warning';
          } else {
              strengthBar.className = 'progress-bar bg-success';
          }
      });
  }

  // Theme Toggle
  const themeToggle = document.getElementById('toggle-dark-theme');
  if (themeToggle) {
      themeToggle.addEventListener('click', function () {
          document.body.classList.toggle('dark-theme');
          this.textContent = document.body.classList.contains('dark-theme')
              ? 'Switch to Light Theme'
              : 'Switch to Dark Theme';
      });
  }

  
  // Data-Driven Content and Delete
  const cardContainer = document.getElementById('cardContainer');
  let cards = []; 

fetch('data/content.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    cards = data;
    renderCards();
  })
  .catch(error => {
    cardContainer.innerHTML = `<p class="text-danger">Failed to load card data: ${error.message}</p>`;
  });

function renderCards() {
  cardContainer.innerHTML = '';
  cards.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('col-md-4', 'mb-4');
    cardElement.innerHTML = `
      <div class="card">
        <img src="${card.image}" class="card-img-top" alt="${card.name}">
        <div class="card-body">
          <h5 class="card-title">${card.name}</h5>
          <p class="card-text">${card.description}</p>
          <p class="card-text"><strong>Price:</strong> ${card.price}</p>
          <button class="btn btn-danger btn-sm delete-btn" data-index="${index}">Delete</button>
        </div>
      </div>
    `;
    cardContainer.appendChild(cardElement);
  });

  addEventListeners(); 
}

function addEventListeners() {
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', handleDelete);
  });
}

function handleDelete(event) {
  const index = event.target.getAttribute('data-index');
  if (confirm('Are you sure you want to delete this card?')) {
    cards.splice(index, 1); 
    renderCards();  
  }
}


    // Form Submission with AJAX
    $(document).ready(function() {
     $('#tournamentForm').on('submit', function(e) {
        e.preventDefault(); 

        var formData = {
            fullName: $('#fullName').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            age: $('#age').val(),
            experience: $('#experience').val(),
            deck: $('#deck').val(),
            favoriteCard: $('#favoriteCard').val(),
            tournamentPreferences: $('#tournamentPreferences').val(),
            tournamentDate: $('#tournamentDate').val(),
            password: $('#password').val()
        };

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'POST',
            data: formData,
            success: function(response) {
                toastr.success('Your registration has been successfully submitted!', 'Success');
                $('#tournamentForm')[0].reset();
            },
            error: function() {
                toastr.error('There was an error submitting the form. Please try again later.', 'Error');
            }
        });
      });
    });

      

      // Toastr
      toastr.options = {
        "closeButton": true,
        "debug": false,   
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      };

      
      
      // Weather
      document.getElementById('weatherForm').addEventListener('submit', async function (e) {
        e.preventDefault();
        const city = document.getElementById('city').value.trim();
        const apiKey = '62d4bf1e1e394c8cb8f221419242212 ';
        const weatherResult = document.getElementById('weatherResult');
    
        weatherResult.innerHTML = '<p>Loading...</p>';
    
        try {
          const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
          if (!response.ok) throw new Error('City not found');
    
          const data = await response.json();
          weatherResult.innerHTML = `
            <h4>Weather in ${data.location.name}</h4>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
            <p>Humidity: ${data.current.humidity}%</p>
            <p>Wind Speed: ${data.current.wind_kph} kph</p>
          `;
        } catch (error) {
          weatherResult.innerHTML = `<p class="text-danger">${error.message}</p>`;
        }
      });

    
      
      
      

});
