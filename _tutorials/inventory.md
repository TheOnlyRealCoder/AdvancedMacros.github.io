---
title: Automating the inventory
menu_name: Automating the inventory
permalink: /tutorials/inventory/
---

## Getting the inventory controls

The first thing we need to do is get the inventory controls before we can move any items.\
If no gui is open then the players inventory screen is used.\
If a container is open then the mapping for that screen is used instead.\

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