let getSubsets=(arr)=> {
    const subsets = [[]]
    for (let i = 0; i < arr.length; i++) {
      const length = subsets.length
      for (let j = 0; j < length; j++) {
        subsets.push([...subsets[j], arr[i]])
      }
    }
    return subsets
  }
  
  let checkSum = (arr, sum) => {
    let subsets = getSubsets(arr)
    // console.log(subsets)
    for (let i = 0; i < subsets.length; i++) {
      if (subsets[i].reduce((a,b) => a+b, 0) === sum) {
        return subsets[i]
      }
    }
    return false
  }

    let arr = [1,2,3,4,5,6,7,8,9,10]
    // let arr = [1,2,3]
    console.log(checkSum(arr, 50))
    console.log(checkSum(arr, 56))