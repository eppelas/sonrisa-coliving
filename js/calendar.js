// Calendar component for room availability

class RoomCalendar {
    constructor(containerId, roomData) {
        this.container = document.getElementById(containerId);
        this.roomData = roomData;
        this.currentMonth = new Date();
        this.selectedDates = { checkin: null, checkout: null };
    }

    render() {
        if (!this.container) return;
        
        const calendarHTML = `
            <div class="room-calendar">
                <div class="calendar-header flex justify-between items-center mb-4">
                    <button onclick="calendar.previousMonth()" class="p-2 hover:bg-madeira-cloud rounded">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                    <h4 class="text-lg font-semibold text-madeira-earth">
                        ${this.getMonthName()} ${this.currentMonth.getFullYear()}
                    </h4>
                    <button onclick="calendar.nextMonth()" class="p-2 hover:bg-madeira-cloud rounded">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
                
                <div class="calendar-legend flex gap-4 text-xs mb-3 justify-center bg-madeira-sand/30 py-2 px-4 rounded-lg">
                    <div class="flex items-center gap-2">
                        <div class="w-5 h-5 bg-madeira-ocean rounded flex items-center justify-center text-white text-xs">✓</div>
                        <span>Available</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="w-5 h-5 bg-gray-100 border border-gray-300 rounded flex items-center justify-center text-gray-400 text-xs">✕</div>
                        <span>Booked</span>
                    </div>
                </div>
                
                <div class="calendar-grid">
                    ${this.renderDaysOfWeek()}
                    ${this.renderDays()}
                </div>
            </div>
        `;
        
        this.container.innerHTML = calendarHTML;
    }

    renderDaysOfWeek() {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return `
            <div class="calendar-days-header grid grid-cols-7 gap-1 mb-2">
                ${days.map(day => `
                    <div class="text-center text-xs font-semibold text-gray-600 py-2">
                        ${day}
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderDays() {
        const year = this.currentMonth.getFullYear();
        const month = this.currentMonth.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();
        
        let daysHTML = '<div class="calendar-days grid grid-cols-7 gap-1">';
        
        // Empty cells before first day
        for (let i = 0; i < startingDayOfWeek; i++) {
            daysHTML += '<div class="calendar-day"></div>';
        }
        
        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dateStr = date.toISOString().split('T')[0];
            const isAvailable = this.roomData.availability[dateStr];
            const isPast = date < new Date().setHours(0, 0, 0, 0);
            
            const dayClass = isPast ? 'past' : (isAvailable ? 'available' : 'booked');
            const displayContent = isPast ? '·' : (isAvailable ? '✓' : '✕');
            
            daysHTML += `
                <div class="calendar-day ${dayClass} aspect-square flex items-center justify-center text-lg rounded"
                     data-date="${dateStr}"
                     title="${isAvailable ? 'Available' : 'Booked'} - ${dateStr}">
                    ${displayContent}
                </div>
            `;
        }
        
        daysHTML += '</div>';
        return daysHTML;
    }

    getMonthName() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
        return months[this.currentMonth.getMonth()];
    }

    previousMonth() {
        this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
        this.render();
    }

    nextMonth() {
        this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
        this.render();
    }
}

// Open calendar modal
function openCalendarModal(roomId) {
    const room = roomsData.find(r => r.id === roomId);
    if (!room) return;
    
    const modal = document.getElementById('calendar-modal');
    const modalRoomName = document.getElementById('modal-room-name');
    const modalContainer = document.getElementById('modal-calendar-container');
    
    modalRoomName.textContent = room.name;
    modal.classList.remove('hidden');
    
    // Create temporary container for calendar
    modalContainer.innerHTML = '<div id="modal-calendar"></div>';
    
    // Render calendar
    window.modalCalendar = new RoomCalendar('modal-calendar', room);
    window.modalCalendar.render();
}

// Close calendar modal
function closeCalendarModal() {
    const modal = document.getElementById('calendar-modal');
    modal.classList.add('hidden');
}

// Close modal on outside click
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('calendar-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeCalendarModal();
            }
        });
    }
});
