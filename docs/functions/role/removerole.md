# $removeRole
Remove a role to a user.

## Usage
```py
$removeRole[(Guild ID;User ID);Role ID]
```

## Parameters
| Label | Description | Required |
| ----- | ----------- | -------- |
| Guild ID | Guild ID to remove the role. | False |
| User ID | User ID to remove the role. | False |
| Role ID |	Role ID to remove the role | True |

## Example
```py
<Client>.add_command(name='!command', code='$removeRole[$roleInfo[$message[0];id]]')
```