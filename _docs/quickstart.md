---
title: Quickstart
description: Short guide to get started with Advanced Macros.
permalink: /docs/quickstart/
---

L is the default keybinding for the mod.
Pressing that will open get the bindings menu. \
L + CTRL will show you all the scripts that are currently running, can also stop certain scripts there too if you need to. \
L + CTRL + SHIFT will stop all the scripts (you may need to exit any GUIs first).

If you open the menu and make a new binding you get something like this:
![New binding](/assets/img/events.png)

From left to right:
X: delete the binding
Green Dot: enable/disable the binding
1. Trigger:
   there are 4 modes:
   event (grass block with the arrow)
   key down
   key up
   key down and up
2. key/event picker
    press and either waits for next key press to set for the binding, or lets you pick an event from a list
3. Script picker, opens a file browser to pick a script to run when the trigger occurs

You can make a new script in the Scripts view (the file browser).
You can edit a script by picking it in the Scripts view or by pressing Edit on a binding.

Scripts are written in [Lua](https://www.lua.org/manual/5.2/) (5.2.x *).

There are a ton of functions from the mod, not all of which have been completely documented yet.
Have a browse around this website to see what you can do.

One of the most useful functions is [`log`](https://advancedmacros.github.io/docs/reference/functions/#log), which will put text into the chat that only you will see (client side only). \
[`say`](/docs/reference/functions/#say) is the equivalent of you typing the text into chat.
(print still exists but will go to the game console).

An example of a script is this:

```lua
-- This is my script
log("Running script")
say("I'm about to attack!")
sleep(500)
attack()
```

If you have any questions feel free to ask on the discord.
