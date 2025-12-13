const express = require('express');
const app = express();
const PORT = 8001;

app.get('/', (req, res) => {
  res.send("Backend server started successfully");
});

app.get('/api', (req, res) => {
  res.json({ "message" : "Hello from the backend!" });
});

app.get('/static',(req,res)=>{
    res.sendFile('C:\\Users\\aksha\\OneDrive\\Desktop\\React\\Internship\\HTML_CSS\\index.html')
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
