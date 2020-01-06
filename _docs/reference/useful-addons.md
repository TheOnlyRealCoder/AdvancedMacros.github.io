---
title: Useful Addons
permalink: /docs/reference/useful-addons/
redirect_from:
  - /useful-addons/
  - /docs/useful-addons/
---

<div class="note">**Tip:** Load functions in a script with the <code>startup</code> event to have them ready for all your scripts.</div>
## With LuaJava

### Real Regex
For when lua's patterns just arn't enough.
#### The Code
```lua
local Pattern = luajava.bindClass"java.util.regex.Pattern"

function string.regex(str, pat)
  log("&6"..str.." &d"..pat)
  local p = Pattern:compile(pat)
  local m = p:matcher(str)
  
  return function()
    if m:find() then
      if m:groupCount() > 0 then
        local out = {}
        for i = 1, m:groupCount() do
          out[i] = m:group(i)
        end
        return table.unpack(out)
      else
        return m:group(0)
      end
    end
  end
end
```
#### Setup
To setup this function you only need to run a script containing the above code once.
#### Examples
##### Ex 1
When no capture groups are used `a` will contain a string that matches the pattern.
This example caputures one word at a time. `b` and `c` will both be `nil`
```lua
for a,b,c in ("hello world\nand all who inhabit\nit"):regex"[^\\W\\n]+" do
  log{a,b,c}
end
```
###### Ex 2
When capture groups are used, each letter will contain the string from a capture group
This example caputures two words at a time. `c` will be `nil` and `b` will be `nil` on the last itteration because there are
an odd number of words.
```lua
for a,b,c  in ("hello world\nand all who inhabit\nit"):regex"([^\\W\\n]+)[\\W\\n]*([^\\W\\n]+)?" do
  log{a,b,c}
end
```
<div class="note"><a href="https://regexr.com/" target="_blank">regexr.com</a> is an easy way to test expressions. Don't forget to escape any <code>\</code> after pasting into your code!</div>
### UTF8
#### The code
```lua
local String = luajava.bindClass"java.lang.String"
local Char   = luajava.bindClass"java.lang.Character"
utf8 = utf8 or {}

function utf8.char(...)
  local args = {...}
  local out = {}
  for i,c in ipairs(args) do
    out[i] = luajava.new(String, Char:toChars(c))
  end
  return table.unpack(out)
end
```
#### Setup
To setup this function you only need to run a script containing the above code once.
#### Examples
##### Ex 1
```lua
log("Hello world: &a"..utf8.char(10004))
```
#### Result
![Hello world green checkmark](https://cdn.discordapp.com/attachments/477916341706293278/661431589456183297/unknown.png "Result")
