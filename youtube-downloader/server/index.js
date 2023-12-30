const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());

app.listen(4000, () => {
  console.log('Server Works at port 4000');
});

app.get('/download', async (req, res) => {
  try {
    const URL = req.query.URL;
    const format = req.query.format || 'mp3';

    res.header('Content-Disposition', `attachment; filename="file.${format}"`);

    // Set the Content-Type based on the format
    res.header('Content-Type', format === 'mp3' ? 'audio/mpeg' : 'video/mp4');

    await ytdl(URL, {
      quality: 'highestaudio',
      format: format,
    }).pipe(res);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
