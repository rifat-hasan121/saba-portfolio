// ✏️ Edit this file to update the whole website. No component changes needed.
// To use real photos: drop files in /public/images and set the `image` field (e.g. "/images/rose.jpg").
import type { Tone } from "./tones";

export const student = {
  name: "Saba Rahman",
  firstName: "Saba",
  grade: "Grade 6 Explorer & Dreamer",
  school: "Biddyaniketan Mymensingh",
  location: "Bangladesh",
  year: 2026,
  avatar: "/images/avatar.jpg" as string, // e.g. "/images/avatar.jpg"
  bio: "I'm 11 years old and I love turning ideas into drawings, stories and tiny science experiments. When I grow up I want to be a scientist who also writes books!",
  badges: [
    { label: "Bookworm", emoji: "📚", tone: "mint" as Tone, pos: "top-2 -left-2 sm:-left-6" },
    { label: "Artist", emoji: "🎨", tone: "coral" as Tone, pos: "top-10 -right-2 sm:-right-8" },
    { label: "Curious Mind", emoji: "🔭", tone: "sun" as Tone, pos: "bottom-4 -left-1 sm:-left-8" },
  ],
  guardianEmail: "rifat@nexvibe.tech", // 👈 replace with the parent/guardian's email
};

export const developer = {
  name: "MD Rifat Hasan",
  url: "https://rifat-hasan.me",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Gallery", href: "#gallery" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#achievements" },
  { label: "Goals", href: "#goals" },
  { label: "Say Hi", href: "#contact" },
];

export const aboutCards = {
  school: { title: "My School", value: student.school, note: "Class 6, Section Shapla" },
  subjects: [
    { name: "Math", emoji: "🔢" },
    { name: "Science", emoji: "🧪" },
    { name: "Art", emoji: "🎨" },
    { name: "English", emoji: "✏️" },
  ],
  favorites: {
    books: ["Feluda Series", "Matilda", "Thakurmar Jhuli"],
    colors: [
      { name: "Coral Pink", hex: "#FF6B8B" },
      { name: "Sunny Yellow", hex: "#FFD166" },
      {name: "Black", hex: "#000000"},
      {name: "Navy Blue", hex: "#1D3557"},
    ],
  },
  funFact: "I once grew a bean sprout in a cotton ball and named it 'Professor Beans'. It grew 12 cm in two weeks!",
};

export const hobbies: { title: string; icon: "palette" | "mic" | "book" | "sprout" | "puzzle"; tone: Tone; text: string }[] = [
  { title: "Drawing & Painting", icon: "palette", tone: "coral", text: "Watercolour flowers and Bangladeshi river boats are my favourite things to paint." },
  { title: "Storytelling", icon: "mic", tone: "sun", text: "I make up stories about talking animals and tell them to my little cousin." },
  { title: "Reading", icon: "book", tone: "mint", text: "I read one book every two weeks, usually under my blanket with a torch." },
  { title: "Gardening", icon: "sprout", tone: "mint", text: "Our rooftop has marigolds, tomatoes and one very proud chilli plant." },
  { title: "Puzzles & Coding", icon: "puzzle", tone: "coral", text: "I'm learning Scratch to make small games. Level 3 is still too tricky!" },
  { title: "Science Experiments", icon: "sprout", tone: "sun", text: "I love mixing baking soda and vinegar to make things fizz and bubble." },

];

export type GalleryCategory = "Drawings" | "Crafts" | "Stories & Poems";
export const galleryTabs: ("All" | GalleryCategory)[] = ["All", "Drawings", "Crafts", "Stories & Poems"];

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  emoji: string;
  tone: Tone;
  image?: string;
  description: string;
  text?: string[]; // poem / story lines (shown in the modal)
}

export const galleryItems: GalleryItem[] = [
  { id: "g1", title: "Boat on the Brahmaputra", category: "Drawings", emoji: "⛵", tone: "mint", description: "Watercolour, A4. Painted after our village trip at sunset." },
  { id: "g2", title: "My Pet Cat, Mishti", category: "Drawings", emoji: "🐱", tone: "coral", description: "Colour pencils. Mishti never sits still, so I drew her while she slept." },
  { id: "g3", title: "Paper Flower Bouquet", category: "Crafts", emoji: "💐", tone: "sun", description: "Made from recycled coloured paper and old magazines." },
  { id: "g4", title: "Bottle-Cap Robot", category: "Crafts", emoji: "🤖", tone: "mint", description: "A tiny robot built from bottle caps, straws and a lot of glue." },
  {
    id: "g5", title: "The Rain Song", category: "Stories & Poems", emoji: "🌧️", tone: "coral",
    description: "A short poem about the first monsoon rain.",
    text: [
      "Drip, drop, drip, the clouds come down,",
      "Dancing on the roof of our small town.",
      "Puddles shine like mirrors blue,",
      "And I jump in, my shoes say 'Ooh!'",
      "",
      "Mango trees sing a leafy tune,",
      "The frogs join in beneath the moon.",
      "Rain, rain, stay a little more,",
      "I'll draw you on my classroom door!",
    ],
  },
  {
    id: "g6", title: "The Firefly Who Was Afraid of the Dark", category: "Stories & Poems", emoji: "✨", tone: "sun",
    description: "A very short story about being brave.",
    text: [
      "Once upon a time, a little firefly named Jhilmil was afraid of the dark.",
      "\"But you're a firefly!\" laughed the owl. \"The dark is where you shine.\"",
      "That night Jhilmil took a deep breath and glowed. Soon, a hundred friends were following her light home.",
      "The end. (Sometimes the thing we fear is where our light begins.)",
    ],
  },
];

export const projects: { id: string; title: string; emoji: string; tone: Tone; image?: string; story: string; learned: string }[] = [
  {
    id: "p1", title: "Volcano Eruption Model", emoji: "🌋", tone: "coral",
    story: "I built a volcano from clay and made it erupt using baking soda and vinegar. I filmed it three times to see which mix made the best lava.",
    learned: "How acids and bases react",
  },
  {
    id: "p2", title: "Solar-Powered Water Cleaner", emoji: "☀️", tone: "sun",
    story: "I made a mini solar still with a bowl, plastic wrap and a small cup. It turned muddy water into clean drops in one sunny afternoon.",
    learned: "Evaporation and condensation",
  },
  {
    id: "p3", title: "Our Rooftop Bean Garden", emoji: "🌱", tone: "mint",
    story: "I planted beans in different spots and measured them every day. I wrote down everything in my garden diary with charts.",
    learned: "What plants need to grow",
  },
];

export const achievements: { id: string; year: string; title: string; detail: string; icon: "trophy" | "medal" | "star" | "award"; tone: Tone }[] = [
  { id: "a1", year: "2026", title: "1st Prize, Inter-School Science Fair", detail: "For the Solar-Powered Water Cleaner project.", icon: "trophy", tone: "sun" },
  { id: "a2", year: "2026", title: "Mathematics Olympiad, Merit Certificate", detail: "Top 10% at the district round.", icon: "medal", tone: "mint" },
  { id: "a3", year: "2025", title: "Best Storyteller, Cultural Week", detail: "Performed 'The Firefly Who Was Afraid of the Dark'.", icon: "star", tone: "coral" },
  { id: "a4", year: "2025", title: "Drawing Competition, 2nd Place", detail: "Theme: 'My Beautiful Bangladesh'.", icon: "award", tone: "sun" },
  { id: "a5", year: "2024", title: "Perfect Attendance Badge", detail: "Never missed a school day. Not even in the rain!", icon: "medal", tone: "mint" },
];

export const currentlyReading = {
  title: "The Secret Garden",
  author: "Frances Hodgson Burnett",
  emoji: "📖",
  tone: "mint" as Tone,
  image: "",
  review: "I love how Mary changes from grumpy to kind once she starts caring for a garden. It makes me want to look after our rooftop plants even more!",
  progress: 70,
};

export const goals: { id: string; text: string; done: boolean }[] = [
  { id: "b1", text: "Read 24 books this year", done: false },
  { id: "b2", text: "Win a medal at the science fair", done: true },
  { id: "b3", text: "Finish my first Scratch game", done: false },
  { id: "b4", text: "Learn to ride a bicycle without training wheels", done: true },
  { id: "b5", text: "Grow tomatoes on our rooftop", done: false },
  { id: "b6", text: "Write and illustrate my own storybook", done: false },
];
