# Installation

First, clone the project.

Then, launch :

     cd server      // Server just serve angular application to browser  
     npm install    // Install server dependencies  
     npm start      // Start the server

And in a new terminal, launch :

     cd ../app      // App contain angular application
     npm install    // Install grunt dependencies (grunt plugins)
     bower install  // Install angular dependencies
     grunt watch    // Build ("compile") the front end projet and wait file modification to auto reload

