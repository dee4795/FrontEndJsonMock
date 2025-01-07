const jsonServer = require('json-server');
const server = jsonServer.create();
const db = {
  "posts": [
    {
      "id": "c2c6",
      "name": "Le Meridian",
      "address": "Pune Mumbai highway",
      "email": "Meridian@gmail.com",
      "services": "Chinese",
      "mobile": 9823982398
    },
    {
      "name": "CCDay",
      "address": "Cafe Road, near aws",
      "email": "CCday@gmial.com",
      "services": "Cofee",
      "mobile": 9922563075,
      "id": "997b"
    },
    {
      "id": "dfe6",
      "name": "Yewle",
      "address": "Abc Road, Near aws, Pune 3",
      "email": "Yewle@gmail.com",
      "services": "Tea",
      "mobile": 9850497035
    }
  ],
  "signup": [
    
    {
      "id": "2731",
      "name": "Taj",
      "email": "TajManagement@gmail.com",
      "mobile": 9977997790,
      "password": "Cuda#123"
    }
  ]
}; // Embed the data directly
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Add CORS headers
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

server.use(jsonServer.bodyParser);
server.use('/api', router); // Add '/api' prefix

module.exports = server;