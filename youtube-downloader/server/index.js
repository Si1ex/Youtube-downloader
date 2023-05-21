const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());

app.listen(4000, () => {
  console.log('Server Works at port 4000');
});

app.get('/download', (req, res) => {
    var URL = req.query.URL;
    var format = req.query.format || 'mp3';
    res.header('Content-Disposition', `attachment; filename="file.${format}"`);
  
    ytdl(URL, {
      filter: 'audioonly',
      quality: 'highestaudio',
      format: format,
    }).pipe(res);
  });
  
