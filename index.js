import fs from 'fs';
import minify from 'jsonminify';

console.log('Minifying...');
fs.readFile('./untrusted.json', { encoding: 'utf-8' }, (err, file) => {
  if (err) {
    throw new Error('Error reading file', err);
  }

  fs.writeFile(
    './untrusted.min.json',
    minify(file),
    {
      encoding: 'utf-8',
    },
    (err) => {
      if (err) {
        throw new Error('Error writing file', err);
      }

      console.log('Done!');
    }
  );
});
