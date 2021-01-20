// Your code here
function mapToNegativize(array) {
    const sol = []
  
    for (const i in array) {
      sol.push(array[i] * -1)
    }
  
    return sol
  }
  
  function mapToNoChange(array) {
    const sol = []
  
    for (const i in array) {
      sol.push(array[i])
    }
  
    return sol
  }
  
  function mapToDouble(array) {
    const sol = []
  
    for (const i in array) {
      sol.push(array[i] * 2)
    }
  
    return sol
  }
  
  function mapToSquare(array) {
    const sol = []
  
    for (const i in array) {
      sol.push(array[i] ** 2)
    }
  
    return sol
  }
  
  function reduceToTotal(array, sum = 0) {
    for (const i in array) {
      sum += array[i]
    }
  
    return sum
  }
  
  function reduceToAllTrue(array) {
    for (const i in array) {
      if (array[i] === false) {
        return false
      }
    }
  
    return true
  }
  
  function reduceToAnyTrue(array) {
    for (const i in array) {
      if (array[i] === true) {
        return true
      }
    }
  
    return false
  } 