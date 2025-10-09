# 🤖 Telegram Bot для бронирования Sonrisa

## ✅ Что сделано

Календарь теперь **только для просмотра**:
- ✓ **Зелёная галочка** = доступная дата
- ✕ **Красный крестик** = занятая дата
- Нет интерактивности, нет выбора дат
- Кнопка "Book via Telegram" ведёт в бот

---

## 🚀 Создание Telegram бота (15 минут)

### Шаг 1: Создать бота через @BotFather

1. Откройте Telegram
2. Найдите **@BotFather**
3. Отправьте команду: `/newbot`
4. Введите название: `Sonrisa Booking Bot`
5. Введите username: `sonrisa_booking_bot` (должен быть уникальным)
6. Получите **токен** (сохраните его!)

Пример токена: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`

---

### Шаг 2: Обновить ссылку в коде

Откройте `js/rooms-page.js`, найдите строку:

```javascript
href="https://t.me/YOUR_BOT_USERNAME?start=room_${room.id}"
```

Замените на:

```javascript
href="https://t.me/sonrisa_booking_bot?start=room_${room.id}"
```

---

## 🤖 Простой вариант бота (без кода)

### Используйте готовые сервисы:

#### 1. **ManyBot** (самый простой)
- Сайт: https://manybot.io
- Бесплатный
- Создаёт бота через веб-интерфейс
- Можно настроить меню, кнопки, формы

**Как настроить:**
1. Зарегистрируйтесь на ManyBot
2. Добавьте вашего бота
3. Создайте приветственное сообщение
4. Добавьте кнопки для каждой комнаты
5. Настройте отправку данных на email

#### 2. **Chatfuel** / **MobileMonkey**
- Drag-and-drop конструктор
- Интеграция с Google Sheets
- Автоматические ответы

---

## 💻 Вариант с кодом (Python + Google Sheets)

Если хотите полный контроль, вот базовый скрипт:

### requirements.txt
```
python-telegram-bot==20.0
gspread==5.12.0
oauth2client==4.1.3
```

### bot.py
```python
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, CallbackQueryHandler, ContextTypes
import gspread
from oauth2client.service_account import ServiceAccountCredentials

# Ваш токен от BotFather
TOKEN = "YOUR_BOT_TOKEN"

# Подключение к Google Sheets (для хранения бронирований)
scope = ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive']
creds = ServiceAccountCredentials.from_json_keyfile_name('credentials.json', scope)
client = gspread.authorize(creds)
sheet = client.open("Sonrisa Bookings").sheet1

# Информация о комнатах
ROOMS = {
    "1": {"name": "Ocean View Suite", "price_2w": 850, "price_1m": 1500, "price_6w": 2100},
    "2": {"name": "Garden Room Deluxe", "price_2w": 700, "price_1m": 1250, "price_6w": 1750},
    # ... добавьте все комнаты
}

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    # Получить ID комнаты из параметра
    args = context.args
    room_id = args[0].replace("room_", "") if args else None
    
    if room_id and room_id in ROOMS:
        room = ROOMS[room_id]
        message = f"🏠 *{room['name']}*\n\n"
        message += f"📅 Choose your stay duration:\n\n"
        message += f"• 2+ weeks: €{room['price_2w']}\n"
        message += f"• 1+ month: €{room['price_1m']}\n"
        message += f"• 1.5+ months: €{room['price_6w']}\n"
        
        keyboard = [
            [InlineKeyboardButton("📅 2+ weeks", callback_data=f"book_{room_id}_2w")],
            [InlineKeyboardButton("📅 1+ month", callback_data=f"book_{room_id}_1m")],
            [InlineKeyboardButton("📅 1.5+ months", callback_data=f"book_{room_id}_6w")],
        ]
        reply_markup = InlineKeyboardMarkup(keyboard)
        
        await update.message.reply_text(message, parse_mode='Markdown', reply_markup=reply_markup)
    else:
        await update.message.reply_text(
            "Welcome to Sonrisa! 🌊\n\n"
            "Please use the booking link from our website to select a room."
        )

async def handle_booking(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    
    # Парсим данные: book_roomid_duration
    data = query.data.split("_")
    room_id = data[1]
    duration = data[2]
    
    room = ROOMS[room_id]
    
    # Сохраняем в Google Sheets
    sheet.append_row([
        update.effective_user.username,
        room['name'],
        duration,
        "pending"
    ])
    
    await query.edit_message_text(
        f"✅ Great choice!\n\n"
        f"Room: {room['name']}\n"
        f"Duration: {duration}\n\n"
        f"Please provide:\n"
        f"1. Your full name\n"
        f"2. Email\n"
        f"3. Preferred check-in date\n\n"
        f"Send this info to @your_manager or email hello@sonrisa.com\n\n"
        f"We'll confirm within 24 hours!"
    )

def main():
    app = Application.builder().token(TOKEN).build()
    
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CallbackQueryHandler(handle_booking, pattern="^book_"))
    
    app.run_polling()

if __name__ == '__main__':
    main()
```

### Запуск:
```bash
python bot.py
```

---

## 📊 Интеграция с Google Sheets

1. Создайте Google Sheet: "Sonrisa Bookings"
2. Колонки: Username | Room | Duration | Status | Date
3. Настройте Google Service Account
4. Дайте доступ к таблице

Все бронирования будут автоматически записываться!

---

## 🎯 Рекомендация

### Для быстрого старта:
1. **Используйте ManyBot** (5 минут настройки)
2. Настройте простое меню
3. Бот присылает вам уведомления
4. Вы отвечаете вручную

### Когда вырастете:
1. Напишите свой бот на Python
2. Интегрируйте с Google Sheets / Beds24
3. Автоматизируйте подтверждения
4. Добавьте оплату через Telegram

---

## ✅ Что уже готово

- ✅ Календарь только для просмотра (✓ и ✕)
- ✅ Кнопка "Book via Telegram"
- ✅ Передача ID комнаты в бот
- ✅ Красивая легенда календаря

**Осталось:** Создать бота и обновить ссылку!

---

## 📞 Альтернатива

Если не хотите Telegram бот, можно:
- WhatsApp бот
- Email форма
- Прямая ссылка на WhatsApp: `https://wa.me/YOUR_NUMBER?text=Hi!%20I%20want%20to%20book%20Room%201`

---

**Простейший вариант (прямо сейчас):** Замените ссылку на WhatsApp и всё будет работать без бота!
