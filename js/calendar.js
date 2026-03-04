// Calendar component for room availability
if (!window.__roomCalendarRegistry) {
    window.__roomCalendarRegistry = {};
}

function changeRoomCalendarMonth(instanceId, delta) {
    const calendarInstance = window.__roomCalendarRegistry[instanceId];
    if (!calendarInstance) return;
    if (delta > 0) {
        calendarInstance.nextMonth();
    } else {
        calendarInstance.previousMonth();
    }
}

class RoomCalendar {
    constructor(containerId, roomData) {
        this.container = document.getElementById(containerId);
        this.roomData = roomData;
        this.currentMonth = new Date();
        this.selectedDates = { checkin: null, checkout: null };
        this.instanceId = `${containerId}-${Math.random().toString(36).slice(2, 9)}`;
        window.__roomCalendarRegistry[this.instanceId] = this;
    }

    render() {
        if (!this.container) return;
        
        const calendarHTML = `
            <div class="room-calendar">
                <div class="calendar-header">
                    <button onclick="changeRoomCalendarMonth('${this.instanceId}', -1)" class="calendar-month-button" aria-label="Previous month">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                    <h4>
                        ${this.getMonthName()} ${this.currentMonth.getFullYear()}
                    </h4>
                    <button onclick="changeRoomCalendarMonth('${this.instanceId}', 1)" class="calendar-month-button" aria-label="Next month">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
                
                <div class="calendar-legend">
                    <div class="calendar-legend-item">
                        <div class="calendar-legend-swatch calendar-legend-available">✓</div>
                        <span>Available</span>
                    </div>
                    <div class="calendar-legend-item">
                        <div class="calendar-legend-swatch calendar-legend-booked">✕</div>
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
            <div class="calendar-days-header">
                ${days.map(day => `
                    <div class="calendar-day-label">
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
        
        let daysHTML = '<div class="calendar-days">';
        
        // Empty cells before first day
        for (let i = 0; i < startingDayOfWeek; i++) {
            daysHTML += '<div class="calendar-day calendar-day-empty"></div>';
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
                <div class="calendar-day ${dayClass}"
                     data-date="${dateStr}"
                     title="${isAvailable ? 'Available' : 'Booked'} - ${dateStr}">
                    <span class="calendar-day-date">${day}</span>
                    <span class="calendar-day-status">${displayContent}</span>
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
