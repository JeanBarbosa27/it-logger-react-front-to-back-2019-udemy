export const formatDate = (date: string): String => {
  const time = Date.parse(date);

  return new Intl.DateTimeFormat(
    'en-GB',
    { dateStyle: 'medium', timeStyle: 'medium', timeZone: 'Europe/London' }
  ).format(time);
}
