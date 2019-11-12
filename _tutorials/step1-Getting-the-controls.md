---
<<<<<<< HEAD:_tutorials/inventory.md
title: Automating the inventory
menu_name: Automating the inventory
permalink: /tutorials/inventory/
---

## Getting the inventory controls

The first thing we need to do is get the inventory controls before we can move any items.\
If no gui is open then the players inventory screen is used.\
If a container is open then the mapping for that screen is used instead.\
=======
layout: step
title: Getting the inventory controls
menu_name: OpenInventory
position: 1
---

The first thing we need to do is get the inventory controls before we can move any items.<br>
If no gui is open then the players inventory screen is used.<br>
If a container is open then the mapping for that screen is used instead.<br>
>>>>>>> 8a2652061da9e1e4fbd146c4e1c538eb347e177e:_tutorials/step1-Getting-the-controls.md

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