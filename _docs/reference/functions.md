---
title: Functions
permalink: "/docs/reference/functions/"
redirect_from:
  - /functions/
  - /docs/functions/
---

### attack
#### attack( <Number: millis> )
Causes the player to rapidly click or hold the `attack` keybinding.
When millis is...

| Value     | Result                                             |
|:----------|:---------------------------------------------------|
|nil        | Instantly press and release the attack kebind.     |
|-1         | Hold the attack keybind continuously.              |
|0          | Cancel's the action                                |
|millis > 0 | Attack keybind is held for that many milliseconds. |

### back
#### back( Number: millis )
Causes the player hold the `back` keybinding.
When millis is...

| Value     | Result                                             |
|:----------|:---------------------------------------------------|
|-1         | Hold the back keybind continuously.                |
|0          | Cancel's the action                                |
|millis > 0 | Back keybind is held for that many milliseconds.   |

### connect
#### connect( String: serverIP )
Attempts to connect you to a server.

### customizeSkin
### disconnect
### drop
### forward
### getBiome
### getBlock
### getBlockLight
### getBlockList
### getBoundingBox
### getChunkUpdateCount
### getEntity
### getEntityList
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