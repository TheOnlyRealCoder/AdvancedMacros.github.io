---
title: Functions
permalink: "/docs/reference/functions/"
redirect_from:
  - /functions/
  - /docs/functions/
---

<div class="note">Any arguments with <code><></code> around them are optional.</div>

### attack

**attack( \<Number: millis> )**


Causes the player to rapidly click or hold the `attack` keybinding (`lmb`)
when millis is...

| Value     | Result                                             |
|:----------|:---------------------------------------------------|
|nil        | Instantly press and release the attack kebind.     |
|-1         | Hold the attack keybind continuously.              |
|0          | Cancel's the action                                |
|millis > 0 | Attack keybind is held for that many milliseconds. |

### back

**back( Number: millis )**


Causes the player hold the `back` keybinding (`s`)
when millis is...

| Value     | Result                                             |
|:----------|:---------------------------------------------------|
|-1         | Hold the back keybind continuously.                |
|0          | Cancel's the action                                |
|millis > 0 | Back keybind is held for that many milliseconds.   |

### connect

**connect( String: serverIP )**


Attempts to connect you to a server.

### customizeSkin

**customizeSkin( String: Part, Boolean: value )**


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

**disconnect()**


Leaves the server you are connected too.

### drop

**drop( \<Boolean: Drop All> )**


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

**getBiome( <Number: BlockX, Number: BlockZ> )**


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

**getBlock( Number: x, Number: y, Number: z )**


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

**getBlockLight(<Number: x, Number: y, Number: z>)**


Returns the current block light level at a given position.
If no position is given it will use the players position.

### getBlockList

**getBlockList()**


A bit of a misnomer, this function returns a table of all `blocks` and `items` in the game (including mods).
Each entry will be what it would look like if you had an item stack of `1` in an inventory and `log`ed it.
The table uses the item id (such as `minecraft:birch_stairs`) as the key, and the example item as the value.

<div class="note">You can check what creative tabs a block or item would belong to by scanning the results from this function</div>

### getBoundingBox

**getBoundingBox( Number: blockX, Number: blockY, Number: blockZ )**


#### getBoundingBox( {Number: blockX, Number: blockY, Number: blockZ} )

**getBoundingBox( Number: EntityID )**


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

**getChunkUpdateCount()**


Returns the number of chunk updates as seen in the `F3` debug menu.

### getEntity

**getEntity( Number:ID )**


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

**getEntityList()**


Returns a list of entities loaded in your chunks.

Each entity will have...

| name | Either the nametag name, player name, or entity type |
| id | ID number used to get more information about this entity |
| class | Exact type of entity |

### getEntityNBT

**getEntityNBT( Number: ID )**


Return a table with just the NBT data for an entity.\
ID number is from the `getEntityList()` function.

### getFps

**getFps()**


Returns the current FPS as seen in the `F3` debug menu.

### getHotbar

**getHotbar()**


Returns the currently selected hotbar index.\
(`1`-`9`)

### getInventory

**getInventory( \<String: name> )**


Returns a table listing the players inventory contents.\
If a name is given it will return the visible part of another players inventory (or false if no player is found).

<div class="note">When using on another player, you can expect to only see armor and held items.</div>

### getJarLibLoaders
....Looks like this returns a table where jars can be added so require can find them..?

### getLight

**getLight(<Number: x, Number: y, Number: z>)**


Returns the current block and sky light level at a given position.
If no position is given it will use the players position.

Return values:

	light level, sky, block

### getLoadedPlayers

**getLoadedPlayers()**


Returns a list of any players in your loaded chunks.

### getPlayer

**getPlayer( \<String: name> )**


Returns a hoard of information in a table about your player (no arg), or the target player (name arg).

| Key  | Type | Note |
|:-----|:------|:-----|
|name|String |        |
|inventory | Table | Lists everything you'd see in <code>getInventory()</code> |
|pos  | Table | Entity position as {x,y,z} |
|mainHand| Table | Item held in mainHand or <code>false</code> |
|offHand| Table | Item held in offHand or <code>false</code> |
|invSlot | int | equivilant of <code>getHotbar()</code> |
|dimension | Table |   |
|pitch      | Number | The Up/Down rotation of the entity's head |
|yaw       | Number | The Left/Right rotation of the entity's head |
|exp      | Number | Players experience points in this level |
|expLevel | Number | Player experience level |
|expTotal | Number | Total experience with prior levels |
|eyeHeight| Number | How far from the ground the players eyes are located. Changes when sneaking. |
|fallDist  | Number  | How far the entity has fallen.<br>0 if the entity is not falling. |
|height   | Number  |   |
|width    | Number  |  |
|swingProgress | Number | Precentage before swing motion is complete and ready to attack again. |
|maxHurtResTime | Number | How long until the entity can take damage again. |
|isCollidedHoriz | Boolean | |
|isCollidedVert | Boolean | |
|isNoClip         | Boolean | If the entity can pass through blocks like a spectator |
|onGround      | Boolean | |
|isInvulnerable | Boolean | |
|bedLocation   | {Number, Number, Number} | May be omitted if unset or unavailable. |
|team             | String   | <code class="highlighter-rouge">none</code> or the teams name |
|luck             | Number | Current luck amount |
|velocity        | {Number, Number, Number} | {x, y, z} velocity of the entity |
|health          | Number | |
|hunger         | Number | |
|isOnLadder   | Boolean | |
|hasNoGravity | Boolean | |
|potionEffects | Table | Each entry describes another potion effect |
|air | Number | Amount of air remaining until the entity starts drowning |
|isInWater | Boolean | |
|isInLava | Boolean | |
|immuneToFire | Boolean | |
|isImmuneToExplosion | | <span class="tableFlavorText">Someone, give this to a creeper</span> |
|isOnFire |Boolean | |
|isSprinting | Boolean | |
|isSneaking | Boolean | |
|isEyltraFlying | Boolean | |
|isSleeping | Boolean | |
|entityID | Number | Used in entity highlighting |
|gamemode| String | <code>spectator</code>, <code>creative</code>, <code>survival</code><br><span class="comment">Seems adventure mode may show up as survival. [BUG]</span> |
|entityRiding | Table | Lists all the stuff in this table, but for the entity that is being ridden. |
|isInvisible | Boolean | |
|uuid| String | |
|lookingAt| {Number, Number, Number} | What block the entity is looking at |

### getPlayerBlockPos

**getPlayerBlockPos( \<String: name> )**


Returns the block position of either yourself or a player by name.<br>
If a player can not be found the function will return <code>false</code>

The position will always be whole numbers.\
If you want the decimal part, use `getPlayerPos()`

### getPlayerList

**getPlayerList()**


Returns a list of players on the server. This is not limited to loaded chunks like `getLoadedPlayers()`.

### getPlayerNBT

**getPlayerNBT( \<String: PlayerName> )**


Returns the NBT data for a player or yourself.

### getPlayerPos

**getPlayerPos( \<String: Player Name >)**


Returns the exact players position of your player or the given player.
If the player can't be found then it will return `false`
```lua
local x, y, z = getPlayerPos()
```

### getProfile

**getProfile()**


Returns the name of the current profile from the bindings menu.

### getRecipes

**getRecipes( \<String: item> )**


Returns a list of crafting recipes.
If an `item` is specified, any recipes whos output item id contains `item` in the string will be added to the list.\
For example: `stone` will add `minecraft:stone`'s recipe as well as `minecraft:cobblestone_stairs` because it has the word `stone` in it.

For 
```lua
local recipes = getRecipes()
```
The output is formated as follows:
recipes[`recipeType`][`recipeNumber`][`'in'`/`'out'`]\
For `input` items:
 - shaped recipes will list items as [x][y][options]
 - shapless recipes will list items as [x][options]
For `output` items:
 - Will list the output item directly
 
<div class="note">Currently (9.0.2) there is no method to check if additional items are returned such as a bucket from cake.</div>


### getScreen

**getScreen()**


Returns a new `image` with controls with the pixel data being a screenshot of the game.

### getSettings

**getSettings()**

Returns a table containing any mod settings and controls for Minecraft settings.

Some useful stuff:
`getSettings().editor.colors.textFill` controls the background color in the editor. (Transparent colors are allowed)
All of the mod's colors are defined in the settings and can be changed to whatever you like.

`getSettings().chat.maxLines` Controls the number of lines the chat can store before it starts removing messages. By default Minecraft has this as `100`. Changing this can be useful for looking at large tables in chat.
A good number to use would be `1000`.

<div class="note warning">Making the <code>maxLines</code> too large may cause lag after many messages accumulate.</div>

`getSettings().scriptBrowser.columns` Controls how many columns are in the file browser. (Too many may cause them to overlap)
`getSettings().profiles` This is the table where each binding profile is saved. You can edit them from here if you want to do so.
`getSettings().minecraft` Returns a table with functions for changing Minecraft settings

| Function Name            | Args              | Return Value(s) | Description                              |
|:-------------------------|:------------------|:----------------|:-----------------------------------------|
|getFov                    |                   | Number          | Current FOV                              |
|setFov                    | Number:FOV        |                 | Sets FOV. Can be out of normal range.    |
|getVolume                 | String:Category   | Number          | Gets the volume for a selected sound category.<br>[See table below] |
|setVolume                 | String:Category,<br>Number:volume | | Sets the volume for some category.<br>[See table below] |
|setRenderDistance         | Number            |                 | Sets your render distance. Value is clamped to range of 2 to 32 |
|getRenderDistance         |                   | Number          | Returns the render distance setting. |
|setFullscreen             | <Boolean>         |                 | Arg defaults true. Sets the game to fullscreen or exits fullscreen with false. |
|isFullscreen              |                   | Boolean         | Is the game full screen.                                   |
|getSkinCustomization      |                   | Table           | Returns a table listing if a skin layer is on or off.      |
|getSkinCustomization      | String            | Boolean         | Returns a boolean indicating if a skin layer is on or off. |
|getMaxFps                 |                   | Number          | Returns the FPS limit |
|setMaxFps                 | Number            |                 | Sets the max FPS |
|setAdvancedItemTooltips   | Boolean           |                 | Enable or disable advanced tooltips. (shows durability and id on items) |
|isAdvancedItemTooltips    |                   | Boolean         | Check if advanced tooltips are visible |
|getSmoothLighting         |                   | String          | Lighting mode of <code>off</code>, <code>min</code>, or <code>max</code> |
|setSmoothLighting         | String:Mode       |                 | Sets smooth lighting mode. Modes are <code>off</code>, <code>min</code>, or <code>max</code> |
|setAutoJump               | Boolean:autoJump  |                 | Sets if the player uses auto jump. |
|isAutoJump                |                   | Boolean         | Returns if the player has auto jump enabled. |
|getChatOpacity            |                   | Number          | Returns current opacity of the chat |
|setChatOpacity            | Number
|getChatScale              |
|setChatScale              |
|getChatHeightFocused      |
|setChatHeightFocused      |
|getChatHeightUnfocused    |
|setChatHeightUnfocused    |
|setChatWidth              |
|getChatWidth              |
|setCloudsMode             |
|getCloudsMode             |
|setDifficulty             |
|getDifficulty             |
|setVsync                  |
|isVsync                   |
|setEntityShadows          |
|isEntityShadows           |
|setFancyGraphics          |
|isFancyGraphics           |
|setGuiScale               |
|getGuiScale               |
|setHeldItemTooltips       |
|isHeldItemTooltips        |
|setInvertMouse            |
|isInvertMouse             |
|getLanguage               |
|getLanguages              |
|setLanguage               |
|getLastServer             |
|getMainHandSide           |
|setMainHandSide           |
|getMipmapLevels           |
|setMipmapLevels           |
|getMouseSensitivity       |
|setMouseSensitivity       |
|setParticleLevel          |
|getParticleLevel          |
|setPauseOnLostFocus       |
|isPauseOnLostFocus        |
|setSmoothCamera           |
|isSmoothCamera            |
|setPerspective            |
|getPerspective            |
|setTouchscreenMode        |
|isTouchscreenMode         |
|setViewBobbing            |
|isViewBobbing             |

|Sound Categories |
|:----------------|
|master           |
|music            |
|record           |
|weather          |
|block            |
|hostile          |
|neutral          |
|player           |
|ambient          |
|voice            |

`getSettings().save()` Saves all changes you made to settings. Be sure to call this after making changes.

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