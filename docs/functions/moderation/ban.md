# $ban
Bans the user.

## Usage
```py
$ban[(Guild ID);User ID;(Reason)]
```

## Parameters
| Label | Description | Required |
| ----- | ----------- | -------- |
| Guild ID | The guild on which user should be banned. | False |
| User ID | The user who should to be banned. | True |
| Reason | Reason of ban. | False |

## Example
```py
<Client>.add_command(name='!command', code='$sendMessage[User banned!] $ban[$message]')
```
