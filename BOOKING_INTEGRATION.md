# 🗓️ Booking System Integration Guide

## Option 1: Calendly (Quick Start - 15 minutes)

### Step 1: Create Calendly Account
1. Go to https://calendly.com
2. Sign up (free plan works fine)
3. Create event type: "Sonrisa Consultation Call"
4. Set duration: 30 minutes

### Step 2: Get Embed Code
1. Go to your event → Share
2. Copy the inline embed code
3. You'll get something like:
```html
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/your-username/consultation" 
     style="min-width:320px;height:630px;">
</div>
<script type="text/javascript" 
        src="https://assets.calendly.com/assets/external/widget.js">
</script>
```

### Step 3: Update Website
Replace the booking form in `js/sections.js` (around line 450) with:

```javascript
<div class="bg-madeira-cloud p-8 md:p-12 rounded-2xl shadow-xl">
    <div class="calendly-inline-widget" 
         data-url="https://calendly.com/YOUR-USERNAME/sonrisa-consultation" 
         style="min-width:320px;height:700px;">
    </div>
    <script type="text/javascript" 
            src="https://assets.calendly.com/assets/external/widget.js" 
            async>
    </script>
    
    <p class="text-sm text-gray-600 mt-6 text-center">
        Or email us directly: 
        <a href="mailto:hello@sonrisa.com" 
           class="text-madeira-ocean hover:underline">
            hello@sonrisa.com
        </a>
    </p>
</div>
```

**Pros:**
- ✅ Free
- ✅ 15-minute setup
- ✅ Auto timezone detection
- ✅ Email reminders
- ✅ Google Calendar sync

**Cons:**
- ⚠️ Just for consultation calls, not direct booking
- ⚠️ No payment integration
- ⚠️ No room selection

---

## Option 2: Beds24 (Professional - 2-3 hours)

### Step 1: Sign Up
1. Go to https://beds24.com
2. Sign up for account (€5-25/month)
3. Add your property details

### Step 2: Configure Rooms
1. Add all 8+ rooms with details
2. Set prices (daily/weekly/monthly)
3. Configure availability calendar
4. Set booking rules (min stay, etc.)

### Step 3: Get Widget Code
1. Settings → Booking Widgets
2. Create "Inline Widget"
3. Customize design to match Sonrisa colors
4. Copy embed code

### Step 4: Update Website
```html
<div class="bg-madeira-cloud p-8 md:p-12 rounded-2xl shadow-xl">
    <!-- Beds24 Booking Widget -->
    <iframe src="https://beds24.com/booking2.php?propid=YOUR_PROPERTY_ID&layout=1" 
            style="width:100%; height:800px; border:0;" 
            scrolling="auto">
    </iframe>
</div>
```

**Pros:**
- ✅ Full property management
- ✅ Payment processing
- ✅ Channel manager (Airbnb, Booking.com sync)
- ✅ Automated emails
- ✅ Calendar management

**Cons:**
- ⚠️ Monthly cost
- ⚠️ More setup time
- ⚠️ Learning curve

---

## Option 3: Google Calendar API (Custom - Dev time)

For developers who want full control. See `BOOKING_API_EXAMPLE.md` for code.

---

## Quick Win: Mailto Link (Immediate)

While setting up proper booking, use enhanced mailto:

```html
<a href="mailto:hello@sonrisa.com?subject=Booking%20Inquiry%20-%20Sonrisa&body=Hi!%0D%0A%0D%0AI'd%20like%20to%20inquire%20about%20staying%20at%20Sonrisa.%0D%0A%0D%0ACheck-in:%20%0D%0ACheck-out:%20%0D%0ARoom%20type:%20%0D%0ANumber%20of%20guests:%20%0D%0A%0D%0AMessage:%20" 
   class="bg-madeira-terracotta text-white px-12 py-4 rounded-full hover:bg-madeira-earth transition text-lg font-handwritten shadow-lg">
    Email Us to Book
</a>
```

---

## Hybrid Approach (Recommended)

**Phase 1 (Week 1):** 
- Use Calendly for consultation calls
- Use mailto for booking inquiries
- Manually manage bookings via email/spreadsheet

**Phase 2 (Month 1):**
- Set up Beds24 or similar
- Migrate to automated booking
- Keep Calendly for tours/questions

**Phase 3 (Month 2+):**
- Integrate payment gateway
- Add instant booking
- Automate everything

---

## Payment Options

### Stripe
- Best for online payments
- 2.9% + 30¢ per transaction
- Easy integration with most booking systems

### PayPal
- Familiar to most users
- Similar fees
- Good international support

### Bank Transfer
- No fees
- Manual process
- Good for long-term stays

### Deposit System
Recommended flow:
1. Guest books online
2. 30% deposit via Stripe/PayPal
3. Remaining 70% on arrival or before

---

## Testing Checklist

Before going live:
- [ ] Test booking on desktop
- [ ] Test booking on mobile
- [ ] Check email notifications work
- [ ] Verify calendar sync
- [ ] Test payment flow
- [ ] Check confirmation emails
- [ ] Verify pricing is correct
- [ ] Test cancellation process

---

## Support

- **Calendly:** https://help.calendly.com
- **Beds24:** https://wiki.beds24.com
- **Stripe:** https://support.stripe.com
