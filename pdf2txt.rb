require 'pdf/reader'
ARGV.each do |filename|
	PDF::Reader.open(filename) do |reader|
	  puts "Converting : #{filename}"
	  pageno = 0
	  txt = reader.pages.map do |page| 
	  	pageno += 1
	  	begin
	  		print "Converting Page #{pageno}/#{reader.page_count}\r"
	  		page.text 
	  	rescue
	  		puts "Page #{pageno}/#{reader.page_count} Failed to convert"
	  		''
	  	end
	  end # pages map
	  puts "\nWriting text to disk"
	  File.write filename+'.txt', txt.join("\n")
	end # reader
end # each
