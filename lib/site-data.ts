export type HeroSlide = {
  image: string
  alt: string
  label: string
  /** intrinsic size, used to reserve the box before the bytes land */
  width: number
  height: number
  /** object-position applied to the mobile hero only (see .hero-slide in globals.css) */
  position: string
}

export const heroSlides: HeroSlide[] = [
  { image: '/images/erb-hero.png', alt: 'Cappuccino and fresh croissant on a sunny cafe table', label: 'Coffee, pastry and a little pause.', width: 768, height: 1376, position: 'center 50%' },
  { image: '/images/erb-bakery.png', alt: 'Fresh almond croissants on a bakery counter', label: 'Baked warm every morning.', width: 1408, height: 768, position: '36% center' },
  { image: '/images/erb-cafe.png', alt: 'Sunlit interior of the E.R.B cafe', label: 'A good place to stay awhile.', width: 1408, height: 768, position: '42% center' },
  { image: '/images/erb-hero.png', alt: 'Fresh coffee served at E.R.B', label: 'Roasted in-house, served with care.', width: 768, height: 1376, position: 'center 50%' },
]

export const instagramImages = [
  { src: '/images/erb-hero.png', alt: 'Cappuccino at E.R.B' },
  { src: '/images/erb-bakery.png', alt: 'Fresh E.R.B bakery' },
  { src: '/images/erb-cafe.png', alt: 'E.R.B cafe interior' },
]

export const contact = {
  address: '14 Marmeruon, Al Azritah, Alexandria',
  hours: '07:00 AM — 02:00 AM',
  phone: '010 5565 1338',
  phoneHref: 'tel:01055651338',
  instagram: 'https://www.instagram.com/erb.egypt/',
  map: 'https://maps.google.com/?q=14+Marmeruon+Al+Azritah+Alexandria',
}

export const menuSections = [
  { title: 'Coffee', items: [['Espresso', 'Short and bold', '70 EGP'], ['Cortado', 'Silky, balanced and small', '95 EGP'], ['Flat White', 'Double espresso with velvety milk', '110 EGP'], ['Cappuccino', 'Espresso, milk and soft foam', '110 EGP']] },
  { title: 'Cold drinks', items: [['Iced Spanish Latte', 'Espresso, condensed milk and ice', '135 EGP'], ['Iced Americano', 'Espresso over ice and water', '95 EGP'], ['Cold Brew', 'Slow-steeped, smooth and bright', '120 EGP']] },
  { title: 'Breakfast', items: [['Eggs on toast', 'Fresh eggs, sourdough and greens', '185 EGP'], ['Granola bowl', 'Yogurt, fruit and house granola', '165 EGP'], ['Avocado toast', 'Sourdough, avocado and lemon', '190 EGP']] },
  { title: 'Bakery & pastries', items: [['Butter Croissant', 'Flaky, buttery and baked fresh', '95 EGP'], ['Almond Croissant', 'Croissant with almond cream', '120 EGP'], ['Chocolate Cookie', 'Baked warm with dark chocolate', '85 EGP'], ['Seasonal pastry', 'Ask us what is fresh today', '—']] },
]

export const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-X8h9SQ81dAUqEwdnZ6kEYI5bVNbfQp.png'

export type MenuSection = (typeof menuSections)[number]
export type MenuItem = MenuSection['items'][number]
