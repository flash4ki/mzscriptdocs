# $kick
Kicks the user.

## Usage
```py
$kick[(Guild ID);User ID;(Reason)]
```

## Parameters
| Label | Description | Required |
| ----- | ----------- | -------- |
| Guild ID | The guild on which user should be kicked. | False |
| User ID | The user who should to be kicked. | True |
| Reason | Reason of kick. | False |

## Example
```py
<Client>.add_command(name='!command', code='$sendMessage[User kicked!] $kick[$message]')
```
