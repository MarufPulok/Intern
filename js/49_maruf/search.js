let binarySearch = (array, num) => {
    let l = 0
    let r = array.length - 1

    while(l<=r) {
        let m = Math.floor((l+r)/2)
        if (array[m] === num) {
            console.log(`Found ${num} at index ${m}`)
            return
        } else if (array[m] < num) {
            l = m + 1
        } else {
            r = m - 1
        }
    }
    console.log("not found")
    return
}

const array = Array.from({length: 1000000}, (_,i) => i+1)

binarySearch(array, 999999)
binarySearch(array, 1000001)