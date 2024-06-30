# $replaceText
Replaces text with other text.

## Usage
```py
$replaceText[Text;Old;New;(Amount)]
```

## Parameters
| Label | Description | Required |
| ----- | ----------- | -------- |
| Text | Text in which you need to replace characters. | True |
| Old | What will need to be replaced. | True |
| New | What should be replaced with. | True |
| Amount | How many times should the text be changed? | False |

## Example
```py
<Client>.add_command(name='!command', code='$sendMessage[$replaceText[$message;Hello;Bye;1]]')
```
