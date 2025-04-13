//=============================O(n)==================================

// function logItems(n){
//     for(let i = 0 ;i<n;i++){
//         console.log(i);
//     }
// }
// logItems(10);

//O(n)

// function logItems(n){
//     for(let i = 0 ;i<n;i++){
//         console.log(i);//n
//     }
//     for(let i = 0 ;i<n;i++){
//         console.log(i);//n
//     }
// }
// logItems(10);

//O(2n) => but drop constant to be finally O(n)

//=============================O(n^2)==================================
// function logItems(n){
//     for(let i = 0 ;i<n;i++){
//         for(let j = 0 ;j<n;j++){
//             console.log(i , j);//n
//         }
//     }
    
// }
// logItems(5);


//O(n^2) => because nested loop

//=============================O(1)==================================
// function sum(n , m){
//     return n + m
// }


// console.log(sum(6,7))

//O(1) => Constant Time
