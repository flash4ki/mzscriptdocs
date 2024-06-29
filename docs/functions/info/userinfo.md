# $userInfo

## Usage
```py
$userInfo[userid?;params]
```

## Parameters
| Label | Description | Required |
| ----- | ----------- | -------- |
| userid | User ID | False |
| params | Parameter | True |

### Params
```py
avatar
banner
bot
created
name
display_name
global_name
id
system
```

## Example
```py
<Client>.add_command(name='!command', code='$sendMessage[$userInfo[id]')
```