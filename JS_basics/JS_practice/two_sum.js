function twosum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        console.log([i, j]);
      }
    }
  }
}

let nums = [2, 7, 11, 15];
let target = 9;
twosum(nums, target);
