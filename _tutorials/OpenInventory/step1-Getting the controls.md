---
layout: step
title: Getting the inventory controls
menu_name: Step by Step Tutorial
position: 1
---
The first thing we need to do is get the inventory controls before we can move any items.<br>
If no gui is open then the players inventory screen is used.<br>
If a container is open then the mapping for that screen is used instead.<br>

**1.14.4+**
```lua
local inv = openInventory()
local map = inv.getMap()
```

**1.12.2**
```lua
local inv = openInventory()
local map = inv.mapping[ inv.getType() ]
```