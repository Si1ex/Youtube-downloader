const ytdl = require('ytdl-core');

module.exports = (req, res) => {
  // Extract the URL and format parameters from the query string
  const { URL, format = 'mp3' } = req.query;

  // Set the response headers
  res.setHeader('Content-Disposition', `attachment; filename="file.${format}"`);

  // Download the video from YouTube and pipe it to the response
  ytdl(URL, {
    filter: 'audioonly',
    quality: 'highestaudio',
    format: format,
  }).pipe(res);
};
