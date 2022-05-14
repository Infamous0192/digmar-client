type FormatTimeOption = {
  hour?: boolean
  minute?: boolean
  second?: boolean
}

/**
 * Used to format plain number to currency format
 * @param {string | number} price price to format
 * @returns formated price
 */
export function formatPrice(price: string | number) {
  return Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })
    .format(price as number)
    .replace(/(\.|,)00$/g, '')
}

/**
 * Used to format datetime to readable time format
 * @param str time to format
 * @param option format option
 * @returns formated time
 */
export function formatTime(str: string, option: FormatTimeOption) {
  let time = str.split(':')
  time[0] = option.hour && time[0] != '00' ? `${parseInt(time[0])} jam` : ''
  time[1] = option.minute && time[1] != '00' ? `${parseInt(time[1])} menit` : ''
  time[2] = option.second && time[2] != '00' ? `${parseInt(time[2])} detik` : ''

  return time.join(' ').trim()
}

/**
 * Used to format time
 * @param time time to format
 * @returns formated time
 */
export function formatTimestamp(time: string) {
  return time
    .split(':')
    .map((val, i) => (i == 2 ? val : parseInt(val)))
    .filter((val, i) => (i == 0 && val == 0 ? false : true))
    .join(':')
}
