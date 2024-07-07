# $userInfo
Returns the user information.

## Usage
```py
$userInfo[(Guild ID;User ID);Type]
```

## Parameters
| Label | Description | Required |
| ----- | ----------- | -------- |
| Guild ID | Guild ID to return this information. | False |
| User ID | User ID to return this information. | False |
| Type | What type of information should be returned? | True |

### Supported inputs for `Type`:
| Input | Description |
| ----- | ----------- |
| avatar | User avatar icon |
| banner | User banner image |
| bot | "true" if user is bot and "false" if isn't |
| created | Unix-time of created discord account |
| name | The user's username |
| display_name | The user's display name |
| global_name | The user's global name |
| id | The user's id |
| system | "true" if the user is an Official Discord System user and "false" if isn't |
| timeout | When timeout will be ended (unix-time) |
| status | The user's discord status |
| joined | When user joined to the guild (unix-time) |

## Example
```py
<Client>.add_command(name='!command', code='$sendMessage[User ID: $userInfo[id]]')
```
