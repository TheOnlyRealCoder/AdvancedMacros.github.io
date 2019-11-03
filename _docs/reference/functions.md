---
title: Functions
permalink: "/docs/reference/functions/"
redirect_from:
  - /functions/
  - /docs/functions/
---

### attack
#### attack( <Number: millis> )
Causes the player to rapidly click or hold the `attack` keybinding (`lmb`)
when millis is...

| Value     | Result                                             |
|:----------|:---------------------------------------------------|
|nil        | Instantly press and release the attack kebind.     |
|-1         | Hold the attack keybind continuously.              |
|0          | Cancel's the action                                |
|millis > 0 | Attack keybind is held for that many milliseconds. |

### back
#### back( Number: millis )
Causes the player hold the `back` keybinding (`s`)
when millis is...

| Value     | Result                                             |
|:----------|:---------------------------------------------------|
|-1         | Hold the back keybind continuously.                |
|0          | Cancel's the action                                |
|millis > 0 | Back keybind is held for that many milliseconds.   |

### connect
#### connect( String: serverIP )
Attempts to connect you to a server.

### customizeSkin
#### customizeSkin( String: Part, Boolean: value )
Turns skin layers on or off for the player.

| Parts     | Alias    |
|:---------|:--------|
| hat        | helmet |
| jacket    | chest   |
| left leg   |           |
| right leg |           |
| left arm  |           |
| right arm |          |
| cape       |           |

### disconnect
#### disconnect()
Leaves the server you are connected too.

### drop
#### drop( <Boolean: Drop All> )
Throw your currently held item.
(like `q`)
If `true` is given as an arg then it will drop the whole stack.
If no arg is passed

### forward
Causes the player hold the `forward` keybinding (`w`)
when millis is...

| Value     | Result                                             |
|:----------|:---------------------------------------------------|
|-1           | Hold the forward keybind continuously.                |
|0             | Cancel's the action                                |
|millis > 0 | forward keybind is held for that many milliseconds.   |

### getBiome
#### getBiome( <Number: BlockX, Number: BlockZ> )
Returns a table with details about the biome either at the players location or the given location.

Output:

| key | type |
|:----|:-----|
|canSnow | Boolean |
|canRain   | Boolean |
|rainfall    | Number |
|temp       | String   |

|Tempatures|
|:-----------|
|ocean        |
|cold          |
|medium     |
|warm        |

### getBlock
#### getBlock( Number: x, Number: y, Number: z )
Returns a table with information about a block at the given position.
If the block requested is not loaded or is `void air` then it will return false.

| Key | Type | Description |
|:----|:------|:-------------|
|id    | String | The block id, such as "minecraft:stone" |
|name | String | The block name, such as "Stone" |
|nbt  | Table  | NBT tag data about the block<br>This is limited to tile entites and client side info. |
|harvestTool | String | The best tool to break this block.<br>Not every block has a harvest tool and this may be omited |
|mapColor   | Table | The color this block would be on a map in {r,g,b,a} format |

### getBlockLight
#### getBlockLight(<Number: x, Number: y, Number: z>)
Returns the current block light level at a given position.
If no position is given it will use the players position.

### getBlockList
#### getBlockList()
A bit of a misnomer, this function returns a table of all `blocks` and `items` in the game (including mods).
Each entry will be what it would look like if you had an item stack of `1` in an inventory and `log`ed it.
The table uses the item id (such as `minecraft:birch_stairs`) as the key, and the example item as the value.

<div class="note">You can check what creative tabs a block or item would belong to by scanning the results from this function</div>

### getBoundingBox
#### getBoundingBox( Number: blockX, Number: blockY, Number: blockZ )
#### getBoundingBox( {Number: blockX, Number: blockY, Number: blockZ} )
#### getBoundingBox( Number: EntityID )
Returns a table with functions relating to a bounding box of a block or entity.\
For blocks, a second return value of `true` or `false` will be returned indicating if the block is solid.

| function name | args | return value(s) | description |
|:----------------|:-----|:----------------|:-------------|
|contains           |Number: x,<br>Number: y,<br>Number: z | Boolean | Checks if a point exists inside the bounding box |
|contract           |Number: x,<br>Number: y,<br>Number: z |             | Makes the bounding box smaller in a direction. Negative numbers reduce the side on the negative of that axis |
|expand           | Number: x,<br>Number: y,<br>Number: z |             | Makes the bounding box bigger in a direction. Negative numbers effect the negative sides. |
|getCenter       |              | Number: x,<br>Number: y,<br>Number: z | Returns the center point of this bounding box |
|getPoints		|   | Number: xMin,<br>Number: yMin,<br>Number: zMin<br>Number: xMax,<br>Number: yMax,<br>Number: zMax | Returns the points defining this bounding box |
|grow           | Number: amount |       | Expands a bounding box on all sides. |
|intersects    | BoundingBox      | Boolean | Returns true if the two bounding boxes overlap |
|intersect      | BoundingBox    | BoundingBox | Creates a new bounding box where the two bounding boxes overlap. |
|offset         | Number: x,<br>Number: y,<br>Number: z |  | Moves the bounding box by the given amount |
|shrink         |Number: amount |        | Contracts the bounding box on all sides |
|Union         | BoundingBox | BoundingBox | Creates a new bounding box using the MIN of one and the MAX of another |
|findEntityOnPath| Number: x,<br>Number: y,<br>Number: z<br><b>or</b><br>{x, y, z} |   | Creates a line starting from the bounding box's center to the center + the vector.<br> The first entity that is found to cross this region (including the box's size) is returned. |

### getChunkUpdateCount
#### getChunkUpdateCount()
Returns the number of chunk updates as seen in the `F3` debug menu.

### getEntity
#### getEntity( Number:ID )
Returns a table with information about an entity much like `getPlayer()`.\
`getEntityList()` can be used to locate an entity's ID number.

| Key  | Type | Note |
|:-----|:------|:-----|
|name|String |        |
|class| String| Recommended for checking if a mob is the correct type.<br>(Name tags will affect 'name') |
|pos  | Table | Entity position as {x,y,z} |
|dimension | Table |   |
|pitch      | Number | The Up/Down rotation of the entity's head |
|yaw       | Number | The Left/Right rotation of the entity's head |
|fallDist  | Number  | How far the entity has fallen.<br>0 if the entity is not falling. |
|height   | Number  |   |
|width    | Number  |  |
|hurtResTime | Number | How long until the entity can take damage again. |
|isCollidedHoriz | Boolean | |
|isCollidedVert | Boolean | |
|isNoClip         | Boolean | If the entity can pass through blocks like a spectator |
|onGround      | Boolean | |
|isInvulnerable | Boolean | |
|team             | String   | <code class="highlighter-rouge">none</code> or the teams name |
|velocity        | {Number, Number, Number} | {x, y, z} velocity of the entity |
|health          | Number | |
|isOnLadder   | Boolean | |
|potionEffects | Table | Each entry describes another potion effect |
|air | Number | Amount of air remaining until the entity starts drowning |
|isInWater | Boolean | |
|isInLava | Boolean | |
|immuneToFire | Boolean | |
|isImmuneToExplosion | | <span class="tableFlavorText">Someone, give this to a creeper</span> |
|isOnFire |Boolean | |
|isSprinting | Boolean | |
|entityRiding | Table | Lists all the stuff in this table, but for the entity that is being ridden. |
|isInvisible | Boolean | |
|nbt | Table* | In some cases nbt may show up as <code class="highlighter-rouge">false</code> if an error occured getting it |
|uuid| String | |
|lookingAt| {Number, Number, Number} | What block the entity is looking at |

### getEntityList
#### getEntityList()
Returns a list of entities loaded in your chunks.

Each entity will have...

| name | Either the nametag name, player name, or entity type |
| id | ID number used to get more information about this entity |
| class | Exact type of entity |

### getEntityNBT
### getFps
### getHotbar
### getInventory
### getJarLibLoaders
### getLight
### getLoadedPlayers
### getPlayer
### getPlayerBlockPos
### getPlayerList
### getPlayerNBT
### getPlayerPos
### getProfile
### getRecipes
### getScreen
### getSettings
### getSkyLight
### getSound
### getWorld
### highlightEntity
### httpRequest
### isKeyDown
### jump
### key
### left
### listTextures
### loader
### log
### look
### lookAt
### narrate
### newMutex
### openInventory
### pRun
### pickBlock
### pickItem
### playSound
### print
### rayTrace
### right
### run
### runThread
### say
### setHotbar
### setProfile
### sleep
### sneak
### sprint
### stopAllScripts
### swapHand
### toast
### use
### waitTick