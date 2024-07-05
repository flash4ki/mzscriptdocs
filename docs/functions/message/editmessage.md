# $editMessage
Edit message to ctx channel by default or to provided channel.

## Errors
- Cannot send message with 0 args
- Cannot find channel
- Cannot send message with empty content or embed

## Usage
```py
$editMessage[(Channel ID;Message ID;Content;Title;Description;Footer;Footer icon;Color;Thumbnail;Image;Author;Author URL;Author Icon;Return ID)]
```

## Arguments
| Label | Description | Required |
| ----- | ----------- | -------- |
| Channel ID | Channel ID to edit the message. | False |
| Message ID | Message ID to edit the message. | False |
| Content | Default message text outside embed. | False |
| Title | Title, above description (Embed) | False |
| Description | Main text in the embed (Embed) | False |
| Footer | Small text under description (Embed) | False |
| Footer Icon | Icon next to the footer (Embed, Link) | False |
| Color | Embed color (Embed, HEX) | False |
| Thumbnail | Small image near title (Embed, Image) | False |
| Image | Big image under description (Embed, Image) | False |
| Author | Author's note above title. (Embed) | False |
| Author URL | Link for the author. (Embed, Link) | False |
| Author Icon | Small icon near to author, only with Author (Embed, Link) | False |
| Return ID | Returns message ID. | False |

## Tags

### #addButton
Adds button to message.
#### Arguments
| Label | Description | Required |
| ----- | ----------- | -------- |
| `style` | secondary/success/danger/primary or link | True 
| `label` | label of button | True
| `disabled` | is disabled(true/false) | True
| `customID` | id of button | True
| `url` | URL(only link type) | False
| `emoji` | Unicode or discord emoji | False
| `row` | Row of button, default none | False

### #addField
Adds field to embed in message
#### Arguments
| Label | Description | Required |
| ----- | ----------- | -------- |
| `name` | Name of field, like title | True
| `value` | Value of field, like description | True
| `inline` | Is this field will be in line, default is `false` | False

### #addReaction
Adds reaction to message, same to [$addReaction](/docs/functions/message/addreaction)
> More tags will be added soon

## Examples
- Example 1:
```py
<Client>.add_command(name="!command", code="""
$sendMessage[Hello, world!]
""")
```

- Example 2:
```py
<Client>.add_command(name="!command", code="""
$sendMessage[$userInfo[dm];;Welcome!;Welcome to new guild "$guildInfo[name]";;;0058CF]
""")
```
