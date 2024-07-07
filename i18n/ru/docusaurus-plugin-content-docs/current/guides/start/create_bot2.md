---
sidebar_position: 2
sidebar_label: 'Создание бота. Часть 2'
---

# Создаем бота. Часть 2

## Устанавлием MZscript
```
pip install MZscript
```

## Стартер
```py
from MZscript import MZClient

bot = MZClient()

bot.add_command(name="!help", code="""
$sendMessage[
Whats up?
!moderation
!info
!economy]
""")

bot.run("your bot token")
```

