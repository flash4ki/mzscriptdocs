# $calculate
Perform mathematical calculations

## Usage
```py
$calculate[Expression]
```

## Parameters
| Label | Description | Required |
| ----- | ----------- | -------- |
| Expression | Calculations to be performed. | False |

## Example
```py
<Client>.add_command(name='!command', code='$sendMessage[$calculate[10/2+5-6*2]')
```
