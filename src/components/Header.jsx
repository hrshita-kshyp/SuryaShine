import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import logo from '../assets/logo.png';

export default function Header() {
    // Reset scroll position on home navigation
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
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const styles = {
        header: {
            background: 'transparent',
            color: '#e2e8f0',
            backdropFilter: 'blur(16px)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            padding: '12px 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        },
        container: {
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        logoLink: {
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            gap: '16px'
        },
        logo: {
            height: '60px', // Larger logo size
            width: 'auto',
            transform: 'scale(1.2)', // Zoomed out effect
            transition: 'transform 0.3s ease'
        },
        brandText: {
            display: 'flex',
            flexDirection: 'column'
        },
        brandName: {
            fontSize: '1.8rem',
            fontWeight: '700',
            background: 'white',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
        },
        navContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '24px'
        },
        navLinks: {
            display: 'flex',
            gap: '4px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            background: 'rgba(30, 41, 59, 0.6)',
            borderRadius: '50px',
            padding: '6px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
        },
        navItem: {
            position: 'relative'
        },
        navLink: {
            color: '#e2e8f0',
            textDecoration: 'none',
            padding: '12px 24px',
            borderRadius: '50px',
            display: 'block',
            transition: 'all 0.3s ease'
        },
        ctaButton: {
            background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
            color: 'white',
            padding: '12px 28px',
            borderRadius: '50px',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
        }
    };

    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <Link
                    to="/"
                    style={styles.logoLink}
                    onClick={handleHomeClick}
                >
                    <img
                        src={logo}
                        alt="Suryashine Logo"
                        style={styles.logo}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.3)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                    />
                    <div style={styles.brandText}>
                        <h1 style={styles.brandName}>Suryashine</h1>
                        <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Digital Solutions</p>
                    </div>
                </Link>

                <div style={styles.navContainer}>
                    <nav>
                        <ul style={styles.navLinks}>
                            <li style={styles.navItem}>
                                <Link
                                    to="/"
                                    style={styles.navLink}
                                    onClick={handleHomeClick}
                                >
                                    Home
                                </Link>
                            </li>
                            {['About', 'Services', 'Industries'].map((item) => (
                                <li key={item} style={styles.navItem}>
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
                    <Link
                        to="/contact"
                        style={styles.ctaButton}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </header>
    );
}