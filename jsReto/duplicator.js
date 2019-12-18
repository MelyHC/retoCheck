
// Opción 1
Array.prototype.duplicator = function () {
  return this.concat(this)
}

// Opción 2
Array.prototype.duplicator = function () {
  const newArr = this;
  this.forEach(ele => {
    newArr.push(ele);
  })
  return newArr;
}

// console.log([1, 2, 3, 4, 5].duplicator())