import got from 'got';
import fs from 'fs';

async function downloadFile(url, dest) {
  const stream = got.stream(url);
  const file = fs.createWriteStream(dest);

  stream.pipe(file);

  try {
    await new Promise((resolve, reject) => {
      file.on('finish', resolve);
      file.on('error', reject);
    });
    console.log('File downloaded successfully');
  } catch (err) {
    console.error('Error downloading file:', err);
  }
}
downloadFile('https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.0/sweetalert.min.js', './')
    .then(() => console.log('File downloaded successfully'))
    .catch((err) => console.error('Error downloading file:', err));
