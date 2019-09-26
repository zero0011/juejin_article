// let a = 1 ;
// a ++ ;
// console.log(a)


for(let i = 0 ; i < 10 ; i++) {
    // console.log(i)
}


let arr = [1,2,3,4,5,6] ;

let obj = {
    name: 'zs' ,
    sex: 'nan' ,
    like : 'play'
}

for(let el in obj) {
    console.log(el)
}

// for(let el of obj) {
//     console.log(el)
// }

Map.prototype.set(obj.name,100)