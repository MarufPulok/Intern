//generics

const addUID = <T extends object>(obj:T) => {
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}
}

let docOne = addUID({name: 'mikasa', age: 40})
// console.log(docOne)

// console.log(docOne.name)

//with interfaces

interface Resource<T> {
    uid:number;
    resourceName:string;
    data:T;
}

const demo1:Resource<number> = {
    uid: 1,
    resourceName: 'ram',
    data: 3
}

interface Resource<T> {
    uid:number;
    resourceName:string;
    data:T;
}

const demo2:Resource<object> = {
    uid: 1,
    resourceName: 'ram',
    data: {name: 's'}
}

// console.log(demo2)

enum Direction {
    Up,
    Down,
    Left,
    Right
  }
  
  let playerDirection: Direction = Direction.Up;
  console.log(playerDirection); // Output: 0
  
  playerDirection = Direction.Right;
  console.log(playerDirection); // Output: 3
  
//tuples
let tuple:[string,number] = ['abx', 4]
tuple[1] = 6
console.log(tuple)



