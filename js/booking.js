// Booking System - Custom Calendar with 2-week minimum

let currentCalendarMonth = new Date();
let selectedCheckin = null;
let selectedCheckout = null;
const MIN_STAY_DAYS = 14; // 2 weeks minimum

document.addEventListener('DOMContentLoaded', function() {
    renderCalendar();
    
    // Close calendar when clicking outside
    document.addEventListener('click', function(e) {
        const calendar = document.getElementById('custom-calendar');
        const displayInput = document.getElementById('date-range-display');
        if (calendar && !calendar.contains(e.target) && e.target !== displayInput) {
            calendar.classList.add('hidden');
        }
    });
});

function toggleCalendar() {
    const calendar = document.getElementById('custom-calendar');
    calendar.classList.toggle('hidden');
    if (!calendar.classList.contains('hidden')) {
        renderCalendar();
    }
}

function previousMonth() {
    currentCalendarMonth.setMonth(currentCalendarMonth.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentCalendarMonth.setMonth(currentCalendarMonth.getMonth() + 1);
    renderCalendar();
}

function renderCalendar() {
    const monthYear = document.getElementById('calendar-month-year');
    const daysContainer = document.getElementById('calendar-days');
    
    const year = currentCalendarMonth.getFullYear();
    const month = currentCalendarMonth.getMonth();
    
    // Update month/year display
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
    monthYear.textContent = `${monthNames[month]} ${year}`;
    
    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Clear previous days
    daysContainer.innerHTML = '';
    
    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
        daysContainer.innerHTML += '<div class="aspect-square"></div>';
    }
    
    // Add day cells
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dateStr = date.toISOString().split('T')[0];
        const isPast = date < today;
        
        let classes = 'aspect-square flex items-center justify-center rounded-lg cursor-pointer transition-all text-sm ';
        let disabled = isPast;
        let title = '';
        
        // Check if date is in selected range
        const isCheckin = selectedCheckin && dateStr === selectedCheckin;
        const isCheckout = selectedCheckout && dateStr === selectedCheckout;
        const isInRange = selectedCheckin && selectedCheckout && 
                         date > new Date(selectedCheckin) && date < new Date(selectedCheckout);
        
        // Style based on state
        if (isPast) {
            classes += 'bg-gray-100 text-gray-400 cursor-not-allowed';
            title = 'Past date';
        } else if (isCheckin || isCheckout) {
            classes += 'bg-madeira-ocean text-white font-bold';
            title = isCheckin ? 'Check-in' : 'Check-out';
        } else if (isInRange) {
            classes += 'bg-madeira-ocean/20 text-madeira-earth';
        } else if (selectedCheckin && !selectedCheckout) {
            // After check-in selected, disable dates before minimum stay
            const checkinDate = new Date(selectedCheckin);
            const minCheckoutDate = new Date(checkinDate);
            minCheckoutDate.setDate(minCheckoutDate.getDate() + MIN_STAY_DAYS);
            
            if (date < minCheckoutDate) {
                classes += 'bg-gray-100 text-gray-400 cursor-not-allowed';
                disabled = true;
                const daysUntil = Math.ceil((minCheckoutDate - date) / (1000 * 60 * 60 * 24));
                title = `Minimum stay is ${MIN_STAY_DAYS} days. ${daysUntil} more days needed.`;
            } else {
                classes += 'hover:bg-madeira-sand hover:text-madeira-earth font-medium';
                title = 'Click to select check-out';
            }
        } else {
            classes += 'hover:bg-madeira-sand hover:text-madeira-earth';
            title = 'Click to select check-in';
        }
        
        daysContainer.innerHTML += `
            <div class="${classes}" 
                 data-date="${dateStr}"
                 title="${title}"
                 ${disabled ? '' : `onclick="selectDate('${dateStr}')"`}>
                ${day}
            </div>
        `;
    }
}

function selectDate(dateStr) {
    if (!selectedCheckin) {
        // First click - select check-in
        selectedCheckin = dateStr;
        selectedCheckout = null;
        document.getElementById('checkin-date').value = dateStr;
        document.getElementById('checkout-date').value = '';
        updateDateDisplay();
        renderCalendar();
    } else if (!selectedCheckout) {
        // Second click - select check-out
        const checkinDate = new Date(selectedCheckin);
        const checkoutDate = new Date(dateStr);
        const daysDiff = Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));
        
        if (daysDiff >= MIN_STAY_DAYS) {
            selectedCheckout = dateStr;
            document.getElementById('checkout-date').value = dateStr;
            updateDateDisplay();
            document.getElementById('custom-calendar').classList.add('hidden');
            updateAvailableRooms();
        }
    } else {
        // Reset and start over
        selectedCheckin = dateStr;
        selectedCheckout = null;
        document.getElementById('checkin-date').value = dateStr;
        document.getElementById('checkout-date').value = '';
        updateDateDisplay();
        renderCalendar();
    }
}

function updateDateDisplay() {
    const display = document.getElementById('date-range-display');
    if (selectedCheckin && selectedCheckout) {
        const checkin = new Date(selectedCheckin).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const checkout = new Date(selectedCheckout).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        const days = Math.ceil((new Date(selectedCheckout) - new Date(selectedCheckin)) / (1000 * 60 * 60 * 24));
        display.value = `${checkin} → ${checkout} (${days} nights)`;
    } else if (selectedCheckin) {
        const checkin = new Date(selectedCheckin).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        display.value = `Check-in: ${checkin} (Select check-out)`;
    } else {
        display.value = '';
        display.placeholder = 'Click to select dates';
    }
}

// Function to calculate number of nights and pricing tier
function calculateStay(checkinDate, checkoutDate) {
    const checkin = new Date(checkinDate);
    const checkout = new Date(checkoutDate);
    const nights = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
    const weeks = nights / 7;
    
    let priceTier = '2weeks';
    if (weeks >= 6) {
        priceTier = '6weeks';
    } else if (weeks >= 4) {
        priceTier = '1month';
    }
    
    return { nights, weeks, priceTier };
}

// Function to check room availability for date range
function isRoomAvailable(room, checkinDate, checkoutDate) {
    const checkin = new Date(checkinDate);
    const checkout = new Date(checkoutDate);
    
    // Check each date in the range
    for (let d = new Date(checkin); d < checkout; d.setDate(d.getDate() + 1)) {
        const dateStr = d.toISOString().split('T')[0];
        if (!room.availability[dateStr]) {
            return false; // Room not available on this date
        }
    }
    return true;
}

// Main function to update available rooms
function updateAvailableRooms() {
    const checkinInput = document.getElementById('checkin-date');
    const checkoutInput = document.getElementById('checkout-date');
    const roomsList = document.getElementById('available-rooms-list');
    
    if (!checkinInput || !checkoutInput || !roomsList) {
        console.log('Missing elements:', { checkinInput, checkoutInput, roomsList });
        return;
    }
    
    const checkinDate = checkinInput.value;
    const checkoutDate = checkoutInput.value;
    
    console.log('Dates:', { checkinDate, checkoutDate, roomsData: typeof roomsData !== 'undefined' });
    
    // Validate dates
    if (!checkinDate || !checkoutDate) {
        roomsList.innerHTML = '<p class="text-gray-600 text-left italic">Select check-in and check-out dates to see available rooms</p>';
        return;
    }
    
    if (new Date(checkoutDate) <= new Date(checkinDate)) {
        roomsList.innerHTML = '<p class="text-red-600 text-left">❌ Check-out date must be after check-in date</p>';
        return;
    }
    
    // Calculate stay duration and pricing
    const stay = calculateStay(checkinDate, checkoutDate);
    
    // Check if roomsData exists
    if (typeof roomsData === 'undefined' || !roomsData || roomsData.length === 0) {
        roomsList.innerHTML = `
            <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                <p class="text-red-800 font-semibold">⚠️ Error loading rooms data</p>
                <p class="text-sm text-red-700 mt-2">Please refresh the page or contact us.</p>
            </div>
        `;
        console.error('roomsData not found or empty');
        return;
    }
    
    // Filter available rooms
    const availableRooms = roomsData.filter(room => 
        isRoomAvailable(room, checkinDate, checkoutDate)
    );
    
    // Display results
    if (availableRooms.length === 0) {
        roomsList.innerHTML = `
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p class="text-yellow-800 font-semibold">😔 No rooms available for these dates</p>
                <p class="text-sm text-yellow-700 mt-2">Try adjusting your dates or contact us for alternative options.</p>
            </div>
        `;
        return;
    }
    
    // Display available rooms
    let roomsHTML = `
        <div class="mb-3 p-3 bg-green-50 rounded-lg border border-green-200">
            <p class="text-green-800 font-semibold">✅ ${availableRooms.length} room${availableRooms.length > 1 ? 's' : ''} available</p>
            <p class="text-sm text-green-700">${stay.nights} nights • ${stay.weeks.toFixed(1)} weeks</p>
        </div>
    `;
    
    availableRooms.forEach(room => {
        const price = room.pricing[stay.priceTier];
        const pricePerNight = (price / stay.nights).toFixed(0);
        
        roomsHTML += `
            <div class="bg-white border-2 border-gray-200 hover:border-madeira-ocean rounded-xl p-4 transition hover:shadow-lg group">
                <div class="flex items-start justify-between gap-4">
                    <div class="flex-1">
                        <h4 class="font-serif font-semibold text-madeira-earth text-lg mb-1">${room.name}</h4>
                        <p class="text-sm text-gray-600 mb-2">${room.description}</p>
                        <div class="flex items-center gap-2 text-xs text-gray-500">
                            <span>👤 ${room.capacity} ${room.capacity > 1 ? 'guests' : 'guest'}</span>
                            <span>•</span>
                            <span>${room.features[room.features.length - 1]}</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <div class="text-2xl font-serif font-bold text-madeira-ocean">€${price}</div>
                        <div class="text-xs text-gray-600">€${pricePerNight}/night</div>
                        <a href="rooms.html#room-${room.id}" 
                           class="inline-block mt-2 px-4 py-2 bg-madeira-terracotta text-white rounded-full text-sm hover:bg-madeira-earth transition group-hover:scale-105">
                            View Details →
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
    
    roomsList.innerHTML = roomsHTML;
}

// Optional: Add flexible dates feature (±3 days)
function addFlexibleDates(days) {
    const checkinInput = document.getElementById('checkin-date');
    const checkoutInput = document.getElementById('checkout-date');
    
    if (!checkinInput.value || !checkoutInput.value) {
        alert('Please select dates first');
        return;
    }
    
    const checkin = new Date(checkinInput.value);
    const checkout = new Date(checkoutInput.value);
    
    // Search for alternative dates
    console.log(`Searching ±${days} days for better availability...`);
    // This could be expanded to show alternative date ranges
}
