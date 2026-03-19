export const knowledgeBase = [
  // CONVERSATIONAL
  {
    id: 101,
    keywords: ["hello", "hi", "hey", "greetings", "howdy", "sup", "good morning", "good evening"],
    subtopic: "greeting",
    answer: "Hello, explorer! I'm NOVA, your deep space guide. Ask me anything about black holes, planets, space missions, or the cosmos. Where shall we begin? 🚀"
  },
  {
    id: 102,
    keywords: ["who are you", "what are you", "your name", "introduce yourself", "about you", "what is nova"],
    subtopic: "identity",
    answer: "I'm NOVA — your dedicated deep space guide! I'm built to answer questions about astronomy, space missions, planets, black holes, exoplanets, and everything in between. What would you like to explore?"
  },
  {
    id: 103,
    keywords: ["what do you know", "what can you do", "help", "topics", "what can i ask", "capabilities", "what you know"],
    subtopic: "capabilities",
    answer: "I know quite a lot about the universe! You can ask me about: 🪐 Planets & moons, 🌌 Black holes & galaxies, 🚀 Space missions (Apollo, Artemis, Mars rovers), 🔭 Telescopes (Hubble, James Webb), ⭐ Stars & supernovas, 👽 Exoplanets & the search for life, and much more!"
  },
  // BLACK HOLES
  {
    id: 1,
    keywords: ["black hole", "blackhole", "singularity"],
    subtopic: "black holes",
    answer: "A black hole is a region in space where gravity is so intense that nothing — not even light — can escape. They form when massive stars collapse at the end of their lives. The boundary of no return is called the event horizon, and at the center lies a singularity where density becomes infinite."
  },
  {
    id: 1.1,
    keywords: ["event horizon", "what is the event horizon", "point of no return"],
    subtopic: "black holes",
    answer: "The event horizon is the boundary surrounding a black hole beyond which nothing can escape — not even light. It's not a physical surface but a point of no return defined by the black hole's escape velocity exceeding the speed of light. Once crossed, all paths lead inward toward the singularity."
  },
  {
    id: 2,
    keywords: ["supermassive black hole", "sagittarius a", "galactic center", "m87"],
    subtopic: "black holes",
    answer: "Supermassive black holes lurk at the centers of most large galaxies. Our Milky Way hosts Sagittarius A*, weighing about 4 million solar masses. In 2019, the Event Horizon Telescope captured the first-ever image of a black hole — the supermassive one in galaxy M87, 6.5 billion times the mass of our Sun."
  },
  {
    id: 3,
    keywords: ["hawking radiation", "stephen hawking", "black hole evaporate", "evaporation"],
    subtopic: "black holes",
    answer: "Stephen Hawking theorized that black holes slowly emit radiation due to quantum effects near the event horizon — now called Hawking radiation. Over immense timescales, this causes black holes to gradually lose mass and eventually evaporate. It remains one of the most profound unsolved puzzles in physics."
  },
  // MARS
  {
    id: 4,
    keywords: ["mars", "red planet", "martian"],
    subtopic: "mars",
    answer: "Mars is the fourth planet from the Sun and the most explored planet beyond Earth. Known as the Red Planet due to iron oxide on its surface, it has the tallest volcano in the solar system (Olympus Mons) and the longest canyon (Valles Marineris). A Martian day is 24 hours and 37 minutes."
  },
  {
    id: 5,
    keywords: ["mars distance", "how far is mars", "distance to mars", "how far away is mars", "distance from earth to mars"],
    subtopic: "mars",
    answer: "Mars ranges from about 54.6 million km (closest approach) to 401 million km (farthest) from Earth, depending on orbital positions. On average it's around 225 million km away. A one-way trip with current technology takes roughly 7–9 months."
  },
  {
    id: 6,
    keywords: ["perseverance", "curiosity", "mars rover", "ingenuity", "rover"],
    subtopic: "mars",
    answer: "NASA's Perseverance rover landed in Jezero Crater in February 2021, searching for signs of ancient microbial life and collecting rock samples. It also carried Ingenuity, a small helicopter that became the first powered aircraft to fly on another planet. Curiosity, its predecessor, has been roving since 2012."
  },
  {
    id: 7,
    keywords: ["life on mars", "mars life", "microbial mars", "habitability"],
    subtopic: "mars",
    answer: "Mars is a prime candidate in the search for extraterrestrial life. Evidence of ancient river deltas, lake beds, and subsurface liquid water suggests it may have once been habitable. Perseverance is actively collecting samples that may eventually be returned to Earth for analysis."
  },
  // MOON
  {
    id: 8,
    keywords: ["moon", "lunar", "luna"],
    subtopic: "moon",
    answer: "Earth's Moon is our only natural satellite, about 384,400 km away. It's the fifth-largest moon in the solar system and the only celestial body beyond Earth that humans have visited. The Moon stabilizes Earth's axial tilt and drives our ocean tides."
  },
  {
    id: 9,
    keywords: ["apollo", "moon landing", "neil armstrong", "first on moon", "1969"],
    subtopic: "moon",
    answer: "On July 20, 1969, Apollo 11 astronauts Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon. Armstrong's words — 'That's one small step for man, one giant leap for mankind' — are among the most iconic in history. Six Apollo missions landed on the Moon between 1969 and 1972."
  },
  {
    id: 10,
    keywords: ["artemis", "return to moon", "moon 2024", "moon mission future"],
    subtopic: "moon",
    answer: "NASA's Artemis program aims to return humans to the Moon, including the first woman and first person of color. Artemis I (2022) was an uncrewed test flight around the Moon. Artemis III plans to land astronauts near the lunar south pole, where water ice has been confirmed."
  },
  // SUN
  {
    id: 11,
    keywords: ["sun", "solar", "star", "our star"],
    subtopic: "sun",
    answer: "The Sun is a G-type main-sequence star at the center of our solar system, containing 99.86% of the system's total mass. Its core reaches 15 million°C, fusing hydrogen into helium and releasing the energy that powers all life on Earth. It's about 4.6 billion years old and halfway through its life."
  },
  {
    id: 12,
    keywords: ["solar flare", "coronal mass ejection", "cme", "solar storm", "aurora"],
    subtopic: "sun",
    answer: "Solar flares are intense bursts of radiation from the Sun's surface. Coronal Mass Ejections (CMEs) hurl billions of tons of plasma into space. When these hit Earth's magnetic field, they can cause stunning auroras — and in extreme cases, disrupt satellites, power grids, and communications."
  },
  {
    id: 13,
    keywords: ["parker solar probe", "solar probe", "closest to sun"],
    subtopic: "sun",
    answer: "NASA's Parker Solar Probe, launched in 2018, is the closest spacecraft to the Sun ever. It has flown through the Sun's corona, reaching speeds over 690,000 km/h — the fastest human-made object. It's helping scientists understand solar wind and why the corona is hotter than the surface."
  },
  // EXOPLANETS
  {
    id: 14,
    keywords: ["exoplanet", "exoplanets", "planet outside solar system", "extrasolar"],
    subtopic: "exoplanets",
    answer: "Exoplanets are planets orbiting stars other than our Sun. As of 2024, over 5,500 confirmed exoplanets have been discovered. They range from scorching hot Jupiters to potentially habitable rocky worlds. The Kepler Space Telescope alone confirmed over 2,600 of them."
  },
  {
    id: 15,
    keywords: ["habitable zone", "goldilocks zone", "earth-like planet", "habitable planet"],
    subtopic: "exoplanets",
    answer: "The habitable zone (or 'Goldilocks zone') is the range of distances from a star where liquid water could exist on a planet's surface. Planets like Kepler-452b and Proxima Centauri b sit in their star's habitable zones, making them exciting candidates in the search for life."
  },
  {
    id: 16,
    keywords: ["trappist", "trappist-1", "seven planets"],
    subtopic: "exoplanets",
    answer: "TRAPPIST-1 is an ultra-cool dwarf star 40 light-years away with seven Earth-sized planets — three of which sit in the habitable zone. It's one of the most studied systems for potential habitability. The James Webb Space Telescope has been analyzing their atmospheres."
  },
  // JAMES WEBB TELESCOPE
  {
    id: 17,
    keywords: ["james webb", "jwst", "webb telescope", "webb space telescope"],
    subtopic: "telescopes",
    answer: "The James Webb Space Telescope (JWST), launched December 25, 2021, is the most powerful space telescope ever built. Positioned 1.5 million km from Earth, it observes in infrared, peering through dust clouds to see the earliest galaxies formed just 300 million years after the Big Bang."
  },
  {
    id: 18,
    keywords: ["hubble", "hubble telescope", "hubble space telescope"],
    subtopic: "telescopes",
    answer: "The Hubble Space Telescope, launched in 1990, revolutionized astronomy. It has made over 1.5 million observations, helped determine the universe's expansion rate, and captured iconic images like the Pillars of Creation. Despite being over 30 years old, it continues to operate alongside JWST."
  },
  // BIG BANG
  {
    id: 19,
    keywords: ["big bang", "origin of universe", "universe begin", "how universe started", "beginning"],
    subtopic: "cosmology",
    answer: "The Big Bang theory describes the universe's origin about 13.8 billion years ago from an extremely hot, dense state. In the first fraction of a second, the universe expanded exponentially. Over billions of years, matter clumped into galaxies, stars, and planets. The cosmic microwave background radiation is the 'echo' of this event."
  },
  {
    id: 20,
    keywords: ["dark matter", "dark energy", "invisible matter"],
    subtopic: "cosmology",
    answer: "Dark matter makes up about 27% of the universe but doesn't interact with light — we detect it only through its gravitational effects. Dark energy, comprising ~68%, is the mysterious force driving the universe's accelerating expansion. Together they account for 95% of the cosmos, yet remain largely unexplained."
  },
  {
    id: 21,
    keywords: ["multiverse", "parallel universe", "multiple universes"],
    subtopic: "cosmology",
    answer: "The multiverse hypothesis suggests our universe may be one of countless others. Inflationary cosmology, string theory, and quantum mechanics all offer different frameworks for parallel universes. While compelling, the multiverse remains theoretical — we have no direct observational evidence yet."
  },
  // GALAXIES
  {
    id: 22,
    keywords: ["milky way", "our galaxy", "galaxy we live in"],
    subtopic: "galaxies",
    answer: "The Milky Way is a barred spiral galaxy about 100,000 light-years across, containing 200–400 billion stars. Our solar system sits about 26,000 light-years from the galactic center. On a clear night, the Milky Way's band of light is visible to the naked eye — you're looking at the disk of our own galaxy."
  },
  {
    id: 23,
    keywords: ["andromeda", "andromeda galaxy", "milky way collision", "galaxy collision"],
    subtopic: "galaxies",
    answer: "The Andromeda Galaxy (M31) is our nearest large galactic neighbor, about 2.5 million light-years away. It's on a collision course with the Milky Way — but don't panic. The merger won't happen for about 4.5 billion years, and because galaxies are mostly empty space, stellar collisions will be rare."
  },
  {
    id: 24,
    keywords: ["galaxy types", "spiral galaxy", "elliptical galaxy", "irregular galaxy"],
    subtopic: "galaxies",
    answer: "Galaxies come in three main types: spiral (like the Milky Way and Andromeda), elliptical (smooth, oval-shaped, older stars), and irregular (no defined shape, often from collisions). The observable universe contains an estimated 2 trillion galaxies."
  },
  // ISS
  {
    id: 25,
    keywords: ["international space station", "iss", "space station"],
    subtopic: "space stations",
    answer: "The International Space Station (ISS) orbits Earth at about 408 km altitude, traveling at 28,000 km/h and completing 16 orbits per day. It's a joint project of NASA, Roscosmos, ESA, JAXA, and CSA. Continuously inhabited since November 2000, it serves as a microgravity research laboratory."
  },
  {
    id: 26,
    keywords: ["living in space", "astronaut life", "microgravity", "weightless", "zero gravity"],
    subtopic: "space stations",
    answer: "Living in microgravity is physically demanding. Astronauts experience muscle and bone loss, fluid shifts toward the head, and vision changes. They exercise 2+ hours daily to counteract these effects. Simple tasks like eating, sleeping, and using the bathroom require special adaptations in zero-g."
  },
  // SPACE MISSIONS
  {
    id: 27,
    keywords: ["voyager", "voyager 1", "voyager 2", "interstellar space", "farthest spacecraft"],
    subtopic: "space missions",
    answer: "Voyager 1, launched in 1977, is the farthest human-made object from Earth — over 23 billion km away and in interstellar space. Voyager 2 is the only spacecraft to have visited all four outer planets. Both still transmit data back to Earth, a signal taking over 22 hours to arrive."
  },
  {
    id: 28,
    keywords: ["new horizons", "pluto", "pluto mission", "pluto flyby"],
    subtopic: "space missions",
    answer: "NASA's New Horizons spacecraft flew past Pluto in July 2015, revealing a surprisingly complex world with mountains of water ice, a heart-shaped nitrogen plain (Tombaugh Regio), and a thin atmosphere. It then flew past Arrokoth in 2019 — the most distant object ever explored up close."
  },
  {
    id: 29,
    keywords: ["cassini", "saturn mission", "saturn probe", "titan"],
    subtopic: "space missions",
    answer: "NASA's Cassini spacecraft orbited Saturn from 2004 to 2017, transforming our understanding of the ringed planet. It discovered active geysers on Enceladus (suggesting a subsurface ocean), explored Titan's methane lakes, and ended its mission with a dramatic plunge into Saturn's atmosphere."
  },
  {
    id: 30,
    keywords: ["juno", "jupiter mission", "jupiter probe"],
    subtopic: "space missions",
    answer: "NASA's Juno spacecraft has been orbiting Jupiter since 2016, studying its atmosphere, magnetic field, and interior. It revealed that Jupiter's storms extend hundreds of kilometers deep and that its magnetic field is far more complex than expected. Juno has captured stunning close-up images of Jupiter's swirling clouds."
  },
  // PLANETS
  {
    id: 31,
    keywords: ["jupiter", "largest planet", "great red spot", "gas giant"],
    subtopic: "planets",
    answer: "Jupiter is the largest planet in our solar system — so big that all other planets could fit inside it. Its Great Red Spot is a storm larger than Earth that has raged for at least 350 years. Jupiter has 95 known moons, including Europa, which may harbor a liquid ocean beneath its icy crust."
  },
  {
    id: 32,
    keywords: ["saturn", "saturn rings", "ringed planet"],
    subtopic: "planets",
    answer: "Saturn is famous for its stunning ring system, made of ice and rock particles ranging from tiny grains to house-sized chunks. Despite being the second-largest planet, Saturn is the least dense — it would float on water. It has 146 known moons, including Titan with its thick nitrogen atmosphere."
  },
  {
    id: 33,
    keywords: ["uranus", "ice giant", "sideways planet"],
    subtopic: "planets",
    answer: "Uranus is an ice giant that rotates on its side — its axial tilt is 98°, likely from an ancient collision. It has 13 known rings and 28 moons. Uranus is the coldest planetary atmosphere in the solar system at -224°C, despite not being the farthest planet from the Sun."
  },
  {
    id: 34,
    keywords: ["neptune", "farthest planet", "windy planet", "triton"],
    subtopic: "planets",
    answer: "Neptune is the farthest planet from the Sun, taking 165 Earth years to complete one orbit. It has the strongest winds in the solar system — up to 2,100 km/h. Its largest moon, Triton, orbits in the opposite direction to Neptune's rotation, suggesting it was captured from the Kuiper Belt."
  },
  {
    id: 35,
    keywords: ["venus", "hottest planet", "venus atmosphere", "greenhouse"],
    subtopic: "planets",
    answer: "Venus is the hottest planet in the solar system at 465°C — hotter than Mercury despite being farther from the Sun. Its thick CO₂ atmosphere creates a runaway greenhouse effect. Venus rotates backwards and so slowly that a day on Venus is longer than its year."
  },
  {
    id: 36,
    keywords: ["mercury", "closest planet sun", "smallest planet"],
    subtopic: "planets",
    answer: "Mercury is the smallest planet and closest to the Sun, but paradoxically not the hottest. With virtually no atmosphere to retain heat, temperatures swing from 430°C during the day to -180°C at night. A year on Mercury is just 88 Earth days."
  },
  // ASTRONAUTS
  {
    id: 37,
    keywords: ["first human space", "yuri gagarin", "first astronaut", "vostok"],
    subtopic: "astronauts",
    answer: "Yuri Gagarin became the first human in space on April 12, 1961, completing one orbit of Earth in 108 minutes aboard Vostok 1. His flight marked a turning point in the Space Race. April 12 is now celebrated as Yuri's Night — World Space Party."
  },
  {
    id: 38,
    keywords: ["first woman space", "valentina tereshkova", "woman astronaut"],
    subtopic: "astronauts",
    answer: "Valentina Tereshkova became the first woman in space on June 16, 1963, orbiting Earth 48 times over nearly three days aboard Vostok 6. She remains the only woman to have flown a solo space mission. Sally Ride became the first American woman in space in 1983."
  },
  {
    id: 39,
    keywords: ["longest time space", "space record", "scott kelly", "mark vande hei"],
    subtopic: "astronauts",
    answer: "NASA astronaut Mark Vande Hei holds the US record for longest single spaceflight at 355 days (2021–2022). Russian cosmonaut Oleg Kononenko holds the world record for total time in space, surpassing 1,000 days in 2024. Extended missions help scientists study long-duration spaceflight effects."
  },
  // SPACE EXPLORATION FUTURE
  {
    id: 40,
    keywords: ["spacex", "elon musk", "starship", "falcon"],
    subtopic: "commercial space",
    answer: "SpaceX, founded by Elon Musk, has revolutionized space access with reusable rockets. The Falcon 9 has become the world's most-launched rocket. Starship — the most powerful rocket ever built — is designed to carry humans to the Moon and Mars, with full reusability as its core design goal."
  },
  {
    id: 41,
    keywords: ["blue origin", "jeff bezos", "new shepard", "new glenn"],
    subtopic: "commercial space",
    answer: "Blue Origin, founded by Jeff Bezos, develops rockets for both tourism and orbital missions. New Shepard carries passengers to the edge of space (100 km). New Glenn is their orbital-class rocket. Blue Origin is also building the Blue Moon lunar lander for NASA's Artemis program."
  },
  {
    id: 42,
    keywords: ["human mars mission", "mars colonization", "send humans mars", "mars 2030"],
    subtopic: "future exploration",
    answer: "NASA aims to send humans to Mars in the 2030s, while SpaceX has even more aggressive timelines. Key challenges include radiation exposure during the 7–9 month journey, bone/muscle loss, psychological isolation, and developing life support for a 2-year surface stay. It's humanity's most ambitious goal."
  },
  {
    id: 43,
    keywords: ["space tourism", "tourist space", "civilian space", "commercial spaceflight"],
    subtopic: "commercial space",
    answer: "Space tourism is becoming real. SpaceX's Inspiration4 (2021) was the first all-civilian orbital mission. Virgin Galactic and Blue Origin offer suborbital flights. Axiom Space sends private astronauts to the ISS. Tickets currently cost millions, but prices are expected to drop as the industry matures."
  },
  // COMETS & ASTEROIDS
  {
    id: 44,
    keywords: ["comet", "halley", "comet tail", "dirty snowball"],
    subtopic: "comets",
    answer: "Comets are icy bodies from the outer solar system. When they approach the Sun, heat vaporizes their ice, creating a glowing coma and tail that always points away from the Sun. Halley's Comet, visible every ~75 years, was last seen in 1986 and returns around 2061."
  },
  {
    id: 45,
    keywords: ["asteroid", "asteroid belt", "near earth asteroid", "apophis"],
    subtopic: "asteroids",
    answer: "Asteroids are rocky remnants from the solar system's formation. The asteroid belt between Mars and Jupiter contains millions of them. Near-Earth asteroids are closely monitored — Apophis will pass within 32,000 km of Earth in 2029, closer than some satellites, but poses no impact threat."
  },
  {
    id: 46,
    keywords: ["dart mission", "asteroid deflection", "planetary defense", "dimorphos"],
    subtopic: "asteroids",
    answer: "NASA's DART (Double Asteroid Redirection Test) mission in 2022 successfully changed the orbit of asteroid Dimorphos by crashing a spacecraft into it — the first planetary defense test in history. It shortened Dimorphos's orbit by 33 minutes, proving we can deflect asteroids if needed."
  },
  // NEUTRON STARS & PULSARS
  {
    id: 47,
    keywords: ["neutron star", "pulsar", "magnetar", "stellar remnant"],
    subtopic: "neutron stars",
    answer: "Neutron stars are the ultra-dense remnants of massive stellar explosions. A teaspoon of neutron star material would weigh about a billion tons. Pulsars are rapidly rotating neutron stars emitting beams of radiation like cosmic lighthouses. Magnetars have the strongest magnetic fields in the known universe."
  },
  // SUPERNOVAE
  {
    id: 47.1,
    keywords: ["supernova", "supernovae", "stellar explosion", "star explosion", "star death", "dying star"],
    subtopic: "stars",
    answer: "A supernova is one of the most powerful explosions in the universe — the violent death of a massive star. When a star exhausts its fuel, its core collapses and the outer layers explode outward, briefly outshining entire galaxies. Supernovae forge heavy elements like iron and gold, scattering them across space to form new stars and planets."
  },
  // SPACE WEATHER
  {
    id: 48,
    keywords: ["space weather", "geomagnetic storm", "solar wind", "radiation belt"],
    subtopic: "space weather",
    answer: "Space weather refers to conditions in space driven by the Sun's activity. Solar wind — a stream of charged particles — constantly flows past Earth. During geomagnetic storms, this can disrupt GPS, radio communications, and power grids. Earth's magnetic field and atmosphere protect us from the worst effects."
  },
  // LIGHT & DISTANCE
  {
    id: 49,
    keywords: ["light year", "light-year", "how far light year", "distance space"],
    subtopic: "distances",
    answer: "A light-year is the distance light travels in one year — about 9.46 trillion km. The nearest star system, Alpha Centauri, is 4.37 light-years away. The Milky Way is 100,000 light-years across. When you look at distant stars, you're seeing them as they were years, centuries, or millennia ago."
  },
  {
    id: 50,
    keywords: ["speed of light", "how fast light", "light speed", "186000"],
    subtopic: "physics",
    answer: "Light travels at 299,792 km/s (about 186,000 miles per second) in a vacuum — the ultimate speed limit of the universe. At this speed, light from the Sun takes 8 minutes to reach Earth, and from the Moon just 1.3 seconds. Nothing with mass can reach or exceed this speed."
  },
  // PLUTO
  {
    id: 51,
    keywords: ["pluto", "dwarf planet", "kuiper belt", "pluto planet"],
    subtopic: "dwarf planets",
    answer: "Pluto was reclassified as a dwarf planet in 2006 by the IAU. It lives in the Kuiper Belt beyond Neptune. New Horizons revealed it has mountains of water ice, a nitrogen ice plain, and a thin atmosphere. Pluto has five moons — its largest, Charon, is so big they're often called a double dwarf planet system."
  },
  // WORMHOLES
  {
    id: 52,
    keywords: ["wormhole", "einstein rosen bridge", "space travel shortcut", "warp"],
    subtopic: "theoretical physics",
    answer: "Wormholes (Einstein-Rosen bridges) are theoretical tunnels through spacetime that could connect distant regions of the universe. While they're valid solutions to Einstein's field equations, no wormhole has ever been observed. Keeping one open would require exotic matter with negative energy — which may not exist."
  },
  // LIFE IN UNIVERSE
  {
    id: 53,
    keywords: ["alien", "extraterrestrial", "ufo", "uap", "are we alone", "life universe", "life on other planets", "life in space", "intelligent life", "other planets life"],
    subtopic: "astrobiology",
    answer: "The search for extraterrestrial life is one of science's biggest quests. With billions of potentially habitable planets in the Milky Way alone, many scientists think life elsewhere is plausible. SETI searches for radio signals, while missions to Europa, Enceladus, and Mars look for microbial life closer to home."
  },
  {
    id: 54,
    keywords: ["fermi paradox", "where is everyone", "great filter", "drake equation"],
    subtopic: "astrobiology",
    answer: "The Fermi Paradox asks: if intelligent life is common, why haven't we detected it? Proposed answers range from the 'Great Filter' (a barrier most civilizations don't survive) to the idea that interstellar communication is simply too slow. The Drake Equation attempts to estimate the number of communicating civilizations."
  },
  // SPACE SUITS
  {
    id: 55,
    keywords: ["spacesuit", "space suit", "eva suit", "extravehicular"],
    subtopic: "technology",
    answer: "A spacesuit is essentially a personal spacecraft. It provides oxygen, removes CO₂, regulates temperature, protects against micrometeoroids and radiation, and maintains pressure. NASA's new Axiom Extravehicular Mobility Unit (AxEMU) suits for Artemis are far more flexible than the Apollo-era suits."
  },
  // ROCKET SCIENCE
  {
    id: 56,
    keywords: ["rocket", "how rocket works", "thrust", "propulsion", "launch"],
    subtopic: "technology",
    answer: "Rockets work on Newton's third law — expelling gas downward creates thrust upward. To reach orbit, a rocket must achieve about 28,000 km/h (orbital velocity). Most rockets use liquid or solid propellants. The Saturn V, which launched Apollo missions, remains the most powerful rocket ever flown."
  },
  // SPACE DEBRIS
  {
    id: 57,
    keywords: ["space debris", "space junk", "orbital debris", "kessler"],
    subtopic: "space environment",
    answer: "There are over 27,000 tracked pieces of space debris orbiting Earth, with millions of smaller fragments. At orbital speeds, even a paint fleck can damage a spacecraft. The Kessler Syndrome describes a cascade scenario where collisions create more debris, potentially making certain orbits unusable."
  },
  // CONSTELLATIONS
  {
    id: 58,
    keywords: ["constellation", "orion", "big dipper", "zodiac", "star pattern"],
    subtopic: "astronomy basics",
    answer: "Constellations are patterns of stars as seen from Earth — the 88 officially recognized ones are used to map the sky. Orion the Hunter is one of the most recognizable, visible worldwide. The stars in a constellation aren't actually close to each other; they just appear grouped from our vantage point."
  },
  // TELESCOPE BASICS
  {
    id: 59,
    keywords: ["telescope", "how telescope works", "refracting", "reflecting telescope"],
    subtopic: "telescopes",
    answer: "Telescopes collect and focus light to magnify distant objects. Refracting telescopes use lenses; reflecting telescopes use mirrors (like Hubble and JWST). Radio telescopes detect radio waves from space. The larger the aperture, the more light collected and the finer the detail resolved."
  },
  // SOLAR SYSTEM FORMATION
  {
    id: 60,
    keywords: ["solar system formation", "how solar system formed", "nebular hypothesis", "protoplanetary disk"],
    subtopic: "solar system",
    answer: "Our solar system formed about 4.6 billion years ago from a giant cloud of gas and dust called a solar nebula. Gravity caused it to collapse and spin, forming a disk. The center became the Sun; the remaining material clumped into planets, moons, asteroids, and comets through a process called accretion."
  },
  {
    id: 61,
    keywords: ["stellar black hole", "stellar mass black hole", "black hole formation"],
    subtopic: "black holes",
    answer: "Stellar black holes form when massive stars (at least 20 solar masses) collapse under their own gravity at the end of their life cycle. They typically have masses between 5 and several tens of solar masses. The first confirmed stellar black hole is Cygnus X-1."
  },
  {
    id: 62,
    keywords: ["intermediate black hole", "immediate mass black hole", "missing link"],
    subtopic: "black holes",
    answer: "Intermediate-mass black holes (IMBHs) range from 100 to 100,000 solar masses. They are the 'missing link' between stellar and supermassive black holes. Candidates include 3XMM J215022.4−055108 and possibly the heart of globular clusters like Omega Centauri."
  },
  {
    id: 63,
    keywords: ["primordial black hole", "early universe black hole", "micro black hole"],
    subtopic: "black holes",
    answer: "Primordial black holes are hypothetical black holes that formed soon after the Big Bang from dense fluctuations. They could have masses ranging from tiny (micro) to several solar masses. They are candidates for dark matter, though none have been observed."
  },
  {
    id: 64,
    keywords: ["black hole merger", "gravitational waves", "ligo", "black hole collision"],
    subtopic: "black holes",
    answer: "When two black holes orbit each other, they lose energy via gravitational waves and eventually merge into a single, more massive black hole. LIGO made the first direct detection of such an event in 2015 (GW150914), confirming Einstein's predictions and opening a new era of astronomy."
  },
  {
    id: 65,
    keywords: ["black hole spin", "kerr black hole", "rotating black hole"],
    subtopic: "black holes",
    answer: "Most black holes rotate, described by the Kerr metric. Spin affects the event horizon shape and the ergosphere—a region where spacetime is dragged along. Some supermassive black holes spin near the theoretical maximum, while others are nearly stationary."
  },
  {
    id: 66,
    keywords: ["black hole photon sphere", "light ring", "black hole image"],
    subtopic: "black holes",
    answer: "The photon sphere is a region around a black hole where gravity is so strong that photons (light) orbit in unstable circles. It's what creates the bright ring seen in the first image of M87's black hole, produced by the Event Horizon Telescope."
  },
  {
    id: 67,
    keywords: ["black hole information paradox", "information loss", "hawking paradox"],
    subtopic: "black holes",
    answer: "The black hole information paradox arises from Hawking's prediction that black holes emit radiation and eventually evaporate, seemingly destroying information about what fell in. This conflicts with quantum mechanics. Proposed solutions include holography and the idea that information is encoded in Hawking radiation."
  },
  {
    id: 68,
    keywords: ["quasar", "active galactic nucleus", "agn", "blazar"],
    subtopic: "black holes",
    answer: "Quasars are extremely bright active galactic nuclei powered by supermassive black holes accreting matter. They can outshine entire galaxies. Blazars are a subclass with jets pointing directly at Earth. The nearest quasar, Markarian 231, is about 600 million light-years away."
  },
  // MARS - Additional details
  {
    id: 69,
    keywords: ["mars moons", "phobos", "deimos", "martian moons"],
    subtopic: "mars",
    answer: "Mars has two small, irregularly shaped moons: Phobos (fear) and Deimos (terror), named after the sons of Ares in Greek mythology. They are likely captured asteroids. Phobos orbits so close that it completes three orbits in a Martian day and is gradually spiraling inward; in about 50 million years, it may crash into Mars or break apart."
  },
  {
    id: 70,
    keywords: ["mars atmosphere", "martian atmosphere", "mars air", "co2 mars"],
    subtopic: "mars",
    answer: "Mars' atmosphere is about 100 times thinner than Earth's, composed mostly of carbon dioxide (95%), with traces of nitrogen and argon. It offers little protection from solar radiation and cannot support liquid water on the surface due to low pressure. Dust storms can engulf the entire planet."
  },
  {
    id: 71,
    keywords: ["mars seasons", "martian seasons", "weather on mars"],
    subtopic: "mars",
    answer: "Mars has seasons like Earth because its axial tilt is similar (25 degrees). However, seasons last twice as long due to its longer orbit. Seasonal changes cause polar caps to grow and shrink, and dust storms are common during summer in the southern hemisphere."
  },
  {
    id: 72,
    keywords: ["mars water", "water on mars", "martian water", "ice on mars"],
    subtopic: "mars",
    answer: "Large amounts of water ice exist on Mars, primarily in polar ice caps and underground permafrost. Evidence of ancient river valleys and lakebeds suggests liquid water once flowed. Recurring slope lineae (dark streaks) may indicate briny water flows today, though this is debated."
  },
  {
    id: 73,
    keywords: ["mars geology", "martian volcanoes", "olympus mons", "valles marineris"],
    subtopic: "mars",
    answer: "Mars hosts the solar system's largest volcano, Olympus Mons (22 km high), and a vast canyon system, Valles Marineris (over 4,000 km long). The planet is tectonically inactive, but volcanic and tectonic features are preserved from its early history."
  },
  {
    id: 74,
    keywords: ["mars missions", "mars orbiters", "mars landers", "mars rovers list"],
    subtopic: "mars",
    answer: "Dozens of missions have targeted Mars. Notable successes include Mariner 9 (first orbiter), Viking 1/2 (first landers), Pathfinder (first rover), Spirit, Opportunity, Curiosity, Perseverance, and Ingenuity. Current active missions include Perseverance, Curiosity, Tianwen-1 orbiter/rover, Hope orbiter, and Mars Express."
  },
  {
    id: 75,
    keywords: ["mars sample return", "bring mars rocks to earth", "mars sample mission"],
    subtopic: "mars",
    answer: "NASA and ESA are planning a multi-mission campaign to return samples collected by Perseverance to Earth by the early 2030s. The samples, cached in tubes, could reveal if Mars ever hosted life and provide insights into its geological history."
  },
  {
    id: 76,
    keywords: ["mars colonization", "living on mars", "mars habitat", "mars base"],
    subtopic: "mars",
    answer: "Proposals for colonizing Mars involve building habitats that provide radiation shielding, life support, and food production. Challenges include low gravity, toxic soil, and extreme cold. Concepts like Mars Direct and SpaceX's Starship aim to make human settlement feasible."
  },
  // MOON - Additional details
  {
    id: 77,
    keywords: ["moon phases", "lunar phases", "waxing", "waning", "new moon", "full moon"],
    subtopic: "moon",
    answer: "Moon phases result from the relative positions of the Moon, Earth, and Sun. The cycle (new moon, waxing crescent, first quarter, waxing gibbous, full moon, waning gibbous, last quarter, waning crescent) repeats every 29.5 days. Each phase offers different viewing opportunities."
  },
  {
    id: 78,
    keywords: ["lunar eclipse", "blood moon", "moon eclipse"],
    subtopic: "moon",
    answer: "A lunar eclipse occurs when the Moon passes through Earth's shadow, only possible at full moon. During a total eclipse, the Moon can appear red (blood moon) due to sunlight scattering through Earth's atmosphere. Lunar eclipses are safe to view with the naked eye."
  },
  {
    id: 79,
    keywords: ["moon geology", "lunar rocks", "moon surface", "maria", "highlands"],
    subtopic: "moon",
    answer: "The Moon's surface consists of dark, smooth maria (ancient lava plains) and bright, rugged highlands. It lacks plate tectonics and a thick atmosphere. Lunar rocks are primarily anorthosite and basalt, rich in oxygen, silicon, and metals like iron and titanium."
  },
  {
    id: 80,
    keywords: ["moon water", "lunar water", "ice on moon", "moon resources"],
    subtopic: "moon",
    answer: "Water ice exists in permanently shadowed craters at the lunar poles, discovered by missions like LCROSS and Chandrayaan-1. This ice could be a vital resource for future astronauts, providing drinking water, oxygen, and rocket fuel (hydrogen and oxygen)."
  },
  {
    id: 81,
    keywords: ["apollo missions details", "apollo program", "apollo 11", "apollo 13", "moon landings"],
    subtopic: "moon",
    answer: "The Apollo program (1961-1972) landed 12 astronauts on the Moon across six missions. Apollo 11 was the first; Apollo 13 famously aborted due to an explosion but safely returned. Astronauts conducted experiments, collected samples, and drove lunar rovers on later missions."
  },
  {
    id: 82,
    keywords: ["artemis program", "artemis missions", "lunar gateway", "moon to mars"],
    subtopic: "moon",
    answer: "Artemis, NASA's current lunar program, aims to establish sustainable exploration by 2030. It includes the Space Launch System (SLS), Orion spacecraft, Lunar Gateway (a space station in lunar orbit), and human landing systems. Artemis II will be a crewed flyby; Artemis III plans to land near the south pole."
  },
  {
    id: 83,
    keywords: ["moon bases", "lunar base", "moon colony", "moon village"],
    subtopic: "moon",
    answer: "Concepts for lunar bases include using 3D printing with lunar soil for habitats, deploying inflatable modules, and leveraging polar ice. ESA's 'Moon Village' and NASA's Artemis Base Camp are early visions. China and Russia also plan a joint International Lunar Research Station."
  },
  // SUN - Additional details
  {
    id: 84,
    keywords: ["solar cycle", "sunspot cycle", "solar maximum", "solar minimum"],
    subtopic: "sun",
    answer: "The Sun goes through an 11-year cycle of magnetic activity, marked by varying numbers of sunspots. During solar maximum, sunspots, flares, and CMEs are frequent; during solar minimum, they are rare. The cycle influences space weather and Earth's climate slightly."
  },
  {
    id: 85,
    keywords: ["sunspots", "sun spot", "solar active regions"],
    subtopic: "sun",
    answer: "Sunspots are cooler, darker regions on the Sun's surface caused by intense magnetic fields. They can be larger than Earth and often appear in groups. The number of sunspots indicates solar activity and follows the 11-year cycle."
  },
  {
    id: 86,
    keywords: ["solar interior", "sun core", "radiative zone", "convective zone", "sun layers"],
    subtopic: "sun",
    answer: "The Sun's interior has three main layers: the core (where fusion occurs), the radiative zone (energy travels outward by radiation), and the convective zone (hot plasma rises and falls like boiling water). The surface we see is the photosphere."
  },
  {
    id: 87,
    keywords: ["solar wind", "sun wind", "charged particles from sun"],
    subtopic: "sun",
    answer: "Solar wind is a continuous stream of charged particles (mostly protons and electrons) released from the Sun's corona. It travels at speeds of 250–750 km/s and shapes the heliosphere, a bubble around the solar system. When it hits Earth's magnetosphere, it can cause auroras."
  },
  {
    id: 88,
    keywords: ["heliosphere", "sun's magnetic field", "solar system boundary", "termination shock"],
    subtopic: "sun",
    answer: "The heliosphere is a vast bubble of plasma created by the solar wind, extending far beyond Pluto. Its boundary, the heliopause, marks where interstellar space begins. Voyager 1 and 2 have crossed this boundary, entering interstellar space."
  },
  {
    id: 89,
    keywords: ["solar missions", "soho", "sdo", "parker solar probe", "solar orbiter"],
    subtopic: "sun",
    answer: "Key solar missions include SOHO (studying the Sun's interior and corona), SDO (high-resolution imaging), Parker Solar Probe (touching the Sun's atmosphere), and Solar Orbiter (imaging the Sun's poles). Together, they revolutionize our understanding of solar physics."
  },
  // EXOPLANETS - Additional details
  {
    id: 90,
    keywords: ["exoplanet detection methods", "transit method", "radial velocity", "direct imaging", "microlensing"],
    subtopic: "exoplanets",
    answer: "Exoplanets are found using several methods: transit (star dims when planet crosses), radial velocity (star wobbles due to planet's gravity), direct imaging (actually photographing the planet), microlensing (planet's gravity bends light), and astrometry. Transit and radial velocity have discovered the most."
  },
  {
    id: 91,
    keywords: ["kepler mission", "kepler space telescope", "kepler discoveries"],
    subtopic: "exoplanets",
    answer: "NASA's Kepler mission (2009-2018) revolutionized exoplanet science by monitoring over 150,000 stars for transits. It confirmed over 2,600 exoplanets and revealed that planets are common, including many small, rocky worlds. Its data continues to yield discoveries."
  },
  {
    id: 92,
    keywords: ["tess mission", "transiting exoplanet survey satellite", "tess exoplanets"],
    subtopic: "exoplanets",
    answer: "TESS, launched in 2018, surveys the entire sky to find exoplanets around bright, nearby stars. It uses the transit method and has discovered thousands of candidates, including many in the habitable zone. TESS is paving the way for atmospheric studies by JWST."
  },
  {
    id: 93,
    keywords: ["hot jupiter", "gas giant close to star", "hot jupiters"],
    subtopic: "exoplanets",
    answer: "Hot Jupiters are gas giants orbiting extremely close to their stars, with orbital periods of just days. They are highly irradiated, with temperatures exceeding 1000°C. Their existence challenged planet formation theories, leading to models of planetary migration. 51 Pegasi b was the first discovered."
  },
  {
    id: 94,
    keywords: ["super earth", "super-earth", "rocky planet larger than earth"],
    subtopic: "exoplanets",
    answer: "Super-Earths are planets with masses between Earth and Neptune (up to about 10 Earth masses). They may be rocky or have thick atmospheres. Some, like LHS 1140 b and TRAPPIST-1e, lie in habitable zones and are prime targets for atmospheric study."
  },
  {
    id: 95,
    keywords: ["mini neptune", "gas dwarf", "neptune-like exoplanet"],
    subtopic: "exoplanets",
    answer: "Mini-Neptunes are planets with thick hydrogen-helium atmospheres and masses lower than Neptune (10–20 Earth masses). They are common in Kepler data. The transition between rocky super-Earths and mini-Neptunes is a key question in exoplanet science."
  },
  {
    id: 96,
    keywords: ["exomoon", "moon around exoplanet", "extrasolar moon"],
    subtopic: "exoplanets",
    answer: "Exomoons are moons orbiting exoplanets. While none have been confirmed, candidates like Kepler-1625b I and Kepler-1708b I have been proposed. Detecting them is challenging, but future missions may find them, possibly revealing habitable moons."
  },
  {
    id: 97,
    keywords: ["proxima centauri b", "proxima b", "closest exoplanet"],
    subtopic: "exoplanets",
    answer: "Proxima Centauri b is an Earth-mass exoplanet orbiting within the habitable zone of Proxima Centauri, the closest star to the Sun (4.24 light-years). Discovered in 2016, it's a prime target for future interstellar probes like Breakthrough Starshot."
  },
  {
    id: 98,
    keywords: ["kepler-452b", "earth's cousin", "earth 2.0"],
    subtopic: "exoplanets",
    answer: "Kepler-452b, announced in 2015, is a super-Earth in the habitable zone of a Sun-like star 1,400 light-years away. Its size (1.5 Earth radii) and orbit (385 days) led to the nickname 'Earth's cousin,' though its composition and atmosphere remain unknown."
  },
  {
    id: 99,
    keywords: ["exoplanet atmospheres", "atmospheric composition", "biosignatures", "jwst exoplanets"],
    subtopic: "exoplanets",
    answer: "Studying exoplanet atmospheres involves spectroscopy—analyzing starlight filtered through the atmosphere. JWST can detect molecules like water, methane, carbon dioxide, and potentially biosignatures (e.g., oxygen, ozone). Early results include water vapor on WASP-96b and carbon dioxide on WASP-39b."
  },
  // JAMES WEBB TELESCOPE - Additional details
  {
    id: 100,
    keywords: ["jwst instruments", "nircam", "miri", "nirspec", "fgs/niriss"],
    subtopic: "telescopes",
    answer: "JWST carries four main instruments: NIRCam (near-infrared camera), NIRSpec (near-infrared spectrograph), MIRI (mid-infrared instrument), and FGS/NIRISS (fine guidance sensor and near-infrared imager and slitless spectrograph). Each is designed for specific wavelengths and science goals."
  },
  {
    id: 101,
    keywords: ["jwst discoveries", "webb telescope discoveries", "early galaxies", "jades"],
    subtopic: "telescopes",
    answer: "JWST has already made groundbreaking discoveries, including galaxies at redshift >13 (formed just 300 million years after the Big Bang), detailed atmospheric spectra of exoplanets, stunning images of star-forming regions (e.g., Carina Nebula), and new views of Jupiter and its auroras."
  },
  {
    id: 102,
    keywords: ["jwst vs hubble", "webb vs hubble", "compare jwst hubble"],
    subtopic: "telescopes",
    answer: "JWST complements Hubble by observing in infrared, allowing it to see through dust and study the earliest universe. Hubble primarily observes visible and ultraviolet light. JWST has a larger mirror (6.5m vs 2.4m) but orbits farther out (L2 vs low Earth orbit)."
  },
  {
    id: 103,
    keywords: ["jwst orbit", "lagrange point 2", "l2", "why jwst at l2"],
    subtopic: "telescopes",
    answer: "JWST orbits the Sun-Earth Lagrange point 2 (L2), 1.5 million km from Earth. This location keeps the telescope cold and stable, with the Sun, Earth, and Moon always behind its sunshield, allowing uninterrupted observations without thermal interference."
  },
  // HUBBLE - Additional details
  {
    id: 104,
    keywords: ["hubble servicing missions", "hubble repair", "hubble astronauts"],
    subtopic: "telescopes",
    answer: "Hubble was designed for servicing by space shuttle astronauts. Five servicing missions (1993-2009) installed new instruments, repaired gyroscopes, and corrected its flawed mirror. These missions kept Hubble at the forefront of astronomy for over 30 years."
  },
  {
    id: 105,
    keywords: ["hubble deep field", "hubble ultra deep field", "hubble extreme deep field"],
    subtopic: "telescopes",
    answer: "The Hubble Deep Field, Ultra Deep Field, and eXtreme Deep Field are iconic images showing thousands of galaxies in a tiny patch of sky, some as far back as 13 billion years. They revolutionized our understanding of galaxy evolution and the universe's history."
  },
  {
    id: 106,
    keywords: ["hubble constant", "expansion rate", "hubble tension"],
    subtopic: "telescopes",
    answer: "Hubble's observations helped refine the Hubble constant (H0), the universe's expansion rate. Discrepancies between measurements from the early universe (CMB) and the local universe (using Hubble) have led to the 'Hubble tension,' possibly indicating new physics."
  },
  {
    id: 107,
    keywords: ["pillars of creation", "eagle nebula", "hubble iconic image"],
    subtopic: "telescopes",
    answer: "The Pillars of Creation, in the Eagle Nebula, is one of Hubble's most famous images. It shows towering columns of gas and dust where new stars are forming. JWST also captured a new infrared view, revealing hidden stars within."
  },
  // BIG BANG & COSMOLOGY - Additional details
  {
    id: 108,
    keywords: ["cosmic inflation", "inflation theory", "early universe expansion"],
    subtopic: "cosmology",
    answer: "Cosmic inflation is a theory that the universe underwent an exponential expansion in the first tiny fraction of a second after the Big Bang. Proposed by Alan Guth and others, it explains the universe's flatness, homogeneity, and the origin of large-scale structure."
  },
  {
    id: 109,
    keywords: ["cosmic microwave background", "cmb", "afterglow of big bang", "cobe", "wmap", "planck"],
    subtopic: "cosmology",
    answer: "The Cosmic Microwave Background (CMB) is radiation left over from the Big Bang, first detected in 1965. Satellites like COBE, WMAP, and Planck have mapped its tiny temperature fluctuations, revealing the universe's age (13.8 billion years), composition, and geometry."
  },
  {
    id: 110,
    keywords: ["big bang nucleosynthesis", "primordial elements", "hydrogen helium", "lithium"],
    subtopic: "cosmology",
    answer: "Big Bang nucleosynthesis (BBN) describes the formation of light elements (hydrogen, helium, lithium) in the first few minutes of the universe. Predictions match observed abundances, providing strong evidence for the Big Bang model."
  },
  {
    id: 111,
    keywords: ["large scale structure", "galaxy filaments", "cosmic web", "voids"],
    subtopic: "cosmology",
    answer: "On the largest scales, galaxies are arranged in a cosmic web of filaments and clusters, separated by enormous voids. This structure grew from tiny quantum fluctuations amplified by inflation and gravity, mapped by surveys like SDSS and 2dF."
  },
  {
    id: 112,
    keywords: ["dark matter evidence", "galaxy rotation curves", "bullet cluster", "weak lensing"],
    subtopic: "cosmology",
    answer: "Evidence for dark matter includes: galaxy rotation curves (stars move too fast), the Bullet Cluster (separation of visible matter and gravitational lensing), cosmic microwave background, and large-scale structure formation. It doesn't emit or absorb light, only interacts gravitationally."
  },
  {
    id: 113,
    keywords: ["dark matter candidates", "wimps", "axions", "sterile neutrinos", "machos"],
    subtopic: "cosmology",
    answer: "Dark matter candidates include WIMPs (weakly interacting massive particles), axions (very light particles), sterile neutrinos, and primordial black holes. Experiments like LZ, XENONnT, and ADMX are searching for these particles, so far with no detection."
  },
  {
    id: 114,
    keywords: ["dark energy evidence", "accelerating universe", "type ia supernovae"],
    subtopic: "cosmology",
    answer: "Dark energy was discovered in 1998 when two teams observed distant Type Ia supernovae were dimmer than expected, implying the universe's expansion is accelerating. It is thought to make up 68% of the universe and may be a cosmological constant (vacuum energy)."
  },
  {
    id: 115,
    keywords: ["cosmological constant", "lambda cdm", "einstein's biggest blunder"],
    subtopic: "cosmology",
    answer: "The cosmological constant (Λ) is a term Einstein added to his equations to allow a static universe, later calling it his 'biggest blunder.' Today, Λ is the leading explanation for dark energy, representing the energy density of empty space. The ΛCDM model is the standard model of cosmology."
  },
  // GALAXIES - Additional details
  {
    id: 116,
    keywords: ["galaxy formation", "how galaxies form", "mergers", "accretion"],
    subtopic: "galaxies",
    answer: "Galaxies form from gravitational collapse of gas and dark matter in the early universe. They grow by accreting gas and merging with other galaxies. Simulations like IllustrisTNG model these processes, showing how spiral and elliptical galaxies arise."
  },
  {
    id: 117,
    keywords: ["active galaxies", "seyfert", "quasars", "blazars", "radio galaxies"],
    subtopic: "galaxies",
    answer: "Active galaxies have supermassive black holes accreting matter, emitting huge amounts of energy across the spectrum. Seyfert galaxies are a lower-luminosity class; quasars are extremely luminous; blazars have jets pointing at us; radio galaxies emit strongly in radio waves."
  },
  {
    id: 118,
    keywords: ["milky way structure", "galactic center", "spiral arms", "galactic bulge", "halo"],
    subtopic: "galaxies",
    answer: "The Milky Way has a barred spiral structure with a central bulge, a thin disk of stars and gas, spiral arms (e.g., Perseus, Sagittarius), and a spherical halo containing globular clusters and dark matter. The Sun lies in the Orion Arm, about 26,000 light-years from the center."
  },
  {
    id: 119,
    keywords: ["andromeda facts", "m31", "andromeda details"],
    subtopic: "galaxies",
    answer: "Andromeda (M31) is about 2.5 million light-years away, slightly larger than the Milky Way. It contains about a trillion stars and has a prominent central bulge. It's approaching us at 110 km/s, and the two galaxies will eventually merge."
  },
  {
    id: 120,
    keywords: ["galaxy collision simulation", "milky way andromeda merger", "milkomeda"],
    subtopic: "galaxies",
    answer: "Simulations predict the Milky Way and Andromeda will collide in about 4.5 billion years, eventually merging into a giant elliptical galaxy nicknamed 'Milkomeda.' Star formation will be triggered, but individual stars rarely collide due to vast empty spaces."
  },
  {
    id: 121,
    keywords: ["magellanic clouds", "large magellanic cloud", "small magellanic cloud", "lmc", "smc"],
    subtopic: "galaxies",
    answer: "The Large and Small Magellanic Clouds are irregular dwarf galaxies orbiting the Milky Way, visible from the southern hemisphere. They are sites of active star formation, including the Tarantula Nebula. They may eventually merge with our galaxy."
  },
  {
    id: 122,
    keywords: ["gravitational lensing", "einstein ring", "strong lensing", "weak lensing"],
    subtopic: "galaxies",
    answer: "Gravitational lensing occurs when massive objects (like galaxy clusters) bend light from background objects, creating multiple images, arcs, or rings. It's used to study dark matter distribution and distant galaxies. Hubble and JWST have captured stunning examples."
  },
  // ISS & SPACE STATIONS
  {
    id: 123,
    keywords: ["iss modules", "zarya", "unity", "destiny", "columbus", "kipo", "nauka"],
    subtopic: "space stations",
    answer: "The ISS consists of multiple modules from different space agencies: Zarya (Russian, control), Unity (US, connecting), Destiny (US lab), Columbus (European lab), Kibo (Japanese lab), Nauka (Russian lab), and more. Modules were assembled over many missions."
  },
  {
    id: 124,
    keywords: ["iss experiments", "science on iss", "microgravity research"],
    subtopic: "space stations",
    answer: "ISS hosts hundreds of experiments in biology (plant growth, protein crystals), physics (fluid behavior, combustion), human physiology (bone loss, muscle atrophy), and technology demonstrations. Results benefit life on Earth and future deep-space missions."
  },
  {
    id: 125,
    keywords: ["iss crew", "expeditions", "astronauts on iss", "cosmonauts"],
    subtopic: "space stations",
    answer: "The ISS typically hosts 7 crew members from the US, Russia, Japan, Europe, and Canada, rotating every 6 months. Expeditions are numbered sequentially; Expedition 1 began in 2000. Crews conduct science, maintenance, and spacewalks."
  },
  {
    id: 126,
    keywords: ["tiangong space station", "chinese space station", "css", "tianhe"],
    subtopic: "space stations",
    answer: "China's Tiangong space station (CSS) became operational in 2022. It consists of three modules: Tianhe (core), Wentian, and Mengtian. It hosts Chinese astronauts (taikonauts) and international experiments, with plans for continuous occupation and future expansion."
  },
  {
    id: 127,
    keywords: ["mir space station", "russian space station", "mir history"],
    subtopic: "space stations",
    answer: "Mir was a Soviet/Russian space station in orbit from 1986 to 2001. It was the first modular station and hosted many long-duration missions and international visitors. Mir was deorbited over the Pacific Ocean after 15 years of service."
  },
  {
    id: 128,
    keywords: ["skylab", "american space station", "first us space station"],
    subtopic: "space stations",
    answer: "Skylab was America's first space station, launched in 1973. It hosted three crews and conducted solar science and microgravity experiments. It re-entered Earth's atmosphere in 1979, with debris landing in Australia."
  },
  // SPACE MISSIONS - Additional
  {
    id: 129,
    keywords: ["galileo mission", "galileo spacecraft", "jupiter galileo"],
    subtopic: "space missions",
    answer: "NASA's Galileo mission (1989-2003) orbited Jupiter and studied its atmosphere, moons, and magnetosphere. It released a probe into Jupiter's atmosphere, discovered evidence for subsurface oceans on Europa, Ganymede, and Callisto, and observed comet Shoemaker-Levy 9 impact."
  },
  {
    id: 130,
    keywords: ["magellan mission", "magellan venus", "venus radar mapping"],
    subtopic: "space missions",
    answer: "NASA's Magellan spacecraft (1989-1994) used radar to map 98% of Venus's surface, revealing volcanoes, impact craters, and tectonic features. Its data remains a cornerstone of Venus science."
  },
  {
    id: 131,
    keywords: ["viking mission", "viking 1", "viking 2", "mars landers 1976"],
    subtopic: "space missions",
    answer: "NASA's Viking 1 and 2 were the first successful Mars landers in 1976. They conducted biology experiments searching for life (results were inconclusive), took the first color photos from the surface, and studied weather and soil composition."
  },
  {
    id: 132,
    keywords: ["pioneer mission", "pioneer 10", "pioneer 11", "pioneer venus"],
    subtopic: "space missions",
    answer: "Pioneer 10 and 11 (1972-1973) were the first spacecraft to fly by Jupiter and Saturn, returning close-up images. Pioneer Venus (1978) orbited and probed Venus's atmosphere. They also carried plaques with human figures and Earth's location."
  },
  {
    id: 133,
    keywords: ["dawn mission", "dawn spacecraft", "ceres", "vesta"],
    subtopic: "space missions",
    answer: "NASA's Dawn mission (2007-2018) orbited the two largest bodies in the asteroid belt: Vesta (2011-2012) and Ceres (2015-2018). It revealed Vesta as a differentiated protoplanet and Ceres as an icy world with cryovolcanoes and bright salt deposits."
  },
  {
    id: 134,
    keywords: ["osiris-rex", "osiris rex", "asteroid bennu", "sample return mission"],
    subtopic: "space missions",
    answer: "NASA's OSIRIS-REx mission (2016-2023) collected a sample from asteroid Bennu and returned it to Earth in September 2023. The sample contains carbon-rich material and water-bearing minerals, offering insights into the early solar system and origins of life."
  },
  {
    id: 135,
    keywords: ["hayabusa", "hayabusa2", "asteroid itokawa", "asteroid ryugu", "jaxa sample return"],
    subtopic: "space missions",
    answer: "JAXA's Hayabusa (2003-2010) returned samples from asteroid Itokawa, the first asteroid sample return. Hayabusa2 (2014-2020) returned samples from Ryugu, a carbonaceous asteroid, revealing organic molecules and hydrated minerals."
  },
  {
    id: 136,
    keywords: ["rosetta mission", "rosetta spacecraft", "philae lander", "comet 67p"],
    subtopic: "space missions",
    answer: "ESA's Rosetta mission (2004-2016) orbited comet 67P/Churyumov-Gerasimenko and deployed the Philae lander (2014). It studied the comet's nucleus, gases, and dust, finding organic compounds and a surprisingly complex shape."
  },
  {
    id: 137,
    keywords: ["akatsuki", "jaxa venus mission", "venus climate orbiter"],
    subtopic: "space missions",
    answer: "JAXA's Akatsuki (Venus Climate Orbiter) launched in 2010 but failed to enter orbit initially. It succeeded in 2015 and has been studying Venus's atmosphere, including cloud structure, super-rotation, and possible lightning."
  },
  {
    id: 138,
    keywords: ["lunar reconnaissance orbiter", "lro", "moon mapping"],
    subtopic: "space missions",
    answer: "NASA's LRO has been mapping the Moon since 2009, providing high-resolution images, topography, and temperature data. It located Apollo landing sites, identified water ice in polar shadows, and supports future landing site selection."
  },
  {
    id: 139,
    keywords: ["chandrayaan", "chandrayaan-1", "chandrayaan-2", "chandrayaan-3", "india moon mission"],
    subtopic: "space missions",
    answer: "India's Chandrayaan-1 (2008) discovered water molecules on the Moon. Chandrayaan-2 (2019) included an orbiter (still operational) and a lander that crashed. Chandrayaan-3 (2023) successfully landed near the lunar south pole, making India the fourth nation to soft-land on the Moon."
  },
  {
    id: 140,
    keywords: ["tianwen-1", "china mars mission", "zhurong rover"],
    subtopic: "space missions",
    answer: "China's Tianwen-1 mission arrived at Mars in 2021, consisting of an orbiter and the Zhurong rover. Zhurong explored Utopia Planitia, studying Martian geology and climate, and operated for over a year."
  },
  {
    id: 141,
    keywords: ["hope mission", "emirates mars mission", "amal", "mars orbiter"],
    subtopic: "space missions",
    answer: "The UAE's Hope probe (Al-Amal) entered Mars orbit in 2021, studying the Martian atmosphere and weather. It provides a global picture of atmospheric dynamics, including the oxygen and hydrogen escape."
  },
  // PLANETS - Additional details
  {
    id: 142,
    keywords: ["jupiter moons", "galilean moons", "io", "europa", "ganymede", "callisto"],
    subtopic: "planets",
    answer: "Jupiter's four largest moons (Galilean) are Io (volcanic), Europa (icy, subsurface ocean), Ganymede (largest moon, magnetic field), and Callisto (heavily cratered). Europa and Ganymede are prime targets in the search for life. The JUICE and Europa Clipper missions will study them."
  },
  {
    id: 143,
    keywords: ["europa ocean", "europa subsurface ocean", "life on europa"],
    subtopic: "planets",
    answer: "Europa likely harbors a global subsurface ocean of liquid water beneath its icy crust, kept warm by tidal heating. Its ocean may contain twice the water of Earth's oceans. Future missions like Europa Clipper will investigate its habitability."
  },
  {
    id: 144,
    keywords: ["ganymede moon", "largest moon", "ganymede magnetic field"],
    subtopic: "planets",
    answer: "Ganymede is the largest moon in the solar system, bigger than Mercury. It's the only moon with its own magnetic field, likely generated by a liquid iron core. It has an icy surface with grooves and dark terrains, and possibly a subsurface ocean."
  },
  {
    id: 145,
    keywords: ["io volcanoes", "io volcanism", "most volcanic body"],
    subtopic: "planets",
    answer: "Io is the most volcanically active body in the solar system, with hundreds of volcanoes erupting lava and plumes. Its surface is covered in sulfur and sulfur dioxide, colored yellow, red, and white. Tidal heating from Jupiter's gravity powers this activity."
  },
  {
    id: 146,
    keywords: ["saturn moons", "titan", "enceladus", "mimas", "rhea", "iapetus"],
    subtopic: "planets",
    answer: "Saturn has 146 known moons. Titan has a thick atmosphere and methane lakes. Enceladus has water-ice geysers from a subsurface ocean. Mimas has a huge crater making it look like the Death Star. Iapetus has a two-tone coloring. Rhea and Dione may have faint rings."
  },
  {
    id: 147,
    keywords: ["titan lakes", "methane lakes", "titan atmosphere", "huygens probe"],
    subtopic: "planets",
    answer: "Titan, Saturn's largest moon, has a thick nitrogen atmosphere with methane clouds. It has stable lakes and seas of liquid methane/ethane at the poles. The Huygens probe landed on Titan in 2005, revealing a cold, Earth-like landscape with rivers and erosion."
  },
  {
    id: 148,
    keywords: ["enceladus geysers", "enceladus ocean", "cryovolcanism"],
    subtopic: "planets",
    answer: "Enceladus ejects plumes of water vapor and ice grains from its south pole, sampled by Cassini. The plumes originate from a global subsurface ocean, making Enceladus a top candidate for life. Organic molecules have been detected in the plumes."
  },
  {
    id: 149,
    keywords: ["uranus moons", "miranda", "ariel", "umbriel", "titania", "oberon"],
    subtopic: "planets",
    answer: "Uranus has 28 known moons, named after Shakespearean characters. Miranda has extreme terrain with giant canyons. Ariel has the brightest surface. Umbriel is dark. Titania and Oberon are the largest, with possible subsurface oceans."
  },
  {
    id: 150,
    keywords: ["neptune moons", "triton", "proteus", "nereid"],
    subtopic: "planets",
    answer: "Neptune has 16 known moons. Triton, its largest, is captured from the Kuiper Belt and has geysers of nitrogen. It orbits retrograde. Proteus is irregularly shaped and heavily cratered. Nereid has a highly eccentric orbit."
  },
  {
    id: 151,
    keywords: ["venus surface", "venus volcanoes", "venus atmosphere", "runaway greenhouse"],
    subtopic: "planets",
    answer: "Venus has a hellish surface with temperatures hot enough to melt lead, pressure 90 times Earth's, and clouds of sulfuric acid. It has thousands of volcanoes, vast lava plains, and highland regions. Its thick CO2 atmosphere causes a runaway greenhouse effect."
  },
  {
    id: 152,
    keywords: ["mercury surface", "mercury temperature", "mercury core", "messenger mission"],
    subtopic: "planets",
    answer: "Mercury's surface is heavily cratered, resembling the Moon. It has a large iron core (60% of its mass), generating a weak magnetic field. Temperatures swing wildly. NASA's MESSENGER mission mapped its surface and found water ice in permanently shadowed craters."
  },
  // ASTRONAUTS - Additional
  {
    id: 153,
    keywords: ["first american in space", "alan shepard", "mercury program"],
    subtopic: "astronauts",
    answer: "Alan Shepard became the first American in space on May 5, 1961, aboard Freedom 7, a 15-minute suborbital flight. He later walked on the Moon on Apollo 14."
  },
  {
    id: 154,
    keywords: ["first spacewalk", "alexei leonov", "extravehicular activity"],
    subtopic: "astronauts",
    answer: "Alexei Leonov performed the first spacewalk on March 18, 1965, lasting 12 minutes. His spacesuit inflated, making it difficult to re-enter the capsule. Ed White made the first American spacewalk later that year."
  },
  {
    id: 155,
    keywords: ["first woman spacewalk", "svetlana savitskaya", "kathryn sullivan"],
    subtopic: "astronauts",
    answer: "Svetlana Savitskaya was the first woman to spacewalk (1984). Kathryn Sullivan was the first American woman to spacewalk (1984). In 2018, an all-female spacewalk (Christina Koch and Jessica Meir) was conducted."
  },
  {
    id: 156,
    keywords: ["space shuttle astronauts", "space shuttle program", "sts"],
    subtopic: "astronauts",
    answer: "The Space Shuttle program (1981-2011) flew 135 missions, carrying astronauts to deploy satellites, service Hubble, and build the ISS. Notable astronauts include Sally Ride (first US woman), Guion Bluford (first African American), and John Young (six flights)."
  },
  {
    id: 157,
    keywords: ["astronaut training", "how to become an astronaut", "astronaut requirements"],
    subtopic: "astronauts",
    answer: "Astronaut candidates typically need a STEM degree, relevant experience, and passing rigorous physical and psychological tests. Training includes survival skills, spacecraft systems, spacewalk practice in neutral buoyancy labs, and Russian language for ISS."
  },
  {
    id: 158,
    keywords: ["space food", "eating in space", "astronaut meals"],
    subtopic: "astronauts",
    answer: "Space food has evolved from tubes and cubes to thermostabilized pouches and fresh produce on ISS. Foods are often dehydrated or packaged to prevent crumbs. Astronauts can heat meals and eat with utensils; tortillas replace bread. Fresh fruit is occasionally delivered."
  },
  {
    id: 159,
    keywords: ["health effects of space", "space medicine", "bone loss in space", "radiation risks"],
    subtopic: "astronauts",
    answer: "Space causes bone density loss, muscle atrophy, fluid shifts, vision changes, and increased cancer risk from radiation. Astronauts exercise daily to counteract some effects. Research on ISS helps develop countermeasures for long-duration missions."
  },
  {
    id: 160,
    keywords: ["space archaeology", "astronaut artifacts", "space heritage"],
    subtopic: "astronauts",
    answer: "Space archaeology studies human artifacts in space, like spacecraft, landing sites, and discarded items. The Apollo sites are considered heritage sites. Archaeologists are also studying ISS crew quarters and equipment to understand how humans adapt to space."
  },
  // COMMERCIAL SPACE - Additional
  {
    id: 161,
    keywords: ["spacex starship", "starship test", "mars rocket"],
    subtopic: "commercial space",
    answer: "SpaceX's Starship is a fully reusable super heavy-lift rocket designed for missions to the Moon, Mars, and beyond. It consists of the Super Heavy booster and Starship spacecraft. Test flights began in 2023, aiming for rapid reusability and high payload capacity."
  },
  {
    id: 162,
    keywords: ["falcon 9", "falcon heavy", "spacex reusable rocket"],
    subtopic: "commercial space",
    answer: "Falcon 9 is a partially reusable rocket that has launched over 200 missions. Falcon Heavy is a heavy-lift variant with three boosters, capable of lifting large payloads. Both have significantly lowered launch costs."
  },
  {
    id: 163,
    keywords: ["boeing starliner", "cst-100", "commercial crew"],
    subtopic: "commercial space",
    answer: "Boeing's Starliner is a reusable spacecraft designed to carry astronauts to the ISS under NASA's Commercial Crew program. After test flight issues, it completed a successful uncrewed test in 2022 and is preparing for crewed flights."
  },
  {
    id: 164,
    keywords: ["virgin galactic", "spaceshiptwo", "space tourism flights"],
    subtopic: "commercial space",
    answer: "Virgin Galactic offers suborbital space tourism flights aboard SpaceShipTwo, which is air-launched. Passengers experience a few minutes of weightlessness and see Earth from the edge of space. Richard Branson flew on the first fully crewed test in 2021."
  },
  {
    id: 165,
    keywords: ["blue origin new shepard", "new shepard flight", "suborbital tourism"],
    subtopic: "commercial space",
    answer: "Blue Origin's New Shepard is a reusable suborbital rocket that carries passengers to over 100 km altitude. It has flown multiple crewed missions, including Jeff Bezos in 2021. The capsule lands under parachutes, the booster returns to Earth."
  },
  {
    id: 166,
    keywords: ["sierra space", "dream chaser", "spaceplane"],
    subtopic: "commercial space",
    answer: "Sierra Space's Dream Chaser is a reusable spaceplane designed to deliver cargo to the ISS (and eventually crew). It launches vertically and lands on runways, similar to the Space Shuttle. Its first flight is expected soon."
  },
  {
    id: 167,
    keywords: ["axiom space", "private astronaut missions", "axiom station"],
    subtopic: "commercial space",
    answer: "Axiom Space organizes private astronaut missions to the ISS and plans to build its own commercial space station. Axiom Mission 1 (2022) was the first all-private mission. They are also developing new spacesuits for NASA."
  },
  // FUTURE EXPLORATION
  {
    id: 168,
    keywords: ["moon base", "lunar outpost", "international lunar research station"],
    subtopic: "future exploration",
    answer: "Several nations and companies plan lunar bases. NASA's Artemis Base Camp includes a cabin, rover, and power system. China and Russia are developing the International Lunar Research Station (ILRS) near the south pole. These bases will enable long-term lunar science and resource use."
  },
  {
    id: 169,
    keywords: ["mars colony", "mars city", "mars settlement"],
    subtopic: "future exploration",
    answer: "Concepts for Mars colonies envision domed habitats, underground lava tubes, or 3D-printed structures. SpaceX's Starship could transport settlers. Challenges include radiation, low gravity, and producing food/oxygen. The Mars Society promotes analog missions on Earth."
  },
  {
    id: 170,
    keywords: ["space elevator", "earth space elevator", "tether to space"],
    subtopic: "future exploration",
    answer: "A space elevator would consist of a cable anchored to Earth and extending to geostationary orbit, allowing climbers to transport cargo without rockets. Challenges include materials (carbon nanotubes may work) and avoiding space debris. It remains theoretical."
  },
  {
    id: 171,
    keywords: ["interstellar probe", "breakthrough starshot", "interstellar travel"],
    subtopic: "future exploration",
    answer: "Breakthrough Starshot aims to send tiny laser-sail probes to Alpha Centauri at 20% light speed, reaching it in 20 years. Other concepts include nuclear fusion or antimatter propulsion. Such missions could study exoplanets up close but face immense engineering hurdles."
  },
  {
    id: 172,
    keywords: ["nuclear propulsion", "nuclear thermal rocket", "nuclear electric propulsion"],
    subtopic: "future exploration",
    answer: "Nuclear propulsion could shorten travel times to Mars. Nuclear thermal rockets (NTR) heat hydrogen for thrust; nuclear electric uses reactors to power ion thrusters. NASA's DRACO program aims to demonstrate NTR by 2027."
  },
  {
    id: 173,
    keywords: ["solar sail", "light sail", "sailing on sunlight"],
    subtopic: "future exploration",
    answer: "Solar sails use photons from the Sun for propulsion, requiring no fuel. The Japanese IKAROS (2010) was the first successful solar sail. NASA's NEA Scout and the upcoming Advanced Composite Solar Sail System test this technology for future missions."
  },
  // COMETS & ASTEROIDS - Additional
  {
    id: 174,
    keywords: ["comet composition", "comet nucleus", "dirty snowball", "comet tail formation"],
    subtopic: "comets",
    answer: "Comets are composed of ice, dust, and rocky material. When near the Sun, ice sublimates, releasing gas and dust, forming a coma and two tails: a dust tail (curved) and an ion tail (straight, pushed by solar wind). The nucleus is typically a few km across."
  },
  {
    id: 175,
    keywords: ["famous comets", "hale-bopp", "comet ison", "comet neowise", "comet mcnaught"],
    subtopic: "comets",
    answer: "Notable comets: Hale-Bopp (1997, bright and long-visible), Hyakutake (1996, long ion tail), ISON (2013, disintegrated), NEOWISE (2020, naked-eye), McNaught (2007, great southern comet). Halley's is the most famous periodic comet."
  },
  {
    id: 176,
    keywords: ["asteroid types", "c-type", "s-type", "m-type", "asteroid classification"],
    subtopic: "asteroids",
    answer: "Asteroids are classified by composition: C-type (carbonaceous, most common), S-type (stony, silicate), M-type (metallic, nickel-iron). These reflect different origins and histories. The asteroid belt contains all types."
  },
  {
    id: 177,
    keywords: ["asteroid impact", "dinosaurs extinction", "chicxulub", "impact event"],
    subtopic: "asteroids",
    answer: "A large asteroid impact 66 million years ago (Chicxulub crater) caused the Cretaceous-Paleogene extinction, killing 75% of species including non-avian dinosaurs. Impact events have shaped Earth's history and remain a potential threat."
  },
  {
    id: 178,
    keywords: ["planetary defense", "nea monitoring", "sentinel system", "atlas"],
    subtopic: "asteroids",
    answer: "Planetary defense involves detecting and mitigating asteroid threats. NASA's DART mission tested deflection. Surveys like Pan-STARRS, ATLAS, and the upcoming NEO Surveyor aim to catalog 90% of near-Earth objects larger than 140 m."
  },
  {
    id: 179,
    keywords: ["lucy mission", "trojan asteroids", "jupiter trojans"],
    subtopic: "asteroids",
    answer: "NASA's Lucy mission, launched in 2021, will fly by several Jupiter Trojan asteroids (2027-2033), which share Jupiter's orbit. These primitive bodies may hold clues to the solar system's formation."
  },
  {
    id: 180,
    keywords: ["psyche mission", "16 psyche", "metal asteroid"],
    subtopic: "asteroids",
    answer: "NASA's Psyche mission, launching in 2023, will orbit the metal-rich asteroid 16 Psyche, thought to be the exposed core of a protoplanet. It will help understand planetary cores and the formation of terrestrial planets."
  },
  // NEUTRON STARS & PULSARS - Additional
  {
    id: 181,
    keywords: ["neutron star formation", "core collapse supernova", "neutron star properties"],
    subtopic: "neutron stars",
    answer: "Neutron stars form when a massive star's core collapses, crushing protons and electrons into neutrons. They are incredibly dense (a sugar-cube mass of billions of tons), have strong magnetic fields, and spin rapidly. They range from 1.1 to 2.3 solar masses."
  },
  {
    id: 182,
    keywords: ["pulsar discovery", "jocelyn bell", "lighthouse effect", "first pulsar"],
    subtopic: "neutron stars",
    answer: "Pulsars were discovered in 1967 by Jocelyn Bell Burnell and Antony Hewish. They emit regular pulses of radiation due to their rotation and misaligned magnetic axis, acting like cosmic lighthouses. The first pulsar was PSR B1919+21."
  },
  {
    id: 183,
    keywords: ["millisecond pulsar", "recycled pulsar", "binary pulsar"],
    subtopic: "neutron stars",
    answer: "Millisecond pulsars spin hundreds of times per second, having been 'spun up' by accreting matter from a companion star. They are extremely stable clocks, used in tests of general relativity and for gravitational wave detection via pulsar timing arrays."
  },
  {
    id: 184,
    keywords: ["magnetar properties", "soft gamma repeater", "anomalous x-ray pulsar", "starquakes"],
    subtopic: "neutron stars",
    answer: "Magnetars are neutron stars with ultra-strong magnetic fields (10^15 Gauss). They erupt with bursts of X-rays and gamma rays due to starquakes. They are responsible for some gamma-ray bursts and soft gamma repeaters. The most famous is SGR 1806-20."
  },
  {
    id: 185,
    keywords: ["gravitational waves from neutron stars", "gw170817", "kilonova"],
    subtopic: "neutron stars",
    answer: "In 2017, LIGO and Virgo detected gravitational waves from two neutron stars merging (GW170817). This event was also seen across the electromagnetic spectrum, including a kilonova (producing heavy elements like gold and platinum)."
  },
  // SUPERNOVAE - Additional
  {
    id: 186,
    keywords: ["type ia supernova", "white dwarf supernova", "standard candle"],
    subtopic: "stars",
    answer: "Type Ia supernovae occur when a white dwarf in a binary system accretes enough mass to reach the Chandrasekhar limit (1.4 solar masses), triggering a thermonuclear explosion. They have consistent peak brightness, making them 'standard candles' for measuring cosmic distances."
  },
  {
    id: 187,
    keywords: ["type ii supernova", "core collapse supernova", "massive star death"],
    subtopic: "stars",
    answer: "Type II supernovae result from the core collapse of massive stars (>8 solar masses). They show hydrogen lines in their spectra. The explosion leaves behind a neutron star or black hole. SN 1987A is a well-studied example."
  },
  {
    id: 188,
    keywords: ["supernova 1987a", "sn1987a", "large magellanic cloud supernova"],
    subtopic: "stars",
    answer: "SN 1987A, in the Large Magellanic Cloud, was the closest supernova observed since 1604. It was visible to the naked eye and studied extensively, providing insights into stellar evolution, neutrino emission, and supernova remnants."
  },
  {
    id: 189,
    keywords: ["supernova remnants", "crab nebula", "cassiopeia a", "veil nebula"],
    subtopic: "stars",
    answer: "Supernova remnants are expanding shells of gas and dust from the explosion. Famous examples: Crab Nebula (from 1054 AD, contains a pulsar), Cassiopeia A (youngest in Milky Way), and Veil Nebula (Cygnus Loop)."
  },
  {
    id: 190,
    keywords: ["stellar nucleosynthesis", "elements in supernovae", "origin of elements"],
    subtopic: "stars",
    answer: "Supernovae forge elements heavier than iron through rapid neutron capture (r-process). They scatter these elements into space, enriching the interstellar medium. Earth's gold, platinum, and uranium came from ancient supernovae."
  },
  // SPACE WEATHER - Additional
  {
    id: 191,
    keywords: ["geomagnetic storm effects", "power grid failure", "satellite damage", "carrington event"],
    subtopic: "space weather",
    answer: "Strong geomagnetic storms can induce currents in power lines, causing blackouts (e.g., Quebec 1989). They can damage satellites, disrupt GPS and radio communications, and pose radiation risks to astronauts. The Carrington Event (1859) was the most intense on record."
  },
  {
    id: 192,
    keywords: ["aurora borealis", "northern lights", "aurora australis", "southern lights"],
    subtopic: "space weather",
    answer: "Auroras are caused by solar wind particles colliding with Earth's atmosphere, exciting oxygen (green, red) and nitrogen (blue, purple). They occur in ovals around the magnetic poles. Auroras are most common during high solar activity."
  },
  {
    id: 193,
    keywords: ["solar energetic particles", "sep", "radiation storms"],
    subtopic: "space weather",
    answer: "Solar energetic particles (SEPs) are high-energy protons and ions accelerated by solar flares or shocks. They can penetrate spacecraft and pose health risks to astronauts. Forecasting SEP events is crucial for deep-space missions."
  },
  {
    id: 194,
    keywords: ["space weather prediction", "noaa swpc", "space weather forecasting"],
    subtopic: "space weather",
    answer: "Space weather is predicted using solar observations (e.g., SOHO, SDO) and models. NOAA's Space Weather Prediction Center issues alerts for flares, CMEs, and geomagnetic storms, helping protect infrastructure and astronauts."
  },
  // LIGHT & DISTANCE - Additional
  {
    id: 195,
    keywords: ["astronomical unit", "au", "earth sun distance"],
    subtopic: "distances",
    answer: "An astronomical unit (AU) is the average distance from Earth to the Sun, about 150 million km (93 million miles). It's used for distances within the solar system. For example, Jupiter is 5.2 AU from the Sun."
  },
  {
    id: 196,
    keywords: ["parsec", "parallax second", "distance unit", "kiloparsec", "megaparsec"],
    subtopic: "distances",
    answer: "A parsec is about 3.26 light-years, based on parallax of one arcsecond. It's commonly used in astronomy. The Milky Way is about 30 kiloparsecs across; the Andromeda galaxy is about 780 kiloparsecs away."
  },
  {
    id: 197,
    keywords: ["cosmic distance ladder", "distance measurement", "parallax", "cepheid", "supernova"],
    subtopic: "distances",
    answer: "The cosmic distance ladder uses overlapping techniques: radar (solar system), parallax (nearby stars), Cepheid variables (galaxies), Type Ia supernovae (distant galaxies), and redshift (very distant). Each rung calibrates the next."
  },
  // DWARF PLANETS - Additional
  {
    id: 198,
    keywords: ["ceres", "dwarf planet in asteroid belt", "occator crater"],
    subtopic: "dwarf planets",
    answer: "Ceres is the largest object in the asteroid belt and a dwarf planet. It has a subsurface brine reservoir and cryovolcanoes. Dawn mission revealed bright salt deposits (faculae) in Occator Crater, formed by recent geological activity."
  },
  {
    id: 199,
    keywords: ["eris", "dysnomia", "scattered disk", "kuiper belt object"],
    subtopic: "dwarf planets",
    answer: "Eris is the most massive dwarf planet, slightly smaller than Pluto but denser. Its discovery in 2005 led to Pluto's reclassification. It has one moon, Dysnomia, and orbits far beyond Pluto in the scattered disk."
  },
  {
    id: 200,
    keywords: ["makemake", "kuiper belt dwarf planet", "makemake moon"],
    subtopic: "dwarf planets",
    answer: "Makemake is a dwarf planet in the Kuiper Belt, about two-thirds the size of Pluto. It has one known moon, MK2. Its surface is covered in methane, ethane, and possibly nitrogen ice."
  },
  {
    id: 201,
    keywords: ["haumea", "elongated dwarf planet", "haumea rings", "haumea moons"],
    subtopic: "dwarf planets",
    answer: "Haumea is a dwarf planet shaped like an elongated ellipsoid due to rapid rotation. It has two moons (Hiʻiaka, Namaka) and a ring system. Its surface is covered in water ice. It resides in the Kuiper Belt."
  },
  // WORMHOLES & THEORETICAL
  {
    id: 202,
    keywords: ["traversable wormhole", "exotic matter", "negative energy"],
    subtopic: "theoretical physics",
    answer: "For a wormhole to be traversable, it must be held open by exotic matter with negative energy density, which repels gravity. Such matter hasn't been found. Some theories suggest quantum effects might allow microscopic wormholes, but macroscopic ones remain speculative."
  },
  {
    id: 203,
    keywords: ["time travel through wormholes", "closed timelike curves", "grandfather paradox"],
    subtopic: "theoretical physics",
    answer: "Wormholes might theoretically allow time travel if one mouth is moved relative to the other, creating a time difference. This leads to paradoxes like the grandfather paradox. Many physicists believe time travel is impossible due to causality constraints."
  },
  // ASTROBIOLOGY - Additional
  {
    id: 204,
    keywords: ["extremophiles", "life in extreme environments", "tardigrade", "thermophiles"],
    subtopic: "astrobiology",
    answer: "Extremophiles are organisms thriving in extreme conditions on Earth: hot springs (thermophiles), deep ocean vents (hyperthermophiles), acidic lakes (acidophiles), and Antarctic ice (psychrophiles). They expand the possibilities for life elsewhere."
  },
  {
    id: 205,
    keywords: ["biosignatures", "signs of life", "oxygen", "methane", "chlorophyll"],
    subtopic: "astrobiology",
    answer: "Biosignatures are substances or patterns that indicate past or present life. Examples include atmospheric gases like oxygen and methane in disequilibrium, pigments like chlorophyll, and specific isotopic ratios. JWST and future telescopes will search for these on exoplanets."
  },
  {
    id: 206,
    keywords: ["panspermia", "life from space", "seeding life"],
    subtopic: "astrobiology",
    answer: "Panspermia proposes that life could spread between planets or star systems via meteoroids, comets, or spacecraft. Lithopanspermia suggests microbes could survive inside rocks ejected by impacts. It's a speculative but possible mechanism for life's origin."
  },
  {
    id: 207,
    keywords: ["rare earth hypothesis", "complex life rare", "great filter"],
    subtopic: "astrobiology",
    answer: "The Rare Earth hypothesis argues that complex life (like animals) is extremely rare due to a combination of factors: galactic habitable zone, planetary system architecture, plate tectonics, large moon, etc. It's one explanation for the Fermi Paradox."
  },
  {
    id: 208,
    keywords: ["seti", "search for extraterrestrial intelligence", "radio signals", "technosignatures"],
    subtopic: "astrobiology",
    answer: "SETI searches for signals from intelligent civilizations using radio telescopes and optical surveys. The Breakthrough Listen initiative is the most comprehensive search. Technosignatures could also include artificial structures or pollution in exoplanet atmospheres."
  },
  {
    id: 209,
    keywords: ["drake equation", "number of civilizations", "frank drake"],
    subtopic: "astrobiology",
    answer: "The Drake Equation estimates the number of communicating civilizations in the Milky Way: N = R* × fp × ne × fl × fi × fc × L. Values are uncertain, but it frames the discussion. Estimates range from few to many."
  },
  // SPACE SUITS - Additional
  {
    id: 210,
    keywords: ["spacesuit history", "early spacesuits", "mercury suit", "apollo suit", "space shuttle suit"],
    subtopic: "technology",
    answer: "Early suits (Mercury, Gemini) were modified pressure suits. Apollo suits allowed moonwalks. Space shuttle suits (ACES) were for launch/reentry; EMU suits for spacewalks. Each generation improved mobility, life support, and durability."
  },
  {
    id: 211,
    keywords: ["spacesuit components", "primary life support system", "plss", "hard upper torso"],
    subtopic: "technology",
    answer: "A spacesuit has multiple layers: inner cooling garment, pressure bladder, restraint layer, thermal micrometeoroid garment. The PLSS provides oxygen, removes CO2, regulates temperature, and monitors systems. Helmets have gold-coated visors for UV protection."
  },
  {
    id: 212,
    keywords: ["future spacesuits", "axemu", "xemu", "spacex suit"],
    subtopic: "technology",
    answer: "NASA's next-generation suits (AxEMU for Moon, xEMU for ISS) are more flexible and modular. SpaceX's IVA suit is for launch/reentry. These suits incorporate modern materials, improved mobility, and advanced life support for Artemis and beyond."
  },
  // ROCKET SCIENCE - Additional
  {
    id: 213,
    keywords: ["rocket stages", "multistage rocket", "stage separation", "boosters"],
    subtopic: "technology",
    answer: "Most rockets are multistage to shed weight. The first stage (boosters) lifts the rocket off the ground. The second stage continues to orbit. Some rockets (like Falcon 9) reuse the first stage. The Saturn V had three stages."
  },
  {
    id: 214,
    keywords: ["rocket propellants", "liquid fuel", "solid fuel", "hybrid rocket"],
    subtopic: "technology",
    answer: "Liquid rockets use fuel (e.g., kerosene, hydrogen, methane) and oxidizer (liquid oxygen). Solids have fuel and oxidizer mixed. Hybrids use a solid fuel and liquid oxidizer. Each has trade-offs in performance, safety, and reusability."
  },
  {
    id: 215,
    keywords: ["ion thruster", "electric propulsion", "hall effect thruster", "xenon"],
    subtopic: "technology",
    answer: "Ion thrusters use electric fields to accelerate ions (usually xenon) to high speeds, providing low thrust but high efficiency. They are used for deep-space missions like Dawn and Hayabusa. Future missions may use more powerful versions."
  },
  {
    id: 216,
    keywords: ["launch sites", "cape canaveral", "baikonur", "kourou", "vandenberg", "jiuquan"],
    subtopic: "technology",
    answer: "Major launch sites: Cape Canaveral (USA), Baikonur (Kazakhstan, leased by Russia), Kourou (French Guiana, ESA), Vandenberg (USA, polar orbits), Jiuquan (China), Sriharikota (India). Location affects orbital inclination and safety."
  },
  // SPACE DEBRIS - Additional
  {
    id: 217,
    keywords: ["space debris tracking", "space surveillance network", "radar tracking debris"],
    subtopic: "space environment",
    answer: "The US Space Surveillance Network tracks over 27,000 objects >10 cm. Radar and optical telescopes monitor debris. Smaller debris is too numerous to track but poses risks. Conjunction alerts warn satellite operators to maneuver."
  },
  {
    id: 218,
    keywords: ["space debris mitigation", "debris removal", "clean space", "clearspace", "elrod"],
    subtopic: "space environment",
    answer: "Mitigation includes designing satellites to deorbit within 25 years, passivating rocket stages, and avoiding collisions. Active debris removal concepts like ClearSpace-1 (ESA) and ELROd (Japan) aim to capture and deorbit large debris."
  },
  {
    id: 219,
    keywords: ["kessler syndrome", "cascade collisions", "orbital debris runaway"],
    subtopic: "space environment",
    answer: "Kessler Syndrome describes a scenario where debris collisions generate more debris, leading to an exponential increase and making some orbits unusable. It was proposed by NASA's Donald Kessler. Prevention and active removal are critical to avoid it."
  },
  // CONSTELLATIONS - Additional
  {
    id: 220,
    keywords: ["orion constellation", "orion hunter", "betelgeuse", "rigel"],
    subtopic: "astronomy basics",
    answer: "Orion is prominent in winter (Northern Hemisphere). Its stars include Betelgeuse (red supergiant, variable), Rigel (blue supergiant), and the Orion Nebula (M42). The three stars of Orion's belt are a celestial landmark."
  },
  {
    id: 221,
    keywords: ["ursa major", "big dipper", "great bear"],
    subtopic: "astronomy basics",
    answer: "Ursa Major (Great Bear) contains the Big Dipper asterism, useful for finding Polaris (North Star) via the pointer stars Dubhe and Merak. It is visible year-round in northern latitudes."
  },
  {
    id: 222,
    keywords: ["zodiac constellations", "astrological signs", "ecliptic constellations"],
    subtopic: "astronomy basics",
    answer: "The zodiac constellations lie along the ecliptic (Sun's path). There are 12 (or 13, including Ophiuchus) used in astrology. Astronomically, they mark the Sun's apparent position through the year."
  },
  {
    id: 223,
    keywords: ["southern cross", "crux", "southern hemisphere navigation"],
    subtopic: "astronomy basics",
    answer: "Crux (Southern Cross) is the smallest constellation but iconic in the southern hemisphere. Its long axis points toward the South Celestial Pole. It features the Jewel Box star cluster and the Coalsack Nebula."
  },
  // TELESCOPE BASICS - Additional
  {
    id: 224,
    keywords: ["radio telescopes", "arecibo", "fast", "very large array", "vla"],
    subtopic: "telescopes",
    answer: "Radio telescopes detect radio waves from space. They often consist of large dishes or arrays. Examples: Arecibo (collapsed), FAST (China's 500m), VLA (27 dishes in New Mexico), ALMA (millimeter/submillimeter array)."
  },
  {
    id: 225,
    keywords: ["space telescopes", "chandra", "x-ray astronomy", "fermi", "spitzer", "tess"],
    subtopic: "telescopes",
    answer: "Besides Hubble and JWST, other space telescopes cover different wavelengths: Chandra (X-ray), Fermi (gamma-ray), Spitzer (infrared, retired), TESS (exoplanet transit), Kepler (exoplanet, retired), and many more."
  },
  {
    id: 226,
    keywords: ["observatories", "mauna kea", "cerro paranal", "la silla", "keck"],
    subtopic: "telescopes",
    answer: "Major ground-based observatories are located in high, dry sites: Mauna Kea (Hawaii, Keck, Subaru, Gemini), Cerro Paranal (Chile, VLT), La Silla (Chile), and Roque de los Muchachos (Canary Islands)."
  },
  {
    id: 227,
    keywords: ["adaptive optics", "correcting atmospheric blur", "laser guide star"],
    subtopic: "telescopes",
    answer: "Adaptive optics uses deformable mirrors to correct atmospheric turbulence in real time. A laser guide star creates an artificial reference for measuring distortion. It enables ground-based telescopes to achieve near-space clarity."
  },
  // SOLAR SYSTEM FORMATION - Additional
  {
    id: 228,
    keywords: ["protoplanetary disk", "planet formation", "accretion", "proplyd"],
    subtopic: "solar system",
    answer: "Planets form in protoplanetary disks of gas and dust around young stars. Dust grains stick together, forming planetesimals, then protoplanets. Gas giants form by accreting gas before the disk dissipates. The process takes millions of years."
  },
  {
    id: 229,
    keywords: ["planet migration", "grand tack", "nice model", "late heavy bombardment"],
    subtopic: "solar system",
    answer: "Planets likely migrated early in solar system history. The Grand Tack hypothesis explains the small Mars by Jupiter's inward then outward migration. The Nice model explains the Late Heavy Bombardment by outer planet instability."
  },
  {
    id: 230,
    keywords: ["late heavy bombardment", "lunar cataclysm", "impact spike"],
    subtopic: "solar system",
    answer: "The Late Heavy Bombardment (LHB) is a hypothesized spike in impact rates about 4.1–3.8 billion years ago, possibly caused by giant planet migration. It left scars on the Moon and may have affected life's origins."
  },
  // GRAVITATIONAL WAVES
  {
    id: 231,
    keywords: ["gravitational waves", "einstein's prediction", "ripples in spacetime"],
    subtopic: "physics",
    answer: "Gravitational waves are ripples in spacetime caused by accelerating massive objects, predicted by Einstein in 1916. They were first directly detected by LIGO in 2015 from a black hole merger. They open a new way to observe the universe."
  },
  {
    id: 232,
    keywords: ["ligo", "virgo", "kagra", "gravitational wave detectors"],
    subtopic: "physics",
    answer: "LIGO (USA), Virgo (Italy), and KAGRA (Japan) are ground-based interferometers detecting gravitational waves. They use laser beams in long vacuum tunnels to measure minuscule spacetime distortions from cosmic events."
  },
  {
    id: 233,
    keywords: ["gravitational wave sources", "bh mergers", "ns mergers", "supernovae"],
    subtopic: "physics",
    answer: "Sources of gravitational waves include merging black holes, neutron stars, supernovae, and possibly cosmic strings. LIGO has detected dozens of binary black hole mergers and a few neutron star mergers. Future detectors may see more."
  },
  {
    id: 234,
    keywords: ["pulsar timing arrays", "nanohertz gravitational waves", "ngwbg"],
    subtopic: "physics",
    answer: "Pulsar timing arrays (e.g., NANOGrav, EPTA, PPTA) use millisecond pulsars as cosmic clocks to detect very low-frequency gravitational waves, likely from supermassive black hole binaries. In 2023, evidence for a gravitational wave background was announced."
  },
  {
    id: 235,
    keywords: ["lisa", "laser interferometer space antenna", "space gravitational wave observatory"],
    subtopic: "physics",
    answer: "LISA is a future ESA/NASA space mission to detect gravitational waves from sources like white dwarf binaries, massive black hole mergers, and extreme mass-ratio inspirals. It will consist of three spacecraft in heliocentric orbit."
  },
  // COSMIC RAYS
  {
    id: 236,
    keywords: ["cosmic rays", "high-energy particles", "galactic cosmic rays"],
    subtopic: "astrophysics",
    answer: "Cosmic rays are high-energy particles (protons, nuclei) from space, originating from supernovae, active galactic nuclei, and the Sun. They constantly bombard Earth's atmosphere, creating secondary particles. They pose radiation risks for astronauts."
  },
  {
    id: 237,
    keywords: ["cosmic ray detection", "auger observatory", "telescope array", "ams-02"],
    subtopic: "astrophysics",
    answer: "Cosmic rays are detected by ground-based arrays (like Pierre Auger Observatory) measuring air showers, and space-based instruments (AMS-02 on ISS). The highest-energy cosmic rays are extremely rare."
  },
  // MAGNETARS (more)
  {
    id: 238,
    keywords: ["soft gamma repeater", "sgr 1806-20", "giant flare"],
    subtopic: "neutron stars",
    answer: "Soft gamma repeaters (SGRs) are magnetars that emit sporadic bursts of gamma rays and X-rays. In 2004, SGR 1806-20 produced the brightest event ever recorded from beyond the solar system, briefly outshining the full moon in gamma rays."
  },
  // STELLAR EVOLUTION
  {
    id: 239,
    keywords: ["stellar evolution", "life cycle of stars", "star birth", "star death"],
    subtopic: "stars",
    answer: "Stars evolve over millions to billions of years. They form in molecular clouds, fuse hydrogen on the main sequence, then become red giants (or supergiants), ending as white dwarfs, neutron stars, or black holes depending on mass."
  },
  {
    id: 240,
    keywords: ["stellar classification", "obafgkm", "spectral types", "herzsprung russell diagram"],
    subtopic: "stars",
    answer: "Stars are classified by spectral type: O (hottest, blue), B, A, F, G (like Sun), K, M (coolest, red). The HR diagram plots luminosity vs temperature, showing main sequence, giants, and white dwarfs."
  },
  {
    id: 241,
    keywords: ["brown dwarf", "failed star", "substellar object"],
    subtopic: "stars",
    answer: "Brown dwarfs are objects too massive to be planets but not massive enough to fuse hydrogen (13–75 Jupiter masses). They fuse deuterium briefly and emit infrared light. They blur the line between stars and planets."
  },
  {
    id: 242,
    keywords: ["red giant", "asymptotic giant branch", "planetary nebula"],
    subtopic: "stars",
    answer: "When Sun-like stars exhaust hydrogen, they expand into red giants, fusing helium into carbon. Later, they shed their outer layers as planetary nebulae, leaving behind a white dwarf. Betelgeuse is a red supergiant."
  },
  {
    id: 243,
    keywords: ["white dwarf", "degenerate matter", "chandrasekhar limit"],
    subtopic: "stars",
    answer: "White dwarfs are the remnants of Sun-like stars, supported by electron degeneracy pressure. They are incredibly dense (a teaspoon ~ tons). The maximum mass is the Chandrasekhar limit (1.4 solar masses); beyond that, they collapse or explode."
  },
  // ROGUE PLANETS
  {
    id: 244,
    keywords: ["rogue planet", "interstellar planet", "free-floating planet"],
    subtopic: "exoplanets",
    answer: "Rogue planets are planets not orbiting a star, either ejected from their system or formed alone. Microlensing surveys suggest they may be common. Some might have subsurface oceans heated by internal radioactivity, possibly hosting life."
  },
  // TIDAL LOCKING
  {
    id: 245,
    keywords: ["tidal locking", "same side always faces", "moon earth", "exoplanet rotation"],
    subtopic: "physics",
    answer: "Tidal locking occurs when a body's rotation matches its orbital period, always showing the same face to its partner. The Moon is tidally locked to Earth. Many close-in exoplanets are likely tidally locked, with permanent day and night sides."
  },
  // PLANETARY RINGS
  {
    id: 246,
    keywords: ["planetary rings", "ring systems", "jupiter rings", "uranus rings", "neptune rings"],
    subtopic: "planets",
    answer: "All giant planets have ring systems. Saturn's are the brightest, made of water ice. Jupiter's are faint dust rings. Uranus has narrow, dark rings. Neptune has incomplete arcs. Rings are dynamic, shaped by shepherd moons."
  },
  // PLANETARY MAGNETOSPHERES
  {
    id: 247,
    keywords: ["magnetosphere", "earth magnetic field", "jupiter magnetosphere", "van allen belts"],
    subtopic: "planets",
    answer: "Magnetospheres are regions dominated by a planet's magnetic field, shielding it from solar wind. Earth's protects life. Jupiter's is enormous and contains intense radiation belts. Mercury has a weak field; Venus and Mars have none."
  },
  // LAGRANGE POINTS
  {
    id: 248,
    keywords: ["lagrange points", "libration points", "l1", "l2", "l3", "l4", "l5"],
    subtopic: "orbital mechanics",
    answer: "Lagrange points are positions where gravitational forces of two large bodies balance, allowing spacecraft to 'park' with minimal fuel. L1 and L2 are used for solar and space observatories (SOHO at L1, JWST at L2). L4 and L5 are stable and contain Trojan asteroids."
  },
  // SPACE LAW
  {
    id: 249,
    keywords: ["outer space treaty", "space law", "moon agreement", "space resources"],
    subtopic: "policy",
    answer: "The Outer Space Treaty (1967) is the basis of space law, prohibiting weapons of mass destruction in orbit and claiming celestial bodies for peaceful use. The Moon Agreement (1979) addresses lunar resources but has few signatories. Recent Artemis Accords promote cooperative exploration."
  },
  {
    id: 250,
    keywords: ["space mining", "asteroid mining", "lunar resources", "space property rights"],
    subtopic: "policy",
    answer: "Space mining involves extracting resources from asteroids, the Moon, or Mars. Legal frameworks are evolving; the US and Luxembourg have passed laws allowing private ownership of extracted resources. The issue remains debated internationally."
  },
  // FAMOUS ASTRONOMERS
  {
    id: 251,
    keywords: ["galileo galilei", "telescope observations", "jupiter moons", "heliocentrism"],
    subtopic: "history",
    answer: "Galileo Galilei (1564-1642) improved the telescope, discovered Jupiter's moons, Venus' phases, and sunspots, supporting Copernican heliocentrism. His work faced Church opposition, and he was placed under house arrest."
  },
  {
    id: 252,
    keywords: ["johannes kepler", "kepler's laws", "planetary motion"],
    subtopic: "history",
    answer: "Johannes Kepler (1571-1630) formulated three laws of planetary motion based on Tycho Brahe's data: elliptical orbits, equal areas in equal times, and the relationship between orbital period and distance. They were crucial for Newton's gravity."
  },
  {
    id: 253,
    keywords: ["isaac newton", "gravity", "principia", "universal gravitation"],
    subtopic: "history",
    answer: "Isaac Newton (1643-1727) formulated the law of universal gravitation and laws of motion, explaining Kepler's laws. His work unified celestial and terrestrial mechanics, laying the foundation for classical physics."
  },
  {
    id: 254,
    keywords: ["albert einstein", "relativity", "e=mc^2", "general relativity"],
    subtopic: "history",
    answer: "Albert Einstein (1879-1955) revolutionized physics with special and general relativity. General relativity describes gravity as spacetime curvature, explaining Mercury's orbit, gravitational lensing, and predicting black holes and gravitational waves."
  },
  {
    id: 255,
    keywords: ["edwin hubble", "expanding universe", "hubble's law", "galaxies"],
    subtopic: "history",
    answer: "Edwin Hubble (1889-1953) discovered that galaxies are moving away from us, with velocity proportional to distance (Hubble's Law), providing evidence for an expanding universe. The Hubble Space Telescope is named after him."
  },
  {
    id: 256,
    keywords: ["carl sagan", "cosmos", "popular science", "pale blue dot"],
    subtopic: "history",
    answer: "Carl Sagan (1934-1996) was an astronomer and science communicator who popularized science through his books and TV series 'Cosmos.' He contributed to planetary science, exobiology, and the search for extraterrestrial intelligence (SETI)."
  },
  {
    id: 257,
    keywords: ["stephen hawking", "hawking radiation", "brief history of time"],
    subtopic: "history",
    answer: "Stephen Hawking (1942-2018) made groundbreaking contributions to cosmology and black hole physics, including Hawking radiation. His book 'A Brief History of Time' became a bestseller, bringing complex ideas to the public."
  },
  // SPACE ART & CULTURE
  {
    id: 258,
    keywords: ["space art", "astronomical art", "chesley bonestell", "space painting"],
    subtopic: "culture",
    answer: "Space art visualizes astronomical scenes and future exploration. Pioneers like Chesley Bonestell inspired public interest. Today, artists like Don Davis and Michael Carroll work with scientists to depict exoplanets and cosmic events."
  },
  {
    id: 259,
    keywords: ["space music", "cosmic sound", "planet suites", "holst", "space oddity"],
    subtopic: "culture",
    answer: "Space has inspired music: Holst's 'The Planets,' David Bowie's 'Space Oddity,' Elton John's 'Rocket Man,' and many film scores. NASA has also recorded 'space sounds' (radio emissions) and collaborated with musicians."
  },
  {
    id: 260,
    keywords: ["space movies", "sci-fi films", "2001 a space odyssey", "interstellar", "apollo 13"],
    subtopic: "culture",
    answer: "Space-themed films range from realistic (Apollo 13, The Right Stuff, First Man) to speculative (2001: A Space Odyssey, Interstellar, Contact, The Martian, Gravity, Arrival). They shape public perception of space exploration."
  },
  {
    id: 261,
    keywords: ["space in literature", "sci-fi books", "asimov", "clarke", "heinlein"],
    subtopic: "culture",
    answer: "Science fiction literature has long explored space. Authors like Arthur C. Clarke (2001), Isaac Asimov (Foundation), Robert Heinlein, and Kim Stanley Robinson (Mars trilogy) have inspired generations of scientists and engineers."
  },
  // MISCELLANEOUS ASTRONOMY FACTS
  {
    id: 262,
    keywords: ["why is the sky blue", "blue sky", "rayleigh scattering"],
    subtopic: "astronomy basics",
    answer: "The sky appears blue because sunlight scatters off air molecules. Blue light (shorter wavelength) scatters more than red. At sunrise/sunset, sunlight passes through more atmosphere, scattering away blue, leaving reds and oranges."
  },
  {
    id: 263,
    keywords: ["why do stars twinkle", "stellar scintillation", "atmospheric distortion"],
    subtopic: "astronomy basics",
    answer: "Stars twinkle because their light passes through Earth's turbulent atmosphere, which bends the light slightly. This causes rapid changes in brightness and position. Planets usually don't twinkle because they appear as disks, averaging out the distortions."
  },
  {
    id: 264,
    keywords: ["shooting stars", "meteor", "meteor shower", "perseids", "geminids"],
    subtopic: "astronomy basics",
    answer: "Shooting stars are meteors—small particles burning up in Earth's atmosphere. Meteor showers occur when Earth passes through debris trails from comets. The Perseids (August) and Geminids (December) are reliable annual showers."
  },
  {
    id: 265,
    keywords: ["solar eclipse", "total solar eclipse", "annular eclipse", "eclipse path"],
    subtopic: "astronomy basics",
    answer: "A solar eclipse occurs when the Moon passes between Earth and Sun, casting a shadow. Total eclipses reveal the Sun's corona. Annular eclipses happen when the Moon is farther, leaving a ring of sunlight. The next total eclipse in the US is in 2024."
  },
  {
    id: 266,
    keywords: ["blue moon", "second full moon in a month", "seasonal blue moon"],
    subtopic: "astronomy basics",
    answer: "A 'Blue Moon' can refer to the second full moon in a calendar month (modern) or the third full moon in a season with four (traditional). The Moon doesn't actually turn blue except in rare atmospheric conditions (e.g., volcanic ash)."
  },
  {
    id: 267,
    keywords: ["supermoon", "perigee full moon", "closest full moon"],
    subtopic: "astronomy basics",
    answer: "A supermoon occurs when a full moon coincides with perigee (closest point in its orbit), appearing slightly larger and brighter than usual. They happen a few times a year and are popular for observation."
  },
  {
    id: 268,
    keywords: ["opposition", "planet at opposition", "best time to view planets"],
    subtopic: "astronomy basics",
    answer: "A planet is at opposition when it's directly opposite the Sun in our sky, rising at sunset and visible all night. This is the best time to observe it, as it's closest to Earth and fully illuminated. Mars opposition occurs about every 26 months."
  },
  {
    id: 269,
    keywords: ["conjunction", "planetary conjunction", "close approach"],
    subtopic: "astronomy basics",
    answer: "A conjunction is when two celestial objects appear close together in the sky. Great conjunctions of Jupiter and Saturn occur every 20 years; the 2020 conjunction was exceptionally close. Conjunctions are visually striking."
  },
  // ADDITIONAL SPACE MISSIONS
  {
    id: 270,
    keywords: ["ulysses mission", "solar polar orbit", "sun's poles"],
    subtopic: "space missions",
    answer: "Ulysses (1990-2009) was a joint ESA/NASA mission to study the Sun's polar regions and solar wind. It used Jupiter's gravity to swing into an orbit over the Sun's poles, providing unique data."
  },
  {
    id: 271,
    keywords: ["spitzer space telescope", "infrared astronomy", "warm mission"],
    subtopic: "space missions",
    answer: "Spitzer (2003-2020) was an infrared space telescope that studied exoplanets, galaxies, star formation, and the solar system. It discovered the largest ring of Saturn and characterized exoplanet atmospheres."
  },
  {
    id: 272,
    keywords: ["fermi gamma-ray space telescope", "gamma-ray astronomy", "gamma-ray bursts"],
    subtopic: "space missions",
    answer: "Fermi (2008-present) observes the gamma-ray sky, detecting gamma-ray bursts, pulsars, and active galaxies. It identified the first gamma-ray pulsar and monitors the Sun during flares."
  },
  {
    id: 273,
    keywords: ["chandra x-ray observatory", "x-ray astronomy", "cxo"],
    subtopic: "space missions",
    answer: "Chandra (1999-present) provides high-resolution X-ray images of black holes, supernova remnants, galaxy clusters, and more. It has revolutionized X-ray astronomy and continues to operate."
  },
  {
    id: 274,
    keywords: ["xmm-newton", "x-ray multi-mirror mission", "esa x-ray"],
    subtopic: "space missions",
    answer: "ESA's XMM-Newton (1999-present) is an X-ray observatory studying cosmic sources. It complements Chandra with larger collecting area and has made discoveries in galaxy clusters, black holes, and supernovae."
  },
  {
    id: 275,
    keywords: ["planet-hunting missions", "corot", "kepler", "tess", "cheops", "plato"],
    subtopic: "space missions",
    answer: "CoRoT (2006-2012) was a pioneer in exoplanet transit detection. Kepler (2009-2018) discovered thousands. TESS (2018-) surveys nearby stars. CHEOPS (2019-) characterizes known exoplanets. PLATO (2026) will find and study Earth-like planets."
  },
  {
    id: 276,
    keywords: ["gaia mission", "gaia star catalog", "milky way mapping"],
    subtopic: "space missions",
    answer: "ESA's Gaia mission (2013-) is creating the most precise 3D map of our galaxy, measuring positions, distances, motions, and properties of nearly 2 billion stars. It's revolutionizing our knowledge of the Milky Way."
  },
  {
    id: 277,
    keywords: ["insight mars lander", "mars seismology", "marsquakes"],
    subtopic: "space missions",
    answer: "NASA's InSight (2018-2022) studied Mars' interior using a seismometer, detecting over 1,300 marsquakes, and a heat probe. It provided the first direct measurements of Mars' crust, mantle, and core."
  },
  {
    id: 278,
    keywords: ["mars reconnaissance orbiter", "mro", "hirise", "mars imaging"],
    subtopic: "space missions",
    answer: "MRO (2006-) has been imaging Mars in high resolution, identifying landing sites, studying climate, and relaying data from rovers. Its HiRISE camera captures stunning details of the Martian surface."
  },
  {
    id: 279,
    keywords: ["mars odyssey", "2001 mars odyssey", "themis"],
    subtopic: "space missions",
    answer: "Mars Odyssey (2001-) is the longest-lived Mars orbiter. It mapped surface minerals, detected hydrogen (indicating water ice), and serves as a communications relay for rovers."
  },
  {
    id: 280,
    keywords: ["mars express", "esa mars mission", "mex"],
    subtopic: "space missions",
    answer: "ESA's Mars Express (2003-) has been orbiting Mars, studying its atmosphere, geology, and subsurface. It discovered water ice at the south pole and methane in the atmosphere (later debated)."
  },
  {
    id: 281,
    keywords: ["juno mission results", "jupiter cyclones", "juno orbit"],
    subtopic: "space missions",
    answer: "Juno has revealed Jupiter's cyclones at the poles, a diluted core, deep atmospheric jets, and auroras. It also studied the Great Red Spot's depth and the planet's gravitational and magnetic fields."
  },
  {
    id: 282,
    keywords: ["cassini discoveries", "saturn rings", "enceladus plumes", "titan lakes"],
    subtopic: "space missions",
    answer: "Cassini's discoveries include the Enceladus plumes, Titan's methane lakes, intricate ring structures, new moons, and the hexagon jet stream at Saturn's north pole. It ended with a 'Grand Finale' plunge."
  },
  {
    id: 283,
    keywords: ["new horizons discoveries", "pluto heart", "arrokoth"],
    subtopic: "space missions",
    answer: "New Horizons revealed Pluto's diverse geology, with nitrogen ice plains (Sputnik Planitia), water ice mountains, and a thin atmosphere. Its flyby of Arrokoth (2019) showed a contact binary, pristine from the early solar system."
  },
  {
    id: 284,
    keywords: ["voyager golden record", "voyager message", "interstellar message"],
    subtopic: "space missions",
    answer: "Both Voyager spacecraft carry a Golden Record with sounds and images of Earth, curated by Carl Sagan. It includes greetings in 55 languages, music, and a map to our solar system, intended for any finder."
  },
  {
    id: 285,
    keywords: ["parker solar probe discoveries", "sun's corona", "switchbacks"],
    subtopic: "space missions",
    answer: "Parker Solar Probe has flown through the Sun's corona, discovering magnetic 'switchbacks' in the solar wind, observing dust-free zones, and helping solve the coronal heating mystery."
  },
  {
    id: 286,
    keywords: ["solar orbiter images", "sun's poles", "solar orbiter first images"],
    subtopic: "space missions",
    answer: "ESA's Solar Orbiter has captured the closest images of the Sun, revealing ubiquitous 'campfires' (small flares) and providing new views of the solar poles, crucial for understanding the magnetic cycle."
  },
  {
    id: 287,
    keywords: ["bepicolombo", "mercury mission", "esa jaxa mercury"],
    subtopic: "space missions",
    answer: "BepiColombo, a joint ESA/JAXA mission launched in 2018, is en route to Mercury (arrival 2025). It will study the planet's composition, magnetic field, and exosphere with two orbiters."
  },
  // STELLAR PHENOMENA
  {
    id: 288,
    keywords: ["gamma ray burst", "grb", "long grb", "short grb"],
    subtopic: "astrophysics",
    answer: "Gamma-ray bursts are the most energetic explosions in the universe. Long GRBs ( >2s) are linked to supernovae of massive stars. Short GRBs ( <2s) are from neutron star mergers. They emit intense gamma rays and afterglows."
  },
  {
    id: 289,
    keywords: ["fast radio burst", "frb", "mysterious radio signals"],
    subtopic: "astrophysics",
    answer: "Fast radio bursts (FRBs) are millisecond-duration radio pulses from distant galaxies. Some repeat, others don't. Origins may include magnetars, neutron star mergers, or alien technology (speculative). The first FRB was discovered in 2007."
  },
  {
    id: 290,
    keywords: ["cosmic inflation evidence", "b-modes", "primordial gravitational waves"],
    subtopic: "cosmology",
    answer: "Inflation predicts primordial gravitational waves that would imprint a specific pattern (B-modes) in the CMB polarization. BICEP2 claimed detection in 2014 but it was later attributed to dust. Future experiments continue searching."
  },
  // TECHNICAL TERMS
  {
    id: 291,
    keywords: ["right ascension", "declination", "celestial coordinates", "equatorial system"],
    subtopic: "astronomy basics",
    answer: "Right ascension (RA) and declination (Dec) are celestial coordinates analogous to longitude and latitude. RA is measured in hours east from the vernal equinox; Dec in degrees north/south of the celestial equator. They fix an object's position on the sky."
  },
  {
    id: 292,
    keywords: ["ecliptic", "sun's path", "zodiac", "plane of solar system"],
    subtopic: "astronomy basics",
    answer: "The ecliptic is the apparent path of the Sun across the sky over a year, caused by Earth's orbit. It passes through the zodiac constellations. The Moon and planets are always near the ecliptic."
  },
  {
    id: 293,
    keywords: ["celestial sphere", "sky dome", "zenith", "nadir", "horizon"],
    subtopic: "astronomy basics",
    answer: "The celestial sphere is an imaginary sphere surrounding Earth, onto which stars appear fixed. The zenith is directly overhead, nadir directly below. The horizon is the visible boundary. As Earth rotates, stars appear to move across the sphere."
  },
  {
    id: 294,
    keywords: ["precession", "earth's wobble", "axial precession", "polaris cycle"],
    subtopic: "astronomy basics",
    answer: "Earth's axis slowly wobbles (precession) over 26,000 years, causing the position of the celestial poles to shift. Currently, Polaris is the North Star; in 13,000 years, Vega will be. It also shifts the equinoxes."
  },
  // MISCELLANEOUS SPACE
  {
    id: 295,
    keywords: ["ozone layer", "atmosphere protection", "uv radiation"],
    subtopic: "Earth",
    answer: "The ozone layer, in Earth's stratosphere, absorbs most of the Sun's harmful ultraviolet radiation. It was depleted by CFCs, leading to the ozone hole. The Montreal Protocol phased out CFCs, and the layer is recovering."
  },
  {
    id: 296,
    keywords: ["van allen belts", "radiation belts", "trapped particles"],
    subtopic: "Earth",
    answer: "The Van Allen belts are zones of energetic charged particles trapped by Earth's magnetic field. They pose radiation hazards to satellites and astronauts. The Apollo missions passed through them quickly to minimize exposure."
  },
  {
    id: 297,
    keywords: ["ionosphere", "charged layer", "radio reflection"],
    subtopic: "Earth",
    answer: "The ionosphere is a region of the atmosphere ionized by solar radiation, affecting radio wave propagation. It reflects certain frequencies, enabling long-distance communication. It also interacts with solar storms."
  },
  {
    id: 298,
    keywords: ["magnetotail", "earth's magnetotail", "magnetic field tail"],
    subtopic: "Earth",
    answer: "Earth's magnetotail is the elongated part of the magnetosphere pushed away by solar wind. It extends hundreds of Earth radii and is a region of magnetic reconnection and plasma dynamics."
  },
  {
    id: 299,
    keywords: ["solar prominence", "filament", "plasma loop"],
    subtopic: "Sun",
    answer: "Solar prominences are large, bright loops of plasma anchored to the Sun's surface, extending into the corona. They can erupt, releasing mass. Filaments are prominences seen against the disk."
  },
  {
    id: 300,
    keywords: ["coronal hole", "high-speed solar wind", "sun's open magnetic field"],
    subtopic: "Sun",
    answer: "Coronal holes are darker, cooler regions in the Sun's corona with open magnetic fields, allowing solar wind to escape more easily. They are sources of high-speed wind streams that can cause geomagnetic storms."
  }
];

export const fallbackResponses = [
  "Even NOVA doesn't know everything about the universe... That question is beyond my current star charts. Try asking about black holes, Mars, exoplanets, or space missions!",
  "Hmm, that signal is coming in fuzzy from deep space. Could you rephrase? I'm great with topics like the Big Bang, telescopes, astronauts, and more.",
  "My sensors can't quite lock onto that one. The cosmos is vast — try asking about something like dark matter, Saturn's rings, or the ISS!",
  "That's drifting outside my orbital range. Ask me about planets, space missions, black holes, or the search for alien life — I'm all over those."
];

export const suggestedQuestions = [
  "What is a black hole?",
  "Tell me about Mars",
  "How did the universe begin?",
  "What has JWST discovered?",
  "Is there life on other planets?",
  "How far away is the nearest star?"
];


