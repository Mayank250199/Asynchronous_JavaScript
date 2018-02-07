# Asynchronous_JavaScript
Using Ajax Request, Vanila Javascript, Promises and Generator

# JavaScript
JavaScript is always synchronous and single-threaded. 
If you're executing a JavaScript block of code on a page then no other JavaScript on that page will currently be executed.

JavaScript is only asynchronous in the sense that it can make, for example, Ajax calls. 
The code will stop executing until the call returns (successfully or otherwise), at which point the callback will run synchronously.
No other code will be running at this point. 
It won't interrupt any other code that's currently running.

# Ready State

0 - Request is not intialized.<br /> 
1 - Request has been setup.<br />
2 - Request is send.<br />
3 - Request is in progress.<br />
4 - Request is complete.<br />

# Ajax
AJAX stands for Asynchronous JavaScript and XML.
AJAX is a new technique for creating better, faster, and more 
interactive web applications with the help of XML, HTML, CSS, and Java Script.

# Promise
A Promise object represents a value that may not be available yet, but will be resolved at some point in the future. 
It allows you to write asynchronous code in a more synchronous fashion. For example, if you use the promise API to make an asynchronous call to a remote web service you will create a 
Promise object which represents the data that will be returned by the web service in future. 
The caveat being that the actual data is not available yet.
It will become available when the request completes and a response comes back from the web service. In the meantime the Promise object acts like a proxy to the actual data. 
Furthermore, you can attach callbacks to the Promise object which will be called once the actual data is available.

# Generator
Generators are functions which can be exited and later re-entered. 
Their context (variable bindings) will be saved across re-entrances.

