#!/usr/env ruby
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
  nums.combination(2) do |a, b| 
    sum = a + b
    p sum if sum == target
  end
end

two_sum([1,2,3,4,5], 9)
