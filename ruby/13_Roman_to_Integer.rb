# Symbol       Value
# I             1
# V             5
# X             10
# L             50
# C             100
# D             500
# M             1000

# @param {String} s
# @return {Integer}
def roman_to_int(s)
  dict = { 'I' => 1, 'V' => 5, 'X' => 10, 'L' => 50, 'C' => 100, 'D' => 500, 'M' => 1000 }
  total = 0

  arr = s.split(//)
  length = arr.length
  arr.each_with_index do |item, index|
    if index == length - 1
      total += dict[item]
    elsif dict[item] < dict[arr[index + 1]]
      total -= dict[item]
    else
      total += dict[item]
    end
  end

  total
end

# I can be placed before V (5) and X (10) to make 4 and 9.
puts roman_to_int('IV') # 4
puts roman_to_int('IX') # 9

# X can be placed before L (50) and C (100) to make 40 and 90.
puts roman_to_int('XL') # 40
puts roman_to_int('XC') # 90

# C can be placed before D (500) and M (1000) to make 400 and 900.
puts roman_to_int('CD') # 400
puts roman_to_int('CM') # 900

# official example
puts roman_to_int('III') # 3
puts roman_to_int('LVIII') # 58
puts roman_to_int('MCMXCIV') # 1994
