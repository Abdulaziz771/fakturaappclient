import { helpers } from 'vuelidate/lib/validators'
import { _ } from 'vue-underscore'

const formatInn = function (value) {
  return /^\d{9}$/.test(value)
}
const empty = function (value) {
  return value === null || value === undefined || value.toString().length === 0
}
const oked = function (value) {
  return /^\d{5}$/.test(value)
}
const phoneWithout998 = function (value) {
  return /^(\d{9})$/.test(value)
}
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
}

export default {
  formatInn: formatInn,
  empty: empty,
  oked: oked,
  phoneWithout998: phoneWithout998,
  fileExtension: fileExtension,
  fileMaxSize: fileMaxSize
}
