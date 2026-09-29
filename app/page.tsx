'use client'

import Link from 'next/link'
import { ArrowUpRight, Clock3,  MapPin, Menu as MenuIcon, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { HeroSlideshow } from '@/components/hero-slideshow'
import { contact, instagramImages, logo } from '@/lib/site-data'

function Header() {
  const [open, setOpen] = useState(false)
  return <>
    <header className="site-header">
      <Link className="brand-lockup" href="/" aria-label="E.R.B home"><img src={logo} alt="E.R.B logo" /><span>European Roastery &amp; Bakery</span></Link>
      <nav className="desktop-nav" aria-label="Main navigation"><Link href="/">Home</Link><Link href="/menu">Menu</Link><Link href="/#story">Our story</Link><Link href="/#visit">Visit us</Link></nav>
      <a className="header-order" href="tel:01055651338">Call / delivery <ArrowUpRight size={15} /></a>
      <button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <MenuIcon />}</button>
    </header>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation"><Link onClick={() => setOpen(false)} href="/">Home <ArrowUpRight /></Link><Link onClick={() => setOpen(false)} href="/menu">Menu <ArrowUpRight /></Link><Link onClick={() => setOpen(false)} href="/#story">Our story <ArrowUpRight /></Link><Link onClick={() => setOpen(false)} href="/#visit">Visit us <ArrowUpRight /></Link><a href="tel:01055651338">Call to order <Phone /></a></nav>}
    <nav className="mobile-bottom-nav" aria-label="Quick navigation"><Link href="/">Home</Link><Link className="bottom-menu" href="/menu">Menu</Link><Link href="/#visit">Visit</Link><a href="tel:01055651338">Call</a><button onClick={() => setOpen(true)}>More</button></nav>
  </>
}

export default function Page() {
  return <main className="erb-site"><Header />
    <HeroSlideshow />

    <section className="manifesto" id="story"><p className="section-kicker">01 / Our story</p><div className="manifesto-main"><h2>A place for<br /><span>the everyday.</span></h2><div className="manifesto-text"><p>E.R.B is a roastery and bakery in Alexandria. We roast our coffee, bake fresh each morning, and make simple things well.</p><Link className="text-link" href="/menu">See our menu <ArrowUpRight size={15} /></Link></div></div><div className="manifesto-rule" /><div className="manifesto-notes"><span>Roasted in-house</span><span>Baked every morning</span><span>Made with feeling</span></div></section>

    <section className="menu-section"><div className="menu-heading"><div><p className="section-kicker">02 / From the counter</p><h2>Good things,<br /><em>made daily.</em></h2></div><p className="menu-intro">Coffee, breakfast and fresh bakery. Easy to choose, nice to stay for.</p></div><div className="featured-menu"><article><span>01</span><h3>Specialty coffee</h3><p>Espresso, flat whites and iced favorites.</p></article><article><span>02</span><h3>Fresh bakery</h3><p>Croissants, cookies and something warm.</p></article><article><span>03</span><h3>Breakfast</h3><p>Simple plates for slow mornings.</p></article></div><Link className="solid-link dark-link" href="/menu">View the full menu <ArrowUpRight size={16} /></Link></section>

    <section className="editorial-break"><div className="editorial-image"><img src="/images/erb-bakery.png" alt="Fresh almond croissants on a bakery counter" /></div><div className="editorial-copy"><p className="section-kicker">03 / Take your time</p><h2>Not just a coffee.<br /><em>A little pause.</em></h2><p>There is always time for a seat in the sun, the sound of ice, and something warm wrapped in paper for the road.</p><span className="hand-note">made fresh<br />with feeling</span></div></section>

    <section className="visit-section" id="visit"><div><p className="section-kicker">04 / Come by</p><h2>Visit<br /><em>E.R.B.</em></h2><div className="visit-actions"><a className="solid-link" href="https://maps.google.com/?q=14+Marmeruon+Al+Azritah+Alexandria" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16} /></a><a className="text-link" href="tel:01055651338">Call us <Phone size={15} /></a></div></div><div className="visit-details"><div className="detail"><MapPin /><div><span>Find us</span><p>14 Marmeruon,<br />Al Azritah, Alexandria</p></div></div><div className="detail"><Clock3 /><div><span>Open daily</span><p>07:00 AM — 02:00 AM</p></div></div><div className="detail"><Phone /><div><span>Delivery</span><p><a href="tel:01055651338">010 5565 1338</a></p></div></div></div></section>

    <section className="instagram-section"><div><p className="section-kicker">05 / Follow along</p><h2>From our<br /><em>table to yours.</em></h2></div><div className="instagram-grid">{instagramImages.map((image, i) => <a key={image.src} href={contact.instagram} target="_blank" rel="noreferrer"><img src={image.src} alt={image.alt} />{i === 1 && <span>Follow us</span>}</a>)}</div></section>

    <footer className="site-footer"><div className="footer-brand"><img src={logo} alt="E.R.B logo" /><div><strong>E.R.B</strong><p>European Roastery &amp; Bakery<br />Fresh from our heart.</p></div></div><div className="footer-links"><Link href="/menu">Menu</Link><Link href="/#story">Our story</Link><Link href="/#visit">Visit us</Link><a href="https://www.instagram.com/erb.egypt/">Instagram</a></div><div className="footer-contact">Alexandria — 14 Marmeruon, Al Azritah<br />07:00 AM — 02:00 AM<br /><a href="tel:01055651338">010 5565 1338</a></div></footer>
  </main>
}
