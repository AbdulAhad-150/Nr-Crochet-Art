import { Product, Review, FAQItem } from '../types';

import gajrayImg from '../assets/images/gajray.jpeg';
import gajray2Img from '../assets/images/handbracellet.jpeg';
import gajray3Img from '../assets/images/gajray3.jpeg';

import keychainImg from '../assets/images/honeybee_keychain.jpeg';
import keychain1Img from '../assets/images/octapus.jpeg';
import keychain2Img from '../assets/images/snail_keychain.jpeg';
import keychain3Img from '../assets/images/rose.jpeg';
import keychain4Img from '../assets/images/icecream_keychain.jpeg';

import libBalmImg from '../assets/images/lip_balm_holder.jpeg';

// import plushieImg from '../assets/images/crochet_plushies_bee_1785257295839.jpg';
import flowersImg from '../assets/images/flowers.jpeg';
import donutImg from '../assets/images/dounat.jpeg';

import butterflyImg from '../assets/images/crochet_butterfly_clips_1785257309303.jpg';

export const HERO_IMAGE = gajrayImg;

export const PRODUCTS: Product[] = [
  {
  id: 'p1',
  name: 'Handmade Crochet Honey Bee Keychain',
  category: 'keychains',
  price: 300,
  originalPrice: 400,
  rating: 5.0,
  reviewsCount: 34,
  image: keychainImg,
  // galleryImages: [keychainImg, keychain1Img, keychain2Img, keychain3Img, keychain4Img],
  description: 'Cute handmade crochet honey bee keychain crafted with premium milk cotton yarn. Lightweight, durable, and perfect for decorating your keys, bags, or gifting to someone special.',
  isBestSeller: true,
  inStock: true,
  colors: ['Yellow & Black', 'Pastel Yellow', 'Golden Yellow'],
  yarnType: '100% Premium Milk Cotton Yarn',
  dimensions: 'Approx. 7cm x 6cm',
  leadTime: '1-2 Days',
    details: [
      '100% handmade with premium milk cotton yarn',
      'Strong metal key ring included',
      'Perfect for keys, handbags, and gifts'
    ]
  },
  {
  id: 'p2',
  name: 'Handmade Crochet Octopus Keychain',
  category: 'keychains',
  price: 300,
  originalPrice: 400,
  rating: 5.0,
  reviewsCount: 34,
  image: keychain1Img,
  // galleryImages: [keychainImg, keychain1Img, keychain2Img, keychain3Img, keychain4Img],
  description: 'Cute handmade crochet octopus keychain crafted with premium milk cotton yarn. Lightweight, durable, and perfect for decorating your keys, bags, or gifting to someone special.',
  isBestSeller: true,
  inStock: true,
  colors: ['Yellow & Black', 'Pastel Yellow', 'Golden Yellow'],
  yarnType: '100% Premium Milk Cotton Yarn',
  dimensions: 'Approx. 7cm x 6cm',
  leadTime: '1-2 Days',
    details: [
      '100% handmade with premium milk cotton yarn',
      'Strong metal key ring included',
      'Perfect for keys, handbags, and gifts'
    ]
  },
   {
  id: 'p3',
  name: 'Handmade Crochet Snail Keychain',
  category: 'keychains',
  price: 300,
  originalPrice: 400,
  rating: 5.0,
  reviewsCount: 34,
  image: keychain2Img,
  // galleryImages: [keychainImg, keychain1Img, keychain2Img, keychain3Img, keychain4Img],
  description: 'Cute handmade crochet snail keychain crafted with premium milk cotton yarn. Lightweight, durable, and perfect for decorating your keys, bags, or gifting to someone special.',
  isBestSeller: true,
  inStock: true,
  colors: ['Yellow & Black', 'Pastel Yellow', 'Golden Yellow'],
  yarnType: '100% Premium Milk Cotton Yarn',
  dimensions: 'Approx. 7cm x 6cm',
  leadTime: '1-2 Days',
    details: [
      '100% handmade with premium milk cotton yarn',
      'Strong metal key ring included',
      'Perfect for keys, handbags, and gifts'
    ]
  },
   {
  id: 'p4',
  name: 'Handmade Crochet Rose Keychain',
  category: 'keychains',
  price: 300,
  originalPrice: 400,
  rating: 5.0,
  reviewsCount: 34,
  image: keychain3Img,
  // galleryImages: [keychainImg, keychain1Img, keychain2Img, keychain3Img, keychain4Img],
  description: 'Cute handmade crochet rose keychain crafted with premium milk cotton yarn. Lightweight, durable, and perfect for decorating your keys, bags, or gifting to someone special.',
  isBestSeller: true,
  inStock: true,
  colors: ['Yellow & Black', 'Pastel Yellow', 'Golden Yellow'],
  yarnType: '100% Premium Milk Cotton Yarn',
  dimensions: 'Approx. 7cm x 6cm',
  leadTime: '1-2 Days',
    details: [
      '100% handmade with premium milk cotton yarn',
      'Strong metal key ring included',
      'Perfect for keys, handbags, and gifts'
    ]
  },
   {
  id: 'p5',
  name: 'Handmade Crochet Ice-Cream Keychain',
  category: 'keychains',
  price: 300,
  originalPrice: 400,
  rating: 5.0,
  reviewsCount: 34,
  image: keychain4Img,
  // galleryImages: [keychainImg, keychain1Img, keychain2Img, keychain3Img, keychain4Img],
  description: 'Cute handmade crochet ice-cream keychain crafted with premium milk cotton yarn. Lightweight, durable, and perfect for decorating your keys, bags, or gifting to someone special.',
  isBestSeller: true,
  inStock: true,
  colors: ['Yellow & Black', 'Pastel Yellow', 'Golden Yellow'],
  yarnType: '100% Premium Milk Cotton Yarn',
  dimensions: 'Approx. 7cm x 6cm',
  leadTime: '1-2 Days',
    details: [
      '100% handmade with premium milk cotton yarn',
      'Strong metal key ring included',
      'Perfect for keys, handbags, and gifts'
    ]
  },
  {
     id: 'p6',
  name: 'Handmade Crochet Rose Flower Gajray',
  category: 'gajray',
  price: 1200,
  originalPrice: 2000,
  rating: 4.9,
  reviewsCount: 28,
  image: gajrayImg,
  // galleryImages: [gajrayImg, gajray3Img, gajray2Img],
  description: 'Elegant handmade crochet rose flower gajray designed to add a timeless floral touch to your hairstyle. Soft, lightweight, reusable, and perfect for weddings, Eid, mehndi, and special occasions.',
  isBestSeller: true,
  isNew: true,
  inStock: true,
  colors: ['Red', 'Pink', 'White'],
  yarnType: 'Premium Soft Cotton Yarn',
  dimensions: 'Standard Size',
  leadTime: '1 Day',
    details: [
      'Handmade crochet rose flowers',
      'Reusable and long-lasting',
      'Comfortable to wear for all occasions'
    ]
  },
  {
     id: 'p7',
  name: 'Handmade Crochet Genda  Flower Gajray',
  category: 'gajray',
  price: 1200,
  originalPrice: 2000,
  rating: 4.9,
  reviewsCount: 28,
  image: gajray3Img,
  // galleryImages: [gajrayImg, gajray3Img, gajray2Img],
  description: 'Elegant handmade crochet genda flower gajray designed to add a timeless floral touch to your hairstyle. Soft, lightweight, reusable, and perfect for weddings, Eid, mehndi, and special occasions.',
  isBestSeller: true,
  isNew: true,
  inStock: true,
  colors: ['Red', 'Pink', 'White'],
  yarnType: 'Premium Soft Cotton Yarn',
  dimensions: 'Standard Size',
  leadTime: '1 Day',
    details: [
      'Handmade crochet genda flowers',
      'Reusable and long-lasting',
      'Comfortable to wear for all occasions'
    ]
  },
  {
     id: 'p9',
  name: 'Handmade Crochet Red Flower & White Flower Gajray',
  category: 'gajray',
  price: 1200,
  originalPrice: 2000,
  rating: 4.9,
  reviewsCount: 28,
  image: gajray2Img,
  // galleryImages: [gajrayImg, gajray3Img, gajray2Img],
  description: 'Elegant handmade crochet Red Flower & White Flower gajray designed to add a timeless floral touch to your hairstyle. Soft, lightweight, reusable, and perfect for weddings, Eid, mehndi, and special occasions.',
  isBestSeller: true,
  isNew: true,
  inStock: true,
  colors: ['Red', 'Pink', 'White'],
  yarnType: 'Premium Soft Cotton Yarn',
  dimensions: 'Standard Size',
  leadTime: '1 Day',
    details: [
      'Handmade crochet red and white flowers',
      'Reusable and long-lasting',
      'Comfortable to wear for all occasions'
    ]
  },
  {
    id: 'p10',
  name: 'Lip Balm Holder Crochet',
  category: 'plushies',
  price: 300,
  originalPrice: 350,
  rating: 5.0,
  reviewsCount: 42,
  image: libBalmImg,
  galleryImages: [libBalmImg],
  description: 'Handmade crochet lip balm holder that keeps your favorite lip balm secure and easy to carry. Attach it to your handbag, backpack, or keys for quick access anytime.',
  isBestSeller: true,
  inStock: true,
  colors: ['Pink', 'Purple', 'Beige'],
  yarnType: '100% Premium Milk Cotton Yarn',
  dimensions: 'Fits Standard Lip Balm',
  leadTime: '2 Days',
  details: [
    'Handmade with premium cotton yarn',
    'Easy clip for bags and keychains',
    'Perfect everyday accessory or gift'
  ]
  },
   {
  id: 'p11',
  name: 'Donut Crochet Plushie',
  category: 'plushies',
  price: 300,
  originalPrice: 350,
  rating: 5.0,
  reviewsCount: 42,
  image: donutImg,
  galleryImages: [donutImg],
  description: "Adorable handmade crochet donut plushie made with soft premium yarn. A cute decorative piece that's perfect for gifting, room décor, or adding charm to your collection.",
  isBestSeller: true,
  inStock: true,
  colors: ['Pink', 'Chocolate', 'Pastel Blue'],
  yarnType: 'Super Soft Plush Cotton Yarn',
  dimensions: 'Approx. 10cm x 10cm',
  leadTime: '2 Days',
  details: [
    'Soft and lightweight',
    'Handmade with premium yarn',
    'Perfect as a gift or room decoration'
  ]
},
  // {
  //   id: 'p5',
  //   name: 'Crochet Strawberry Charm Keychain',
  //   category: 'keychains',
  //   price: 380,
  //   originalPrice: 500,
  //   rating: 4.8,
  //   reviewsCount: 19,
  //   image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?auto=format&fit=crop&w=800&q=80',
  //   description: 'Juicy cute crochet strawberry keychain complete with little embroidered white seeds, green leafy top, and gold key ring.',
  //   isBestSeller: false,
  //   inStock: true,
  //   colors: ['Classic Red', 'Pastel Pink', 'Wild Berry Purple'],
  //   yarnType: '4-Ply Milk Cotton',
  //   dimensions: 'Length: 6cm',
  //   leadTime: '1 Day',
  //   details: [
  //     'Durable gold lobster clasp key ring',
  //     'Lightweight and scratch-free on car keys',
  //     'Hand-stitched detail'
  //   ]
  // },
  {
  id: 'p12',
  name: 'Crochet Flower Bouquet',
  category: 'flowers',
  price: 1200,
  originalPrice: 1500,
  rating: 4.9,
  reviewsCount: 15,
  image: flowersImg,
  galleryImages: [flowersImg],
  description: 'Beautiful handmade crochet flower bouquet that stays fresh forever. Carefully crafted using premium cotton yarn, making it a perfect gift for birthdays, anniversaries, graduations, and special occasions.',
  isBestSeller: false,
  isNew: true,
  inStock: true,
  colors: ['Red', 'Pink', 'White', 'Yellow'],
  yarnType: 'Premium Milk Cotton Yarn',
  dimensions: 'Approx. 30cm Height',
  leadTime: '1-2 Days',
  details: [
    'Handmade crochet flowers',
    'Never wilts or fades',
    'Ideal for gifting and home decoration'
  ]
},
  // {

  //   id: 'p6',
  //   name: 'Lavender Bouquet in Ceramic Pot',
  //   category: 'flowers',
  //   price: 1200,
  //   originalPrice: 1500,
  //   rating: 5.0,
  //   reviewsCount: 22,
  //   image: keychainImg,
  //   // galleryImages: [keychainImg, gajrayImg],
  //   description: 'Arrangement of 5 detailed crochet lavender sprigs sitting gracefully in a hand-poured mini ceramic pot. Delicate and elegant home decor.',
  //   isBestSeller: true,
  //   inStock: true,
  //   colors: ['Royal Purple', 'Soft Lavender', 'Pastel Lilac'],
  //   yarnType: '100% Milk Cotton',
  //   dimensions: 'Height: 18cm',
  //   leadTime: '2-3 Days',
  //   details: [
  //     '5 individually crafted sprigs',
  //     'Includes decorative faux soil and ceramic container',
  //     'Dust-resistant treated yarn'
  //   ]
  // },
  // {
  //   id: 'p7',
  //   name: 'Cute Froggy Amigurumi Keychain',
  //   category: 'keychains',
  //   price: 420,
  //   originalPrice: 550,
  //   rating: 4.9,
  //   reviewsCount: 31,
  //   image: plushieImg,
  //   description: 'Round chubby green frog plush keychain with big round eyes and rosy pink cheeks. A pocket companion guaranteed to make you smile.',
  //   isBestSeller: true,
  //   inStock: true,
  //   colors: ['Forest Green', 'Matcha Frog', 'Pastel Lime'],
  //   yarnType: 'Soft Cotton Yarn',
  //   dimensions: 'Height: 6.5cm',
  //   leadTime: '1 Day',
  //   details: [
  //     'Heavy-duty alloy key ring',
  //     'Stuffing with high resilience fiberfill',
  //     'Includes small bell charm option'
  //   ]
  // },
  // {
  //   id: 'p8',
  //   name: 'Vintage Rose Flower Bookmark',
  //   category: 'bookmarks',
  //   price: 390,
  //   originalPrice: 500,
  //   rating: 4.8,
  //   reviewsCount: 14,
  //   image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
  //   description: 'Handcrafted blooming red rose at the end of a leafy green crochet stem. Marks your page in timeless romantic style.',
  //   isBestSeller: false,
  //   inStock: true,
  //   colors: ['Deep Red', 'Dusty Rose', 'Cream White'],
  //   yarnType: 'Fine Mercerized Cotton',
  //   dimensions: 'Length: 30cm',
  //   leadTime: '1-2 Days',
  //   details: [
  //     '3D layered rose petals',
  //     'Does not stretch or slip out of books',
  //     'Lovely gift item for readers'
  //   ]
  // },
  // {
  //   id: 'p9',
  //   name: 'Custom Initial Letter Keychain',
  //   category: 'custom',
  //   price: 550,
  //   originalPrice: 700,
  //   rating: 5.0,
  //   reviewsCount: 56,
  //   image: gajrayImg,
  //   // galleryImages: [gajrayImg, keychainImg],
  //   description: 'Personalized 3D crochet letter keychain tailored in your choice of letter A-Z and color scheme. Decorated with a mini flower accent.',
  //   isBestSeller: true,
  //   inStock: true,
  //   colors: ['Custom Palette', 'Pastel Rainbow', 'Monochrome Earth'],
  //   yarnType: 'Milk Cotton Yarn',
  //   dimensions: 'Letter height: 7cm',
  //   leadTime: '2 Days',
  //   details: [
  //     'Choose any Alphabet letter A-Z',
  //     'Select 2-3 favorite yarn colors',
  //     'Comes packaged in a custom gift box with ribbon'
  //   ]
  // },
  // {
  //   id: 'p10',
  //   name: 'Octopus Mood Plushie (Reversible)',
  //   category: 'plushies',
  //   price: 1100,
  //   originalPrice: 1400,
  //   rating: 4.9,
  //   reviewsCount: 27,
  //   image: plushieImg,
  //   description: 'Handmade double-sided crochet octopus plushie! Flip inside out to switch between happy smiling face and grumpy cute face.',
  //   isBestSeller: false,
  //   isNew: true,
  //   inStock: true,
  //   colors: ['Pink & Blue Flip', 'Purple & Mint Flip', 'Yellow & Coral Flip'],
  //   yarnType: 'Chunky Velvet Soft Yarn',
  //   dimensions: '14cm diameter',
  //   leadTime: '2-3 Days',
  //   details: [
  //     'Two mood faces in one plushie',
  //     'Super velvety touch feeling',
  //     'Seamless flipped design'
  //   ]
  // }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    customerName: 'Ayesha Khan',
    rating: 5,
    date: '3 days ago',
    comment: 'The crochet sunflower pot is even prettier in person! The stitching is so neat and the yarn quality feels super soft. Ordered via WhatsApp and got it delivered smoothly!',
    productName: 'Handmade Crochet Sunflower in Pot',
    verified: true
  },
  {
    id: 'r2',
    customerName: 'Zainab Fatima',
    rating: 5,
    date: '1 week ago',
    comment: 'In love with the butterfly hair clips! They hold my hair firmly without clipping painfully. Will definitely order custom colors next time from Crochet Art 1014!',
    productName: 'Pastel Butterfly Crochet Hair Clip Pair',
    verified: true
  },
  {
    id: 'r3',
    customerName: 'Hira Ahmed',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Ordered the honeybee plushie and custom initial keychain as a birthday gift for my best friend. The packaging was so cute and the seller responded so fast on WhatsApp!',
    productName: 'Honeybee Amigurumi Crochet Plushie',
    verified: true
  },
  {
    id: 'r4',
    customerName: 'Maham Raza',
    rating: 5,
    date: '1 month ago',
    comment: 'The sprout bookmark is my favorite reading companion now! Soft, sturdy, and looks so aesthetic peeking out of my novels. 10/10 recommendation!',
    productName: 'Crochet Sprout Leaf Page Bookmark',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    category: 'ordering',
    question: 'How do I place an order for crochet items?',
    answer: 'You can order directly through our website by clicking "Order on WhatsApp" on any product, or by sending a message to our WhatsApp at 03340211881 (+923340211881). We will confirm your item, custom choices, and delivery details.'
  },
  {
    id: 'faq2',
    category: 'custom',
    question: 'Can I request custom colors, letters, or designs?',
    answer: 'Yes, absolutely! Everything is 100% handmade in small batches. You can customize colors, request personalized initials, or send us reference pictures via WhatsApp (03340211881) or Instagram (@crochet_art_1014).'
  },
  {
    id: 'faq3',
    category: 'shipping',
    question: 'How long does custom making and delivery take?',
    answer: 'Ready-to-ship items take 1-2 business days to dispatch. Custom orders generally take 2-4 days depending on design complexity. Once shipped, delivery across Pakistan usually takes 2-4 days.'
  },
  {
    id: 'faq4',
    category: 'care',
    question: 'How should I clean and care for handmade crochet items?',
    answer: 'Gently hand wash in cold water using a mild wool/baby shampoo. Do not rub vigorously or twist. Pat dry with a clean towel and lay flat on a surface in the shade to preserve shape and soft yarn texture.'
  },
  {
    id: 'faq5',
    category: 'ordering',
    question: 'What payment methods do you accept?',
    answer: 'We accept Cash on Delivery (COD), JazzCash, EasyPaisa, and Direct Bank Transfer. Details will be provided directly in our WhatsApp chat after order confirmation.'
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig1',
    image: gajrayImg,
    caption: 'Recent handmade crochet creations fresh off the hook! ✨ Bright sunflowers, pastel butterfly clips & plushies. DM or WhatsApp for custom orders!',
    likes: 184,
    comments: 23,
    url: 'https://www.instagram.com/crochet_art_1014?igsh=dngyaG5qOTl0M2Vs'
  },
  {
    id: 'ig2',
    image: keychainImg,
    caption: 'Sunflowers that bloom forever 🌻 Hand-crocheted in 100% premium milk cotton yarn in mini pots. Perfect desk aesthetic!',
    likes: 242,
    comments: 31,
    url: 'https://www.instagram.com/crochet_art_1014?igsh=dngyaG5qOTl0M2Vs'
  },
  {
    id: 'ig3',
    image: flowersImg,
    caption: 'Pastel butterfly hair clips fluttering into your accessories collection! 🦋 Which color combination is your favorite?',
    likes: 310,
    comments: 45,
    url: 'https://www.instagram.com/crochet_art_1014?igsh=dngyaG5qOTl0M2Vs'
  },
  {
    id: 'ig4',
    image: donutImg,
    caption: 'Meet our adorable honeybee & froggy amigurumi plushies 🐝🐸 Made with super soft yarn and lots of love!',
    likes: 295,
    comments: 38,
    url: 'https://www.instagram.com/crochet_art_1014?igsh=dngyaG5qOTl0M2Vs'
  }
];

export const INSTAGRAM_URL = "https://www.instagram.com/crochet_art_1014?igsh=dngyaG5qOTl0M2Vs";
export const WHATSAPP_NUMBER = "923340211881";
export const WHATSAPP_DISPLAY = "03340211881";
