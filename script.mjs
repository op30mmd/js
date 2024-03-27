import got from 'got';
import fs from 'fs';
import path from 'path';

async function downloadFile(url, dest) {
    const destPath = path.join(dest, path.basename(url));

    const stream = got.stream(url);
    const file = fs.createWriteStream(destPath);

    stream.pipe(file);

    return new Promise((resolve, reject) => {
        file.on('finish', resolve);
        file.on('error', reject);
    });
}
downloadFile('https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.0/sweetalert.min.js', '/home/runner/work/js/js')
    .then(() => console.log('File downloaded successfully'))
    .catch((err) => console.error('Error downloading file:', err));