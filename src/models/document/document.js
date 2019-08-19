export default class Document {
  _uniqueId
  _title
  _fileName
  _labelName
  _totalPrice
  _createdDateTime
  _updatedDateTime
  _isNew
  _isAgreementApproved
  _registry
  _status

  constructor (uniqueId, title, fileName, labelName, totalPrice, createdDateTime, updatedDateTime, isNew, isAgreementApproved, registry, status) {
    this._uniqueId = uniqueId
    this._title = title
    this._fileName = fileName
    this._labelName = labelName
    this._totalPrice = totalPrice
    this._createdDateTime = createdDateTime
    this._updatedDateTime = updatedDateTime
    this._isNew = isNew
    this._isAgreementApproved = isAgreementApproved
    this._registry = registry
    this._status = status
  }

  get uniqueId () {
    return this._uniqueId
  }

  set uniqueId (value) {
    return this._uniqueId = value
  }

  get title () {
    return this._title
  }

  set title (value) {
    return this._title = value
  }

  get fileName () {
    return this._fileName
  }

  set fileName (value) {
    return this._fileName = value
  }

  get labelName () {
    return this._labelName
  }

  set labelName (value) {
    return this._labelName = value
  }

  get totalPrice () {
    return this._totalPrice
  }

  set totalPrice (value) {
    return this._totalPrice = value
  }

  get createdDateTime () {
    return this._createdDateTime
  }

  set createdDateTime (value) {
    return this._createdDateTime = value
  }

  get updatedDateTime () {
    return this._updatedDateTime
  }

  set updatedDateTime (value) {
    return this._updatedDateTime = value
  }

  get isNew () {
    return this._isNew
  }

  set isNew (value) {
    return this._isNew = value
  }

  get isAgreementApproved () {
    return this._isAgreementApproved
  }

  set isAgreementApproved (value) {
    return this._isAgreementApproved = value
  }

  get registry () {
    return this._registry
  }

  set registry (value) {
    return this._registry = value
  }

  get status () {
    return this._status
  }

  set status (value) {
    return this._status = value
  }
}
