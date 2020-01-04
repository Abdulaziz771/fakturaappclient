/*import { helpers } from 'vuelidate/lib/validators'
import { _ } from 'vue-underscore'*/

const phone = /^(?:(?:|00)998|0)\d{9}$/;
const mail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export function formatInn(value) {
  return /^\d{9}$/.test(value)
}

export function addresAndPhone(value) {
  if (phone.test(value) || mail.test(value)) return true
   else return false
}

export function phoneWithout998(value) {
  return /^(?:(?:|00)998|0)\d{9}$/.test(value)
}

export function oked(value) {
  return /^\d{5}$/.test(value)
}

export function okonh(value) {
  return /^\d{5}$/.test(value)
}

export function index(value) {
  return /^\d{6}$/.test(value)
}

// export function empty(value) {
//   return value === null || value === undefined || value.toString().length === 0
// }

/*const empty = function (value) {
  return value === null || value === undefined || value.toString().length === 0
}}

const fileExtension = function (extensions) {
  return helpers.withParams({ type: 'fileExtension' }, function (file) {
    if (file !== undefined && file !== null) {
      let fileParts = file.name.split('.')
      if (fileParts.length > 1) {
        let ext = fileParts[fileParts.length - 1].toLowerCase()
        return _.filter(extensions, function (e) {
          return e.toLowerCase() === ext
        }).length > 0
      }
    }
    return false
  })
}
const fileMaxSize = function (maxSize) {
  return helpers.withParams({ type: 'fileMaxSize' }, function (file) {
    if (file !== undefined && file !== null) {
      return file.size <= maxSize
    }

    return true
  });
}*/

