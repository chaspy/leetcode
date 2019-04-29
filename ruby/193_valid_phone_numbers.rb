#!/usr/bin/env ruby	
File.open("file.txt","r") do |f|
  f.each_line do |l|
    if l =~ /^(\d{3}-|\(\d{3}\) )\d{3}-\d{4}$/
      puts l
    end
  end
end
