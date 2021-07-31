const OPTIONS = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',

  hour: 'numeric',
  minute: 'numeric',
};

export function parseAndFormatDate(date, options = OPTIONS) {
  const parsed = new Date(date);
  return parsed.toLocaleString('en', options);
}
