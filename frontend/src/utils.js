export const format_date = (date) => {
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes());

  return `${hours.length === 1 ? "0" + hours : hours}:${
    minutes.length === 1 ? "0" + minutes : minutes
  }`;
};
