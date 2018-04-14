import { task, dest } from 'gulp';
import * as path from 'path';
import * as runSequence from 'run-sequence';
import * as ts from 'gulp-typescript';
import * as run from 'gulp-run';

task ('firebase:compile:functions', () => {
  const tsconfigPath = path.join(__dirname, '../../../server/tsconfig.functions.json');
  const tsconfig = require(tsconfigPath);
  const outDir = path.join(__dirname, '../../../server', tsconfig.compilerOptions.outDir);
  const tsProject = ts.createProject(tsconfigPath);

  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(dest(outDir));
});

task ('firebase:deploy:command', () => {
  return run('firebase deploy').exec();
});

task ('firebase:deploy', (cb) => {
  runSequence(
    'clean:dist',
    'touch:dist:fakefile',
    'firebase:compile:functions',
    'ng:build:universal',
    'copy:index',
    'firebase:deploy:command',
    cb
  );
});
