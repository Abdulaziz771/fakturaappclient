import * as DoumentStatus from './document.status'

const documentStatusOptions = {};

documentStatusOptions[DoumentStatus.NONE] = {
  title: 'Недоступен',
  badgeClass: 'badge-danger'
};
documentStatusOptions[DoumentStatus.AWAIT_CONTRACTOR] = {
  title: 'Ожидается ответ контрагента',
  badgeClass: 'badge-warning'
};
documentStatusOptions[DoumentStatus.AWAIT_ACTION] = {
  title: 'Требуется подпись',
  badgeClass: 'badge-danger',
};
documentStatusOptions[DoumentStatus.REJECTED] = {
  title: 'Отклонен контрагентом',
  badgeClass: 'badge-danger',
};
documentStatusOptions[DoumentStatus.ARCHIVED] = {
  title: 'Опубликован',
  badgeClass: 'badge-success',
};
documentStatusOptions[DoumentStatus.AWAIT_AGREEMENT] = {
  title: 'На согласовании',
  badgeClass: 'badge-warning',
};
documentStatusOptions[DoumentStatus.AWAIT_SIGN] = {
  title: 'На подписании',
  badgeClass: 'badge-warning',
};
documentStatusOptions[DoumentStatus.DELETED] = {
  title: 'Удален',
  badgeClass: 'badge-warning',
};
documentStatusOptions[DoumentStatus.ARCHIVE_CANCEL_REQUESTED] = {
  title: 'Запрошен на аннулирование',
  badgeClass: 'badge-warning',
};
documentStatusOptions[DoumentStatus.AWAIT_ARCHIVE_CANCEL_REQUEST] = {
  title: 'На рассмотрении аннулирования',
  badgeClass: 'badge-warning',
};
documentStatusOptions[DoumentStatus.REJECT_ARCHIVE_CANCEL_REQUEST] = {
  title: 'Аннулирование  отменено',
  badgeClass: 'badge-success',
};
documentStatusOptions[DoumentStatus.ARCHIVE_CANCELED] = {
  title: 'Аннулировано',
  badgeClass: 'badge-danger',
};
documentStatusOptions[DoumentStatus.AGREEMENT_AGREED] = {
  title: 'Соглашение согласовано',
  badgeClass: 'badge-success',
};
documentStatusOptions[DoumentStatus.AGREEMENT_REJECTED] = {
  title: 'Соглашение не согласовано',
  badgeClass: 'badge-danger',
};


export default documentStatusOptions;
