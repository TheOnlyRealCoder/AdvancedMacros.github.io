---
title: Events
permalink: "/docs/reference/events/"
redirect_from:
  - /events/
  - /reference/
  - /docs/reference/
  - /docs/functions/
---
<style>
	h3{color:#f0c000}
</style>
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

## Player
### AirChanged
This event fires when underwater or leaving it and the amount of air you have has changed.
If the air level is -6 and the player is underwater still during the next 3 ticks they will take damage and the air level will be reset to 0.
Air will decrease by 1 every 3 ticks. In Minecraft the max amount of air is 300, this has been scaled down to 100.

For this event maximum air is 100, and after -6 the player takes damage.

Args:

	3. current amount of air
	4. amount changed (gain/loss)

![Event Details](/assets/img/events/AirChanged.png)

Here we can see the player's air has just been restored to 100 (from -3) after having been under water long enough to take damage

### ArmourDurability
This event is called whenever the damage amount on your armour changes. (Also triggers when equipping / equipping armour)

Args:

	3. current armour values (in a table)
	4. armour changes (in a table)
	
For the provided tables, index 1 is the boots, 4 is the helmet.
![Event Details](/assets/img/events/ArmourDurability.png)

Seen here, the player has just damaged their boots and lost 1 durability on them.

### ArrowFired
This event is triggered when ever a bow has been released (if not pulled back enough it wont fire the arrow, but still triggers the script)
After version 7.2.1 event details are correctly included.

Args:

	3. the bow (item info)
	4. how long the bow was charged for
	5. has ammo
	
![Event Details](/assets/img/events/ArrowFired.png)

### AttackEntity
This event is fired when you attack any entity.
This event is **not triggered by arrows**.

Args:

	3. attacked entity info

### AttackReady
This event is triggered when the player has finished swinging their arm and can attack at full power again.

No special args for this function.

### BlockInteract
This event is triggered when you hit USE on a block.

Args:

	3. block pos
	4. held item
	5. "main hand" / "off hand"
	6. block side [up, down, north, east, south, west]
	
### BreakItem
**This event does not work in 1.12.2 versions of the mod**
Event is triggered when an item is broken

Args:
	
	3. The item that broke
	
![Event Details](/assets/img/events/breakItem.png)
### Death
This event triggers when the player dies. <font color="#40444b">(tragic...)</font>

There are no special arguments.
### DimensionChanged
### EntityInteract
### HealthChanged
### HotbarChanged
### HungerChanged
### ItemCrafted
### ItemDurability
### ItemPickup
### ItemTossed
### JoinWorld
### LeaveWorld
### PlayerIgnited
### PotionStatus
### Respawn
### SaturationChanged
### UseBed
### UseItem
### WakeUp
### XP

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

Extras can be tooltips, functions or click actions
In the example below you can see that the &T code makes it so clicking on the players name
will type "/msg Player366" without sending.
![Event Details](/assets/img/events/chat.png)

### ChatFilter
The chat filter event is used to change incoming text and replace it with new text before showing it in the chat.

Args:

	3. Formatted text
	4. Unformatted text
	5. Extras

Any values returned by the script are used by log to create the altered chat message.
Returning false will cancel the message.

Example:
```lua
local args = {...}
log( args )
return args[3]:gsub("Amazing Server", "lagging"), table.unpack(args[5])
```
![Script result](/assets/img/events/chatFilter.png)

**Tip:** Chat filters can be chained by simply having more than one chat filter event in your bindings. 
The return values from the first will be passed to the second adding in the `"event"` and `"ChatFilter"` as the first and second arguments again for you.

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

**Tip:** By canceling the message you can use it to create custom commands.
### ContainerOpen
### GuiClosed
### GuiOpened

## World
### PlayerJoin
### PlayerLeave
### Sound
### Title
### Weather
### WorldSaved

## Other
### Anything
This event is the catch all event. Anything **except for chat filters** will trigger this.
**Key and mouse events will also trigger this.**

Args will match as described in other events.
### ProfileLoaded
### Startup