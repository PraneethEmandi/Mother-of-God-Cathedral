
import React, { createContext, useContext } from 'react';
import { BookOpen, Calendar, Users, Cross, Play, MapPin, Heart, Book, Coffee, Globe, Shield } from 'lucide-react';

export const DEFAULT_CONFIG = {
  siteTitle: "DEI",
  siteLogo: "MATRI ",
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'History', href: '/history' },
    { name: 'Timeline', href: '/timeline' },
    { name: 'Architecture', href: '/architecture' },
    // { name: 'Art & Interiors', href: '/art-and-interiors' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ],
  header: {
    initialTextColor: "#ffffff",
    scrolledTextColor: "#3d2b1f",
    scrolledBgColor: "rgba(253, 251, 247, 0.95)",
    logoColor: "#d4af37",
  },
  home: {
    hero: {
      established: "ESTABLISHED-1599",
      heading: "Mother of God ",
      tagline: "Cathedral",
      description: "Journey through decades of spiritual heritage, sacred moments, and unwavering devotion in this digital sanctuary.",
      image: "",
      videoUrl: "https://res.cloudinary.com/dqpszrpnf/video/upload/v1770527168/WhatsApp_Video_2026-02-08_at_10.34.32_AM_hfuqlb.mp4",
      buttonText: "Explore Our Story"
    },
    intro: {
      heading: "Mother of God Cathedral in Kozhikode",
      paragraph1: "A timeless landmark of faith, history, and architectural heritage in the heart of Kozhikode. Founded in the early 16th century, the cathedral stands as a symbol of centuries-old spiritual tradition and cultural exchange along the Malabar Coast",
      paragraph2: "This invites you to explore the cathedral’s rich past, its architectural character, and the sacred spaces that continue to inspire worship and reflection. Mother of God Cathedral offers a journey through enduring faith and living heritage.",
      stat1Value: "426+",
      stat1Label: "Years of Grace",
      stat2Value: "",
      stat2Label: "",
      mainImage: "https://res.cloudinary.com/dqpszrpnf/image/upload/v1770462143/WhatsApp_Image_2026-02-04_at_2.28.09_PM_rprixt.jpg",
      badgeText: "In Faith We Grow"
    },
    collections: {
      heading: "Explore the Sanctuary",
      tagline: "The Collections",
      subtext: "Each chapter of our story is preserved with care, reflecting a century of devotion.",
      items: [
       
      ]
    },
    cta: {
      heading: "Join Our Story",
      description: "Be part of our continuing legacy. Connect with us and discover how you can contribute to our sacred journey.",
      backgroundImage: "https://static.wixstatic.com/media/a25ded_33ac2397360c4b84a0a0c6f12fb97c07~mv2.png?originWidth=1920&originHeight=1024",
      button1Text: "Get in Touch",
      button2Text: "View Calendar"
    }
  },
  ministries: {
    tagline: "OUR SERVICE",
    heading: "The Living Word",
    description: "Our faith is put into action through diverse ministries designed to serve the spiritual and physical needs of our community.",
    items: [
      { id: 'charity', title: 'Charity & Outreach', desc: 'Providing food, shelter, and medical support to those in need.', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800', icon: 'Heart' },
      { id: 'education', title: 'Education', desc: 'Theological classes and spiritual formation for all ages.', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800', icon: 'Book' },
      { id: 'missions', title: 'Global Missions', desc: 'Extending our faith and support to international communities.', image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800', icon: 'Globe' },
      { id: 'fellowship', title: 'Fellowship', desc: 'Connecting members through gatherings, meals, and prayer groups.', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800', icon: 'Coffee' },
      { id: 'youth', title: 'Youth Support', desc: 'Mentorship and safe spaces for the next generation.', image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=800', icon: 'Shield' },
      { id: 'worship', title: 'Worship Arts', desc: 'Our choir, music programs, and sacred liturgy design.', image: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=800', icon: 'Cross' },
    ]
  },
  history: {
    tagline: "THE CHRONOLOGY",
    heading: "Sacred History",
    description: "A centuries-long journey through time, faith, and transformation, preserved in every brick and prayer.",
    image: "https://res.cloudinary.com/dqpszrpnf/image/upload/v1770472344/6704282b-f662-4422-b232-cb567df153af.png",
  },
  timeline: {
    heading: "Milestones of Faith",
    tagline: "Interactive Timeline",
    events: [
      { year: '1513', title: 'Foundation of Christian Presence', description: 'Portuguese traders, after a treaty with the Zamorin of Calicut, established a factory and built a small chapel dedicated to the Virgin Mary (Matri Dei), marking the beginning of Roman Catholic worship in Kozhikode.', image: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770464621/ChatGPT_Image_Feb_7_2026_05_13_22_PM_z0vwsu.png' },
      { year: '1599', title: ' First Major Renovation', description: 'As the Christian community expands, the church undergoes its first major structural renovation, strengthening the building and enlarging spaces for congregational worship.', image: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770464868/ChatGPT_Image_Feb_7_2026_05_17_20_PM_yjicnv.png' },
      { year: '16th Century ', title: 'Growth of the Parish', description: 'The chapel gradually develops into a prominent place of worship for Portuguese settlers and local converts, becoming an important religious and cultural centre in the Malabar region.', image: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770465191/ChatGPT_Image_Feb_7_2026_05_22_53_PM_sgs8wc.png' },
      { year: '1724', title: ' Reconstruction and Expansion', description: 'A significant rebuilding phase reshapes the church, giving it a more permanent form and establishing it as one of the major Catholic churches along the Malabar coast.', image: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770465724/ChatGPT_Image_Feb_7_2026_05_31_53_PM_ujy45f.png' },
      { year: '19th Century', title: 'Architectural Transformation', description: 'European Neo-Roman and Gothic architectural influences are introduced, visible in the tall towers, arched openings, and symmetrical façade, reflecting colonial-era ecclesiastical design adapted to the local climate.', image: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770466785/ChatGPT_Image_Feb_7_2026_05_49_32_PM_oanvxr.png' },
      { year: '1923', title: 'Cathedral Status', description: 'With the formation of the Diocese of Calicut, the church is elevated to Cathedral status, becoming the official seat of the Bishop and the spiritual centre of the diocese.', image: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770467110/ChatGPT_Image_Feb_7_2026_05_54_59_PM_nxgbhp.png' },
      { year: 'Present Day ', title: ' Living Heritage', description: 'Mother of God Cathedral continues to function as an active place of worship while standing as a historic landmark that reflects over five centuries of faith, culture, and architectural evolution.', image: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770467386/3e1b6e9e-fd0f-4188-b098-e356648e0c9b.png' },
    ]
  },
  footer: {
    description: "Preserving our spiritual heritage and sharing the profound journey of faith that has shaped our community through generations."
  }
};

export const ConfigContext = createContext<{
  config: typeof DEFAULT_CONFIG;
  updateConfig: (newConfig: typeof DEFAULT_CONFIG) => void;
  resetConfig: () => void;
}>({
  config: DEFAULT_CONFIG,
  updateConfig: () => {},
  resetConfig: () => {},
});

export const useSiteConfig = () => useContext(ConfigContext);

export const ASSETS = {
  heroVideo: DEFAULT_CONFIG.home.hero.image,
  placeholder: DEFAULT_CONFIG.home.intro.mainImage,
  historyEra1: "https://res.cloudinary.com/dqpszrpnf/image/upload/v1770527995/ChatGPT_Image_Feb_8_2026_10_49_45_AM_cnfzqk.png",
  historyEra2: "https://res.cloudinary.com/dqpszrpnf/image/upload/v1770528447/ChatGPT_Image_Feb_8_2026_10_57_12_AM_xlcjmx.png",
  historyEra3: "https://res.cloudinary.com/dqpszrpnf/image/upload/v1770528703/ChatGPT_Image_Feb_8_2026_11_01_30_AM_nbnbnc.png",
  historyEra4: "https://res.cloudinary.com/dqpszrpnf/image/upload/v1770529123/ChatGPT_Image_Feb_8_2026_11_08_25_AM_yewdmh.png",
  historyEra5: "https://res.cloudinary.com/dqpszrpnf/image/upload/v1770529985/IMG_E5833_w6fu0o.jpg",
};

export const HISTORY_ERAS = [
  { id: 'foundation', title: 'Origins on the Malabar Coast', years: '', description: 'The origins of Mother of God Cathedral are closely linked to Kozhikode’s role as a major maritime trade centre along the Malabar Coast, a gateway that connected the East and the West. Within this vibrant cultural setting, Portuguese traders arrived carrying both commerce and faith, and through an understanding with the Zamorin, the traditional ruler of Kozhikode, an early Christian place of worship was established. This moment marked not just the arrival of Christianity, but the beginning of a cultural dialogue that blended belief, tradition, and community life, laying the foundation for a legacy that would continue to evolve over centuries.', image: ASSETS.historyEra1 },
  { id: 'growth', title: 'Growth of the Community', years: '', description: 'As the early Christian presence took root in Kozhikode, the chapel gradually evolved into a shared community space rather than merely a place of worship. It became a centre where local converts and settlers gathered, allowing faith to weave naturally into daily life through prayer, guidance, and fellowship. Over time, the church fostered a sense of belonging and continuity, shaping a living community grounded in shared belief, care, and cultural exchange.', image: ASSETS.historyEra2 },
  { id: 'growth', title: 'Architectural Evolution', years: '', description: 'As the congregation grew, the church underwent several phases of renovation and reconstruction to respond to changing needs and times. European ecclesiastical styles were gradually introduced and adapted to the local climate, resulting in features such as arched openings, tall towers, and a balanced sense of scale. These transformations reflect how the church continuously evolved, shaping its architectural identity while preserving its spiritual purpose.', image: ASSETS.historyEra3 },
  { id: 'growth', title: 'Cathedral Identity & Authority', years: '', description: 'The elevation of the church to cathedral status marked a defining transformation in its role within the region. As the seat of the Bishop, it became both the spiritual and administrative centre of the Catholic community in Malabar, extending its influence beyond parish life. This status established the cathedral as a place of guidance, unity, and leadership, reinforcing its significance within the wider structure of the Church.', image: ASSETS.historyEra4 },
  { id: 'growth', title: 'Living Legacy', years: '', description: 'Today, Mother of God Cathedral stands as both a heritage landmark and a living place of worship. While its walls carry centuries of history, the cathedral continues to serve an active community, sustaining traditions of faith, prayer, and togetherness. This continuity between past and present reinforces its enduring relevance, making the cathedral not only a monument of heritage but a vital spiritual space that remains deeply connected to everyday life.', image: ASSETS.historyEra5 },
];

export const MEDIA_DATA = [
  { 
    id: '1', 
    title: '', 
    category: '', 
    type: 'video', 
    // Use /preview for videos to work inside the grid iframe
    src: 'https://res.cloudinary.com/dqpszrpnf/video/upload/v1770550662/WhatsApp_Video_2026-02-08_at_5.06.18_PM_pehedb.mp4' 
  },
  { 
    id: '2', 
    title: '', 
    category: '', 
    type: 'image', 
    // Use the Direct Link formula for images
    src: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770472344/6704282b-f662-4422-b232-cb567df153af.png' 
  },
  { 
    id: '2', 
    title: '', 
    category: '', 
    type: 'image', 
    // Use the Direct Link formula for images
    src: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770554076/3_mrrmq5.png' 
  },
  { 
    id: '2', 
    title: '', 
    category: '', 
    type: 'image', 
    // Use the Direct Link formula for images
    src: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770554082/10_rg3htd.png' 
  },
  { 
    id: '2', 
    title: '', 
    category: '', 
    type: 'image', 
    // Use the Direct Link formula for images
    src: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770554093/1_ufhweb.png' 
  },
  { 
    id: '2', 
    title: '', 
    category: '', 
    type: 'image', 
    // Use the Direct Link formula for images
    src: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770554103/7_f31kvx.png' 
  },
  { 
    id: '2', 
    title: '', 
    category: '', 
    type: 'image', 
    // Use the Direct Link formula for images
    src: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770554100/6_qdkewk.png' 
  },
  { 
    id: '2', 
    title: '', 
    category: '', 
    type: 'image', 
    // Use the Direct Link formula for images
    src: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770555656/8_1_xciy5f.png' 
  },
  { 
    id: '2', 
    title: '', 
    category: '', 
    type: 'image', 
    // Use the Direct Link formula for images
    src: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770555657/9_1_sauhek.png' 
  },
  { 
    id: '2', 
    title: '', 
    category: '', 
    type: 'image', 
    // Use the Direct Link formula for images
    src: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770555658/4_1_vvep9w.png' 
  },
];
