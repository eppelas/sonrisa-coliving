# 📸 Как сохранить фотографии

## ❌ Проблема: Серые прямоугольники

Вы видите серые прямоугольники вместо фото, потому что **файлы ещё не сохранены в папку `/images/`**.

Я обновил код, чтобы он ссылался на эти фотографии, но физические файлы нужно сохранить вручную.

---

## ✅ Решение: Сохраните фотографии

### Шаг 1: Откройте папку проекта
```bash
/Users/viola/CascadeProjects/sonrisa-coliving/images/
```

### Шаг 2: Сохраните каждую фотографию с правильным именем

| Фотография | Имя файла | Где использ. |
|------------|-----------|--------------|
| Drone view Paul do Mar | `paul-do-mar-drone.jpg` | Hero |
| Mountains with clouds (hiking) | `madeira-mountains-clouds.jpg` | Community |
| Coastal trekking (moody) | `madeira-trekking.jpg` | Active Living |
| Above clouds (boots) | `madeira-island-of-clouds.jpg` | Location |
| Private room (wood wardrobe) | `sonrisa-private-room.jpg` | Spaces |
| Coworking (tea + mountains) | `sonrisa-coworking.jpg` | Spaces |
| Garden view (window) | `sonrisa-garden-outdoor.jpg` | Spaces |
| Brothers founders | `brothers-founders.jpg` | Our Story |

---

## 🖥️ Как сохранить (Mac)

### Вариант 1: Перетаскивание
1. Откройте Finder
2. Перейдите в `/Users/viola/CascadeProjects/sonrisa-coliving/images/`
3. Перетащите каждую фотографию из чата в эту папку
4. Переименуйте файлы по таблице выше

### Вариант 2: Правой кнопкой
1. В чате кликните правой кнопкой на фото
2. "Сохранить изображение как..."
3. Выберите папку `images/`
4. Введите правильное имя из таблицы

---

## 🔄 После сохранения

1. **Обновите браузер** (Cmd + R)
2. Фотографии должны появиться вместо серых прямоугольников
3. Если всё равно серые - проверьте имена файлов (точное совпадение!)

---

## ⚠️ Важно

### Имена файлов должны ТОЧНО совпадать:
- ✅ `paul-do-mar-drone.jpg` (правильно)
- ❌ `Paul do Mar Drone.jpg` (неправильно - пробелы)
- ❌ `paul-do-mar-drone.jpeg` (неправильно - .jpeg вместо .jpg)
- ❌ `paul-do-mar-drone (1).jpg` (неправильно - номер)

### Все буквы маленькие, дефисы вместо пробелов!

---

## 🎉 Проверка

Откройте в браузере:
```
file:///Users/viola/CascadeProjects/sonrisa-coliving/index.html
```

Прокрутите и проверьте:
- **Hero** - должен быть drone view
- **Spaces - Private Rooms** - комната с деревянным шкафом
- **Spaces - Coworking** - чай с видом на горы
- **Spaces - Garden** - вид из окна
- **Community** - горы с облаками
- **Active Living - Trekking** - побережье с туманом
- **Location** - ботинки над облаками

---

## 🆘 Если не работает

1. **Проверьте имена файлов** - должны быть точно как в таблице
2. **Проверьте расширение** - `.jpg` (не `.jpeg`, не `.png`)
3. **Проверьте папку** - файлы в `/images/`, не в подпапках
4. **Обновите браузер** - жёсткое обновление: Cmd + Shift + R
5. **Откройте консоль** - F12 → Console → ищите ошибки 404

---

## 📁 Структура должна быть:

```
sonrisa-coliving/
├── index.html
├── images/
│   ├── paul-do-mar-drone.jpg ✓
│   ├── madeira-mountains-clouds.jpg ✓
│   ├── madeira-trekking.jpg ✓
│   ├── madeira-island-of-clouds.jpg ✓
│   ├── sonrisa-private-room.jpg ✓
│   ├── sonrisa-coworking.jpg ✓
│   ├── sonrisa-garden-outdoor.jpg ✓
│   └── brothers-founders.jpg ✓
├── css/
├── js/
└── ...
```

---

**После сохранения всех фотографий сайт будет полностью визуален!** 🎨✨
