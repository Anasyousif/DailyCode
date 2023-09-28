String.prototype.toJadenCase = function (jaden,non_jaden) {
  return this
  .split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(' ')
};