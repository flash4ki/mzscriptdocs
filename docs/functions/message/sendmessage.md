# $sendMessage
Sends the message.

## Usage
```py
$sendMessage[(Channel ID;Content;Title;Description;Footer;Footer icon;Color;Thumbnail;Image;Author;Author URL;Author Icon)]
```

## Parameters
| Label | Description | Required |
| ----- | ----------- | -------- |
| Channel ID | Channel ID to send the message. | False |
| Content | Default message text outside embed. | False |
| Title | Title, above description. (Embed) | False |
| Description | Main text in the embed. (Embed) | False |
| Footer | Small text, under description. (Embed) | False |
| Footer Icon | Icon next to the Footer. (Embed, Link) | False |
| Color | Embed color, HEX. | False |
| Thumbnail | Small image near to title. (Embed, Link) | False |
| Image | Big image under description. (Embed, Link) | False |
| Author | Author's note above Title. (Embed) | False |
| Author URL | Link for the author. (Embed, Link) | False |
| Author Icon | Small icon near to Author, you should use "Author" parameter to display icon. (Embed, Link) | False |

## Example
- Example 1:
```py
<Client>.add_command(name='!command', code='$sendMessage[Hello, world!]')
```

- Example 2:
```py
<Client>.add_command(name='!command', code='$sendMessage[$userInfo[dm];;Welcome!;Welcome to new guild "$guildInfo[name]";;;0058CF]')
```
