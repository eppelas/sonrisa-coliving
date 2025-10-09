# 🗓️ Interactive Booking System

## ✅ What's New

### Dynamic Date Selection
- ✨ **Single date range picker** - Check-in and check-out in one view
- ⏰ **Real-time validation** - Automatic minimum date enforcement
- 🔄 **Auto-updates** - Available rooms update on date selection

### Smart Room Display
- 🏠 **Dynamic room list** - Shows only available rooms for selected dates
- 💰 **Automatic pricing** - Calculates correct tier based on stay length
- ➡️ **Direct links** - Click to view full room details on rooms.html
- ❌ **No room type dropdown** - Removed, shows real rooms instead

---

## 🎯 How It Works

### 1. User Selects Dates
```javascript
Check-in: 2025-01-15
Check-out: 2025-02-05
→ Automatically calculates: 21 nights, 3 weeks
→ Applies pricing tier: 2weeks (€700-850)
```

### 2. System Checks Availability
```javascript
For each room:
  - Check every date in range
  - If all dates available → Show room
  - If any date booked → Hide room
```

### 3. Display Available Rooms
```
✅ 3 rooms available
21 nights • 3.0 weeks

┌─────────────────────────────────────┐
│ Ocean View Suite                    │
│ Premium suite with private balcony  │
│ 👤 2 guests • 25 m²                 │
│                          €850        │
│                       €40/night      │
│                   [View Details →]   │
└─────────────────────────────────────┘
```

---

## 📋 Features

### Date Picker
- **Minimum date**: Today (can't book in the past)
- **Check-out restriction**: Must be after check-in
- **Real-time update**: `onchange="updateAvailableRooms()"`
- **Responsive**: Stacks vertically on mobile

### Pricing Tiers
Automatic calculation based on stay length:

| Stay Duration | Tier | Applied Price |
|---------------|------|---------------|
| 2-3.9 weeks | `2weeks` | €650-850 |
| 4-5.9 weeks | `1month` | €1150-1500 |
| 6+ weeks | `6weeks` | €1600-2100 |

### Room Cards
Each available room shows:
- **Room name** - e.g., "Ocean View Suite"
- **Description** - Short snippet
- **Capacity** - Number of guests
- **Size** - Square meters
- **Total price** - For full stay
- **Price per night** - Calculated
- **View Details button** - Links to `rooms.html#room-{id}`

---

## 🔧 Technical Implementation

### Files Modified
1. **`js/sections.js`**
   - Removed "Room Type" dropdown
   - Added date inputs with `onchange` handlers
   - Added `#available-rooms-list` container

2. **`js/booking.js`** (NEW)
   - `updateAvailableRooms()` - Main function
   - `calculateStay()` - Nights and pricing tier
   - `isRoomAvailable()` - Check date range
   - Date validation logic

3. **`index.html`**
   - Added `rooms-data.js` script
   - Added `booking.js` script

### Data Flow
```
User selects dates
    ↓
onChange triggers updateAvailableRooms()
    ↓
Get dates from inputs
    ↓
Validate dates
    ↓
Calculate stay duration & pricing tier
    ↓
Filter roomsData by availability
    ↓
Generate HTML for available rooms
    ↓
Update DOM (#available-rooms-list)
```

---

## 💡 User Experience

### Empty State
```
Select dates to see available rooms
```

### After Selecting Dates
```
✅ 3 rooms available
21 nights • 3.0 weeks

[Room 1 card]
[Room 2 card]
[Room 3 card]
```

### No Availability
```
😔 No rooms available for these dates
Try adjusting your dates or contact us for alternative options.
```

### Invalid Dates
```
❌ Check-out date must be after check-in date
```

---

## 🚀 Future Enhancements

### Flexible Dates (Optional)
Could add "±3 days" feature:
```javascript
function addFlexibleDates(days) {
    // Search alternative date ranges
    // Show "Also available: Jan 12-Feb 2 (3 rooms)"
}
```

### Visual Calendar
Replace date inputs with visual calendar (like Airbnb):
- Hover preview
- Blocked dates shown in gray
- Price shown per night

### Real-time Sync
Connect to actual booking system API:
- Beds24
- Hospitable
- Custom backend

---

## 📱 Mobile Optimization

- Date inputs stack vertically on mobile
- Room cards are full-width
- Touch-friendly buttons
- Readable text sizes

---

## 🎨 Styling

### Colors
- **Available badge**: Green (`bg-green-50`, `border-green-200`)
- **Room cards**: White with ocean blue hover (`hover:border-madeira-ocean`)
- **No availability**: Yellow warning (`bg-yellow-50`)
- **Error**: Red (`text-red-600`)

### Interactions
- **Hover**: Border color change + shadow lift
- **Focus**: Ocean blue ring on inputs
- **Active**: Button scale on room cards

---

## 🧪 Testing

### Test Cases
1. **No dates selected** → Shows prompt
2. **Only check-in selected** → Shows prompt
3. **Invalid dates (checkout before checkin)** → Shows error
4. **Valid dates, rooms available** → Shows rooms list
5. **Valid dates, no rooms** → Shows no availability message
6. **Short stay (1 week)** → Uses 2weeks pricing
7. **Long stay (2 months)** → Uses 6weeks pricing

---

## 📞 Contact Fallback

Always visible at bottom:
```
Questions? Email us at hello@sonrisa.com
```

---

## ✅ Summary

**Before:**
- Static form
- Room type dropdown
- Generic "Check Availability" button
- No real-time feedback

**After:**
- ✅ Dynamic date picker
- ✅ Real-time availability check
- ✅ Actual room cards with pricing
- ✅ Direct links to room details
- ✅ Smart pricing calculation
- ✅ Better UX with validation

**Result:** Users can immediately see which rooms are available and for what price, without leaving the page!
