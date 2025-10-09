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
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070"
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
            "images/sonrisa-private-room.JPG",
            "https://images.unsplash.com/photo-1588417271135-8b9c1c8d9d5a?q=80&w=2070",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070"
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
            "images/sonrisa-private-room.JPG",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070",
            "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070"
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
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070",
            "https://images.unsplash.com/photo-1581858788964-c4c70e7c9a53?q=80&w=2070",
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071"
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
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2070",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070",
            "https://images.unsplash.com/photo-1540206395-68808572332f?q=80&w=2070"
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
            "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070",
            "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2080"
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
            "https://images.unsplash.com/photo-1585128719753-ae6ccc10e7ee?q=80&w=2070",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070"
        ],
        availability: generateAvailability(0.9)
    },
    {
        id: 8,
        name: "Shared Community Room",
        type: "shared-room",
        description: "Share with one other guest. Perfect for solo travelers wanting to make instant connections.",
        features: [
            "2 single beds",
            "Shared bathroom",
            "Shared work space",
            "Great for meeting people",
            "Most affordable option",
            "18 m²"
        ],
        capacity: 2,
        pricing: {
            "2weeks": 400,
            "1month": 700,
            "6weeks": 1000
        },
        images: [
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057",
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
            "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070"
        ],
        availability: generateAvailability(0.5)
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
