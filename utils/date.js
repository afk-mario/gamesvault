export const OPTIONS = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
};

export const OPTIONS_FULL = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',

  hour: 'numeric',
  minute: 'numeric',
};

export function formatDate(date, options = OPTIONS) {
  return date.toLocaleString('en', options);
}

export function parseAndFormatDate(date, options = OPTIONS) {
  const parsed = new Date(date);
  return formatDate(parsed, options);
}
