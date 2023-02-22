let rec = (n) => {
    if (n < 0) {
        // console.log(n)
        return
    }
    console.log(n)
    rec(n-1)
}

// rec(10)
// rec(5)
// rec(17)
rec(23)