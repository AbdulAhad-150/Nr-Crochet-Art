import { Product, Review, FAQItem } from '../types';
// Custom images
import gajrayImg from '../assets/images/gajray.jpeg';
import gajray2Img from '../assets/images/handbracellet.jpeg';
import gajray3Img from '../assets/images/gajray3.jpeg';
import gajray4Img from '../assets/images/gajray4.jpeg';
import gajray5Img from '../assets/images/full_red_gajray.jpeg';

// keychain images
import keychainImg from '../assets/images/honeybee_keychain.jpeg';
import keychain1Img from '../assets/images/octapus.jpeg';
import keychain2Img from '../assets/images/snail_keychain.jpeg';
import keychain3Img from '../assets/images/rose.jpeg';
import keychain4Img from '../assets/images/icecream_keychain.jpeg';
import keychain5Img from '../assets/images/icecream_keychain2.jpeg';
import keychain6Img from '../assets/images/pikachu_keychain.jpeg';
import keychain7Img from '../assets/images/dounat_keychain.jpeg';

// plushie images
import libBalmImg from '../assets/images/lip_balm_holder.jpeg';

// import plushieImg from '../assets/images/crochet_plushies_bee_1785257295839.jpg';

import flowersImg1 from '../assets/images/flowers.jpeg';
import flowersImg2 from '../assets/images/rose_flower_pot.jpeg';
import flowersImg3 from '../assets/images/blue_flower_pot.jpeg';
import flowersImg4 from '../assets/images/pink_flower_pot.jpeg';


import donutImg from '../assets/images/dounat.jpeg';

// hair clip images

import hairClip1 from '../assets/images/hairclip_blue.jpeg';
import hairClip2 from '../assets/images/hairclip_red.jpeg';
import hairClip3 from '../assets/images/hairclip_pink.jpeg';
import hairClip4 from '../assets/images/hairclip_Yellow.jpeg';

// Scarf Pins images
import scarfPin1 from '../assets/images/scarf_pin_pink.jpeg';
import scarfPin2 from '../assets/images/scarf_pin_red.jpeg';
import scarfPin3 from '../assets/images/scarf_pin2.jpeg';
import scarfPin4 from '../assets/images/scarf_pin1.jpeg';

// Spiderman keychain tranding image
import spidermanKeychainImg from '../assets/images/spiderman_keychain.jpeg';

// bouquet keychain images
import bouquetImg1 from '../assets/images/bouquet_keychain1.webp';
import bouquetImg2 from '../assets/images/bouquet_keychain2.webp';
import bouquetImg3 from '../assets/images/bouquet_keychain3.webp';

// strawberry keychain image
import strawberryKeychainImg from '../assets/images/strawberry_keychain.jfif';

// book mark images
import bookmarkImg1 from '../assets/images/bookmark.jfif';

//cute chicken keychain image
import cuteChickenKeychainImg1 from '../assets/images/cutie_chick.webp';
import cuteChickenKeychainImg2 from '../assets/images/chick_keychain.jpeg';

// Bag hanging charm image
import bagHangingCharmImg from '../assets/images/bag_charm1.webp';
import bagHangingCharm2Img from '../assets/images/bag_charm2.webp';
import bagHangingCharm3Img from '../assets/images/bag_charm3.webp';
import bagHangingCharm4Img from '../assets/images/bag_charm4.webp';
import bagHangingCharm5Img from '../assets/images/bag_charm5.webp';
import bagHangingCharm6Img from '../assets/images/bag_charm6.webp';



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
  colors: ['Yellow & Black'],
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
  colors: ['Ice Blue'],
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
  colors: ['Brown & White','Pink & White'],
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
  colors: ['Light Pink'],
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
  name: 'Handmade Crochet Ice-Cream Keychain (Pink)',
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
  colors: ['Soft light pink & Warm golden brown'],
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
  category: 'custom',
  price: 1500,
  originalPrice: 2000,
  rating: 4.9,
  reviewsCount: 28,
  image: gajrayImg,
  // galleryImages: [gajrayImg, gajray3Img, gajray2Img],
  description: 'Elegant handmade crochet rose flower gajray designed to add a timeless floral touch to your hairstyle. Soft, lightweight, reusable, and perfect for weddings, Eid, mehndi, and special occasions.',
  isBestSeller: true,
  isNew: true,
  inStock: true,
  colors: ['Red & White'],
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
  name: 'Handmade Crochet Genda Flower Gajray',
  category: 'custom',
  price: 1000,
  originalPrice: 2000,
  rating: 4.9,
  reviewsCount: 28,
  image: gajray3Img,
  // galleryImages: [gajrayImg, gajray3Img, gajray2Img],
  description: 'Elegant handmade crochet genda flower gajray designed to add a timeless floral touch to your hairstyle. Soft, lightweight, reusable, and perfect for weddings, Eid, mehndi, and special occasions.',
  isBestSeller: true,
  isNew: true,
  inStock: true,
  colors: ['Yellow & White'],
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
  category: 'custom',
  price: 1000,
  originalPrice: 2000,
  rating: 4.9,
  reviewsCount: 28,
  image: gajray2Img,
  // galleryImages: [gajrayImg, gajray3Img, gajray2Img],
  description: 'Elegant handmade crochet Red Flower & White Flower gajray designed to add a timeless floral touch to your hairstyle. Soft, lightweight, reusable, and perfect for weddings, Eid, mehndi, and special occasions.',
  isBestSeller: true,
  isNew: true,
  inStock: true,
  colors: ['Red & White'],
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
  colors: ['Red & Green'],
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
  colors: ['Pink'],
  yarnType: 'Super Soft Plush Cotton Yarn',
  dimensions: 'Approx. 10cm x 10cm',
  leadTime: '2 Days',
  details: [
    'Soft and lightweight',
    'Handmade with premium yarn',
    'Perfect as a gift or room decoration'
  ]
},
  
  {
  id: 'p12',
  name: 'Crochet Flower Pot Handmade Flowers',
  category: 'flowers',
  price: 1200,
  originalPrice: 1500,
  rating: 4.9,
  reviewsCount: 15,
  image: flowersImg1,
  // galleryImages: [flowersImg2],
  description: 'Beautiful handmade crochet flower pot with handmade flowers that stays fresh forever. Carefully crafted using premium cotton yarn, making it a perfect gift for birthdays, anniversaries, graduations, and special occasions.',
  isBestSeller: false,
  isNew: true,
  inStock: true,
  colors: ['Multicolored'],
  yarnType: 'Premium Milk Cotton Yarn',
  dimensions: 'Approx. 30cm Height',
  leadTime: '1-2 Days',
  details: [
    'Handmade crochet flowers',
    'Never wilts or fades',
    'Ideal for gifting and home decoration'
  ]
},
  {

    id: 'p13',
    name: 'Handmade Butterfly Crochet Clips',
    category: 'clips',
    price: 300,
    originalPrice: 400,
    rating: 5.0,
    reviewsCount: 22,
    image: hairClip1,
    // galleryImages: [hairClip1, hairClip3, hairClip4],
    description: 'Arrangement of 5 detailed crochet lavender sprigs sitting gracefully in a hand-poured mini ceramic pot. Delicate and elegant home decor.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    colors: ['Blue'],
    yarnType: '100% Milk Cotton',
    dimensions: 'Height: 18cm',
    leadTime: '2-3 Days',
    details: [
      '5 individually crafted sprigs',
      'Includes decorative faux soil and ceramic container',
      'Dust-resistant treated yarn'
    ]
  },
  {

    id: 'p14',
    name: 'Handmade Butterfly Crochet Clips',
    category: 'clips',
    price: 300,
    originalPrice: 400,
    rating: 5.0,
    reviewsCount: 22,
    image: hairClip2,
    // galleryImages: [hairClip1, hairClip3, hairClip4],
    description: 'Arrangement of 5 detailed crochet lavender sprigs sitting gracefully in a hand-poured mini ceramic pot. Delicate and elegant home decor.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    colors: ['Red'],
    yarnType: '100% Milk Cotton',
    dimensions: 'Height: 18cm',
    leadTime: '2-3 Days',
    details: [
      '5 individually crafted sprigs',
      'Includes decorative faux soil and ceramic container',
      'Dust-resistant treated yarn'
    ]
  },
  {

    id: 'p15',
    name: 'Handmade Butterfly Crochet Clips',
    category: 'clips',
    price: 300,
    originalPrice: 400,
    rating: 5.0,
    reviewsCount: 22,
    image: hairClip3,
    // galleryImages: [hairClip1, hairClip3, hairClip4],
    description: 'Arrangement of 5 detailed crochet lavender sprigs sitting gracefully in a hand-poured mini ceramic pot. Delicate and elegant home decor.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    colors: ['Pink'],
    yarnType: '100% Milk Cotton',
    dimensions: 'Height: 18cm',
    leadTime: '2-3 Days',
    details: [
      '5 individually crafted sprigs',
      'Includes decorative faux soil and ceramic container',
      'Dust-resistant treated yarn'
    ]
  },
  {

    id: 'p16',
    name: 'Handmade Butterfly Crochet Clips',
    category: 'clips',
    price: 300,
    originalPrice: 400,
    rating: 5.0,
    reviewsCount: 22,
    image: hairClip4,
    // galleryImages: [hairClip1, hairClip3, hairClip4],
    description: 'Arrangement of 5 detailed crochet lavender sprigs sitting gracefully in a hand-poured mini ceramic pot. Delicate and elegant home decor.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    colors: ['Yellow'],
    yarnType: '100% Milk Cotton',
    dimensions: 'Height: 18cm',
    leadTime: '2-3 Days',
    details: [
      '5 individually crafted sprigs',
      'Includes decorative faux soil and ceramic container',
      'Dust-resistant treated yarn'
    ]
  },

  {
    id: 'p17',
    name: 'Handmade Scarf Pins',
    category: 'ScarfPins',
    price: 350,
    originalPrice: 450,
    rating: 4.9,
    reviewsCount: 18,
    image: scarfPin1,
    // galleryImages: [scarfPin1, scarfPin2, scarfPin3, scarfPin4],
    description: 'Set of 3 handmade crochet scarf pins in vibrant colors. Perfect for securing scarves, shawls, and hijabs while adding a touch of elegance to your outfit.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    colors: ['Light Pink & Dark Brown'],
    yarnType: 'Premium Cotton Yarn',
    dimensions: 'Length: 5cm',
    leadTime: '1-2 Days',
    details: [
      '3 unique crochet designs',
      'Durable metal pin backing',
      'Lightweight and easy to wear'
    ]

  },
  {
    id: 'p18',
    name: 'Handmade Scarf Pins',
    category: 'ScarfPins',
    price: 350,
    originalPrice: 450,
    rating: 4.9,
    reviewsCount: 18,
    image: scarfPin2,
    // galleryImages: [scarfPin1, scarfPin2, scarfPin3, scarfPin4],
    description: 'Set of 3 handmade crochet scarf pins in vibrant colors. Perfect for securing scarves, shawls, and hijabs while adding a touch of elegance to your outfit.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    colors: ['Rose Red'],
    yarnType: 'Premium Cotton Yarn',
    dimensions: 'Length: 5cm',
    leadTime: '1-2 Days',
    details: [
      '3 unique crochet designs',
      'Durable metal pin backing',
      'Lightweight and easy to wear'
    ]

  },
  {
    id: 'p19',
    name: 'Handmade Scarf Pins',
    category: 'ScarfPins',
    price: 350,
    originalPrice: 450,
    rating: 4.9,
    reviewsCount: 18,
    image: scarfPin3,
    // galleryImages: [scarfPin1, scarfPin2, scarfPin3, scarfPin4],
    description: 'Set of 3 handmade crochet scarf pins in vibrant colors. Perfect for securing scarves, shawls, and hijabs while adding a touch of elegance to your outfit.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    colors: ['Yellow & Black'],
    yarnType: 'Premium Cotton Yarn',
    dimensions: 'Length: 5cm',
    leadTime: '1-2 Days',
    details: [
      '3 unique crochet designs',
      'Durable metal pin backing',
      'Lightweight and easy to wear'
    ]

  },
  {
    id: 'p20',
    name: 'Handmade Scarf Pins',
    category: 'ScarfPins',
    price: 350,
    originalPrice: 450,
    rating: 4.9,
    reviewsCount: 18,
    image: scarfPin4,
    // galleryImages: [scarfPin1, scarfPin2, scarfPin3, scarfPin4],
    description: 'Set of 3 handmade crochet scarf pins in vibrant colors. Perfect for securing scarves, shawls, and hijabs while adding a touch of elegance to your outfit.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    colors: ['Yellow & Brown'],
    yarnType: 'Premium Cotton Yarn',
    dimensions: 'Length: 5cm',
    leadTime: '1-2 Days',
    details: [
      '3 unique crochet designs',
      'Durable metal pin backing',
      'Lightweight and easy to wear'
    ]

  },

  {
    id: 'p22',
    name: 'Spiderman Crochet Keychain',
    category: 'keychains',
    price: 400,
    originalPrice: 500,
    rating: 5.0,
    reviewsCount: 12,
    image: spidermanKeychainImg,
    description: 'Handmade crochet Spiderman keychain crafted with premium yarn. A perfect gift for Spiderman fans and a fun accessory for your keys or bags.',
    isBestSeller: false,
    inStock: true,
    isNew: true,
    colors: ['Black', 'White'],
    yarnType: 'Premium Cotton Yarn',
    dimensions: 'Approx. 7cm x 6cm',
    leadTime: '1-2 Days',
    details: [
      '100% handmade with premium yarn',
      'Durable metal key ring included',
      'Perfect for keys, handbags, and gifts'
    ]
  },
  {
    id: 'p24',
    name: 'Rose Bouquet Keychain',
    category: 'keychains',
    price: 450,
    originalPrice: 550,
    rating: 4.8,
    reviewsCount: 25,
    image: bouquetImg1,
    // galleryImages: [bouquetImg1, bouquetImg2, bouquetImg3],
    description: 'Beautiful handmade crochet bouquet keychain with realistic flower details. A delightful accessory for your keys or handbag.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    colors: ['Red'],
    yarnType: 'Premium Cotton Yarn',
    dimensions: 'Approx. 8cm x 7cm',
    leadTime: '1-2 Days',
    details: [
      '100% handmade with premium yarn',
      'Durable metal key ring included',
      'Perfect for keys, handbags, and gifts'
    ]
  },{
    id: 'p25',
    name: 'Sunflower Bouquet Keychain',
    category: 'keychains',
    price: 450,
    originalPrice: 550,
    rating: 4.8,
    reviewsCount: 25,
    image: bouquetImg2,
    // galleryImages: [bouquetImg1, bouquetImg2, bouquetImg3],
    description: 'Beautiful handmade crochet bouquet keychain with realistic flower details. A delightful accessory for your keys or handbag.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    colors: ['Yellow'],
    yarnType: 'Premium Cotton Yarn',
    dimensions: 'Approx. 8cm x 7cm',
    leadTime: '1-2 Days',
    details: [
      '100% handmade with premium yarn',
      'Durable metal key ring included',
      'Perfect for keys, handbags, and gifts'
    ]
  },
  {
    id: 'p26',
    name: 'Multicolored Bouquet Keychain',
    category: 'keychains',
    price: 450,
    originalPrice: 550,
    rating: 4.8,
    reviewsCount: 25,
    image: bouquetImg3,
    // galleryImages: [bouquetImg1, bouquetImg2, bouquetImg3],
    description: 'Beautiful handmade crochet bouquet keychain with realistic flower details. A delightful accessory for your keys or handbag.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    colors: ['Multicolored'],
    yarnType: 'Premium Cotton Yarn',
    dimensions: 'Approx. 8cm x 7cm',
    leadTime: '1-2 Days',
    details: [
      '100% handmade with premium yarn',
      'Durable metal key ring included',
      'Perfect for keys, handbags, and gifts'
    ]
  },
  {
    id: 'p27',
    name: 'Strawberry Crochet Keychain',
    category: 'keychains',
    price: 350,
    originalPrice: 450,
    rating: 4.9,
    reviewsCount: 20,
    image: strawberryKeychainImg,
    description: 'Adorable handmade crochet strawberry keychain crafted with premium yarn. A sweet accessory for your keys or bags, perfect for gifting.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    colors: ['Red & Green'],
    yarnType: 'Premium Cotton Yarn',
    dimensions: 'Approx. 6cm x 5cm',
    leadTime: '1-2 Days',
    details: [
      '100% handmade with premium yarn',
      'Durable metal key ring included',
      'Perfect for keys, handbags, and gifts'
    ]
  },
  {
    id: 'p28',
    name: 'Handmade Crochet Bookmark',
    category: 'bookmarks',
    price: 250,
    originalPrice: 350,
    rating: 4.7,
    reviewsCount: 15,
    image: bookmarkImg1,
    description: 'Elegant handmade crochet bookmark featuring a delicate floral design. A perfect gift for book lovers and a charming accessory for your reading collection.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    colors: ['Red & Green & White'],
    yarnType: 'Premium Cotton Yarn',
    dimensions: 'Length: 20cm',
    leadTime: '1-2 Days',
    details: [
      '100% handmade with premium yarn',
      'Lightweight and durable',
      'Perfect for gifting and personal use'
    ]
  },
  {
    id: 'p29',
    name: 'Cute Chicken Crochet Keychain',
    category: 'keychains',
    price: 350,
    originalPrice: 450,
    rating: 4.9,
    reviewsCount: 18,
    image: cuteChickenKeychainImg1,
    description: 'Adorable handmade crochet chicken keychain crafted with premium yarn. A fun and charming accessory for your keys or bags, perfect for gifting.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    colors: ['Yellow'],
    yarnType: 'Premium Cotton Yarn',
    dimensions: 'Approx. 6cm x 5cm',
    leadTime: '1-2 Days',
    details: [
      '100% handmade with premium yarn',
      'Durable metal key ring included',
      'Perfect for keys, handbags, and gifts'
    ]
  },
  {
    id: 'p30',
    name: 'Bag Hanging Charm Crochet',
    category: 'BagHangingCharms',
    price: 400,
    originalPrice: 500,
    rating: 4.8,
    reviewsCount: 12,
    image: bagHangingCharmImg,
    description: 'Elegant handmade crochet bag hanging charm featuring a delicate floral design. A perfect accessory for your handbags, creating a charming and personalized touch.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    colors: ['Yellow & Green'],
    yarnType: 'Premium Cotton Yarn',
    dimensions: 'Approx. 8cm x 6cm',
    leadTime: '1-2 Days',
    details: [
      '100% handmade with premium yarn',
      'Durable metal ring included',
      'Perfect for handbags and accessories'
    ]
  },
  {
    id: 'p31',
    name: 'Bag Hanging Charm Crochet',
    category: 'BagHangingCharms',
    price: 400,
    originalPrice: 500,
    rating: 4.8,
    reviewsCount: 12,
    image: bagHangingCharm2Img,
    description: 'Elegant handmade crochet bag hanging charm featuring a delicate floral design. A perfect accessory for your handbags, creating a charming and personalized touch.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    colors: ['Grass Green'],
    yarnType: 'Premium Cotton Yarn',
    dimensions: 'Approx. 8cm x 6cm',
    leadTime: '1-2 Days',
    details: [
      '100% handmade with premium yarn',
      'Durable metal ring included',
      'Perfect for handbags and accessories'
    ]
  },
  {
    id: 'p32',
    name: 'Bag Hanging Charm Crochet (wheel design)',
    category: 'BagHangingCharms',
    price: 400,
    originalPrice: 500,
    rating: 4.8,
    reviewsCount: 12,
    image: bagHangingCharm3Img,
    description: 'Elegant handmade crochet bag hanging charm featuring a delicate floral design. A perfect accessory for your handbags, creating a charming and personalized touch.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    colors: ['Ice Blue & Green'],
    yarnType: 'Premium Cotton Yarn',
    dimensions: 'Approx. 8cm x 6cm',
    leadTime: '1-2 Days',
    details: [
      '100% handmade with premium yarn',
      'Durable metal ring included',
      'Perfect for handbags and accessories'
    ]
  },
  {
    id: 'p33',
    name: 'Bag Hanging Charm Crochet (Pineapple design)',
    category: 'BagHangingCharms',
    price: 400,
    originalPrice: 500,
    rating: 4.8,
    reviewsCount: 12,
    image: bagHangingCharm4Img,
    description: 'Elegant handmade crochet bag hanging charm featuring a delicate floral design. A perfect accessory for your handbags, creating a charming and personalized touch.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    colors: ['Yellow & Green'],
    yarnType: 'Premium Cotton Yarn',
    dimensions: 'Approx. 8cm x 6cm',
    leadTime: '1-2 Days',
    details: [
      '100% handmade with premium yarn',
      'Durable metal ring included',
      'Perfect for handbags and accessories'
    ]
  },
  {
    id: 'p34',
    name: 'Bag Hanging Charm Crochet (Blue Star design)',
    category: 'BagHangingCharms',
    price: 400,
    originalPrice: 500,
    rating: 4.8,
    reviewsCount: 12,
    image: bagHangingCharm5Img,
    description: 'Elegant handmade crochet bag hanging charm featuring a delicate floral design. A perfect accessory for your handbags, creating a charming and personalized touch.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    colors: ['Light Blue'],
    yarnType: 'Premium Cotton Yarn',
    dimensions: 'Approx. 8cm x 6cm',
    leadTime: '1-2 Days',
    details: [
      '100% handmade with premium yarn',
      'Durable metal ring included',
      'Perfect for handbags and accessories'
    ]
  },
  {
    id: 'p35',
    name: 'Bag Hanging Charm Crochet (Magenta Star design)',
    category: 'BagHangingCharms',
    price: 400,
    originalPrice: 500,
    rating: 4.8,
    reviewsCount: 12,
    image: bagHangingCharm6Img,
    description: 'Elegant handmade crochet bag hanging charm featuring a delicate floral design. A perfect accessory for your handbags, creating a charming and personalized touch.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    colors: ['Magenta / Deep Berry Pink (center and outer border)'],
    yarnType: 'Premium Cotton Yarn',
    dimensions: 'Approx. 8cm x 6cm',
    leadTime: '1-2 Days',
    details: [
      '100% handmade with premium yarn',
      'Durable metal ring included',
      'Perfect for handbags and accessories'
    ]
  },
  {
  id: 'p36',
  name: 'Handmade Crochet Ice-Cream Keychain (White)',
  category: 'keychains',
  price: 400,
  originalPrice: 500,
  rating: 5.0,
  reviewsCount: 34,
  image: keychain5Img,
  description: 'Cute handmade crochet ice-cream keychain crafted with premium milk cotton yarn. Lightweight, durable, and perfect for decorating your keys, bags, or gifting to someone special.',
  isBestSeller: true,
  inStock: true,
  colors: ['Soft light pink & Warm golden brown'],
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
    id: 'p37',
    name: 'Handmade Crochet PikaChu Keychain',
    category: 'keychains',
    price: 400,
    originalPrice: 500,
    rating: 5.0,
    reviewsCount: 34,
    image: keychain6Img,
    description: 'Cute handmade crochet PikaChu keychain crafted with premium milk cotton yarn. Lightweight, durable, and perfect for decorating your keys, bags, or gifting to someone special.',
    isBestSeller: true,
    inStock: true,
    colors: ['Soft Yellow'],
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
    id: 'p38',
    name: 'Handmade Crochet Cute Chicken Crochet Keychain',
    category: 'keychains',
    price: 400,
    originalPrice: 500,
    rating: 5.0,
    reviewsCount: 34,
    image: cuteChickenKeychainImg2,
    description: 'Cute handmade crochet Cute Chicken keychain crafted with premium milk cotton yarn. Lightweight, durable, and perfect for decorating your keys, bags, or gifting to someone special.',
    isBestSeller: true,
    inStock: true,
    colors: ['Soft Yellow'],
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
    id: 'p39',
    name: 'Handmade Crochet Cute Donut Crochet Keychain',
    category: 'keychains',
    price: 450,
    originalPrice: 500,
    rating: 5.0,
    reviewsCount: 34,
    image: keychain7Img,
    description: 'Cute handmade crochet Cute Donut keychain crafted with premium milk cotton yarn. Lightweight, durable, and perfect for decorating your keys, bags, or gifting to someone special.',
    isBestSeller: true,
    inStock: true,
    colors: ['Soft Peach'],
    yarnType: '100% Premium Milk Cotton Yarn',
    dimensions: 'Approx. 7cm x 6cm',
    leadTime: '1-2 Days',
      details: [
        '100% handmade with premium milk cotton yarn',
        'Strong metal key ring included',
        'Perfect for keys, handbags, and gifts'
      ]
  },{
    id: 'p40',
    name: 'Red Rose Crochet Flower Pot Handmade Flowers',
    category: 'flowers',
    price: 700,
    originalPrice: 1000,
    rating: 5.0,
    reviewsCount: 34,
    image: flowersImg2,
    description: 'Beautiful handmade crochet flower pot with handmade roses that stays fresh forever. Carefully crafted using premium cotton yarn, making it a perfect gift for birthdays, anniversaries, graduations, and special occasions.',
    isBestSeller: true,
    inStock: true,
    colors: ['Soft Red'],
    yarnType: '100% Premium Milk Cotton Yarn',
    dimensions: 'Approx. 7cm x 6cm',
    leadTime: '1-2 Days',
      details: [
        '100% handmade with premium milk cotton yarn',
        'Strong metal key ring included',
        'Perfect for keys, handbags, and gifts'
      ]
  },{
    id: 'p41',
    name: 'Blue Daisy Crochet Flower Pot Handmade Flowers',
    category: 'flowers',
    price: 700,
    originalPrice: 1000,
    rating: 5.0,
    reviewsCount: 34,
    image: flowersImg3,
    description: 'Beautiful handmade crochet flower pot with handmade blue daisies that stays fresh forever. Carefully crafted using premium cotton yarn, making it a perfect gift for birthdays, anniversaries, graduations, and special occasions.',
    isBestSeller: true,
    inStock: true,
    colors: ['Soft Blue'],
    yarnType: '100% Premium Milk Cotton Yarn',
    dimensions: 'Approx. 7cm x 6cm',
    leadTime: '1-2 Days',
      details: [
        '100% handmade with premium milk cotton yarn',
        'Strong metal key ring included',
        'Perfect for keys, handbags, and gifts'
      ]
  },{
    id: 'p42',
    name: 'Pink Rose Crochet Flower Pot Handmade Flowers',
    category: 'flowers',
    price: 700,
    originalPrice: 1000,
    rating: 5.0,
    reviewsCount: 34,
    image: flowersImg4,
    description: 'Beautiful handmade crochet flower pot with handmade pink roses that stays fresh forever. Carefully crafted using premium cotton yarn, making it a perfect gift for birthdays, anniversaries, graduations, and special occasions.',
    isBestSeller: true,
    inStock: true,
    colors: ['Soft Pink'],
    yarnType: '100% Premium Milk Cotton Yarn',
    dimensions: 'Approx. 7cm x 6cm',
    leadTime: '1-2 Days',
      details: [
        '100% handmade with premium milk cotton yarn',
        'Strong metal key ring included',
        'Perfect for keys, handbags, and gifts'
      ]
  },{
    id: 'p43',
    name: 'Handmade Crochet Pink Rose Flower Gajray',
  category: 'custom',
  price: 1000,
  originalPrice: 2000,
  rating: 4.9,
  reviewsCount: 28,
  image: gajray4Img,
  // galleryImages: [gajrayImg, gajray3Img, gajray2Img],
  description: 'Elegant handmade crochet rose flower gajray designed to add a timeless floral touch to your hairstyle. Soft, lightweight, reusable, and perfect for weddings, Eid, mehndi, and special occasions.',
  isBestSeller: true,
  isNew: true,
  inStock: true,
  colors: ['Pink & White'],
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
    id: 'p44',
    name: 'Handmade Crochet White Rose Flower Gajray',
  category: 'custom',
  price: 1200,
  originalPrice: 2000,
  rating: 4.9,
  reviewsCount: 28,
  image: gajray5Img,
  // galleryImages: [gajrayImg, gajray3Img, gajray2Img],
  description: 'Elegant handmade crochet white rose flower gajray designed to add a timeless floral touch to your hairstyle. Soft, lightweight, reusable, and perfect for weddings, Eid, mehndi, and special occasions.',
  isBestSeller: true,
  isNew: true,
  inStock: true,
  colors: ['White & Green'],
  yarnType: 'Premium Soft Cotton Yarn',
  dimensions: 'Standard Size',
  leadTime: '1 Day',
    details: [
      'Handmade crochet white rose flowers',
      'Reusable and long-lasting',
      'Comfortable to wear for all occasions'
    ]
  }
  


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
    image: flowersImg1,
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
