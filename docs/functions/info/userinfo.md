# $userInfo
Returns the user information.

## Usage
```py
$userInfo[User ID;(Type)]
```

## Parameters
| Label | Description | Required |
| ----- | ----------- | -------- |
| User ID | User ID to return ths information. | False |
| Type | What type of information should be returned? | True |

### Supported inputs for `Type`:
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
