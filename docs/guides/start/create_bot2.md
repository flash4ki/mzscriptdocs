---
sidebar_position: 2
sidebar_label: 'Create Bot. Part 2'
---

# Create Bot. Part 2

## Downland MZscript
```
pip install git+https://github.com/MZshnik/MZscript
```
# Update
```
pip install --upgrade git+https://github.com/MZshnik/MZscript
```

## Starter
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

