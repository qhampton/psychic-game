# psychic-game
HW 3: JavaScript Assignment

SETUP:

1.Create a new GitHub repo Psychic-Game. Then, clone it to your computer.
  -Inside your local git repository, create an index.html.
  -While still in your local git repo, create a directory called assets.
  -cd your way into the assets folder, then make three additional folders: javascript, css and images.

2. In the javascript folder, make a file called game.js. 
  -Use the src attribute of the script tag to link to this file, rather than embedding the code directly in your HTML document.
  
3. In the css folder, make a file called style.css.
  -Also in the css folder, make a file called reset.css. Paste into it the code from the Meyerweb reset stylesheet. If you opt to use       Bootstrap instead of writing your own CSS, skip this step, and simply include a link to Bootstrap via CDN.
  
4.In the images folder, save whatever images you plan on using.

What your file organization should look like. 
      ├── assets
      |  ├── css
      |  |  └── style.css
      |  ├── images
      |  └── javascript
      |     └── game.js
      └── index.html

5. Push the above changes to GitHub.

GAME NOTES:

 -The app randomly picks a letter, and the user has to guess which letter the app chose. 
 
 -Put the following text on your page:
    -Guess what letter I'm thinking of
    -Wins: (# of times the user has guessed the letter correctly)
    -Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
    -Guesses Left: (# of guesses left. This will update)
    -Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
    -When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
    -When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
