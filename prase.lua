local fn = arg[1] or error 'File to read?' 
local prefix = arg[2] or error 'Prefix?' 

print('{')
local f=io.open(fn,'r')
assert(f,'could not open file')
local txt=f:read('*all')
f:close()

for line in string.gmatch(txt, '<a href=".-">.-</a>') do
	local key, title = string.match(line, '<a href="(.-)".->(.-)</a>');
	local url
	if key then
		if string.match(key, '^http://.*') then
			url = key
		else
			url = prefix .. key
		end
		print('\t"' ..title ..'" : "' .. url ..'",')
	end
end 
print('}')
