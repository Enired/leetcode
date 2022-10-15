/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 const findMedianSortedArrays = (nums1, nums2) => {
    const allNumbers = nums1.concat(nums2).sort((a,b)=>{
      return a-b
    })
    if(allNumbers.length % 2 === 0){
      return (allNumbers[allNumbers.length / 2] + allNumbers[(allNumbers.length / 2) - 1]) / 2
    }
    else{
      return allNumbers[Math.floor(allNumbers.length/2)]
    }
};

const nums1 = [3] 
const nums2 = [-2,-1]
console.log(
  findMedianSortedArrays(nums1, nums2)
)