/* exported defaults */

function defaults(target, source) {
  for (var x in source) {
    if (target[x] === undefined) {
      target[x] = source[x];
    }
  }
}
