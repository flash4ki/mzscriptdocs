# $roleInfo
Returns the role information.

## Usage
```py
$roleInfo[(Guild ID;User ID);Type]
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
| color | Role color |
| created | Unix-time of created role |
| emoji | Emoji role |
| guild | Guild ID in which the role is located |
| hoist | - |
| managed | - |
| mention | Is it possible to mention the role |
| name | The role's name |
| id | The role's id |
| position | - |
| tags | - |

## Example
```py
<Client>.add_command(name='!command', code='$sendMessage[$roleInfo[id]]')
```
