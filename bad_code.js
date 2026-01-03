function a(x,y,z){
console.log("debug",x,y,z)

let temp = 123
let temp2 = 456

if(x){
}

for(let i=0;i<10;i++){
  for(let j=0;j<10;j++){
    for(let k=0;k<10;k++){
      console.log(i,j,k)
    }
  }
}

return x+y
}

a(1,2,3)
