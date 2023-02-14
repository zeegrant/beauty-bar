require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

// IIFE - Immediately Invoked Function Expression
(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Cleansers', sortOrder: 10},
    {name: 'Toners', sortOrder: 20},
    {name: 'Moisturizers', sortOrder: 30},
    {name: 'Facial Care', sortOrder: 40},
    {name: 'Haircare', sortOrder: 50},
    {name: 'Suncare', sortOrder: 60},
    {name: 'Salon Beauty Treatments', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Biossance Squalane + Amino Aloe Gentle Cleanser', emoji: '🫧', category: categories[0], price: 28.00},
    {name: 'Drunk Elephant Kamili Cream Body Cleanser', emoji: '🫧', category: categories[0], price: 20.00},
    {name: 'Glow Recipe Enzyme Cleansing Balm, Papaya Sorbet', emoji: '🫧', category: categories[0], price: 32.00},
    {name: 'Biossance Squalane + BHA Pore-Minimizing Toner', emoji: '🧴', category: categories[1], price: 30.00},
    {name: 'Youth to the People Kombucha + 11% AHA Exfoliation Power Toner', emoji: '🧴', category: categories[1], price: 30.00},
    {name: 'Tatcha The Essence', emoji: '🧴', category: categories[1], price: 26.00},
    {name: 'Honest Beauty Everyday Radiance +C Moisturizer', emoji: '🧴', category: categories[2], price: 18.00},
    {name: 'Biossance Squalane + Vitamin C Rose Oil', emoji: '🧴', category: categories[2], price: 14.95},
    {name: 'Josie Maran Pure Argan Oil', emoji: '🧴', category: categories[2], price: 29.00},
    {name: 'Kora Organics Noni Bright Vitamin C Serum', emoji: '🧪', category: categories[3], price: 26.00},
    {name: 'Kora Organics Noni Night AHA Resurfacing Serum', emoji: '🧪', category: categories[3], price: 19.95},
    {name: 'Wellnesse Smoothing Shampoo for Wavy, Curly Hair, Coconut & Verbena Leaf', emoji: '🎀', category: categories[4], price: 2.95},
    {name: 'Beautycounter Daily Shampoo, Bright Grapefruit', emoji: '🎀', category: categories[4], price: 3.95},
    {name: 'Wellnesse Enriching Conditioner for Wavy, Curly Hair, Coconut & Verbena Leaf', emoji: '🎀', category: categories[4], price: 1.95},
    {name: 'Black Girl Sunscreen Melanin Boosting Moisturizing Sunscreen Lotion, SPF 30', emoji: '🌞', category: categories[5], price: 10.95},
    {name: 'Supergoop! Glow Screen Body, SPF 40', emoji: '🌞', category: categories[5], price: 15.95},
    {name: 'Biossance Squalane + Zinc Sheer Mineral Sunscreen, SPF 30', emoji: '🌞', category: categories[5], price: 24.95},
    {name: 'Beauty Bar Signature Massage', emoji: '🧖🏽‍♀️', category: categories[6], price: 150.00},
    {name: 'Beauty Bar Glow Facial', emoji: '🧖🏽‍♀️', category: categories[6], price: 85.00},
    {name: 'Beauty Bar Elite Manicure', emoji: '💅🏽', category: categories[6], price: 22.00},
    {name: 'Beauty Bar Elite Pedicure', emoji: '👣', category: categories[6], price: 30.00},
  ]);

  console.log(items)

  process.exit();

}) ();
