import * as moment from 'moment';
import * as chalk from 'chalk';
const log = console.log;

export function logger(req, res, next) {
  const now = `[${chalk.green(moment().format('YYYY-MM-DD HH:mm:ss'))}]`;
  const method = chalk.magenta(req.method);
  const route = chalk.blue(req.url);

  res.on('finish', function() {
    const code = chalk.yellow(this.statusCode);
    log(`${now} ${method} ${route} ${code}`);
  });

  next();
}