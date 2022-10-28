# Calculator

### Command Line
1. ls  --- list all the items inside a particula directory
2. cd --- change the directory
3. cd~  --- go back to root
4. enter up botton  --- back to the last command code 
5. cd .. --- let it back one level
6. mkdir --- build new folder
7. touch --- creat new file
8. open/start xxx.txt (ios use open but windows using start) ---  open a file
9. atom .  --- open Atom application
10. rm xxx.rtf   ---   delete file
11. control+u   ---  clearn entire line
12. control+a   ---  cursor is going to begining
13. control+e   ---  cursor go to end
14. rm -r folder name  ---  delete folder
15. pwd   --- print where we are in the system
16. .exit   ---   exit 
17. ctrl c  (twice)  ---  process out a project
18. ctrl c (once)  --- back
19. clear   ---  clean all command line what I wrote
 
### Some Point --- REPL
1. REPL Node is in node.js
2. REPL is read evaluation print loop which basically allows user to execute code in bit sized chunks
3. We can write command line to access node REPL
4. We write code  --------   node  -------- in Hyper command and then we can access to node REPL

### Some Point --- NPM
1. npm --- package manager for exernal modules
2. it stands for node package manager 
3. npm have reusable code
4. if you download node that means it include npm

### Some Point --- Server
1. we can use Node and Express to build a server (backend)
2. in this project, server hosted on our own computer
3. localhost is the address which denotes to 0.0.0.0 or 127.0. and it chose the port 3000
4. localhost is host name and 3000 is port number (there also can chose other port number)
5. However, in this project we can know the server, but if the server in a cloud or in other user's computer, we need to find it, so we can write code __drname in our js file
6. So __dirname is a constant that allows us to grab hold of the current file location

### Some Point --- body-parser
1. body-parser can let u go into any of your routes, and you can tap into something called request.body
2. req.body is the parsed version of HTTP request
3. everytime use body-parser need to write this function --- app.use(bodyParser.urlencoded({extended: true}));

## My Step
1. code .   ---  open VS CODE application
2. nodemon xxx.js  ---  save it anytime
3. npm init   ---  creat my Express server (it is package, so it automatically generate a server)
4. I do not need to edit package-lock.json and package.json
5. I need to call Express, body-parser
6. writing get(), and post() funtion to get user request to our server and post the respon back to user
7. add listion to set which port we chose  --- app.listen(3000)
