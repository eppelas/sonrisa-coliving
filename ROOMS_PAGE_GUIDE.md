# 🏠 Rooms Page Guide

## ✅ What's Created

**New page:** `rooms.html` - Detailed room listings with galleries, pricing, and availability

### Features:
- ✅ **8 Room Cards** with full details
- ✅ **Image Galleries** (3 photos per room, swipeable)
- ✅ **Flexible Pricing** based on stay duration
- ✅ **Inline Availability Calendar** for each room
- ✅ **Modal Calendar** for full view
- ✅ **Real-time availability** simulation (90 days)

---

## 📋 Room Data Structure

Each room includes:

```javascript
{
    id: 1,
    name: "Ocean View Suite",
    type: "suite-balcony",
    description: "Detailed description...",
    features: [
        "Private balcony with ocean view",
        "King-size bed",
        "Ensuite bathroom with shower",
        // ... more features
    ],
    capacity: 2,
    pricing: {
        "2weeks": 850,   // €850 for 2+ weeks
        "1month": 1500,  // €1500 for 1+ month  
        "6weeks": 2100   // €2100 for 1.5+ months
    },
    images: [
        "url-to-image-1.jpg",
        "url-to-image-2.jpg",
        "url-to-image-3.jpg"
    ],
    availability: { /* date: boolean */ }
}
```

---

## 🎨 Room Types

### 1. Ocean View Suite (€850-2100)
- Premium suite with balcony
- Ocean view
- 25 m²

### 2-5. Private Ensuite Rooms (€650-1750)
- Private bathroom
- Work desk
- 15-20 m²

### 6-7. Private Shared Bath (€550-1350)
- Private room
- Shared bathroom
- Budget-friendly

### 8. Shared Room (€400-1000)
- 2 single beds
- Most affordable
- Great for solo travelers

---

## 📅 Calendar Features

### Inline Calendar (on each room card):
- Shows current month
- Green = Available
- Gray = Booked
- Light gray = Past dates
- Navigation buttons (prev/next month)

### Modal Calendar (full screen):
- Opens when clicking "View Full Calendar"
- Same availability data
- Better for planning longer stays

### Color Legend:
- **Green (#4A9B9F)** - Available dates
- **Gray (#E0E0E0)** - Booked/unavailable
- **Light Gray** - Past dates (disabled)

---

## 🖼️ Gallery Features

- **3 photos per room** (minimum)
- **Auto-rotation** (optional, currently disabled)
- **Manual controls**: Left/right arrows
- **Dot indicators**: Click to jump to specific photo
- **Smooth transitions**: Fade effect
- **Hover effects**: Scale on hover

---

## 📝 How to Update Content

### Add New Room:
Edit `js/rooms-data.js` and add to `roomsData` array:

```javascript
{
    id: 9, // Unique ID
    name: "Your Room Name",
    type: "private-ensuite",
    description: "Description here",
    features: ["Feature 1", "Feature 2"],
    capacity: 1,
    pricing: {
        "2weeks": 650,
        "1month": 1150,
        "6weeks": 1600
    },
    images: [
        "images/room9-1.jpg",
        "images/room9-2.jpg",
        "images/room9-3.jpg"
    ],
    availability: generateAvailability(0.7)
}
```

### Update Pricing:
Change the `pricing` object in `js/rooms-data.js`

### Update Photos:
1. Add photos to `images/` folder
2. Update `images` array URLs
3. Re-deploy

### Update Availability:
Currently simulated. To connect real calendar:
1. Integrate with booking system API (Beds24, etc.)
2. Replace `generateAvailability()` function
3. Fetch real data from your booking platform

---

## 🔗 Navigation

### From Main Page:
- Click "Rooms" in navbar
- Click "View All Rooms & Availability" button (Spaces section)

### From Rooms Page:
- Click "Sonrisa" logo to return home
- Use navbar links

---

## 🎯 User Flow

1. **Landing Page** → Click "Rooms" or "View All Rooms"
2. **Rooms Page** → Browse rooms, see galleries
3. **Calendar** → Check availability inline or in modal
4. **Pricing** → Compare duration-based pricing
5. **Book** → Click "Book This Room" → Goes to booking form

---

## 🔄 Integration with Booking System

### Current State (MVP):
- Simulated availability (random data)
- Manual email booking via form

### Future Integration:

#### Option A: Calendly
```javascript
// Add to each room card
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/sonrisa/room-1">
</div>
```

#### Option B: Beds24
```javascript
// Fetch availability from API
async function getAvailability(roomId) {
    const response = await fetch(`https://beds24.com/api/availability/${roomId}`);
    const data = await response.json();
    return data;
}
```

#### Option C: Google Calendar API
```javascript
// Sync with Google Calendar
const calendar = google.calendar({version: 'v3', auth});
const events = await calendar.events.list({
    calendarId: 'room1@sonrisa.com',
    timeMin: (new Date()).toISOString(),
    maxResults: 90
});
```

---

## 📊 Pricing Strategy

### Current Setup:
| Duration | Discount | Example (€700 base) |
|----------|----------|---------------------|
| 2+ weeks | 0%       | €700                |
| 1+ month | ~10%     | €1250 (vs €1400)   |
| 6+ weeks | ~15%     | €1750 (vs €2100)   |

### Adjusting Prices:
Edit `pricing` in `js/rooms-data.js`:
- Lower prices → More bookings, less profit/room
- Higher prices → Fewer bookings, more profit/room
- Compare with local competitors

---

## 🎨 Customization

### Change Calendar Colors:
Edit `css/rooms.css`:
```css
.calendar-day.available {
    background-color: #4A9B9F; /* Change this */
}
```

### Adjust Gallery Speed:
Edit `js/rooms-page.js`:
```javascript
setInterval(() => {
    // Auto-advance gallery
}, 5000); // Change milliseconds
```

### Room Card Layout:
Alternating left/right layout automatically applied
To disable: Remove `reverseLayout` logic in `js/rooms-page.js`

---

## 🐛 Troubleshooting

### Calendar not showing:
- Check `js/rooms-data.js` is loaded
- Open browser console for errors
- Verify `RoomCalendar` class exists

### Images not loading:
- Check image URLs in `rooms-data.js`
- Ensure images exist in `images/` folder
- Check browser network tab

### Gallery stuck:
- Clear browser cache
- Check `galleryState` object in console
- Verify onclick handlers are attached

---

## 📱 Mobile Optimization

- **Gallery**: Touch-swipe enabled
- **Calendar**: Reduced padding on mobile
- **Cards**: Stack vertically on small screens
- **Modal**: Full-screen on mobile

---

## 🚀 Next Steps

### Week 1:
- [ ] Replace placeholder images with real photos
- [ ] Test on multiple devices
- [ ] Get feedback from team

### Week 2:
- [ ] Integrate with real booking calendar
- [ ] Add more photos (4-5 per room)
- [ ] Add video tours

### Month 1:
- [ ] Connect payment system
- [ ] Add instant booking
- [ ] Guest reviews per room

---

## 📧 Support

Questions about the rooms page? Check:
- `js/rooms-data.js` - Room data
- `js/calendar.js` - Calendar logic
- `js/rooms-page.js` - Rendering logic
- `css/rooms.css` - Styling
