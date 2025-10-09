# 🚀 Деплой на GitHub Pages

## Быстрая инструкция

### 1. Создайте репозиторий на GitHub
1. Откройте https://github.com/new
2. Название: `sonrisa-coliving` (или любое другое)
3. **Public** (обязательно для бесплатного GitHub Pages)
4. **НЕ** ставьте галочки на README, .gitignore, license
5. Нажмите **Create repository**

### 2. Подключите локальный репозиторий
Скопируйте команды из GitHub (будут показаны после создания):

```bash
git remote add origin https://github.com/ВАШ_USERNAME/sonrisa-coliving.git
git branch -M main
git push -u origin main
```

Или выполните сразу (замените YOUR_USERNAME):

```bash
cd /Users/viola/CascadeProjects/sonrisa-coliving
git remote add origin https://github.com/YOUR_USERNAME/sonrisa-coliving.git
git branch -M main
git push -u origin main
```

### 3. Включите GitHub Pages
1. Откройте репозиторий на GitHub
2. **Settings** → **Pages** (в левом меню)
3. **Source**: Deploy from a branch
4. **Branch**: main, folder: / (root)
5. Нажмите **Save**

### 4. Подождите 1-2 минуты
GitHub автоматически задеплоит сайт.

### 5. Получите ссылку
Ссылка будет: `https://YOUR_USERNAME.github.io/sonrisa-coliving/`

Или вернитесь в **Settings → Pages** - там будет показана готовая ссылка.

---

## 📤 Поделиться с братьями

Просто отправьте им ссылку:
```
https://YOUR_USERNAME.github.io/sonrisa-coliving/
```

Они смогут открыть в любом браузере на телефоне или компьютере!

---

## 🔄 Обновить сайт после изменений

```bash
git add .
git commit -m "Updated design"
git push
```

Через 1-2 минуты изменения появятся на сайте.

---

## 🆘 Если не работает

**Проблема:** "Permission denied"
- **Решение:** Нужно настроить SSH ключ или использовать GitHub Desktop

**Проблема:** "Repository not found"
- **Решение:** Проверьте правильность username в URL

**Проблема:** Сайт не обновляется
- **Решение:** Откройте Settings → Pages → проверьте статус деплоя

---

## ✅ Готово!

После деплоя сайт будет доступен 24/7 бесплатно!
