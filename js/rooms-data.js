// Room data for Sonrisa Co-living

const roomsData = [
    {
        id: 1,
        name: "Spacious Ensuite Room",
        type: "private-ensuite",
        description: "Bright and spacious private room with ensuite bathroom. Perfect for digital nomads seeking comfort and privacy.",
        features: [
            "Private ensuite bathroom",
            "Double bed",
            "Work desk & chair",
            "Wardrobe storage",
            "Natural light",
            "22 m²"
        ],
        capacity: 1,
        pricing: {
            "2weeks": 750,
            "1month": 1300,
            "6weeks": 1850
        },
        images: [
            "images/sonrisa-private-room.JPG",
            "images/room-stock-soft-neutral.jpg",
            "images/room-stock-classic.jpg"
        ],
        availability: generateAvailability(0.7)
    },
    {
        id: 2,
        name: "Garden Room Deluxe",
        type: "private-ensuite",
        description: "Spacious room with garden view and private ensuite. Ideal for remote workers needing peace and quiet.",
        features: [
            "Garden view",
            "Queen-size bed",
            "Ensuite bathroom with shower",
            "Large work desk",
            "Closet space",
            "20 m²"
        ],
        capacity: 1,
        pricing: {
            "2weeks": 700,
            "1month": 1250,
            "6weeks": 1750
        },
        images: [
            "images/room-stock-soft-neutral.jpg",
            "images/sonrisa-room-suite-window.jpg",
            "images/room-stock-classic.jpg"
        ],
        availability: generateAvailability(0.6)
    },
    {
        id: 3,
        name: "Cozy Ensuite Room",
        type: "private-ensuite",
        description: "Comfortable room with all essentials. Perfect balance of privacy and community living.",
        features: [
            "Mountain view",
            "Double bed",
            "Ensuite bathroom",
            "Work desk",
            "Storage space",
            "16 m²"
        ],
        capacity: 1,
        pricing: {
            "2weeks": 650,
            "1month": 1150,
            "6weeks": 1600
        },
        images: [
            "images/sonrisa-private-room-luxury.jpg",
            "images/sonrisa-room-suite-angle.jpg",
            "images/room-stock-bright-ensuite.jpg"
        ],
        availability: generateAvailability(0.8)
    },
    {
        id: 4,
        name: "Bright Ensuite Room",
        type: "private-ensuite",
        description: "Light-filled room with modern amenities and stunning natural light throughout the day.",
        features: [
            "Large windows",
            "Double bed",
            "Ensuite bathroom with shower",
            "Work station",
            "Natural light all day",
            "16 m²"
        ],
        capacity: 1,
        pricing: {
            "2weeks": 650,
            "1month": 1150,
            "6weeks": 1600
        },
        images: [
            "images/room-stock-bright-ensuite.jpg",
            "images/room-stock-bright-window.jpg",
            "images/room-stock-soft-neutral.jpg"
        ],
        availability: generateAvailability(0.75)
    },
    {
        id: 5,
        name: "Eucalyptus Room",
        type: "private-ensuite",
        description: "Named after the eucalyptus trees visible from the window. A peaceful retreat.",
        features: [
            "Forest view",
            "Double bed",
            "Ensuite bathroom",
            "Compact work desk",
            "Quiet location",
            "15 m²"
        ],
        capacity: 1,
        pricing: {
            "2weeks": 650,
            "1month": 1150,
            "6weeks": 1600
        },
        images: [
            "images/room-stock-wood-warm.jpg",
            "images/sonrisa-room-suite-bed.jpg",
            "images/room-stock-comfort-light.jpg"
        ],
        availability: generateAvailability(0.65)
    },
    {
        id: 6,
        name: "Comfort Room",
        type: "private-shared",
        description: "Private room with shared bathroom facilities. Great value for budget-conscious nomads.",
        features: [
            "Village view",
            "Double bed",
            "Shared bathroom (2 rooms)",
            "Work desk",
            "Good value",
            "14 m²"
        ],
        capacity: 1,
        pricing: {
            "2weeks": 550,
            "1month": 950,
            "6weeks": 1350
        },
        images: [
            "images/room-stock-comfort-light.jpg",
            "images/room-stock-classic.jpg",
            "images/room-stock-wood-warm.jpg"
        ],
        availability: generateAvailability(0.85)
    },
    {
        id: 7,
        name: "Simple Room",
        type: "private-shared",
        description: "Cozy private room with shared facilities. All the essentials for a comfortable stay.",
        features: [
            "Peaceful location",
            "Double bed",
            "Shared bathroom (2 rooms)",
            "Small work area",
            "Budget-friendly",
            "12 m²"
        ],
        capacity: 1,
        pricing: {
            "2weeks": 550,
            "1month": 950,
            "6weeks": 1350
        },
        images: [
            "images/room-stock-simple-minimal.jpg",
            "images/room-stock-wood-warm.jpg",
            "images/room-stock-bright-ensuite.jpg"
        ],
        availability: generateAvailability(0.9)
    }
];

// Generate random availability for next 90 days with realistic patterns
function generateAvailability(availabilityRate = 0.7) {
    const availability = {};
    const today = new Date();
    
    for (let i = 0; i < 90; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() + i);
        const dateStr = date.toISOString().split('T')[0];
        
        // Create random patterns - some weeks fully booked, some partially
        if (i < 14) {
            // Next 2 weeks - mixed availability
            availability[dateStr] = Math.random() < 0.4; // 40% available
        } else if (i >= 14 && i < 30) {
            // Weeks 3-4 - mostly available
            availability[dateStr] = Math.random() < 0.8; // 80% available
        } else if (i >= 30 && i < 45) {
            // Month 2 - some blocks booked
            availability[dateStr] = Math.random() < 0.5; // 50% available
        } else {
            // Later dates - more available
            availability[dateStr] = Math.random() < 0.7; // 70% available
        }
    }
    
    return availability;
}
// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { roomsData };
}
