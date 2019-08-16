import { ApiHost } from './settings'

export default class BaseService {
  constructor () {
    if (!this.modelName) {
      throw new Error('Child service class not provide modelName')
    }
  }
  getSingleUrl(id) {
    return `${ApiHost}/api/${this.modelName}/${id}`
  }
}
