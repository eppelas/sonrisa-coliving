const luxuryGalleryState = {};

function renderAvailabilityStrip(room) {
    const days = [];
    const today = new Date();

    for (let i = 0; i < 21; i += 1) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const dateKey = date.toISOString().split('T')[0];
        const available = Boolean(room.availability[dateKey]);
        days.push(`<div class="${available ? 'available' : 'booked'}" title="${dateKey}: ${available ? 'available' : 'booked'}"></div>`);
    }

    return `
        <div class="availability-strip">${days.join('')}</div>
        <div class="availability-caption">
            <span>Next 3 weeks snapshot</span>
            <span>Green = free</span>
        </div>
    `;
}

function renderLuxuryRoomCard(room, reverse = false) {
    const galleryId = `lux-gallery-${room.id}`;
    const orderingClass = reverse ? ' style="direction: rtl;"' : '';

    return `
        <article class="room-luxe-card reveal" data-room-id="${room.id}"${orderingClass}>
            <div class="room-gallery" id="${galleryId}" style="direction:ltr;">
                ${room.images
                    .map(
                        (img, index) =>
                            `<img src="${img}" alt="${room.name}" class="gallery-slide ${index === 0 ? 'is-active' : ''}" data-index="${index}" loading="lazy">`
                    )
                    .join('')}
                <button class="gallery-control prev" type="button" onclick="changeLuxuryRoomImage(${room.id}, -1)" aria-label="Previous image">‹</button>
                <button class="gallery-control next" type="button" onclick="changeLuxuryRoomImage(${room.id}, 1)" aria-label="Next image">›</button>
                <div class="gallery-dots">
                    ${room.images
                        .map(
                            (_, index) =>
                                `<button class="gallery-dot ${index === 0 ? 'is-active' : ''}" type="button" onclick="jumpLuxuryRoomImage(${room.id}, ${index})" aria-label="Image ${index + 1}"></button>`
                        )
                        .join('')}
                </div>
            </div>

            <div class="room-body" style="direction:ltr;">
                <h2>${room.name}</h2>
                <p>${room.description}</p>

                <ul class="feature-grid">
                    ${room.features.map((feature) => `<li>${feature}</li>`).join('')}
                </ul>

                <div class="pricing-pills">
                    <span>2+ weeks <strong>€${room.pricing['2weeks']}</strong></span>
                    <span>1+ month <strong>€${room.pricing['1month']}</strong></span>
                    <span>1.5+ months <strong>€${room.pricing['6weeks']}</strong></span>
                </div>

                ${renderAvailabilityStrip(room)}

                <div class="room-actions">
                    <a class="btn-solid" href="mailto:hello@sonrisa.com?subject=Booking%20request%20for%20${encodeURIComponent(
                        room.name
                    )}">Request This Room</a>
                    <button class="btn-outline" type="button" onclick="openCalendarModal(${room.id})">Full Availability</button>
                </div>
            </div>
        </article>
    `;
}

function renderLuxuryRooms() {
    const container = document.getElementById('rooms-container');
    if (!container || !Array.isArray(roomsData)) return;

    container.innerHTML = roomsData
        .map((room, index) => renderLuxuryRoomCard(room, index % 2 === 1))
        .join('');

    roomsData.forEach((room) => {
        luxuryGalleryState[room.id] = { currentIndex: 0, total: room.images.length };
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        },
        { threshold: 0.12 }
    );

    document.querySelectorAll('.room-luxe-card').forEach((card) => observer.observe(card));
}

function setLuxuryRoomImage(roomId, nextIndex) {
    const gallery = document.getElementById(`lux-gallery-${roomId}`);
    const roomState = luxuryGalleryState[roomId];
    if (!gallery || !roomState) return;

    const slides = gallery.querySelectorAll('.gallery-slide');
    const dots = gallery.querySelectorAll('.gallery-dot');

    slides[roomState.currentIndex].classList.remove('is-active');
    dots[roomState.currentIndex].classList.remove('is-active');

    slides[nextIndex].classList.add('is-active');
    dots[nextIndex].classList.add('is-active');

    roomState.currentIndex = nextIndex;
}

function changeLuxuryRoomImage(roomId, direction) {
    const roomState = luxuryGalleryState[roomId];
    if (!roomState) return;

    const nextIndex =
        (roomState.currentIndex + direction + roomState.total) % roomState.total;
    setLuxuryRoomImage(roomId, nextIndex);
}

function jumpLuxuryRoomImage(roomId, index) {
    const roomState = luxuryGalleryState[roomId];
    if (!roomState || index === roomState.currentIndex) return;
    setLuxuryRoomImage(roomId, index);
}

document.addEventListener('DOMContentLoaded', renderLuxuryRooms);
