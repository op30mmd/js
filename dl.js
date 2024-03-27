const got = require('got');
const fs = require('fs');

async function downloadFile(url, dest) {
    const stream = got.stream(url);
    const file = fs.createWriteStream(dest);

    stream.pipe(file);

    return new Promise((resolve, reject) => {
        file.on('finish', resolve);
        file.on('error', reject);
    });
}
downloadFile('https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.0/sweetalert.min.js', '~/')
    .then(() => console.log('File downloaded successfully'))
    .catch((err) => console.error('Error downloading file:', err));
