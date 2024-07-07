# $kick
Выганяет пользователя с гильдии.

## Usage
```py
$kick[(Guild ID);User ID;(Reason)]
```

## Параметры
| Название | Описание | Обьязательно |
| -------- | -------- | ------------ |
| Guild ID | Гильдия в которой нужно выгнать пользователя | Нет |
| User ID | Пользователь которого нужно кикнуть. | Да |
| Reason | Причина кика. | Нет |

## Пример
```py
<Client>.add_command(name='!command', code='$sendMessage[User kicked!] $kick[$message]')
```
