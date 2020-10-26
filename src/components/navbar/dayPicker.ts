import moment from 'moment'

const checkDayOfTheWeek = moment().format('dddd')

export let pickDay = ''

export const weekHours = '8:00 - 22:00'
export const weekendHours = '8:00 - 16:00'

switch (checkDayOfTheWeek) {
  case 'Monday':
    pickDay = `Poniedziałek ${weekHours}`
    break
  case 'Tuesday':
    pickDay = `Wtorek ${weekHours}`
    break
  case 'Wednesday':
    pickDay = `Środa ${weekHours}`
    break
  case 'Thursday':
    pickDay = `Czwartek ${weekHours}`
    break
  case 'Friday':
    pickDay = `Piątek ${weekHours}`
    break
  case 'Saturday':
    pickDay = `Sobota ${weekendHours}`
    break
  case 'Sunday':
    pickDay = `Niedziela ${weekendHours}`
}
