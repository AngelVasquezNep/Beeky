export const ONE_MINUTE_IN_SECONDS = 60;
export const ONE_HOUR_IN_SECONDS = 60 * ONE_MINUTE_IN_SECONDS;
export const ONE_DAY_IN_SECONDS = 24 * ONE_HOUR_IN_SECONDS;
export const ONE_YEAR_IN_SECONDS = 365 * ONE_DAY_IN_SECONDS;

const UNITS = [
  ['year(s)', ONE_YEAR_IN_SECONDS],
  ['day(s)', ONE_DAY_IN_SECONDS],
  ['hour(s)', ONE_HOUR_IN_SECONDS],
  ['minute(s)', ONE_MINUTE_IN_SECONDS],
  ['second(s)', 1],
];

/**
 * formatDuration
 * @param {Number} seconds
 * @returns {String} - Like '6 second(s)'
 */
export function formatDuration(seconds) {
  if (seconds <= 0) {
    return '0 second(s)';
  }

  const r = [];

  for (const unit of UNITS) {
    const [word, timePeriod] = unit;

    if (seconds >= timePeriod) {
      const n = parseInt(seconds / timePeriod);

      r.push(`${n} ${word}`);

      seconds -= n * timePeriod;
    }
  }

  return r.join(', ');
}

/**
 * toHHMMSS
 * @param {Number} secs
 * @returns {String} - 10:00
 */
export const toHHMMSS = (secs) => {
  const sec_num = parseInt(secs, 10);
  const hours = Math.floor(sec_num / 3600);
  const minutes = Math.floor(sec_num / 60) % 60;
  const seconds = sec_num % 60;

  return [hours, minutes, seconds]
    .map((v) => (v < 10 ? '0' + v : v))
    .filter((v, i) => v !== '00' || i > 0)
    .join(':');
};

export const dateFormat = (date, options = {}) => {
  const { locale = 'es-MX', ...restOptions } = options || {};

  const defaultOptions = {
    dateStyle: 'full',
    timeStyle: 'short',
    ...restOptions,
  };

  const dt = new Intl.DateTimeFormat(locale, defaultOptions);

  return dt.format(new Date(date));
};
