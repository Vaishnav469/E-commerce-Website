How to run the project?
Step 1: create a MongoDB account.
Step 2: Create a project with the name "e-commerce" and the create a database.
step 3: now click on "connect" and click on "compass". Now copy the link and go to e-commerce-backend.
step 4: open index.js file and paste the copied link in mongoose.connect code line at where it is indicated.
step 5: add your password that you set up while you were creating the database, instead of the text that says <password>.
step 6: now open an integrated terminal inside backend and type npm install to install all dependencies.
step 7: now type node .\index.js and run it, this should give a message saying "Server running on port 4000".
step 8: now go to e-commerce-frontend and download all dependencies by running npm install and then run npm start which should start the frontend server.
step 9: if you want to add products to the e-commerce website, go to e-commerce-admin and follow the same steps as step 8, to launch the admin panel server as well.
Now, you are sucessufully running the entire application.

You can add products to sell in the admin panel, and the products that have been added will be shown in the main e-commerce website to every user. 
A user can login to the wesbite, add items to the cart, remove items from the cart, add promo codes and also proceed to checkout.
The front-end has been developed using React, while the back end has been developed using Node.js and Express.js and the database being used is Mongodb.
