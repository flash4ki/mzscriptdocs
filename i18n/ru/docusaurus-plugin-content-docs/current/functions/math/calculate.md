# $calculate
Решает обычные математические примеры

## Использование
```py
$calculate[Expression]
```

## Парамерты
| Название | Описание | Обьязательно |
| -------- | -------- | ------------ |
| Expression | Пример которой нужно решить. | Да |

## Пример
```py
<Client>.add_command(name='!command', code='$sendMessage[$calculate[10/2+5-6*2]]')
```
