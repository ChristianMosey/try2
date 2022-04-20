In order to run the JSON server

You will need to install JSON Server
run this command on a terminal
npm install -g json-server

Afterwards, you will need to open a terminal IN VISUAL STUDIO CODE. This is because
your main terminal will run the React website. 
To do this, run:
npx json-server --watch <however you get to db.json> --port 8000

You may need to edit that <> part a couple of times in order for it to work.
The syntax is typical folder accessing stuff (e.g. "./components/Component.js")

You can run these commands after or before you npm start the site. 
