import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleHomeClick = () => {
            if (window.location.pathname === '/') {
                window.scrollTo(0, 0);
            }
        };
        window.addEventListener('popstate', handleHomeClick);
        return () => window.removeEventListener('popstate', handleHomeClick);
    }, []);

    const handleHomeClick = (e) => {
        e.preventDefault();
        window.history.replaceState(null, '', '/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const styles = {
        header: {
            background: 'transparent',
            color: '#e2e8f0',
            backdropFilter: 'blur(16px)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            padding: '1rem 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
        container: {
            maxWidth: '90vw',
            margin: '0 auto',
            padding: '0 1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
        },
        logoLink: {
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            gap: '1rem',
        },
        logo: {
            height: '3.5rem',
            width: 'auto',
            transition: 'transform 0.3s ease',
        },
        brandText: {
            display: 'flex',
            flexDirection: 'column',
        },
        brandName: {
            fontSize: '1.5rem',
            fontWeight: '700',
            background: 'white',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
        },
        brandSub: {
            color: '#94a3b8',
            margin: 0,
            fontSize: '0.8rem',
        },
        hamburger: {
            display: 'none',
            fontSize: '1.8rem',
            background: 'none',
            border: 'none',
            color: '#e2e8f0',
            cursor: 'pointer',
        },
        navMenuDesktop: {
            display: 'flex',
            gap: '1rem',
            listStyle: 'none',
            margin: 0,
            padding: '0.3rem',
            background: 'rgba(30, 41, 59, 0.6)',
            borderRadius: '50px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        navMenuMobile: {
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(15, 23, 42, 0.95)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.2rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
        },
        navLink: {
            color: '#e2e8f0',
            textDecoration: 'none',
            padding: '0.6rem 1rem',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: 500,
        },
        ctaButton: {
            background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
            color: 'white',
            padding: '0.6rem 1.5rem',
            borderRadius: '50px',
            fontWeight: '600',
            textDecoration: 'none',
            fontSize: '0.95rem',
            transition: 'all 0.3s ease',
        },
    };

    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <Link to="/" style={styles.logoLink} onClick={handleHomeClick}>
                    <img
                        src={logo}
                        alt="Suryashine Logo"
                        style={styles.logo}
                        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <div style={styles.brandText}>
                        <h1 style={styles.brandName}>Suryashine</h1>
                        <p style={styles.brandSub}>Digital Solutions</p>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={{ display: 'none' }}>
                    <ul style={styles.navMenuDesktop}>
                        {["Home", "About", "Services", "Industries"].map((item) => (
                            <li key={item}>
                                <Link
                                    to={`/${item.toLowerCase()}`}
                                    style={styles.navLink}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop CTA */}
                <div className="desktop-cta" style={{ display: 'none' }}>
                    <Link
                        to="/contact"
                        style={styles.ctaButton}
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={styles.hamburger}
                    className="hamburger-btn"
                >
                    {menuOpen ? '✖' : '☰'}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div style={styles.navMenuMobile}>
                    {["Home", "About", "Services", "Industries"].map((item) => (
                        <Link
                            key={item}
                            to={`/${item.toLowerCase()}`}
                            style={styles.navLink}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        style={styles.ctaButton}
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact Us
                    </Link>
                </div>
            )}

            {/* Responsive Style Tags */}
            <style>{`
                @media (min-width: 768px) {
                    .desktop-nav {
                        display: block !important;
                    }
                    .desktop-cta {
                        display: block !important;
                    }
                    .hamburger-btn {
                        display: none !important;
                    }
                }

                @media (max-width: 767px) {
                    .hamburger-btn {
                        display: block !important;
                    }
                    .desktop-nav,
                    .desktop-cta {
                        display: none !important;
                    }
                }
            `}</style>
        </header>
    );
}
