# 🚀 Быстрый Deploy на Netlify

## Способ 1: Drag & Drop (самый простой)

1. Зайдите на https://app.netlify.com
2. Залогиньтесь или создайте аккаунт
3. Перетащите папку `sonrisa-coliving` в окно браузера
4. Готово! Сайт автоматически опубликован

## Способ 2: Через Git (рекомендуется)

### Шаг 1: Создать Git репозиторий
```bash
cd /Users/viola/CascadeProjects/sonrisa-coliving
git init
git add .
git commit -m "Initial Sonrisa website"
```

### Шаг 2: Залить на GitHub
```bash
# Создайте репозиторий на GitHub, затем:
git remote add origin https://github.com/ваш-username/sonrisa-coliving.git
git branch -M main
git push -u origin main
```

### Шаг 3: Подключить к Netlify
1. На Netlify: "Add new site" → "Import an existing project"
2. Выберите GitHub
3. Выберите репозиторий `sonrisa-coliving`
4. Build settings:
   - Build command: (оставьте пустым)
   - Publish directory: `.`
5. Deploy!

## Способ 3: Netlify CLI

```bash
# Установите Netlify CLI (требуется Node.js)
npm install -g netlify-cli

# Войдите в аккаунт
netlify login

# Deploy
cd /Users/viola/CascadeProjects/sonrisa-coliving
netlify deploy --prod
```

## 📝 После деплоя

1. **Настройте домен**: Settings → Domain management
2. **Добавьте HTTPS**: Автоматически включается
3. **Настройте формы**: Enable Netlify Forms для контактной формы

## 🔄 Обновление сайта

После изменений:
```bash
git add .
git commit -m "Update content"
git push
```

Netlify автоматически пересоберёт сайт!

## 🎯 Следующие шаги

### 1. Замените placeholder фото
- Положите фото в папку `images/`
- Замените URL в `js/sections.js`

### 2. Добавьте реальное видео
- Загрузите видео или используйте YouTube/Vimeo embed
- Обновите hero section в `js/sections.js`

### 3. Интегрируйте календарь бронирования
Рекомендую:
- **Calendly** (бесплатно, простая интеграция)
- **Beds24** (для полноценного управления бронированиями)
- **Lodgify** (специализация на vacation rentals)

Пример интеграции Calendly:
```html
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/your-link" 
     style="min-width:320px;height:630px;"></div>
<script src="https://assets.calendly.com/assets/external/widget.js"></script>
```

### 4. Email форма
Используйте Netlify Forms - просто добавьте атрибут `netlify`:
```html
<form name="contact" method="POST" netlify>
  <input type="email" name="email" />
  <button type="submit">Send</button>
</form>
```

## 💡 Полезные ссылки

- [Netlify Docs](https://docs.netlify.com)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Unsplash](https://unsplash.com) - бесплатные фото
- [Calendly](https://calendly.com) - календарь встреч
