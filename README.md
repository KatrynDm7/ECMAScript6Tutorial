# ECMAScript6Tutorial
ECMAScript 6 tutorial + webpack

###Install###
<ul>
    <li>npm i babel-loader babel-core babel-preset-es2015 babel-plugin-transform-es2015-modules-commonjs</li>
    <li>npm install</li>
    <li>use 'static &' for starting static server in terminal (Linux), cmd (Windows)</li>
</ul>

###Notes###
  if you have error like this: <br>
    " serving "." at http://127.0.0.1:8080 <br>
events.js:160 <br>
      throw er; // Unhandled 'error' event <br>
      ^

Error: listen EADDRINUSE 127.0.0.1:8080 <br>
    at Object.exports._errnoException (util.js:1036:11) <br>
    at exports._exceptionWithHostPort (util.js:1059:20) <br>
    at Server._listen2 (net.js:1252:14) <br>
    at listen (net.js:1288:10) <br>
    at net.js:1398:9 <br>
    at _combinedTickCallback (internal/process/next_tick.js:77:11) <br>
    at process._tickCallback (internal/process/next_tick.js:98:9)
    at Module.runMain (module.js:592:11) <br>
    at run (bootstrap_node.js:394:7) <br>
    at startup (bootstrap_node.js:149:9) <br>
" <br>
http://127.0.0.1:8080 - is bussy, kill proccess and restart

