# $lowerCase
Makes text lowercase.

## Usage
```py
$lowerCase[Text]
```

## Parameters
| Label | Description | Required |
| ----- | ----------- | -------- |
| Text | Text that will need to be changed. | False |

## Example
```py
<Client>.add_command(name='!command', code='$sendMessage[$lowerCase[$message]]')
```
