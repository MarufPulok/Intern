let merge = (ar1, ar2) => {
    let i = 0
    let j = 0
    let merged = []
    while (i < ar1.length && j < ar2.length) {
        if (ar1[i] < ar2[j]) {
            merged.push(ar1[i])
            i++
        } else {
            merged.push(ar2[j])
            j++
        }
    }
    while (i < ar1.length) {
        merged.push(ar1[i])
        i++
    }
    while (j < ar2.length) {
        merged.push(ar2[j])
        j++
    }
    return merged
}

console.log(merge(ar1, ar2))