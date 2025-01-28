export const formatDate = (date: string) => {
  const monthObj: any = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  }

  const splittedDate = date.split('-')

  const year = splittedDate[0]
  const month = splittedDate[1]
  const day = splittedDate[2]

  return `${monthObj[month]} ${day}, ${year}`
}