// 11. Container With Most Water
// Medium

// 20249

// 1070

// Add to List

// Share
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
 

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

/**
 * @param {number[]} height
 * @return {number}
 */
 const maxArea = (height) => { //height is an array
  // length of container  = index of right - index of left
  // height of container = lowest value between right and left
  // volume = length x height
  // return the volume

  let leftValue = 0;
  let rightValue = 0;
  let containerHeight = 0;
  let containerLength = 0;
  let volume = 0
  let newEstVolume = 0;
  let indexLeft = 0
  let indexRight = height.length - 1

  while(indexLeft < indexRight){
    //Determining height of container
    leftValue = height[indexLeft]
    rightValue = height[indexRight]
    leftValue < rightValue ? containerHeight = leftValue : containerHeight = rightValue;    
    
    //Determining length of container
    containerLength = indexRight - indexLeft;
    
    //Determining volume
    newEstVolume = containerHeight * containerLength;

    //Shifting index
    if(newEstVolume < volume){
      indexLeft++
    }
    else{
      console.log('newestvol', newEstVolume)
      console.log('')
      volume = newEstVolume
      indexLeft++
    }

  }

  return volume
};

console.log(maxArea([2,3,4,5,18,17,6]));