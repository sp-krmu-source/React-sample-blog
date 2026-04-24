import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/bollywood">Bollywood</Link>
      <Link to="/hollywood">Hollywood</Link>
      <Link to="/">Tech</Link>
      <Link to="/">Fitness</Link>
      <Link to="/">Food</Link>
    </div>
  )
}

export default Navbar


// import React, { useState, useEffect, useRef } from 'react'
// import { Link, useLocation } from 'react-router-dom'

// const navLinks = [
//   { to: '/', label: 'Home', icon: '⌂' },
//   { to: '/bollywood', label: 'Bollywood', icon: '✦' },
//   { to: '/hollywood', label: 'Hollywood', icon: '◈' },
//   { to: '/technology', label: 'Technology', icon: '⟁' },
//   { to: '/fitness', label: 'Fitness', icon: '◉' },
//   { to: '/food', label: 'Food', icon: '✿' },
// ]

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [hoveredIndex, setHoveredIndex] = useState(null)
//   const location = useLocation()
//   const menuRef = useRef(null)

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20)
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (menuRef.current && !menuRef.current.contains(e.target)) {
//         setMenuOpen(false)
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside)
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [])

//   useEffect(() => {
//     setMenuOpen(false)
//   }, [location])

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

//         :root {
//           --bg-base: #080b10;
//           --bg-nav: rgba(8, 11, 16, 0.85);
//           --bg-nav-scrolled: rgba(6, 8, 14, 0.97);
//           --accent-1: #7b6dff;
//           --accent-2: #e05fff;
//           --accent-glow: rgba(123, 109, 255, 0.35);
//           --accent-glow-2: rgba(224, 95, 255, 0.25);
//           --text-primary: #f0eeff;
//           --text-muted: #7a7a9a;
//           --border: rgba(123, 109, 255, 0.18);
//           --hover-bg: rgba(123, 109, 255, 0.1);
//           --active-bg: rgba(123, 109, 255, 0.18);
//           --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         * { box-sizing: border-box; margin: 0; padding: 0; }

//         .nav-wrapper {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           z-index: 1000;
//           padding: 0 1.5rem;
//           transition: all var(--transition);
//         }

//         .nav-inner {
//           max-width: 1280px;
//           margin: 0 auto;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 68px;
//           padding: 0 1.25rem;
//           background: var(--bg-nav);
//           border: 1px solid var(--border);
//           border-radius: 0 0 1.5rem 1.5rem;
//           backdrop-filter: blur(20px) saturate(180%);
//           -webkit-backdrop-filter: blur(20px) saturate(180%);
//           transition: all var(--transition);
//           position: relative;
//           overflow: hidden;
//         }

//         .nav-inner::before {
//           content: '';
//           position: absolute;
//           top: -1px;
//           left: 10%;
//           right: 10%;
//           height: 1px;
//           background: linear-gradient(90deg, transparent, var(--accent-1), var(--accent-2), transparent);
//           opacity: 0.7;
//         }

//         .nav-inner.scrolled {
//           background: var(--bg-nav-scrolled);
//           box-shadow:
//             0 0 0 1px var(--border),
//             0 8px 32px rgba(0,0,0,0.6),
//             0 0 60px var(--accent-glow);
//         }

//         /* LOGO */
//         .nav-logo {
//           font-family: 'Syne', sans-serif;
//           font-weight: 800;
//           font-size: 1.35rem;
//           letter-spacing: -0.03em;
//           text-decoration: none;
//           color: var(--text-primary);
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           position: relative;
//           z-index: 1;
//           transition: opacity 0.2s;
//         }

//         .nav-logo:hover { opacity: 0.85; }

//         .logo-badge {
//           width: 32px;
//           height: 32px;
//           border-radius: 8px;
//           background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 0.85rem;
//           box-shadow: 0 0 16px var(--accent-glow);
//           position: relative;
//           overflow: hidden;
//           animation: badge-pulse 3s ease-in-out infinite;
//         }

//         @keyframes badge-pulse {
//           0%, 100% { box-shadow: 0 0 12px var(--accent-glow); }
//           50% { box-shadow: 0 0 24px var(--accent-glow), 0 0 40px var(--accent-glow-2); }
//         }

//         .logo-text-main { color: var(--text-primary); }
//         .logo-text-accent {
//           background: linear-gradient(90deg, var(--accent-1), var(--accent-2));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         /* DESKTOP LINKS */
//         .nav-links {
//           display: flex;
//           align-items: center;
//           gap: 0.25rem;
//           list-style: none;
//         }

//         .nav-link-item { position: relative; }

//         .nav-link {
//           font-family: 'DM Sans', sans-serif;
//           font-weight: 500;
//           font-size: 0.875rem;
//           letter-spacing: 0.02em;
//           text-decoration: none;
//           color: var(--text-muted);
//           padding: 0.5rem 0.85rem;
//           border-radius: 10px;
//           display: flex;
//           align-items: center;
//           gap: 0.4rem;
//           position: relative;
//           transition: color 0.25s ease, background 0.25s ease;
//           white-space: nowrap;
//         }

//         .nav-link-icon {
//           font-size: 0.75rem;
//           opacity: 0;
//           transform: translateY(2px);
//           transition: opacity 0.2s ease, transform 0.2s ease;
//         }

//         .nav-link:hover .nav-link-icon,
//         .nav-link.active .nav-link-icon {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .nav-link:hover {
//           color: var(--text-primary);
//           background: var(--hover-bg);
//         }

//         .nav-link.active {
//           color: var(--accent-1);
//           background: var(--active-bg);
//         }

//         .nav-link-underline {
//           position: absolute;
//           bottom: 4px;
//           left: 50%;
//           transform: translateX(-50%) scaleX(0);
//           height: 1.5px;
//           width: calc(100% - 1.4rem);
//           background: linear-gradient(90deg, var(--accent-1), var(--accent-2));
//           border-radius: 9999px;
//           transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
//           transform-origin: center;
//         }

//         .nav-link:hover .nav-link-underline,
//         .nav-link.active .nav-link-underline {
//           transform: translateX(-50%) scaleX(1);
//         }

//         /* HOVER GLOW BLOB */
//         .nav-hover-blob {
//           position: absolute;
//           inset: 0;
//           border-radius: 10px;
//           background: radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%);
//           opacity: 0;
//           transition: opacity 0.3s ease;
//           pointer-events: none;
//         }

//         .nav-link:hover .nav-hover-blob { opacity: 1; }

//         /* CTA Button */
//         .nav-cta {
//           font-family: 'Syne', sans-serif;
//           font-weight: 600;
//           font-size: 0.8rem;
//           letter-spacing: 0.06em;
//           text-transform: uppercase;
//           padding: 0.5rem 1.1rem;
//           background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
//           color: #fff;
//           border: none;
//           border-radius: 10px;
//           cursor: pointer;
//           text-decoration: none;
//           position: relative;
//           overflow: hidden;
//           transition: transform 0.2s ease, box-shadow 0.2s ease;
//           box-shadow: 0 0 20px var(--accent-glow);
//           display: flex;
//           align-items: center;
//           gap: 0.4rem;
//           margin-left: 0.5rem;
//         }

//         .nav-cta::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(135deg, var(--accent-2), var(--accent-1));
//           opacity: 0;
//           transition: opacity 0.3s ease;
//         }

//         .nav-cta:hover::before { opacity: 1; }
//         .nav-cta span { position: relative; z-index: 1; }

//         .nav-cta:hover {
//           transform: translateY(-1px);
//           box-shadow: 0 4px 24px var(--accent-glow), 0 0 40px var(--accent-glow-2);
//         }

//         .nav-cta:active { transform: translateY(0); }

//         /* HAMBURGER */
//         .hamburger {
//           display: none;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           gap: 5px;
//           width: 40px;
//           height: 40px;
//           border: 1px solid var(--border);
//           border-radius: 10px;
//           background: var(--hover-bg);
//           cursor: pointer;
//           transition: background var(--transition), border-color var(--transition);
//           position: relative;
//           z-index: 20;
//         }

//         .hamburger:hover {
//           background: var(--active-bg);
//           border-color: var(--accent-1);
//           box-shadow: 0 0 12px var(--accent-glow);
//         }

//         .ham-line {
//           width: 18px;
//           height: 1.5px;
//           background: var(--text-muted);
//           border-radius: 9999px;
//           transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
//           transform-origin: center;
//         }

//         .hamburger.open .ham-line:nth-child(1) {
//           transform: translateY(6.5px) rotate(45deg);
//           background: var(--accent-1);
//           width: 20px;
//         }

//         .hamburger.open .ham-line:nth-child(2) {
//           opacity: 0;
//           transform: scaleX(0);
//         }

//         .hamburger.open .ham-line:nth-child(3) {
//           transform: translateY(-6.5px) rotate(-45deg);
//           background: var(--accent-2);
//           width: 20px;
//         }

//         /* MOBILE MENU */
//         .mobile-menu {
//           display: none;
//           position: absolute;
//           top: calc(100% + 0.5rem);
//           left: 0;
//           right: 0;
//           background: rgba(10, 12, 20, 0.97);
//           border: 1px solid var(--border);
//           border-radius: 1.25rem;
//           padding: 1rem;
//           backdrop-filter: blur(24px);
//           -webkit-backdrop-filter: blur(24px);
//           box-shadow: 0 16px 48px rgba(0,0,0,0.7), 0 0 40px var(--accent-glow);
//           overflow: hidden;
//         }

//         .mobile-menu::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 10%;
//           right: 10%;
//           height: 1px;
//           background: linear-gradient(90deg, transparent, var(--accent-1), var(--accent-2), transparent);
//         }

//         .mobile-menu.open { display: block; animation: slideDown 0.3s cubic-bezier(0.4,0,0.2,1); }

//         @keyframes slideDown {
//           from { opacity: 0; transform: translateY(-12px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .mobile-link {
//           font-family: 'DM Sans', sans-serif;
//           font-weight: 500;
//           font-size: 0.95rem;
//           text-decoration: none;
//           color: var(--text-muted);
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           padding: 0.75rem 1rem;
//           border-radius: 10px;
//           transition: all 0.2s ease;
//           position: relative;
//           overflow: hidden;
//         }

//         .mobile-link::before {
//           content: '';
//           position: absolute;
//           left: 0;
//           top: 0;
//           bottom: 0;
//           width: 2px;
//           background: linear-gradient(180deg, var(--accent-1), var(--accent-2));
//           opacity: 0;
//           transition: opacity 0.2s ease;
//           border-radius: 9999px;
//         }

//         .mobile-link:hover, .mobile-link.active {
//           color: var(--text-primary);
//           background: var(--hover-bg);
//         }

//         .mobile-link:hover::before,
//         .mobile-link.active::before { opacity: 1; }

//         .mobile-link.active { color: var(--accent-1); }

//         .mobile-link-icon {
//           width: 32px;
//           height: 32px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 8px;
//           background: rgba(123, 109, 255, 0.1);
//           font-size: 0.85rem;
//           flex-shrink: 0;
//         }

//         .mobile-link.active .mobile-link-icon {
//           background: rgba(123, 109, 255, 0.2);
//         }

//         .mobile-divider {
//           height: 1px;
//           background: var(--border);
//           margin: 0.75rem 0;
//         }

//         .mobile-cta-wrap {
//           padding: 0 0 0.25rem;
//         }

//         .mobile-cta {
//           font-family: 'Syne', sans-serif;
//           font-weight: 600;
//           font-size: 0.85rem;
//           letter-spacing: 0.05em;
//           text-transform: uppercase;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 0.5rem;
//           padding: 0.75rem;
//           background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
//           color: #fff;
//           border-radius: 10px;
//           text-decoration: none;
//           transition: opacity 0.2s, transform 0.2s;
//           box-shadow: 0 0 20px var(--accent-glow);
//         }

//         .mobile-cta:hover { opacity: 0.9; transform: translateY(-1px); }

//         /* STAGGER ANIMATION */
//         .mobile-link { animation: fadeInUp 0.3s ease both; }
//         .mobile-link:nth-child(1) { animation-delay: 0.04s; }
//         .mobile-link:nth-child(2) { animation-delay: 0.08s; }
//         .mobile-link:nth-child(3) { animation-delay: 0.12s; }
//         .mobile-link:nth-child(4) { animation-delay: 0.16s; }
//         .mobile-link:nth-child(5) { animation-delay: 0.20s; }
//         .mobile-link:nth-child(6) { animation-delay: 0.24s; }

//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         /* RESPONSIVE */
//         @media (max-width: 900px) {
//           .nav-links, .nav-cta { display: none; }
//           .hamburger { display: flex; }
//           .nav-inner { position: relative; overflow: visible; }
//         }

//         @media (max-width: 480px) {
//           .nav-wrapper { padding: 0 0.75rem; }
//           .nav-inner { padding: 0 0.85rem; }
//           .logo-text-main { display: none; }
//         }
//       `}</style>

//       <nav className="nav-wrapper" ref={menuRef}>
//         <div className={`nav-inner ${scrolled ? 'scrolled' : ''}`}>
//           {/* LOGO */}
//           <Link to="/" className="nav-logo">
//             <div className="logo-badge">✦</div>
//             <span className="logo-text-main">Pulse<span className="logo-text-accent">Media</span></span>
//           </Link>

//           {/* DESKTOP LINKS */}
//           <ul className="nav-links">
//             {navLinks.map((link, i) => (
//               <li className="nav-link-item" key={link.to}>
//                 <Link
//                   to={link.to}
//                   className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
//                   onMouseEnter={() => setHoveredIndex(i)}
//                   onMouseLeave={() => setHoveredIndex(null)}
//                 >
//                   <div className="nav-hover-blob" />
//                   <span className="nav-link-icon">{link.icon}</span>
//                   {link.label}
//                   <div className="nav-link-underline" />
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* CTA */}
//           <Link to="/subscribe" className="nav-cta">
//             <span>✦</span>
//             <span>Subscribe</span>
//           </Link>

//           {/* HAMBURGER */}
//           <button
//             className={`hamburger ${menuOpen ? 'open' : ''}`}
//             onClick={() => setMenuOpen(prev => !prev)}
//             aria-label="Toggle menu"
//           >
//             <div className="ham-line" />
//             <div className="ham-line" />
//             <div className="ham-line" />
//           </button>

//           {/* MOBILE MENU */}
//           <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
//             {navLinks.map(link => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className={`mobile-link ${location.pathname === link.to ? 'active' : ''}`}
//               >
//                 <span className="mobile-link-icon">{link.icon}</span>
//                 {link.label}
//               </Link>
//             ))}
//             <div className="mobile-divider" />
//             <div className="mobile-cta-wrap">
//               <Link to="/subscribe" className="mobile-cta">
//                 <span>✦</span>
//                 <span>Subscribe Now</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Navbar