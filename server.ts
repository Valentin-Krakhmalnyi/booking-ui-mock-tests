import express from 'express';
import path from 'path';

const app = express();
const PORT = 5500;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://127.0.0.1:${PORT}`);
});
