export const getDateYYYYMMDD = (date: Date): string => {
  let m = `${date.getMonth() + 1}`;
  if (m.length === 1) {
    m = `0${m}`;
  }
  let d = `${date.getDate()}`;
  if (d.length === 1) {
    d = `0${d}`;
  }
  return `${date.getFullYear()}-${m}-${d}`
}
