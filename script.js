//TASK
//1) Дан массив с элементами [1, 2, 3, 4, 5].
//С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
// const handleSum = (array) =>{
//     let result = 0
//      for (let i = 0; i < array.length; i++){
//          result += array[i]
//      }
//      return result
//  }
// console.log(handleSum([1,2,3,4,5]))

//TASK
//2) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => сумму всех элементов массива
// const handleSum = (array) =>{
//     let result = 0
//     for (let i = 0; i < array.length; i++){
//         result += array[i]
//     }
//     return result
// }
// console.log(handleSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// const array =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(array.reduce((acc, el ) => {
//     return acc + el
// }, 0))

//TASK
//3)Дан массив с элементами [1, 2, 5, 9, 4, 13, 4, 10]. С помощью цикла for и оператора if
// проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!'
// и выйдите из цикла. Если нет - 'Нет!'

// const handleSum = (array) =>{
//     let result =''
//     for (let i = 0; i < array.length; i++){
//         if (array[i]  === 4){
//             return result = 'Есть!';
//         }if (result) {
//             return
//         }
//     }
// }
// console.log(handleSum([1, 2, 5, 9, 4, 13, 4, 10]))