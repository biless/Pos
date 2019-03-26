// var asyncIterable = {}
// asyncIterable[Symbol.asyncIterator] = function () {
//   var i = 0
//   return {
//     next: function () {
//       i++
//       if (i < 10) {
//         return Promise.resolve({ done: false, value: i })
//       } else {
//         return Promise.resolve({ done: true })
//       }
//     }
//   }
// };

// (async function () {
//   for await (var value of asyncIterable)
//     console.log(value, ',')
// })()

// async function* generator () {
//   yield 42
// }

/* eslint no-extend-native: ["error", { "exceptions": ["Array"] }] */
Array.prototype.linq = function () {
  var asyncIterable = {}
  var self = this
  asyncIterable[Symbol.asyncIterator] = function () {
    var i = 0
    return {
      next: function () {
        if (i < self.length) {
          return Promise.resolve({ done: false, value: self[i++] })
        } else {
          return Promise.resolve({ done: true })
        }
      }
    }
  }
  return asyncIterable
}

/* eslint no-extend-native: ["error", { "exceptions": ["Array"] }] */
Array.prototype.fisrtOrDefalut = function* () {
  for (var value of temp) {
    console.log(value, ',')
    if (value > 3) {
      yield value
    }
  }
}

var temp = [1, 2, 3, 4]

temp.fisrtOrDefalut().then(step => {
  console.log(step)
})

// for (var value of temp.fisrtOrDefalut()) {
//   console.log(value, ',')
// }

// (async function () {
//   for await (var value of temp.linq())
//     console.log(value, ',')
// })()

// temp.linq().next().then(function (step) {
//   if (step.done === false) console.log(step.value)
// })

// var iterator = generator()
// iterator.next().then(function (step) {
//   if (iterator[Symbol.asyncIterator]() === iterator && step.done === false && step.value === 42) console.log('yes')
// })
