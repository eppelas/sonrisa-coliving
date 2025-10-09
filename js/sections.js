// Content Sections
const sectionsHTML = `
    <!-- Hero Section with Drone Photo -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden mt-16">
        <!-- Background Image - Paul do Mar Drone Photo -->
        <div class="absolute inset-0">
            <div class="absolute inset-0 bg-cover bg-center" 
                 style="background-image: url('images/paul-do-mar-drone.jpg'); 
                        background-position: center 40%;">
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>
        
        <!-- Floating Cloud Elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="cloud cloud-1"></div>
            <div class="cloud cloud-2"></div>
            <div class="cloud cloud-3"></div>
        </div>
        
        <!-- Hero Content with Big Sonrisa Name -->
        <div class="relative z-10 text-center text-white px-6">
            <div class="decorative-stars mb-6 text-4xl">✦</div>
            <h1 class="text-8xl md:text-9xl font-serif font-light mb-4 drop-shadow-2xl tracking-tight">
                <span class="font-handwritten text-madeira-sand" style="text-shadow: 0 4px 20px rgba(0,0,0,0.5);">Sonrisa</span>
            </h1>
            <p class="text-2xl md:text-3xl mb-3 max-w-3xl mx-auto font-light tracking-wide" style="text-shadow: 0 2px 10px rgba(0,0,0,0.5);">
                Co-living in Paradise
            </p>
            <p class="text-xl md:text-2xl mb-10 opacity-90" style="text-shadow: 0 2px 10px rgba(0,0,0,0.5);">
                Paul do Mar, Madeira
            </p>
            <a href="#booking" class="inline-block bg-madeira-terracotta text-white px-12 py-5 rounded-full hover:bg-madeira-earth transition-all text-xl font-handwritten shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1">
                Discover Your Space
            </a>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg class="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
    </section>

    <!-- What is Co-living in Paul do Mar -->
    <section class="py-24 bg-white relative overflow-hidden">
        <!-- Organic Background Shapes - VARIED SIZES & SHAPES -->
        <div class="organic-shape organic-blob-1" style="top: -5%; right: -15%;"></div>
        <div class="organic-shape organic-blob-5" style="bottom: -10%; left: -5%;"></div>
        <div class="organic-shape organic-blob-3" style="top: 50%; right: 20%; opacity: 0.3;"></div>
        
        <!-- Floating decorative elements -->
        <div class="floating-leaf floating-leaf-1">🌿</div>
        <div class="floating-leaf floating-leaf-2">🍃</div>
        <div class="floating-leaf floating-leaf-3">🌊</div>
        
        <div class="container mx-auto px-6 relative z-10">
            <div class="max-w-5xl mx-auto">
                <div class="text-center mb-16">
                    <span class="text-madeira-terracotta font-handwritten text-3xl block mb-4">What is Sonrisa?</span>
                    <h2 class="text-5xl md:text-6xl font-serif font-light text-madeira-earth mb-8">
                        Co-living in Paul do Mar, Madeira
                    </h2>
                </div>
                
                <div class="grid md:grid-cols-3 gap-8 mb-12">
                    <div class="text-center hover-lift bg-madeira-cloud/50 p-8 rounded-2xl backdrop-blur-sm">
                        <div class="text-5xl mb-4">🌊</div>
                        <h3 class="text-2xl font-serif font-semibold text-madeira-earth mb-3">Ocean Village</h3>
                        <p class="text-gray-700 leading-relaxed">
                            Nestled between dramatic mountains and the Atlantic Ocean, Paul do Mar is a traditional fishing village with authentic Madeiran charm.
                        </p>
                    </div>
                    
                    <div class="text-center hover-lift bg-madeira-cloud/50 p-8 rounded-2xl backdrop-blur-sm">
                        <div class="text-5xl mb-4">🏡</div>
                        <h3 class="text-2xl font-serif font-semibold text-madeira-earth mb-3">Shared Living</h3>
                        <p class="text-gray-700 leading-relaxed">
                            Private rooms meet communal spaces. Work remotely in peace, connect with others when you want, and find your perfect balance.
                        </p>
                    </div>
                    
                    <div class="text-center hover-lift bg-madeira-cloud/50 p-8 rounded-2xl backdrop-blur-sm">
                        <div class="text-5xl mb-4">🌱</div>
                        <h3 class="text-2xl font-serif font-semibold text-madeira-earth mb-3">Nature & Growth</h3>
                        <p class="text-gray-700 leading-relaxed">
                            Immerse yourself in nature, disconnect from the noise, and reconnect with yourself in a supportive community.
                        </p>
                    </div>
                </div>
                
                <div class="text-center">
                    <p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed italic">
                        "More than a place to stay—it's a sanctuary where remote workers, digital nomads, and seekers find peace, productivity, and genuine connection."
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Values Section - Icon-based, No Cards -->
    <section id="values" class="py-24 bg-madeira-cloud relative overflow-hidden">
        <!-- Large Organic Background Shapes - VARIED & DRAMATIC -->
        <div class="organic-shape organic-blob-4" style="top: -10%; right: -20%;"></div>
        <div class="organic-shape organic-blob-2" style="bottom: -20%; left: -5%;"></div>
        <div class="organic-shape organic-blob-3" style="top: 30%; left: 35%; opacity: 0.35;"></div>
        <div class="organic-shape organic-blob-5" style="top: 60%; right: 10%; opacity: 0.25;"></div>
        
        <div class="container mx-auto px-6 relative z-10">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-20">
                    <span class="text-madeira-terracotta font-handwritten text-3xl block mb-4">What We Believe</span>
                    <h2 class="text-5xl md:text-6xl font-serif font-light text-madeira-earth">
                        Our Values
                    </h2>
                </div>
                
                <!-- Icon-based layout without cards -->
                <div class="grid md:grid-cols-3 gap-16">
                    <div class="text-center group">
                        <div class="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-madeira-ocean/10 group-hover:bg-madeira-ocean/20 transition-all duration-300">
                            <span class="text-6xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">🌊</span>
                        </div>
                        <h3 class="text-2xl font-serif font-semibold text-madeira-earth mb-4">Community</h3>
                        <p class="text-gray-700 leading-relaxed">Shared experiences and a safe space for people to be vulnerable and connect deeply.</p>
                    </div>
                    
                    <div class="text-center group">
                        <div class="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-madeira-eucalyptus/10 group-hover:bg-madeira-eucalyptus/20 transition-all duration-300">
                            <span class="text-6xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">🏔️</span>
                        </div>
                        <h3 class="text-2xl font-serif font-semibold text-madeira-earth mb-4">Adventure</h3>
                        <p class="text-gray-700 leading-relaxed">Canyoning, hiking, diving, music, art—Madeira offers diverse experiences for the curious.</p>
                    </div>
                    
                    <div class="text-center group">
                        <div class="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-madeira-terracotta/10 group-hover:bg-madeira-terracotta/20 transition-all duration-300">
                            <span class="text-6xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">🌿</span>
                        </div>
                        <h3 class="text-2xl font-serif font-semibold text-madeira-earth mb-4">Authenticity</h3>
                        <p class="text-gray-700 leading-relaxed">We foster an environment of respect, inclusivity, and non-violent communication.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Spaces Section -->
    <section id="spaces" class="py-20 bg-white relative overflow-hidden">
        <!-- Organic shapes -->
        <div class="organic-shape organic-blob-2" style="top: 10%; right: -10%;"></div>
        <div class="organic-shape organic-blob-4" style="bottom: -15%; left: -20%; opacity: 0.35;"></div>
        
        <div class="container mx-auto px-6 relative z-10">
            <div class="text-center mb-12">
                <span class="text-madeira-terracotta font-handwritten text-2xl">Your Home Away From Home</span>
                <h2 class="text-4xl md:text-5xl font-serif font-light text-madeira-earth mt-2">
                    Spaces Designed for Living & Working
                </h2>
            </div>
            
            <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
                <div class="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer">
                    <img src="images/sonrisa-private-room.JPG" 
                         alt="Private Room at Sonrisa" 
                         class="w-full h-80 object-cover group-hover:scale-110 transition duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                        <div class="text-white">
                            <h3 class="text-2xl font-serif font-semibold mb-2">Private Rooms</h3>
                            <p class="text-sm opacity-90">Spacious rooms with traditional charm, ample storage, natural light</p>
                        </div>
                    </div>
                </div>
                
                <div class="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer">
                    <img src="images/sonrisa-coworking.JPG" 
                         alt="Co-working Space at Sonrisa" 
                         class="w-full h-80 object-cover group-hover:scale-110 transition duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                        <div class="text-white">
                            <h3 class="text-2xl font-serif font-semibold mb-2">Co-working Areas</h3>
                            <p class="text-sm opacity-90">Mountain views, peaceful ambiance, high-speed internet</p>
                        </div>
                    </div>
                </div>
                
                <div class="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068" 
                         alt="Kitchen" 
                         class="w-full h-80 object-cover group-hover:scale-110 transition duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                        <div class="text-white">
                            <h3 class="text-2xl font-serif font-semibold mb-2">Communal Kitchens</h3>
                            <p class="text-sm opacity-90">2 fully equipped kitchens with dining areas</p>
                        </div>
                    </div>
                </div>
                
                <div class="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer">
                    <img src="images/sonrisa-garden-outdoor.JPG" 
                         alt="Garden & Outdoor Areas at Sonrisa" 
                         class="w-full h-80 object-cover group-hover:scale-110 transition duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                        <div class="text-white">
                            <h3 class="text-2xl font-serif font-semibold mb-2">Garden & Outdoor Areas</h3>
                            <p class="text-sm opacity-90">Lush garden, sports court, village views, outdoor relaxation</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- View All Rooms CTA -->
            <div class="text-center">
                <a href="rooms.html" 
                   class="inline-block bg-madeira-terracotta text-white px-10 py-4 rounded-full hover:bg-madeira-earth transition text-lg font-handwritten shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    View All Rooms & Availability →
                </a>
                <p class="text-sm text-gray-600 mt-4">
                    See detailed photos, pricing, and real-time availability calendar
                </p>
            </div>
        </div>
    </section>

    <!-- Community Section -->
    <section id="community" class="py-20 bg-madeira-cloud relative overflow-hidden">
        <div class="eucalyptus-branch eucalyptus-right"></div>
        
        <!-- Organic shapes - VARIED -->
        <div class="organic-shape organic-blob-5" style="top: -10%; left: -10%;"></div>
        <div class="organic-shape organic-blob-1" style="bottom: -5%; right: -15%;"></div>
        <div class="organic-shape organic-blob-4" style="top: 40%; left: 50%; opacity: 0.3;"></div>
        
        <!-- Floating elements -->
        <div class="floating-leaf" style="top: 15%; right: 10%; opacity: 0.16; font-size: 3rem;">🏔️</div>
        <div class="floating-leaf" style="bottom: 20%; left: 15%; animation-delay: 7s; opacity: 0.16; font-size: 2.5rem;">☁️</div>
        
        <div class="container mx-auto px-6 relative z-10">
            <div class="max-w-4xl mx-auto text-center mb-12">
                <span class="text-madeira-terracotta font-handwritten text-2xl">Life at Sonrisa</span>
                <h2 class="text-4xl md:text-5xl font-serif font-light text-madeira-earth mt-2 mb-6">
                    A Family-Like Community
                </h2>
                <p class="text-lg text-gray-700 leading-relaxed">
                    We bring people together through shared experiences—from weekly hikes to family dinners, 
                    music nights, and art workshops. Every activity is opt-in, giving you the freedom to engage 
                    at your own pace.
                </p>
            </div>
            
            <!-- Activity Image Gallery -->
            <div class="max-w-6xl mx-auto mb-12">
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="relative overflow-hidden rounded-2xl shadow-xl group">
                        <img src="images/madeira-mountains-clouds.jpg" 
                             alt="Hiking in Madeira Mountains with Clouds" 
                             class="w-full h-96 object-cover group-hover:scale-105 transition duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                            <div class="text-white">
                                <h3 class="text-2xl font-serif font-semibold mb-2">Mountain Adventures</h3>
                                <p class="text-sm opacity-90">Weekly hikes through Madeira's stunning levadas and peaks—above the clouds!</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="relative overflow-hidden rounded-2xl shadow-xl group">
                        <img src="https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=2070" 
                             alt="Ocean Yoga in Madeira" 
                             class="w-full h-96 object-cover group-hover:scale-105 transition duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                            <div class="text-white">
                                <h3 class="text-2xl font-serif font-semibold mb-2">Oceanside Yoga</h3>
                                <p class="text-sm opacity-90">Morning yoga sessions with Atlantic views and fresh ocean air</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                <div class="text-center">
                    <div class="w-20 h-20 bg-madeira-ocean rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                        🥾
                    </div>
                    <h3 class="text-xl font-serif font-semibold text-madeira-earth mb-2">Weekly Adventures</h3>
                    <p class="text-gray-600">Hikes, canyoning, diving, and exploring Madeira's hidden gems together</p>
                </div>
                
                <div class="text-center">
                    <div class="w-20 h-20 bg-madeira-eucalyptus rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                        🍽️
                    </div>
                    <h3 class="text-xl font-serif font-semibold text-madeira-earth mb-2">Family Dinners</h3>
                    <p class="text-gray-600">Share meals, stories, and laughter in our communal dining spaces</p>
                </div>
                
                <div class="text-center">
                    <div class="w-20 h-20 bg-madeira-terracotta rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                        🎨
                    </div>
                    <h3 class="text-xl font-serif font-semibold text-madeira-earth mb-2">Creative Workshops</h3>
                    <p class="text-gray-600">Art, music, yoga—express yourself and learn from each other</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Our Story Section with Brothers Photo -->
    <section id="about" class="py-24 bg-white relative overflow-hidden">
        <!-- Organic Background Shapes -->
        <div class="organic-shape organic-blob-2" style="top: 10%; left: -20%; opacity: 0.1; width: 650px; height: 650px;"></div>
        <div class="eucalyptus-branch eucalyptus-right"></div>
        
        <div class="container mx-auto px-6 relative z-10">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-16">
                    <span class="text-madeira-terracotta font-handwritten text-3xl block mb-4">Our Story</span>
                    <h2 class="text-5xl md:text-6xl font-serif font-light text-madeira-earth">
                        Where Connection Meets Nature
                    </h2>
                </div>
                
                <div class="grid md:grid-cols-2 gap-16 items-center">
                    <div class="order-2 md:order-1">
                        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                            During our travels, we met many digital nomads seeking to deepen their sense of self. 
                            One key challenge emerged: <span class="text-madeira-ocean font-medium">the lack of space for fostering meaningful connections</span>.
                        </p>
                        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                            We created Sonrisa as a safe shared space where people can process their life, 
                            immerse deeper in nature, and participate in an ecosystem of like-minded folks—
                            all while maintaining quality personal space.
                        </p>
                        <p class="text-xl text-madeira-terracotta font-medium italic">
                            "A sanctuary for people from all over the world to come and find peace."
                        </p>
                        <div class="mt-8 flex items-center gap-4">
                            <div class="w-16 h-16 bg-madeira-eucalyptus rounded-full flex items-center justify-center text-white text-2xl">
                                👥
                            </div>
                            <div>
                                <div class="font-semibold text-madeira-earth">Founded by Two Brothers</div>
                                <div class="text-sm text-gray-600">Bringing people together since 2024</div>
                            </div>
                        </div>
                    </div>
                    <div class="order-1 md:order-2 relative">
                        <img src="images/brothers-founders.jpg" 
                             alt="Sonrisa Founders - Two Brothers" 
                             class="rounded-3xl shadow-2xl w-full hover-lift">
                        <div class="absolute -bottom-6 -left-6 bg-madeira-ocean text-white p-6 rounded-2xl shadow-xl">
                            <div class="text-3xl font-serif font-semibold">2024</div>
                            <div class="text-sm">Founded</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Experiences Section - Compact List Style -->
    <section id="experiences" class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="max-w-5xl mx-auto">
                <div class="text-center mb-16">
                    <span class="text-madeira-terracotta font-handwritten text-2xl block mb-4">Everything You Need</span>
                    <h2 class="text-4xl md:text-5xl font-serif font-light text-madeira-earth">
                        What We Offer
                    </h2>
                </div>
                
                <!-- Two-column compact list without cards -->
                <div class="grid md:grid-cols-2 gap-x-16 gap-y-8">
                    <div class="flex items-start gap-4">
                        <div class="text-3xl flex-shrink-0">💻</div>
                        <div>
                            <h4 class="font-semibold text-madeira-earth text-lg mb-1">Fiber Optic 5G</h4>
                            <p class="text-gray-600">High-speed internet for seamless remote work</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start gap-4">
                        <div class="text-3xl flex-shrink-0">🧘</div>
                        <div>
                            <h4 class="font-semibold text-madeira-earth text-lg mb-1">Wellness Activities</h4>
                            <p class="text-gray-600">Yoga, massages, and mindfulness sessions</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start gap-4">
                        <div class="text-3xl flex-shrink-0">🌊</div>
                        <div>
                            <h4 class="font-semibold text-madeira-earth text-lg mb-1">Ocean Access</h4>
                            <p class="text-gray-600">Close to the beach in Paul do Mar</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start gap-4">
                        <div class="text-3xl flex-shrink-0">👥</div>
                        <div>
                            <h4 class="font-semibold text-madeira-earth text-lg mb-1">Community Manager</h4>
                            <p class="text-gray-600">On-site support and activity coordination</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start gap-4">
                        <div class="text-3xl flex-shrink-0">🍊</div>
                        <div>
                            <h4 class="font-semibold text-madeira-earth text-lg mb-1">Fresh Seasonal Fruits</h4>
                            <p class="text-gray-600">From our garden to your table</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start gap-4">
                        <div class="text-3xl flex-shrink-0">🧺</div>
                        <div>
                            <h4 class="font-semibold text-madeira-earth text-lg mb-1">Weekly Cleaning</h4>
                            <p class="text-gray-600">Linen, towels, and common areas</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start gap-4">
                        <div class="text-3xl flex-shrink-0">🎮</div>
                        <div>
                            <h4 class="font-semibold text-madeira-earth text-lg mb-1">Game & Movie Nights</h4>
                            <p class="text-gray-600">Relax and bond with housemates</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start gap-4">
                        <div class="text-3xl flex-shrink-0">🤝</div>
                        <div>
                            <h4 class="font-semibold text-madeira-earth text-lg mb-1">Local Partnerships</h4>
                            <p class="text-gray-600">Discounts on tours, rentals, and more</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Location Section -->
    <section id="location" class="py-20 bg-madeira-cloud">
        <div class="container mx-auto px-6">
            <div class="max-w-6xl mx-auto">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span class="text-madeira-terracotta font-handwritten text-2xl">Paul do Mar, Madeira</span>
                        <h2 class="text-4xl md:text-5xl font-serif font-light text-madeira-earth mt-2 mb-6">
                            The Island of Clouds & Rainbows
                        </h2>
                        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                            Madeira called us. It's quiet, spacious, full of nature, fresh food, good weather, 
                            and amazing people. A place to disconnect from the noise and reconnect with yourself.
                        </p>
                        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                            Paul do Mar is a hidden gem—a rural fishing village where you can live above the clouds, 
                            surrounded by eucalyptus forests and the endless Atlantic Ocean.
                        </p>
                        <div class="flex gap-4">
                            <div class="bg-white p-4 rounded-lg shadow-md">
                                <div class="text-2xl font-serif font-semibold text-madeira-ocean">23°C</div>
                                <div class="text-sm text-gray-600">Avg. Temperature</div>
                            </div>
                            <div class="bg-white p-4 rounded-lg shadow-md">
                                <div class="text-2xl font-serif font-semibold text-madeira-ocean">1h</div>
                                <div class="text-sm text-gray-600">From Airport</div>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <img src="images/madeira-island-of-clouds.jpg" 
                             alt="Above the Clouds in Madeira - The Island of Clouds" 
                             class="rounded-2xl shadow-2xl hover-lift">
                        <div class="absolute -bottom-4 -right-4 bg-madeira-ocean text-white p-6 rounded-2xl shadow-xl">
                            <div class="text-2xl font-serif font-semibold">☁️</div>
                            <div class="text-sm">Island of Clouds</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Booking Section -->
    <section id="booking" class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto text-center">
                <span class="text-madeira-terracotta font-handwritten text-2xl">Ready to Join Us?</span>
                <h2 class="text-4xl md:text-5xl font-serif font-light text-madeira-earth mt-2 mb-6">
                    Book Your Stay
                </h2>
                <p class="text-lg text-gray-700 mb-8 leading-relaxed">
                    Whether you're staying for a week or a season, we'd love to welcome you to our community.
                </p>
                
                <div class="bg-madeira-cloud p-8 md:p-12 rounded-2xl shadow-xl">
                    <!-- Date Range Picker -->
                    <div class="mb-8">
                        <label class="block text-left text-sm font-semibold text-madeira-earth mb-3">
                            Select Your Dates
                            <span class="text-xs font-normal text-gray-500 ml-2">(Minimum stay: 2 weeks)</span>
                        </label>
                        <div class="relative">
                            <input type="text" 
                                   id="date-range-display" 
                                   readonly
                                   placeholder="Click to select dates"
                                   class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-madeira-ocean focus:ring-2 focus:ring-madeira-ocean/20 outline-none transition cursor-pointer bg-white"
                                   onclick="toggleCalendar()">
                            <div class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                        </div>
                        
                        <!-- Hidden native date inputs for actual values -->
                        <input type="date" id="checkin-date" class="hidden">
                        <input type="date" id="checkout-date" class="hidden">
                        
                        <!-- Custom Calendar -->
                        <div id="custom-calendar" class="hidden mt-2 bg-white border-2 border-madeira-ocean rounded-xl shadow-2xl p-4 absolute z-50">
                            <div class="flex items-center justify-between mb-4">
                                <button type="button" onclick="previousMonth()" class="p-2 hover:bg-gray-100 rounded-lg">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                                    </svg>
                                </button>
                                <div class="text-lg font-semibold text-madeira-earth" id="calendar-month-year"></div>
                                <button type="button" onclick="nextMonth()" class="p-2 hover:bg-gray-100 rounded-lg">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                            
                            <div class="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-gray-600 mb-2">
                                <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                            </div>
                            
                            <div id="calendar-days" class="grid grid-cols-7 gap-1"></div>
                            
                            <div class="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-600">
                                <p>💡 Minimum stay: <strong>2 weeks</strong></p>
                            </div>
                        </div>
                        
                        <p class="text-xs text-gray-600 mt-2 text-left">
                            💡 Experience the full Sonrisa magic with a longer stay
                        </p>
                    </div>
                    
                    <!-- Available Rooms List -->
                    <div id="available-rooms-container" class="mb-6">
                        <h3 class="text-lg font-semibold text-madeira-earth mb-4 text-left">Available Rooms</h3>
                        <div id="available-rooms-list" class="space-y-3">
                            <!-- Rooms will be dynamically inserted here -->
                            <p class="text-gray-600 text-left italic">Select dates to see available rooms</p>
                        </div>
                    </div>
                    
                    <div class="border-t border-gray-300 pt-6">
                        <p class="text-sm text-gray-600">
                            Questions? Email us at <a href="mailto:hello@sonrisa.com" class="text-madeira-ocean hover:underline font-semibold">hello@sonrisa.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Lifestyle Gallery -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-12">
                    <span class="text-madeira-terracotta font-handwritten text-2xl">Active Living</span>
                    <h2 class="text-3xl md:text-4xl font-serif font-light text-madeira-earth mt-2">
                        Your Days at Sonrisa
                    </h2>
                </div>
                
                <div class="grid md:grid-cols-3 gap-6">
                    <!-- Yoga -->
                    <div class="relative overflow-hidden rounded-xl shadow-lg group">
                        <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020" 
                             alt="Beach Yoga Session" 
                             class="w-full h-72 object-cover group-hover:scale-110 transition duration-500">
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <p class="text-white font-semibold">Morning Yoga by the Ocean</p>
                        </div>
                    </div>
                    
                    <!-- Mountain Hiking -->
                    <div class="relative overflow-hidden rounded-xl shadow-lg group">
                        <img src="images/madeira-trekking.jpg" 
                             alt="Trekking in Madeira" 
                             class="w-full h-72 object-cover group-hover:scale-110 transition duration-500">
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <p class="text-white font-semibold">Trekking Madeira</p>
                        </div>
                    </div>
                    
                    <!-- Group Activity -->
                    <div class="relative overflow-hidden rounded-xl shadow-lg group">
                        <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2099" 
                             alt="Sunset Yoga Outdoors" 
                             class="w-full h-72 object-cover group-hover:scale-110 transition duration-500">
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <p class="text-white font-semibold">Sunset Wellness Sessions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-madeira-cloud">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-serif font-light text-madeira-earth">
                        What Our Guests Say
                    </h2>
                </div>
                
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-white p-8 rounded-2xl shadow-md">
                        <div class="text-madeira-terracotta mb-4">★★★★★</div>
                        <p class="text-gray-700 mb-4 italic">
                            "Sonrisa felt like home from day one. The community is warm, the space is beautiful, 
                            and Madeira is magical. I came for a month and didn't want to leave."
                        </p>
                        <div class="font-semibold text-madeira-earth">— Sarah, Germany</div>
                    </div>
                    
                    <div class="bg-white p-8 rounded-2xl shadow-md">
                        <div class="text-madeira-terracotta mb-4">★★★★★</div>
                        <p class="text-gray-700 mb-4 italic">
                            "Perfect for remote work and adventure. Fast wifi, great co-working space, 
                            and the weekly hikes were unforgettable. Made lifelong friends here."
                        </p>
                        <div class="font-semibold text-madeira-earth">— Marco, Italy</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

// Load sections into the page
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('content').innerHTML = sectionsHTML;
});
