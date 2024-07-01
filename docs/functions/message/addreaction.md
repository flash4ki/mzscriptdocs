# $addReaction
Adds reaction to the message.

## Usage
```py
$addReaction[(Channel ID;Message ID);Emoji]
```

## Parameters
| Label | Description | Required |
| ----- | ----------- | -------- |
| Channel ID | Where is message located. | False |
| Message ID | Where is bot need to add reaction. | False |
| Emoji | Which reaction bot should add. | True |

## Exanple
```py
<Client>.add_command(name='!command', code="""
$addReaction[😎] --> add reaction to author message
$sendMessage[Hello!;#addReaction[👍]] --> add reaction to message
""")
```
