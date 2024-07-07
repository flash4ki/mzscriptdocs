# $unban
Снимает бан с пользователя.

## Использование
```py
$unban[(Guild ID);User ID;(Reason)]
```

## Параметры
| Название | Описание | Обьязательно |
| -------- | -------- | ------------ |
| Guild ID | Гильдия в которой нужно снять бан с пользователя. | Нет |
| User ID | С какого пользователя нужно снять бан. | Да |
| Reason | Причина снятия бана. | Нет |

## Пример
```py
<Client>.add_command(name='!command', code='$sendMessage[Say hello again to this user!] $unban[$message]')
```
