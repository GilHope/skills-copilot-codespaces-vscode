// Create web server
const express = require('express');
const app = express();
// Create a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
```

Now, if you run `node comments.js` in your terminal, you should see `Server started on http://localhost:3000` printed to the console. If you open your web browser and navigate to `http://localhost:3000`, you should see `Hello, World!` printed to the page.

## 3.2.2. Express Routing

In the previous section, we created a simple web server using Express and created a route for the root of our web server. However, in a real-world application, we will want to create multiple routes for different parts of our application. This is where Express routing comes into play.

###
