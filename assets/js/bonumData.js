const info =
  'Selamat datang di Bonum Cafe & Resto! Silahkan scroll ke bawah untuk melihat menu.. ';

const menuPricelist = [
  {
    category: 'Bonum Special Menu',
    menu: [
      {
        nama: 'Bonum Sirloin Meltique',
        harga: 'Rp. 70.000',
        url: './assets/img/bonum-sirloin-meltique.webp',
      },
      {
        nama: 'Bonum Mystique Beef',
        harga: 'Rp. 55.000',
        url: './assets/img/bonum-mystique-beef.webp',
      },

      {
        nama: 'Bonum Beef Pepper Rice',
        harga: 'Rp. 50.000',
        url: './assets/img/beef-pepper-rice-bonumbg.jpg',
      },
      {
        nama: 'Bonum Chicken Steak',
        harga: 'Rp. 45.000',
        url: './assets/img/bonum-chicken-steak.webp',
      },
      {
        nama: 'Bonum Crispy Chicken Steak',
        harga: 'Rp. 50.000',
        url: './assets/img/image-coming-soon.webp',
      },
    ],
  },
  {
    category: 'Tradisional',
    menu: [
      {
        nama: 'Nasi Gudeg Yogya',
        harga: 'Rp 30.000',
        url: './assets/img/nasi-gudeg-yogya.webp',
      },
      {
        nama: 'Nasi Gudeg Yogya Komplit',
        harga: 'Rp 33.000',
        url: './assets/img/nasi-gudeg-komplit.webp',
      },
      {
        nama: 'Nasi Gudeg Ayam',
        harga: 'Rp 35.000',
        url: './assets/img/nasi-gudeg-ayam.webp',
      },
      {
        nama: 'Nasi Gudeg Telur',
        harga: 'Rp 25.000',
        url: './assets/img/nasi-gudeg-telur.webp',
      },
      {
        nama: 'Nasi Ayam Semarang',
        harga: 'Rp 30.000',
        url: './assets/img/nasi-ayam-semarang.webp',
      },
      {
        nama: 'Nasi Liwet Solo',
        harga: 'Rp 30.000',
        url: './assets/img/nasi-liwet-solo.webp',
      },
      {
        nama: 'Nasi Krawu Gresik',
        harga: 'Rp 30.000',
        url: './assets/img/nasi-krawu-gresik.webp',
      },
      {
        nama: 'Ayam Asap Khas Bali (Klungkung)',
        harga: 'Rp 40.000',
        url: './assets/img/ayam-klungkung.webp',
      },
      {
        nama: 'Nasi Ayam Madura',
        harga: 'Rp 30.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Nasi Bebek Suramadu (Large)',
        harga: 'Rp 40.000',
        url: './assets/img/nasi-bebek-suramadu.webp',
      },
{
        nama: 'Nasi Bebek Suramadu (Medium)',
        harga: 'Rp 35.000',
        url: './assets/img/nasi-bebek-suramadu.webp',
      },
      {
        nama: 'Bebek Penyet Sambal Korek',
        harga: 'Rp 35.000',
        url: './assets/img/bebek-penyet-sambal-korek.webp',
      },
      {
        nama: 'Nasi Tutug Oncom',
        harga: 'Rp 35.000',
        url: './assets/img/nasi-tutug-oncom.webp',
      },
      {
        nama: 'Nasi Pindang Patin Palembang',
        harga: 'Rp 40.000',
        url: './assets/img/nasi-pindang-patin.webp',
      },
      {
        nama: 'Tahu Tempe Bacem',
        harga: 'Rp 7.000',
        url: './assets/img/tahu-tempe-bacem.webp',
      },
    ],
  },
  {
    category: 'Aneka Olahan Ayam',
    menu: [
      {
        nama: 'Ayam Betutu Bali ¼',
        harga: 'Rp 35.000',
        url: './assets/img/ayam-betutu-seperempat.webp',
      },
      {
        nama: 'Ayam Betutu Bali ½',
        harga: 'Rp 65.000',
        url: './assets/img/ayam-betutu-setengah.webp',
      },
      {
        nama: 'Ayam Betutu Bali 1 Ekor',
        harga: 'Rp 110.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Ayam Bakar Bumbu Rujak ¼',
        harga: 'Rp 35.000',
        url: './assets/img/ayam-bakar.webp',
      },
      {
        nama: 'Ayam Bakar Bumbu Rujak ½',
        harga: 'Rp 55.000',
        url: './assets/img/ayam-bakar.webp',
      },
      {
        nama: 'Ayam Bakar Bumbu Rujak 1 Ekor',
        harga: 'Rp 100.000',
        url: './assets/img/ayam-bakar.webp',
      },
      {
        nama: 'Nasi Ayam Geprek',
        harga: 'Rp 30.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Nasi Telur Geprek',
        harga: 'Rp 25.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Nasi Daun Jeruk Kulit Goreng',
        harga: 'Rp 25.000',
        url: './assets/img/nasi-daun-jeruk-kulit-goreng.webp',
      },
      {
        nama: 'Nasi Kulit Cabe Garam',
        harga: 'Rp 20.000',
        url: './assets/img/nasi-kulit-cabe-garam.webp',
      },
      {
        nama: 'Kulit Cabe Garam (Tanpa nasi)',
        harga: 'Rp 15.000',
        url: './assets/img/image-coming-soon.webp',
      },
    ],
  },
  {
    category: 'Aneka Olahan Sapi',
    menu: [
      {
        nama: 'Sop Iga',
        harga: 'Rp 40.000',
        url: './assets/img/sop-iga-sapi.webp',
      },
      {
        nama: 'Iga Bakar',
        harga: 'Rp 45.000',
        url: './assets/img/iga-bakar.webp',
      },
    ],
  },
  {
    category: 'Aneka Olahan Mie/Kwetiau',
    menu: [
      {
        nama: 'Mie Goreng Telur',
        harga: 'Rp 25.000',
        url: './assets/img/mie-goreng-telur.webp',
      },
      {
        nama: 'Mie Goreng Seafood',
        harga: 'Rp 30.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Kwetiau Siram Telur',
        harga: 'Rp 30.000',
        url: './assets/img/kwetiau-siram-telur.webp',
      },
      {
        nama: 'Kwetiau Siram Seafood',
        harga: 'Rp 32.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Kwetiau Goreng Telur',
        harga: 'Rp 25.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Kwetiau Goreng Seafood',
        harga: 'Rp 30.000',
        url: './assets/img/kwetiau-goreng-seafood.webp',
      },
    ],
  },
  {
    category: 'Aneka Olahan Nasi',
    menu: [
      {
        nama: 'Chicken Rice Bowl Teriyaki',
        harga: 'Rp 35.000',
        url: './assets/img/rice-bowl-teriyaki-chicken.webp',
      },
      {
        nama: 'Beef Bowl Sambal Matah',
        harga: 'Rp 35.000',
        url: './assets/img/beef-bowl-sambal-matah.webp',
      },
      {
        nama: 'Dori Bowl Sambal Matah',
        harga: 'Rp 35.000',
        url: './assets/img/dori.webp',
      },
      {
        nama: 'Nasi Goreng Hongkong',
        harga: 'Rp 30.000',
        url: './assets/img/nasi-goreng-hongkong.webp',
      },
      {
        nama: 'Nasi Goreng Rumahan',
        harga: 'Rp 25.000',
        url: './assets/img/nasi-goreng-rumahan.webp',
      },
      {
        nama: 'Nasi Goreng Putih',
        harga: 'Rp 25.000',
        url: './assets/img/nasi-goreng-putih.webp',
      },
      {
        nama: 'Nasi Goreng Seafood',
        harga: 'Rp 30.000',
        url: './assets/img/nasi-goreng-seafood.webp',
      },
      {
        nama: 'Nasi Putih',
        harga: 'Rp 8.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Nasi Tutug',
        harga: 'Rp 9.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Nasi Daun Jeruk',
        harga: 'Rp 9.000',
        url: './assets/img/image-coming-soon.webp',
      },
    ],
  },
  {
    category: 'Snack',
    menu: [
      {
        nama: 'French Fries',
        harga: 'Rp 15.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'French Fries + Cheese Sauce',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Popcorn Homemade',
        harga: 'Rp 25.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Snack Platter',
        harga: 'Rp 30.000',
        url: './assets/img/snack-platter.webp',
      },
      {
        nama: 'Fish & Chips',
        harga: 'Rp 35.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Pisang Laju',
        harga: 'Rp 15.000',
        url: './assets/img/pisang-laju.webp',
      },
      {
        nama: 'Pisang Crispy',
        harga: 'Rp 15.000',
        url: './assets/img/pisang-crispy.webp',
      },
      {
        nama: 'Pisang Goreng Srikaya',
        harga: 'Rp 15.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Pempek Sagu Goreng (10pcs)',
        harga: 'Rp 25.000',
        url: './assets/img/pempek-sagu.webp',
      },
      {
        nama: 'Pempek Kapal Selam',
        harga: 'Rp 27.000',
        url: './assets/img/pempek-kapal-selam.webp',
      },
      {
        nama: 'Martabak Kari',
        harga: 'Rp 25.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Roti Bakar Choco Crunchy',
        harga: 'Rp 12.000',
        url: './assets/img/roti-bakar.webp',
      },
      {
        nama: 'Roti Bakar Cokelat Keju',
        harga: 'Rp 15.000',
        url: './assets/img/roti-bakar.webp',
      },
      {
        nama: 'Roti Bakar Keju',
        harga: 'Rp 12.000',
        url: './assets/img/roti-bakar.webp',
      },
      {
        nama: 'Roti Bakar Blueberry',
        harga: 'Rp 15.000',
        url: './assets/img/roti-bakar.webp',
      },
    ],
  },
  {
    category: 'Tea',
    menu: [
      {
        nama: 'Teh Tawar Panas',
        harga: 'Rp 3.500',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Es Teh Tawar',
        harga: 'Rp 4.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Teh Manis Panas',
        harga: 'Rp 4.500',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Es Teh Manis',
        harga: 'Rp 5.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Liang Teh',
        harga: 'Rp 11.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Teh Lemon Jahe Panas',
        harga: 'Rp 12.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Es Teh Lemon Jahe',
        harga: 'Rp 15.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Teh Jahe',
        harga: 'Rp 9.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Es Teh Jahe',
        harga: 'Rp 10.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Susu Jahe Sereh Panas',
        harga: 'Rp 12.000',
        url: './assets/img/susu-jahe-sereh-panas.webp',
      },
      {
        nama: 'Es Susu Jahe Sereh',
        harga: 'Rp 15.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Teh Lemon Jahe Sereh Panas',
        harga: 'Rp 12.000',
        url: './assets/img/teh-lemon-jahe-sereh-panas.webp',
      },
      {
        nama: 'Es Teh Lemon Jahe Sereh',
        harga: 'Rp 14.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Creamy Thai Tea',
        harga: 'Rp 18.000',
        url: './assets/img/thai-tea.webp',
      },
      {
        nama: 'Milky Green Tea',
        harga: 'Rp 18.000',
        url: './assets/img/green-tea.webp',
      },
      {
        nama: 'Hot Lemon Blue Tea',
        harga: 'Rp 12.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Ice Lemon Blue Tea',
        harga: 'Rp 13.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Hot Lemon Tea',
        harga: 'Rp 10.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Ice Lemon Tea',
        harga: 'Rp 12.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Hot Lychee Tea',
        harga: 'Rp 12.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Ice Lychee Tea',
        harga: 'Rp 15.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Peach Gum',
        harga: 'Rp 25.000',
        url: './assets/img/image-coming-soon.webp',
      },
    ],
  },
  {
    category: 'Coffee',
    menu: [
      {
        nama: 'Affogato',
        harga: 'Rp 25.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Hot Coffee Latte',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Ice Coffee Latte',
        harga: 'Rp 25.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Hot Cappuccino',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Ice Cappuccino',
        harga: 'Rp 25.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Hot Caramel Macchiato',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Ice Caramel Macchiato',
        harga: 'Rp 25.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Hot Americano',
        harga: 'Rp 18.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Ice Americano',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Hot Long Black',
        harga: 'Rp 18.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Ice Long Black',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Espresso',
        harga: 'Rp 10.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Hot Mochaccino',
        harga: 'Rp 22.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Ice Mochaccino',
        harga: 'Rp 27.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Hot Chocolate',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Kopi Susu Gula Aren Panas',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Es Kopi Susu Gula Aren',
        harga: 'Rp 25.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Kopi Susu Regal Panas',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Es Kopi Susu Regal',
        harga: 'Rp 25.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Hot Green Tea Latte',
        harga: 'Rp 18.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Ice Green Tea Latte',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Ice Strawberry Latte',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Vanilla Frappuccino',
        harga: 'Rp 25.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Irish Coffee Frappe',
        harga: 'Rp 30.000',
        url: './assets/img/image-coming-soon.webp',
      },
    ],
  },
  {
    category: 'Milkshake / Iceshake',
    menu: [
      {
        nama: 'Oreo Milkshake',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Red Velvet Milkshake',
        harga: 'Rp 20.000',
        url: './assets/img/red-velvet-milkshake.webp',
      },
      {
        nama: 'Chocolate Milkshake',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Milo Milkshake',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Taro Milkshake',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Ice Chocolate',
        harga: 'Rp 22.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Ice Chocolate Strawberry',
        harga: 'Rp 25.000',
        url: './assets/img/ice-choco-strawberry.webp',
      },
      {
        nama: 'Ice Taro',
        harga: 'Rp 18.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Milky Regal',
        harga: 'Rp 18.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Ice Milo',
        harga: 'Rp 18.000',
        url: './assets/img/image-coming-soon.webp',
      },
    ],
  },
  {
    category: 'Mojito & Squash',
    menu: [
      {
        nama: 'Strawberry Mojito',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Orange Mojito',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Yakult Mojito',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Ice Purple',
        harga: 'Rp 18.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Lemon Squash',
        harga: 'Rp 18.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Sunrise Squash',
        harga: 'Rp 18.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Red Splash',
        harga: 'Rp 18.000',
        url: './assets/img/image-coming-soon.webp',
      },
    ],
  },
  {
    category: 'Juice',
    menu: [
      {
        nama: 'Strawberry Juice',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Dragon Berry Juice',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Soursop Juice',
        harga: 'Rp 18.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Mango Juice',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Guava Juice',
        harga: 'Rp 20.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Avocado',
        harga: 'Rp 22.000',
        url: './assets/img/image-coming-soon.webp',
      },
    ],
  },
  {
    category: 'Soft Drink',
    menu: [
      {
        nama: 'Happy Soda',
        harga: 'Rp 15.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'Milky Cola',
        harga: 'Rp 15.000',
        url: './assets/img/image-coming-soon.webp',
      },
      {
        nama: 'CocaCola / Fanta / Sprite',
        harga: 'Rp 5.000',
        url: './assets/img/cocacola-fanta-sprite.webp',
      },
      {
        nama: 'Pristine8.6+ 600ml',
        harga: 'Rp 8.000',
        url: './assets/img/image-coming-soon.webp',
      },
    ],
  },
];

// Image size 300 x 250px
const menuCatering = [
  {
    nama: 'Nasi Kuning',
    deskripsi:
      'Nasi kuning, ayam goreng, mie/soun goreng jawa, sambal goreng kentang ati ampela, telur balado, dan orek tempe. Sudah termasuk sambal dan kerupuk. (Minimum order 20 box)',
    harga: 'Start from Rp 35.000 / box',
    url: './assets/img/catering-nasi-kuning.webp',
  },
  {
    nama: 'Nasi Bogana',
    deskripsi:
      'Nasi putih, opor ayam, sambal goreng kentang, telur pindang, orek tempe, tumis kacang panjang, serundeng. Sudah termasuk sambal dan kerupuk. (Minimum order 20 box)',
    harga: 'Start from Rp 35.000 / box',
    url: './assets/img/catering-nasi-bogana.webp',
  },
  {
    nama: 'Nasi Langgi',
    deskripsi:
      'Nasi putih, ayam goreng, sambal goreng kentang / tumis buncis, telur dadar iris, kering kentang, serundeng. Sudah termasuk sambal dan kerupuk. (Minimum order 20 box)',
    harga: 'Start from Rp 35.000 / box',
    url: './assets/img/catering-nasi-langgi.webp',
  },
];

export { info, menuPricelist, menuCatering };
