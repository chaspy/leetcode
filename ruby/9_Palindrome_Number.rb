# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
  return false if x < 0

  num = x
  str = num.to_s
  rev = str.reverse
  puts str
  puts rev
  if str == rev
    return true
  else
    return false
  end
end

puts 'ok' if is_palindrome(121)
puts 'ok' unless is_palindrome(-121)
puts 'ok' unless is_palindrome(10)
