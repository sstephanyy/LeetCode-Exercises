// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// 1 - Passar por todos os numeros da array
// 2 - Somar cada indice da array com o indice posterior
// 3 - enquanto a soma dos indices n for maior que o numero target ele continuará somando 


var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
    return [];
};

console.log(twoSum([3,2,4], 6)); // Output: [1, 2]
