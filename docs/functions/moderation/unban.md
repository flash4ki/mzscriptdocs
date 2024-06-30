# $unban
Unbans the user.

## Usage
```py
$unban[(Guild ID);User ID;(Reason)]
```

## Parameters
| Label | Description | Required |
| ----- | ----------- | -------- |
| Guild ID | The guild on which user should be un-banned. | False |
| User ID | The user who should to be un-banned. | True |
| Reason | Reason of unban. | False |

## Example
```py
<Client>.add_command(name='!command', code='$sendMessage[Say hello again to this user!] $unban[$message]')
```
