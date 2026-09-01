import { Product, CollectionItem, SizeChartRow, FAQItem } from '../types';

export const BRAND_INFO = {
  name: 'LITTLE PANDA',
  displayName: 'LITTLE PANDA | KIDS CLOTHING',
  tagline: 'Little styles. Big personalities.',
  subTagline: 'Discover thoughtfully styled kidswear designed to make every little moment feel special.',
  instagramUsername: 'little_panda_clothing_',
  instagramHandle: '@little_panda_clothing_',
  instagramUrl: 'https://www.instagram.com/little_panda_clothing_/',
  instagramDmUrl: 'https://ig.me/m/little_panda_clothing_',
  positioning: 'Kids Clothing | Premium Collection',
  salesMessage: 'DM us to buy the clothes.',
  year: '2026',
};

export const COLLECTIONS: CollectionItem[] = [
  {
    id: 'girlswear',
    title: 'GIRLSWEAR',
    subtitle: 'Everyday Chic & Playful Silhouettes',
    description: 'Breezy tops, layered skorts, and relaxed everyday staples tailored for effortless movement.',
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1000&auto=format&fit=crop',
    tag: 'Curated Essentials',
    categoryKey: 'girlswear',
  },
  {
    id: 'co-ord-sets',
    title: 'CO-ORD SETS',
    subtitle: 'Effortless Matching Ensembles',
    description: 'Modern two-piece sets in warm earthy tones and soft textures, designed for effortless coordination.',
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=1000&auto=format&fit=crop',
    tag: 'Bestseller Category',
    categoryKey: 'coord',
  },
  {
    id: 'dresses',
    title: 'DRESSES',
    subtitle: 'Twirl-Ready Editorial Styles',
    description: 'Graceful tiered cuts, delicate ruffles, and contemporary silhouettes crafted for memorable moments.',
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=1000&auto=format&fit=crop',
    tag: 'Signature Cuts',
    categoryKey: 'dress',
  },
  {
    id: 'ethnic-wear',
    title: 'ETHNIC WEAR',
    subtitle: 'Charming Festivities & Little Traditions',
    description: 'Beautifully styled girls’ kurtis, soft shararas, and festive coordinates for joyful celebrations.',
    image: 'https://images.unsplash.com/photo-1617331140180-e8262094733a?q=80&w=1000&auto=format&fit=crop',
    tag: 'Festive & Celebration',
    categoryKey: 'ethnic',
  },
];

export const PRODUCTS: Product[] = [
  {
    product_id: 'lp-eth-01',
    code: 'LP-ET-01',
    product_name: 'Aurelia Floral Embroidered Kurti Set',
    category: 'ethnic',
    collection: 'Ethnic Wear',
    description: 'A charming pastel peach kurti ensemble featuring delicate handcrafted floral motifs on the yoke, paired with comfortable matching straight pants. Designed for festive gatherings and joyful celebration days.',
    price: '₹1,850',
    sale_price: null,
    images: [
      'https://images.unsplash.com/photo-1617331140180-e8262094733a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['2-3 Y', '3-4 Y', '4-5 Y', '5-6 Y', '6-7 Y'],
    colors: [
      { name: 'Warm Peach', hex: '#F6D5C3' },
      { name: 'Soft Ivory', hex: '#FDFBF7' }
    ],
    fabric: 'Soft Cotton Chanderi blend with breathable cotton lining',
    care_instructions: [
      'Gentle hand wash in cold water or dry clean',
      'Use mild liquid detergent',
      'Dry in shade inside out',
      'Low to medium steam iron on reverse'
    ],
    availability: 'In Stock',
    featured: true,
    new_arrival: true,
    instagram_order_link: 'https://ig.me/m/little_panda_clothing_',
  },
  {
    product_id: 'lp-crd-02',
    code: 'LP-CD-02',
    product_name: 'Savannah Linen Flounce Co-ord Set',
    category: 'coord',
    collection: 'Co-ord Sets',
    description: 'An airy, stylish two-piece set featuring a relaxed flutter-sleeve top and elasticated wide-leg culottes. Cut in warm oatmeal tones for effortless all-day charm.',
    price: '₹1,690',
    sale_price: null,
    images: [
      'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['2-3 Y', '3-4 Y', '4-5 Y', '5-6 Y'],
    colors: [
      { name: 'Oatmeal Beige', hex: '#E6DEC9' },
      { name: 'Warm Honey', hex: '#E5A93C' }
    ],
    fabric: 'Premium soft linen-cotton blend',
    care_instructions: [
      'Machine wash cold on delicate cycle',
      'Wash with similar light colors',
      'Hang dry in shade',
      'Warm iron while slightly damp'
    ],
    availability: 'In Stock',
    featured: true,
    new_arrival: true,
    instagram_order_link: 'https://ig.me/m/little_panda_clothing_',
  },
  {
    product_id: 'lp-drs-03',
    code: 'LP-DR-03',
    product_name: 'Fleur Tiered Botanical Twirl Dress',
    category: 'dress',
    collection: 'Dresses',
    description: 'A whimsical silhouette with tiered gathering, soft ruffles at the shoulders, and subtle vintage floral prints. Engineered with generous flare for effortless twirls.',
    price: '₹1,550',
    sale_price: null,
    images: [
      'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['1-2 Y', '2-3 Y', '3-4 Y', '4-5 Y', '5-6 Y'],
    colors: [
      { name: 'Vintage Blossom', hex: '#F3E4E4' },
      { name: 'Soft Cream', hex: '#FAF5EE' }
    ],
    fabric: '100% Breathable Woven Cotton with soft lining',
    care_instructions: [
      'Gentle machine or hand wash in cold water',
      'Do not bleach or tumble dry',
      'Line dry in shade',
      'Medium heat iron'
    ],
    availability: 'In Stock',
    featured: true,
    new_arrival: false,
    instagram_order_link: 'https://ig.me/m/little_panda_clothing_',
  },
  {
    product_id: 'lp-eth-04',
    code: 'LP-ET-04',
    product_name: 'Miraal Gota Detail Anarkali Kurta & Dupatta',
    category: 'ethnic',
    collection: 'Ethnic Wear',
    description: 'A regal yet lightweight anarkali kurti adorned with delicate silver-gold gota borders and paired with comfortable churidar pants and a featherlight net dupatta.',
    price: '₹2,250',
    sale_price: null,
    images: [
      'https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617331140180-e8262094733a?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['3-4 Y', '4-5 Y', '5-6 Y', '7-8 Y'],
    colors: [
      { name: 'Blush Rose', hex: '#E8C5C8' },
      { name: 'Festive Gold', hex: '#E5BA6A' }
    ],
    fabric: 'Soft Silk blend with 100% gentle cotton inner lining',
    care_instructions: [
      'Dry clean recommended for first wash',
      'Do not iron directly on embellishments/gota',
      'Store in a cool, dry place'
    ],
    availability: 'Limited Stock',
    featured: true,
    new_arrival: true,
    instagram_order_link: 'https://ig.me/m/little_panda_clothing_',
  },
  {
    product_id: 'lp-grl-05',
    code: 'LP-GW-05',
    product_name: 'Amélie Ribbed Knit Top & Paperbag Skort',
    category: 'girlswear',
    collection: 'Girlswear',
    description: 'A contemporary everyday pairing featuring an ultra-soft ribbed scoop-neck top and a high-waisted paperbag skort with a soft tie belt and hidden shorts.',
    price: '₹1,450',
    sale_price: null,
    images: [
      'https://images.unsplash.com/photo-1471286174890-9c112ffca564?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['2-3 Y', '3-4 Y', '4-5 Y', '5-6 Y', '6-7 Y'],
    colors: [
      { name: 'Earthy Clay', hex: '#D19A82' },
      { name: 'Warm Ecru', hex: '#ECE7DC' }
    ],
    fabric: 'Stretch ribbed cotton top with washed linen-cotton skort',
    care_instructions: [
      'Machine wash gentle cold',
      'Tumble dry low or line dry in shade',
      'Warm iron if required'
    ],
    availability: 'In Stock',
    featured: false,
    new_arrival: false,
    instagram_order_link: 'https://ig.me/m/little_panda_clothing_',
  },
  {
    product_id: 'lp-crd-06',
    code: 'LP-CD-06',
    product_name: 'Soleil Meadow Print Wrap Co-ord',
    category: 'coord',
    collection: 'Co-ord Sets',
    description: 'A sunshine-ready ensemble with a faux-wrap cropped silhouette top and breezy coordinating bloom pants. Adorned with delicate meadow florals.',
    price: '₹1,750',
    sale_price: null,
    images: [
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['1-2 Y', '2-3 Y', '3-4 Y', '4-5 Y'],
    colors: [
      { name: 'Buttercup Yellow', hex: '#FBE29D' },
      { name: 'Soft Cream', hex: '#FDFCF7' }
    ],
    fabric: 'Ultra-light Cotton Muslin with skin-friendly dyes',
    care_instructions: [
      'Cold gentle cycle',
      'Avoid harsh detergents',
      'Dry flat in shade'
    ],
    availability: 'In Stock',
    featured: false,
    new_arrival: true,
    instagram_order_link: 'https://ig.me/m/little_panda_clothing_',
  },
  {
    product_id: 'lp-drs-07',
    code: 'LP-DR-07',
    product_name: 'Celeste Scalloped Linen Pinafore Dress',
    category: 'dress',
    collection: 'Dresses',
    description: 'An enduring classic pinafore dress accented by handcrafted scalloped hems and criss-cross back straps with coconut shell buttons. Perfect layered over blouses or worn solo.',
    price: '₹1,600',
    sale_price: null,
    images: [
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['2-3 Y', '3-4 Y', '4-5 Y', '5-6 Y'],
    colors: [
      { name: 'Warm Taupe', hex: '#C2B4A3' },
      { name: 'Sage Green', hex: '#B8C4B5' }
    ],
    fabric: '100% Pure Washed Flax Linen',
    care_instructions: [
      'Hand or machine wash cold on delicate',
      'Do not wring forcefully',
      'Medium iron while damp for smooth finish'
    ],
    availability: 'In Stock',
    featured: false,
    new_arrival: false,
    instagram_order_link: 'https://ig.me/m/little_panda_clothing_',
  },
  {
    product_id: 'lp-eth-08',
    code: 'LP-ET-08',
    product_name: 'Zari Sparkle Peplum Kurti & Sharara Set',
    category: 'ethnic',
    collection: 'Ethnic Wear',
    description: 'A celebratory girls’ peplum kurti adorned with subtle gold zari weave accents, paired with a flared tiered sharara designed for festive dancing and comfortable celebrations.',
    price: '₹2,400',
    sale_price: null,
    images: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617331140180-e8262094733a?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['3-4 Y', '4-5 Y', '5-6 Y', '6-7 Y', '7-8 Y'],
    colors: [
      { name: 'Warm Marigold', hex: '#EAA238' },
      { name: 'Soft Vermilion', hex: '#DF7B6B' }
    ],
    fabric: 'Georgette outer with 100% fine cotton inner lining',
    care_instructions: [
      'Dry clean only',
      'Keep folded in soft cloth cover',
      'Do not spray perfume directly'
    ],
    availability: 'Made to Order',
    featured: false,
    new_arrival: true,
    instagram_order_link: 'https://ig.me/m/little_panda_clothing_',
  },
];

export const SIZE_CHART: SizeChartRow[] = [
  { age: '1 – 2 Years', heightCm: '80 – 92 cm', heightIn: '31 – 36 in', chestCm: '50 – 52 cm', chestIn: '19.5 – 20.5 in', waistCm: '48 – 50 cm', waistIn: '19 – 19.5 in', lengthCm: '48 – 52 cm', lengthIn: '19 – 20.5 in' },
  { age: '2 – 3 Years', heightCm: '92 – 98 cm', heightIn: '36 – 38.5 in', chestCm: '53 – 55 cm', chestIn: '21 – 21.5 in', waistCm: '50 – 52 cm', waistIn: '19.5 – 20.5 in', lengthCm: '54 – 58 cm', lengthIn: '21 – 23 in' },
  { age: '3 – 4 Years', heightCm: '98 – 104 cm', heightIn: '38.5 – 41 in', chestCm: '55 – 57 cm', chestIn: '21.5 – 22.5 in', waistCm: '52 – 54 cm', waistIn: '20.5 – 21.5 in', lengthCm: '60 – 64 cm', lengthIn: '23.5 – 25 in' },
  { age: '4 – 5 Years', heightCm: '104 – 110 cm', heightIn: '41 – 43.5 in', chestCm: '57 – 59 cm', chestIn: '22.5 – 23.5 in', waistCm: '54 – 56 cm', waistIn: '21.5 – 22 in', lengthCm: '65 – 70 cm', lengthIn: '25.5 – 27.5 in' },
  { age: '5 – 6 Years', heightCm: '110 – 116 cm', heightIn: '43.5 – 45.5 in', chestCm: '59 – 62 cm', chestIn: '23.5 – 24.5 in', waistCm: '56 – 58 cm', waistIn: '22 – 23 in', lengthCm: '72 – 76 cm', lengthIn: '28.5 – 30 in' },
  { age: '6 – 7 Years', heightCm: '116 – 122 cm', heightIn: '45.5 – 48 in', chestCm: '62 – 65 cm', chestIn: '24.5 – 25.5 in', waistCm: '58 – 60 cm', waistIn: '23 – 23.5 in', lengthCm: '78 – 82 cm', lengthIn: '30.5 – 32 in' },
  { age: '7 – 8 Years', heightCm: '122 – 128 cm', heightIn: '48 – 50.5 in', chestCm: '65 – 68 cm', chestIn: '25.5 – 26.5 in', waistCm: '60 – 62 cm', waistIn: '23.5 – 24.5 in', lengthCm: '84 – 88 cm', lengthIn: '33 – 34.5 in' },
];

export const INSTAGRAM_POSTS = [
  {
    id: 'post-1',
    image: 'https://images.unsplash.com/photo-1617331140180-e8262094733a?q=80&w=1000&auto=format&fit=crop',
    caption: 'Tradition styled for little footsteps. Explore our festive girls’ kurti collection. ✨ #LittlePanda #Kidswear',
    likes: '142',
    date: 'Recent',
  },
  {
    id: 'post-2',
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=1000&auto=format&fit=crop',
    caption: 'Warm earthy neutrals for sunny afternoon play. Savannah Linen Co-ord 🌾 #KidsFashion #MinimalKids',
    likes: '189',
    date: 'Recent',
  },
  {
    id: 'post-3',
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=1000&auto=format&fit=crop',
    caption: 'Twirl-worthy botanical details for little personalities. DM to enquire about sizes. 🌸 #LittlePandaKids',
    likes: '215',
    date: 'Recent',
  },
  {
    id: 'post-4',
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1000&auto=format&fit=crop',
    caption: 'Clean silhouettes that let little ones be themselves. Classic pinafores. 🤎 #LittlePanda',
    likes: '167',
    date: 'Recent',
  },
  {
    id: 'post-5',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1000&auto=format&fit=crop',
    caption: 'Summer coordinates in buttercup meadow prints. Lightweight cotton muslin. ☀️ #KidswearStyle',
    likes: '194',
    date: 'Recent',
  },
  {
    id: 'post-6',
    image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca564?q=80&w=1000&auto=format&fit=crop',
    caption: 'Made for little moments. Send us a direct message for customized sizing assistance! 💌 #LittlePanda',
    likes: '230',
    date: 'Recent',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Ordering',
    question: 'How can I place an order?',
    answer: 'Simply browse our collections on this website or our Instagram page (@little_panda_clothing_). Once you have selected your favourite style and size, click "ORDER VIA INSTAGRAM" or send us a direct message on Instagram. Our team will verify size availability and guide you through confirming your order.',
  },
  {
    id: 'faq-2',
    category: 'Ordering',
    question: 'Where can I see available products?',
    answer: 'You can explore all active collections on our "Shop" page as well as directly on our official Instagram feed (@little_panda_clothing_). New drops and festive releases are showcased regularly.',
  },
  {
    id: 'faq-3',
    category: 'Sizing & Care',
    question: 'How do I choose the right size?',
    answer: 'We recommend checking our interactive Size Guide page, which details age, chest, waist, and garment length. If you are between sizes or need personalized fitting advice for your child, please message us on Instagram DM—we are always happy to assist!',
  },
  {
    id: 'faq-4',
    category: 'Delivery & Contact',
    question: 'Do you offer delivery?',
    answer: 'Please contact Little Panda directly via Instagram DM for the latest delivery coverage, timelines, and shipping options applicable to your location.',
  },
  {
    id: 'faq-5',
    category: 'Ordering',
    question: 'Can I exchange or return an item?',
    answer: 'Please contact Little Panda directly via Instagram DM for details regarding our current exchange and order support policies prior to placing your order.',
  },
  {
    id: 'faq-6',
    category: 'Delivery & Contact',
    question: 'How can I contact Little Panda?',
    answer: 'The fastest and official way to connect with us is via Instagram Direct Message at @little_panda_clothing_. You can also submit the enquiry form on our Contact page and our team will get in touch with you.',
  },
];
