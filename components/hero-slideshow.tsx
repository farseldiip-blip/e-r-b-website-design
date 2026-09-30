'use client'

import Link from 'next/link'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState, type CSSProperties } from 'react'
import { heroSlides } from '@/lib/site-data'

export function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const activeSlide = heroSlides[activeIndex]

  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(() => setActiveIndex((index) => (index + 1) % heroSlides.length), 5000)
    return () => window.clearInterval(timer)
  }, [paused])

  const goTo = (index: number) => {
    setActiveIndex((index + heroSlides.length) % heroSlides.length)
    setPaused(true)
  }

  return (
    <section className="hero" id="top" aria-label="E.R.B cafe introduction">
      <div className="hero-copy">
        <p className="eyebrow">Alexandria · Fresh every day</p>
        <h1>Fresh<br /><em>from our</em><br />heart.</h1>
        <div className="hero-bottom"><p>European roasting, daily baking,<br />and good coffee for your day.</p><div className="hero-actions"><Link className="hero-cta" href="/menu">View menu <ArrowUpRight /></Link><Link className="hero-cta-secondary" href="/#visit">Visit us <ArrowUpRight /></Link></div></div>
      </div>
      <div className="hero-image-wrap" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        {heroSlides.map((slide, index) => <img key={slide.image + index} className={`hero-slide ${index === activeIndex ? 'is-active' : ''}`} src={slide.image} alt={index === activeIndex ? slide.alt : ''} aria-hidden={index !== activeIndex} width={slide.width} height={slide.height} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} decoding={index === 0 ? 'sync' : 'async'} style={{ '--hero-pos': slide.position } as CSSProperties} />)}
        <div className="hero-stamp">E.R.B<br /><span>Alexandria</span></div>
        <p className="image-caption" aria-live="polite">{activeSlide.label}</p>
        <div className="hero-controls"><button type="button" aria-label="Previous hero image" onClick={() => goTo(activeIndex - 1)}><ChevronLeft /></button><span>{String(activeIndex + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}</span><button type="button" aria-label="Next hero image" onClick={() => goTo(activeIndex + 1)}><ChevronRight /></button></div>
      </div>
    </section>
  )
}
