const ytdl = require('ytdl-core');
const zlib = require('zlib');
const stream = require('stream');
const { promisify } = require('util');
const pipeline = promisify(stream.pipeline);

module.exports = async (req, res) => {
  // Extract the URL and format parameters from the query string
  const { URL, format = 'mp3' } = req.query;

  // Set the response headers
  console.log(`Format: ${format}`);
  res.setHeader('Content-Disposition', `attachment; filename="file.${format}"`);
  res.setHeader('Content-Encoding', 'gzip');

  // Create a stream to compress the data using gzip
  const gzip = zlib.createGzip();

  // Download the video from YouTube, pipe it through the gzip stream to compress it,
  // and then pipe it to the response
  await pipeline(
    ytdl(URL, {
      filter: 'audioonly',
      quality: 'highestaudio',
      format: format,
    }),
    gzip,
    res
  );
};
