import gulp from 'gulp';
import browser from 'browser-sync';

// Styles

export const styles = () => {
  return gulp.src('src/styles/*.css')
}

// HTML

const html = () => {
  return gulp.src('src/*.html')
}

// Scripts

const scripts = () => {
  return gulp.src('src/js/*.js')
}

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'src'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Reload

const reload = (done) => {
  browser.reload();
  done();
}
// Watcher

const watcher = () => {
  gulp.watch('src/less/*.less', gulp.series(styles, reload));
  gulp.watch('src/*.html', gulp.series(html, reload));
  gulp.watch('src/js/*.js', gulp.series(scripts, reload));
}
// Default

export default gulp.series(
  gulp.parallel(
    styles,
    html,
    scripts,
  ),
  gulp.series(
    server,
    watcher
  ));
