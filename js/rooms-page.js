// Rooms page rendering

document.addEventListener('DOMContentLoaded', function() {
    renderAllRooms();
});

function renderAllRooms() {
    const container = document.getElementById('rooms-container');
    if (!container) return;
    
    const roomsHTML = roomsData.map((room, index) => {
        const isEven = index % 2 === 0;
        return renderRoom(room, isEven);
    }).join('');
    
    container.innerHTML = roomsHTML;
    
    // Initialize image galleries
    roomsData.forEach(room => {
        initializeGallery(room.id);
    });
}

function renderRoom(room, reverseLayout = false) {
    const layoutClass = reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row';
    
    return `
        <div class="room-card bg-white rounded-2xl shadow-xl overflow-hidden" data-room-id="${room.id}">
            <div class="flex flex-col ${layoutClass} gap-0">
                <!-- Image Gallery -->
                <div class="md:w-1/2 relative">
                    <div class="gallery-container relative h-96 bg-gray-200" id="gallery-${room.id}">
                        ${room.images.map((img, idx) => `
                            <img src="${img}" 
                                 alt="${room.name}" 
                                 class="gallery-image absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${idx === 0 ? 'opacity-100' : 'opacity-0'}"
                                 data-index="${idx}">
                        `).join('')}
                        
                        <!-- Gallery Controls -->
                        ${room.images.length > 1 ? `
                            <button onclick="previousImage(${room.id})" 
                                    class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition z-10">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                                </svg>
                            </button>
                            <button onclick="nextImage(${room.id})" 
                                    class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition z-10">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            
                            <!-- Gallery Indicators -->
                            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                ${room.images.map((_, idx) => `
                                    <button onclick="goToImage(${room.id}, ${idx})" 
                                            class="gallery-indicator w-2 h-2 rounded-full transition ${idx === 0 ? 'bg-white' : 'bg-white/50'}"
                                            data-indicator="${idx}"></button>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
                
                <!-- Room Details -->
                <div class="md:w-1/2 p-8 md:p-12">
                    <div class="mb-6">
                        <h2 class="text-3xl md:text-4xl font-serif font-semibold text-madeira-earth mb-2">
                            ${room.name}
                        </h2>
                        <p class="text-gray-600 leading-relaxed">
                            ${room.description}
                        </p>
                    </div>
                    
                    <!-- Features -->
                    <div class="mb-6">
                        <h4 class="font-semibold text-madeira-earth mb-3">Features</h4>
                        <ul class="grid grid-cols-2 gap-2 text-sm text-gray-700">
                            ${room.features.map(feature => `
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-madeira-ocean flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>${feature}</span>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <!-- Pricing -->
                    <div class="mb-6">
                        <h4 class="font-semibold text-madeira-earth mb-3 text-sm">Pricing</h4>
                        <div class="space-y-2 text-sm">
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600">2+ weeks</span>
                                <span class="font-semibold text-madeira-earth">€${room.pricing['2weeks']}</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600">1+ month</span>
                                <span class="font-semibold text-madeira-earth">€${room.pricing['1month']}</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600">1.5+ months</span>
                                <span class="font-semibold text-madeira-earth">€${room.pricing['6weeks']}</span>
                            </div>
                        </div>
                        <p class="text-xs text-gray-500 mt-2">
                            Weekly cleaning included
                        </p>
                    </div>
                    
                    <!-- Inline Calendar - Smaller -->
                    <div class="mb-6">
                        <h4 class="font-semibold text-madeira-earth mb-3 text-sm">Availability</h4>
                        <div id="calendar-${room.id}" class="mb-4 text-xs scale-75 origin-top-left"></div>
                    </div>
                    
                    <!-- Actions -->
                    <div class="flex flex-col sm:flex-row gap-3">
                        <a href="https://t.me/YOUR_BOT_USERNAME?start=room_${room.id}" 
                           target="_blank"
                           class="flex-1 bg-madeira-terracotta text-white px-6 py-3 rounded-full hover:bg-madeira-earth transition text-center font-handwritten text-lg flex items-center justify-center gap-2">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.094.036.308.02.475z"/>
                            </svg>
                            Book via Telegram
                        </a>
                        <button onclick="openCalendarModal(${room.id})" 
                                class="flex-1 border-2 border-madeira-ocean text-madeira-ocean px-6 py-3 rounded-full hover:bg-madeira-ocean hover:text-white transition">
                            View Full Calendar
                        </button>
                    </div>
                    <p class="text-xs text-gray-500 text-center mt-2">
                        💬 Our booking bot will help you choose dates and finalize your reservation
                    </p>
                </div>
            </div>
        </div>
    `;
}

// Gallery functions
const galleryState = {};

function initializeGallery(roomId) {
    galleryState[roomId] = { currentIndex: 0 };
    
    // Initialize inline calendar for the room
    const room = roomsData.find(r => r.id === roomId);
    if (room) {
        const calendar = new RoomCalendar(`calendar-${roomId}`, room);
        calendar.render();
    }
}

function nextImage(roomId) {
    const gallery = document.getElementById(`gallery-${roomId}`);
    const images = gallery.querySelectorAll('.gallery-image');
    const indicators = gallery.querySelectorAll('.gallery-indicator');
    const currentIndex = galleryState[roomId].currentIndex;
    const nextIndex = (currentIndex + 1) % images.length;
    
    images[currentIndex].classList.remove('opacity-100');
    images[currentIndex].classList.add('opacity-0');
    images[nextIndex].classList.remove('opacity-0');
    images[nextIndex].classList.add('opacity-100');
    
    indicators[currentIndex].classList.remove('bg-white');
    indicators[currentIndex].classList.add('bg-white/50');
    indicators[nextIndex].classList.remove('bg-white/50');
    indicators[nextIndex].classList.add('bg-white');
    
    galleryState[roomId].currentIndex = nextIndex;
}

function previousImage(roomId) {
    const gallery = document.getElementById(`gallery-${roomId}`);
    const images = gallery.querySelectorAll('.gallery-image');
    const indicators = gallery.querySelectorAll('.gallery-indicator');
    const currentIndex = galleryState[roomId].currentIndex;
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    
    images[currentIndex].classList.remove('opacity-100');
    images[currentIndex].classList.add('opacity-0');
    images[prevIndex].classList.remove('opacity-0');
    images[prevIndex].classList.add('opacity-100');
    
    indicators[currentIndex].classList.remove('bg-white');
    indicators[currentIndex].classList.add('bg-white/50');
    indicators[prevIndex].classList.remove('bg-white/50');
    indicators[prevIndex].classList.add('bg-white');
    
    galleryState[roomId].currentIndex = prevIndex;
}

function goToImage(roomId, index) {
    const gallery = document.getElementById(`gallery-${roomId}`);
    const images = gallery.querySelectorAll('.gallery-image');
    const indicators = gallery.querySelectorAll('.gallery-indicator');
    const currentIndex = galleryState[roomId].currentIndex;
    
    if (index === currentIndex) return;
    
    images[currentIndex].classList.remove('opacity-100');
    images[currentIndex].classList.add('opacity-0');
    images[index].classList.remove('opacity-0');
    images[index].classList.add('opacity-100');
    
    indicators[currentIndex].classList.remove('bg-white');
    indicators[currentIndex].classList.add('bg-white/50');
    indicators[index].classList.remove('bg-white/50');
    indicators[index].classList.add('bg-white');
    
    galleryState[roomId].currentIndex = index;
}

// Auto-advance gallery every 5 seconds
setInterval(() => {
    Object.keys(galleryState).forEach(roomId => {
        const gallery = document.getElementById(`gallery-${roomId}`);
        if (gallery && isElementInViewport(gallery)) {
            // Only auto-advance if in viewport
            // nextImage(parseInt(roomId));
        }
    });
}, 5000);

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
