const compareArr = (arrMain, arrList) => {
  let resArr = []
  for (let i = 0; i < arrMain.length; i++){
    let count = 0
    for(let j = 0; j < arrList.length; j++){
      if(arrMain[i] == arrList[j]){
        count++
      }
    }
    resArr.push(count)
  }
  return resArr
}

const INPUT = ['xc', 'dz', 'bbb', 'dz']  
const QUERY = ['bbb', 'ac', 'dz']
console.log(compareArr(QUERY, INPUT))