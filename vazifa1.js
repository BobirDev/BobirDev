// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
//   }
  
//   let arr = [1, 2, 3];
//   shuffle(arr);
//   alert(arr);

const arr = [
    {
      name: 'Yakub',
    },
    {
      name: 'Bobur',
    },
    {
      name: 'Ustoz',
    },
    {
        name: 'Shogird',
      },
      {
        name: 'Yakub',
      },
      {
        name: 'Bobur',
      },
      {
        name: 'Ustoz',
      },
      {
          name: 'Shogird',
        }
  ]
  const uniqueArr = [... new Set(arr.map(data => data.name))]
   console.log(uniqueArr)