# $addRole
Give a role to a user.

## Usage
```py
$addRole[(Guild ID;User ID);Role ID]
```

## Parameters
| Label | Description | Required |
| ----- | ----------- | -------- |
| Guild ID | Guild ID to issue the role. | False |
| User ID | User ID to issue the role. | False |
| Role ID | Role ID to issue the role | True |

## Example
```py
<Client>.add_command(name='!command', code='$addRole[$roleInfo[$message[0];id]]')
```