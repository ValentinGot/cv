import { task, src, dest } from 'gulp';
import * as fs from 'fs';
import * as del from 'del';

task ('copy:index', () => {
  return src('src/index.html')
    .pipe(dest('functions/dist-server'));
});

task ('clean:dist', () => {
  return del('dist');
});

task ('touch:dist:fakefile', (cb) => {
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }

  return fs.open('dist/fakefile', 'w', cb);
});
