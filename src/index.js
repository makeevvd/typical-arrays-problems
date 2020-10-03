exports.min = function min (array) {
  if (!array || !array.length) return 0;

  return array.reduce((prev, cur) => {
    return cur < prev ? cur : prev
  })

}

exports.max = function max (array) {
  if (!array || !array.length) return 0;

  return array.reduce((prev, cur) => {
    return cur > prev ? cur : prev
  })
}

exports.avg = function avg (array) {
  if (!array || !array.length) return 0;

  let arrSum ;

  arrSum = array.reduce((sum, cur) => {
    return sum+=cur
}, 0)

  return arrSum/array.length
  }

