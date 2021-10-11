// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
//   }
  
//   let arr = [1, 2, 3];
//   shuffle(arr);
//   alert(arr);

// 
const unique = (value, index, self) => {
  return self.indexOf(value) === index
}

const arr = ["Bobur", "Yakub", "Apple", "Bobur", "Yakub", "Apple"]
const uniqueArr = arr.filter(unique)

console.log(uniqueArr)