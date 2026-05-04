import app from './app.js';

const port = 4000;

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
