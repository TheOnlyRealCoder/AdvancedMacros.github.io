---
title: Events
permalink: "/docs/reference/events/"
redirect_from:
  - /events/
  - /reference/
  - /docs/reference/
  - /docs/functions/
---
**Events** are used to trigger scripts when different things in-game occur. The whole list of events that can be caught can be found in the table on the right =>
You can create an event binding by changing the third icon into the icon of a grass block with an arrow as shown below.
![Event Binding](/assets/img/events.png)
1. Change this icon to the grass block icon as shown in the image. This tells the mod that you want to bind it to an event.
2. Clicking the white triangle you select what type of event you want the mod to look for.
3. Clicking the square you select what script you want the mod to run upon the event trigger.

```lua
local args = {...}
log( args )
--or for the lazy
--log{ ... }
```

In all event pages that show a table in an image they use these 2 lines of code to show the event details.

The first argument will always be `"event"` and
the second argument will be the name of the event.

---
---
## Player
### AirChanged
This event fires when underwater or leaving it and the amount of air you have has changed.
If the air level is `-6` and the player is underwater still during the next `3 ticks` they will take damage and the air level will be reset to `0`.
Air will decrease by `1` every `3 ticks`. In Minecraft the max amount of air is `300`, this has been scaled down to `100`.

<div class="note">
For this event maximum air is <code class="highlighter-rouge">100</code>, and after <code class="highlighter-rouge">-6</code> the player takes damage.
</div>

Args:

	3. current amount of air
	4. amount changed (gain/loss)

![Event Details](/assets/img/events/AirChanged.png)

Here we can see the player's air has just been restored to `100` (from `-3`) after having been under water long enough to take damage

### ArmourDurability
This event is called whenever the damage amount on your armour changes. (Also triggers when equipping / equipping armour)

Args:

	3. current armour values (in a table)
	4. armour changes (in a table)
	
For the provided tables, index `1` is the boots, `4` is the helmet.<br>
![Event Details](/assets/img/events/ArmourDurability.png)

Seen here, the player has just damaged their boots and lost `1 durability` on them.

### ArrowFired
This event is triggered when ever a bow has been released (if not pulled back enough it wont fire the arrow, but still triggers the script)
After version `7.2.1` event details are correctly included.

Args:

	3. the bow (item info)
	4. how long the bow was charged for
	5. has ammo
	
![Event Details](/assets/img/events/ArrowFired.png)

### AttackEntity
This event is fired when you attack any entity.

Args:

	3. attacked entity info

<div class="note warning">
This event is not triggered by arrows.
</div>

### AttackReady
This event is triggered when the player has finished swinging their arm and can attack at full power again.

No special args for this function.

### BlockInteract
This event is triggered when you hit `USE` on a block.

Args:

	3. block pos
	4. held item
	5. "main hand" / "off hand"
	6. block side [up, down, north, east, south, west]
	
### BreakItem
Event is triggered when an item is broken.<span class="flavorText"> You got the extended warranty, right?</span><br>
Args:
	
	3. The item that broke
	
![Event Details](/assets/img/events/breakItem.png)
<div class="note warning">
This event does not work in 1.12.2 versions of the mod
</div>

### Death
This event triggers when the player dies. <span class="flavorText">(tragic...)</span>

There are no special arguments.
### DimensionChanged
This event is triggered whenever the player changes dimensions.

**Common dimensions ids:**

| **Dimension** | **Number** |
|:------------|:--------:|
|Overworld   | 0          |
|Nether        | 1          |
|End            | -1         |

Args:

	3. Dimension entered
	4. Dimension left

**1.14.3+**<br>
![Event Details](/assets/img/events/dimensionChanged.png)

**1.12.2**<br>
![Event Details](/assets/img/events/dimensionChanged_7.7.7b.png)

### EntityInteract
This event triggers when hitting the `USE` key on an `entity`.
If the `main hand` does not consume this event then it may also be re triggered for the `offhand`.

Args:

	3. Entity info
	4. Item used to interact with (before the interaction)
	5. "main hand" or "off hand"

### HealthChanged
This event is triggered whenever the players health has changed.

Args:

	3. Current health
	4. Amount changed
	5. Damage type
	
Here the player has healed from 19 health to 20.
![Event Details](/assets/img/events/HealthChanged.png)

<div class="note warning">
Damage type is only available for 1.14.4+
</div>

### HotbarChanged
This event is fired whenever the player changes the selected hotbar item either through scrolling or pressing 1-9 on their keyboard.

Args:

	3. Currently selected hotbar index
	4. The hotbar index ranges from 1 to 9

![Event Details](/assets/img/events/hotbarChanged.png)<br>
Example where the player has just selected their 7th slot

### HungerChanged
This event is triggered whenever the players hunger level changes.

Args:

	3. Current hunger level
	4. Amount changed

![Event Details](/assets/img/events/HungerChanged.png)<br>
Here you can see that the player has just lost 1 of 20 hunger points and is currently at 17 of 20

### ItemCrafted
This event is triggered when ever you craft an item.

Args:

	3. Item crafted
	4. Crafting matrix before crafting
	
![Event Details](/assets/img/events/ItemCrafted.png)<br>
Shows that atleast 1 sugar was crafted from a matrix where
14 sugar cane were in the top left slot
<span class="comment">(Image from version 7.2.1 update needed)</span>

### ItemDurability
This event is fired whenever the durability of the held item changes.

Args:

	3. The item
	4. Durability change
	
![Event Details](/assets/img/events/ItemDurability.png)

### ItemPickup
This event is fired whenever you pick up an item.

Args:

	3. Item picked up
	
![Event Details](/assets/img/events/ItemPickup.png)

### ItemTossed
This event is fired when you toss an item.

Args:

	3. Item picked up

![Event Details](/assets/img/events/ItemTossed.png)

### JoinWorld
The JoinWorld event is fired when the player (you) joins any world. (Single player or multi player)

| Arg | Description | Explanation |
|:----|:-------------------------|:-------------|
|3     |"VANILLA"/"MODDED"  |Indicates if the server/world joined is modded or not. |
|4.    |"SP"/"MP"                   |Indicates if you are on a Single Player world or a Multi Player world. |
|5.    |Server Name               |The name of the server as you named it in your multiplayer menu |
|6.    |MOTD                         |false if none exists |
|7.    |IP                              |false if none exists |

<div class="note">Args 5,6, and 7 only show up when on a multiplayer world.</div>
![Event Details](/assets/img/events/JoinWorld.png)<br>
Left shows a `single player` world, Right shows a `server`.<br>
`localhost` shows up on both the `5` and `7` because the server was named after it's `IP`

### LeaveWorld
This event is triggered when you disconnect from a server or single player game.

There are no special arguments added to this event.

### PlayerIgnited
This event is triggered when the player either catches fire or is extinguished.

Args:

	3. Is currently on fire (boolean)

![Event Details](/assets/img/events/PlayerIgnited.png)

### PotionStatus
This event is triggered while a potion effect is applied to the player.
<div class="note">This event is fired once for each active potion effect.</div>

This event will be re-triggered as the duration values on the potion effects change.
The interval used to determine how frequently to call this event can be configured in the mod settings.

**Showing the current setting:**
```lua
log( getSettings().events.potionStatusFrequency )
```
The rule here is that when the potions remaining duration measured in ticks -1 is divisible by the frequency, the event is triggered
( (duration-1) % frequency == 0 )

Args:

	3. Potion details
	
![Event Details](/assets/img/events/PotionStatus.png)

### Respawn
The Respawn event triggers after the player dies and presses `Respawn`.<span class="flavorText">Good as new!</span><br>

This event has no special arguments.

### SaturationChanged
This event is triggered when the players `saturation level` is changed.

Args:

	3. Current saturation level
	4. Amount changed

![Event Details](/assets/img/events/SaturationChanged.png)

### UseBed
Triggered when the player enters a bed.

No special args for this event.

### UseItem
This event is triggered while the use key is being held or when it is released.
This only works for items with a `use` action (like food, potions, bows, etc) not blocks being placed.

Args:

	3. item being used
	4. 72000-ticks held
	5. phase (start, tick, stop)

<div class="note">
The 72000 value comes from Minecraft. (1 hour in ticks)
This is the maximum amount of time you can hold the use button on an item before it is forced to finish
</div>

<div class="note">
This events tick rate can be configured using:

<code class="language-lua highlighter-rouge">getSettings().events.useItemFrequency</code>
</div>


Its default value is 20 (once per second)

### WakeUp
This event triggers when a player exits a bed (regardless of time change).<br>
It will also trigger if manual exiting the bed.

No special args for this function.

### XP
This event fires whenever the amount of experience the player has or the number of levels they have changes.

Args:

	3. Current experience points (the bar)
	4. Current level
	5. Change in points
	6. Change in level

![Event Details](/assets/img/events/XP.png)
---
## GUI
### Actionbar
The Actionbar event fires whenever text is displayed above the hotbar.
An example is when playing a record

Args:

	3. displayed text
	4. is the text is colorized ( cycles through colors )
	
![Event Details](/assets/img/events/actionbar.png)

### Chat
The chat event is triggered a chat message whenever any text is added to the chat (except by log).

Args:

	3. Formatted Text
	4. Unformulated Text
	5. Extras

Extras can be tooltips, functions or click actions.<br>
In the example below you can see that the `&T` code makes it so clicking on the players name
will type `/msg Player366` without sending.
![Event Details](/assets/img/events/chat.png)

### ChatFilter
The chat filter event is used to change incoming text and replace it with new text before showing it in the chat.

Args:

	3. Formatted text
	4. Unformatted text
	5. Extras

<div class="note">
Any values returned by the script are used by log to create the altered chat message.
Returning false will cancel the message.
</div>

Example:
```lua
local args = {...}
log( args )
return args[3]:gsub("Amazing Server", "lagging"), table.unpack(args[5])
```
![Script result](/assets/img/events/chatFilter.png)

<div class="note">
<h4>Tip:</h4><br>
Chat filters can be chained by simply having more than one chat filter event in your bindings. <br>
<br>
The return values from the first will be passed to the second adding in the <code class="highlighter-rouge">"event"</code> and <code class="highlighter-rouge">"ChatFilter"</code> as the first and second arguments again for you.
</div>

### ChatSendFilter
The ChatSendFilter event is triggered whenever the you are about to send a chat message.
This allows you to either edit the text before sending it or cancel the message entirely.

Args:
	
	3. Text to send

Example:
```lua
local args = {...}
log( args )
return args[3]:gsub("btw","by the way")
```
![Script result](/assets/img/events/chatSendFilter.png)

<div class="note">
<h4>Tip:</h4><br>
By canceling the message you can use it to create custom commands.
</div>

### ContainerOpen
This event is triggered anytime you open a `GUI` that has an inventory.

Args:

	3. GUI controlls (isOpen, close, inventory)
	4. Container type (used to get the inventory mapping)

### GuiClosed
This event is called when a `GUI` is closed.

No special arguments for this event.

### GuiOpened
This event is triggered whenever any `GUI` is opened.

Args:

	3. controls
	4. GUI name

Controls always include `isOpen` and `close` functions.
For vanilla GUIs additional functions are included.
For any gui with an inventory `arg 3` should also include a value `inventory` with controls for that inventory's contents.

**Anvil**<br>

|**Function Name**              | **Return value**               | **Description**                                           |
|:--------------------------|:-------------------------|:---------------------------------------------|
|getCost()                      | Number: Repair cost     |Returns the repair cost in levels                |
|getName()                    | String: Item name        |Returns the text from the anvils name field |
|setName( String:name ) |                                 |Sets the text in the anvils name field          |

**Villlager**

|**Function Name**              | **Return value**               | **Description**                                           |
|:--------------------------|:-------------------------|:---------------------------------------------|
|getTrades()                   | Table: Trade list          |Returns a list of trades, each trade has a list of input items (1 or 2), 1 output item, and the number of uses remaining. <br>[input, output uses] |
|getType()                      | String: Villager type    |Returns the the type of villagers.<br>(Librarian, Farmer, Blacksmith...etc) |

**Enchantment table**

|**Function Name**              | **Return value**               | **Description**                                           |
|:-------------------------------|:-------------------------------|:---------------------------------------------|
|getOptions()                        | Table: Enchantment options  | Returns a list of the available enchantment options.<br>Each option has the properties **hint** and **lvl**. |
|pickOption(Number: option)  |                                          | Clicks on the enchantment option chosen. Number must be between 1 and 3 (inclusive). |

**Sign**

|**Function Name**              | **Return value**               | **Description**                                           |
|:-------------------------------|:-------------------------------|:---------------------------------------------|
|getLines()                            | Table: Lines                | Returns a table containing each line on the sign |
|done                                   |                                 | Clicks the "Done" button for you                      |
|setLine( Number: lineNum <, String: text> ) |            | Sets the text for a line.<br>Text will default to "" |
|setLines( Table: lines )         |                                  | Grabs each index from the given table to set the sign's text |
|setLines(<br>  String:line1<br>  <,String: line2><br>  <,String: line3><br>  <,String: line4> ) |                                  | Sets each text line, nil values will be "" |

**Book (1.14.4+)**

|**Function Name**              | **Return value**               | **Description**                                           |
|:-------------------------------|:-------------------------------|:---------------------------------------------|
|sign( String: Title )               |                                | Signs the book with a given title.                      |
|save()                                 |                                 | Sends changes to the book to the server.          |
|isSigned()                           | **FALSE**                 | This is the writeable book and can not be signed<br>(in 1.12.2 the written book used the same controls) |
|getText()                             | String: text                | Returns the text on the current page |
|setText( String: Text)            |                                 | Sets the text on this page to the given text |
|getPages()                           | Table: Pages              | Returns the entire book as a list of strings.<br>Each string is another page. |
|setPages( Table: Pages )        |                                 | Sets each page in the book to the text from the provided table.<br>Stops at #pages (inclusive) |
|addPage()                            | Boolean: Added          | Returns **TRUE** if a page was added to the book.<br>Returns **FALSE** if it could not (page limit). |
|nextPage()                           | Boolean: Success        | Navigate to the next page.<br>If the next page does not exist it will attempt to create it.<br>Returns **FALSE** if a new page could not be created, **TRUE** otherwise. |
|prevPage()                           | Boolean: Success        | Navigate to the previous page.<br>Returns **FALSE** if there was no previous page, **TRUE** otherwise. |
|currentPage()                       | Number: PageNumber  | Returns the current page number |
|gotoPage( Number: PageNum ) |                               | Jump directly to a certain page number.<br>PageNum will be moved into the range [1, pageCount] if it falls outside that range. |
|pageCount()                         | Number: NumPages     | Return the number of pages in this book. |

**Book (1.12.2)**, Contains all of the above with the following changes:

|**Function Name**              | **Return value**               | **Description**                                           |
|:-------------------------------|:-------------------------------|:---------------------------------------------|
|getTitle()                      | String: Title               | Returns the title of the book if written |
|isSigned()                     | Boolean: IsSigned       | Is the book signed? |
|getAuthor()                   | String: Author            | Return the author's name |

**Command Block**

|**Function Name**              | **Return value**               | **Description**                                           |
|:-------------------------------|:-------------------------------|:---------------------------------------------|
|isConditional()                     | Boolean: isConditional | Returns true if the command block is in conditional mode |
|getMode()                            | String: mode              | Returns the command block mode.<br>("impulse","chain","repeat") |
|getText()                             | String: commandText   | Returns the current command |
|setMode(String: Mode)          |                                  | Set the mode of the command block. Valid modes are:<br> - "impulse"<br> - "repeat"<br> - "chain" |
|setText(String: cmd)             |                                  | Set the command text |
|done()                                 |                                  | Clicks the '**Done**' button. Saves any changes. |
|isNeedsRedstone()                | Boolean: NeedsRedstone| Returns a boolean indicating if this command block requires a redstone signal to work. |
|isTrackOutput()                    | Boolean: isTracking       | Return a boolean indicating if the command block is keeping command response text. |
|setImpulse()                            |                                   | Sets the command block to '**impulse**' mode. |
|setChain()                              |                                   | Sets the command block to '**chain**' mode. |
|setRepeat                            |                                   | Sets the command block to '**repeat**' mode. |
|setConditional(Boolean: isConditional)     |                                   | Sets if the command block requires a previous command block to be successful to run. |
|setNeedsRedstone(Boolean: needsRedstone) |                                 | Set if the command block requires a redstone signal to work. |
|setTrackOutput(Boolean: shouldTrack) |                     | Set if the command block should track the output from a command. |
|getOutput()                        | String: outputText         | Returns the output text from the last command that ran. |


---
## World
### PlayerJoin
Triggered whenever a player joins the game.
This event does not rely on the `Player has joined the game` message and will work even if a server has hidden those messages.

Args:

	3. Players name

![Event Details](/assets/img/events/PlayerJoin.png)

### PlayerLeave
This event triggers when any player leaves the server.
This event's implementation does not rely on the `Player left the game` messages and will work even if
a server has hidden those messages.

Args:

	3. the player who left. <span class="flavorText">(Good bye friend!)</span>
	
![Event Details](/assets/img/events/PlayerLeave.png)

### Sound
This event is triggered when any sound is played in game (but not by `playSound` or `getSound`).

Args:

	3. Sound name
	4. extra info
	5. controls including
	
|Control | Return Value |Description |
|:--------|:------------|:---------|
|isPlaying() | Boolean | Check if the sound is still playing.<br>Only relates to this one instance. |
|stop() |      | Stop the sound() |

### Title
The title event is triggered whenever a player is shown a title in game.

Args:

	3. title text
	4. subtitle text (if none then it's "" )
	5. display time in ticks
	6. fade in time in ticks
	7. fade out time in ticks

### Weather
This event is triggered whenever the weather changes in game.<br>
Weather will not normal change directly from clear to thunder or from thunder directly to clear.<br>
It will instead transition through rain.

| Weather types: |
|:-----------------|
|clear                |
|rain                 |
|thunder            |

Args:
	
	3. Current weather

![Event Details](/assets/img/events/Weather.png)
### WorldSaved
This event is triggered whenever your single player game is saved.

No special arguments for this event.

---
## Other
### Anything
This event is the catch all event. Anything **except for chat filters** will trigger this.
**Key and mouse events will also trigger this.**

Args will match as described in other events.

### ProfileLoaded
This event is fired whenever the current Bindings profile has been changed.

Args:

	3. Profile name

![Event Details](/assets/img/events/ProfileLoaded.png)<br>
 A profile named `Documentation` has just been loaded
### Startup
This event is triggered right after the mod has been loaded and is an excellent time load any functions that you want to be available for the remainder of the time the game runs.

No special args for this event


This example code will run every script that exists in a folder named "startup"
and can be a neat way to run multiple scripts during startup without cluttering your bindings menu.

```lua
local files = filesystem.list("~macros/startup")

toast("Startup","loading files...")
for a, b in pairs(files) do
  local pass, err = pRun("~macros/startup/"..b)
  if not pass then
    log("&cstartup&7/&c"..b.."&4 "..err)
  end
end
```