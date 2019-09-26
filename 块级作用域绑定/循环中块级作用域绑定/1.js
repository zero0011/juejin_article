var funcs = [] ; 
var i = 0
for (   ; i < 10 ; i ++) {
    funcs.push(function () {
        console.log(i) ;
    })
}

funcs.forEach( func => {
    func() ;
})