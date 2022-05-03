export const getSolution = (a) => { 

    var n = a.length

    for(let i = 0; i < n-1; i++){
        for(let j = i+1; j < n; j++){
            let m = a[j][i]/a[i][i]
            a[j] = a[j].map((el, index) =>  el - m * a[i][index])
        }
    }

    var res = []
    for(let i = 0; i < n ; i++){
        res.push(0)
    }

    for(let i = 1; i <= n; i++){
        let min = 0
        for(let j = 1; j < n; j++){
            min += res[j-1]*a[n-i][n-j]
        }
        res[i-1] = (a[n-i][n] - min)/a[n-i][n-i]
    }
    res.reverse()

    return res

}





