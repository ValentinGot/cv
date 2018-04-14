import { task, dest } from 'gulp';
import * as run from 'gulp-run';

task ('ng:build:universal', () => {
  return run('npm run build:universal', {
    silent: true
  }).exec();
});
