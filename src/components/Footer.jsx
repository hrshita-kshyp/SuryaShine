import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
    const styles = {
        footer: {
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            color: '#ffffff',
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            position: 'relative',
            overflow: 'hidden'
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none'
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '60px 30px 30px',
            position: 'relative',
            zIndex: 1
        },
        topSection: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '50px',
            marginBottom: '50px'
        },
        brandSection: {
            gridColumn: 'span 2',
            maxWidth: '500px'
        },
        brandHeader: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '12px'
        },
        logo: {
            height: '40px',
            width: 'auto'
        },
        logoText: {
            fontSize: '2.5rem',
            fontWeight: '700',
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
            letterSpacing: '-0.02em'
        },
        tagline: {
            fontSize: '1.2rem',
            color: '#60a5fa',
            fontWeight: '500',
            marginBottom: '20px',
            letterSpacing: '0.5px'
        },
        description: {
            color: '#cbd5e1',
            fontSize: '1rem',
            lineHeight: '1.7',
            marginBottom: '30px'
        },
        contactInfo: {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
        },
        contactItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            transition: 'transform 0.3s ease'
        },
        contactIcon: {
            width: '24px',
            height: '24px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 'bold'
        },
        emailIcon: {
            background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)'
        },
        phoneIcon: {
            background: 'linear-gradient(45deg, #10b981, #059669)'
        },
        contactLink: {
            color: '#e2e8f0',
            textDecoration: 'none',
            fontSize: '0.95rem',
            transition: 'color 0.3s ease'
        },
        sectionTitle: {
            fontSize: '1.3rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '25px',
            position: 'relative',
            paddingBottom: '12px'
        },
        sectionTitleBorder: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '40px',
            height: '3px',
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
            borderRadius: '2px'
        },
        linksList: {
            listStyle: 'none',
            padding: 0,
            margin: 0
        },
        linkItem: {
            marginBottom: '12px'
        },
        link: {
            color: '#cbd5e1',
            textDecoration: 'none',
            fontSize: '0.95rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.3s ease',
            padding: '10px 16px',
            borderRadius: '8px',
            background: 'rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '8px'
        },
        socialSection: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
        },
        socialLinks: {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
        },
        socialLink: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: '#cbd5e1',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            padding: '10px 0'
        },
        socialIcon: {
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
        },
        linkedinIcon: {
            background: 'linear-gradient(45deg, #0077b5, #005885)'
        },
        twitterIcon: {
            background: 'linear-gradient(45deg, #000000, #1c1c1c)'
        },
        bottomSection: {
            borderTop: '1px solid rgba(148, 163, 184, 0.2)',
            paddingTop: '30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
        },
        copyright: {
            color: '#94a3b8',
            fontSize: '0.9rem'
        },
        legalLinks: {
            display: 'flex',
            gap: '25px',
            flexWrap: 'wrap'
        },
        legalLink: {
            color: '#94a3b8',
            textDecoration: 'none',
            fontSize: '0.9rem',
            transition: 'color 0.3s ease'
        }
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.overlay}></div>
            <div style={styles.container}>
                <div style={styles.topSection}>
                    {/* Brand Section - Updated with logo */}
                    <div style={styles.brandSection}>
                        <div style={styles.brandHeader}>
                            <img src={logo} alt="Suryashine Logo" style={styles.logo} />
                            <h2 style={styles.logoText}>Suryashine</h2>
                        </div>
                        <p style={styles.tagline}>Empowering Your Tech Edge</p>
                        <p style={styles.description}>
                            We deliver cutting-edge digital solutions that transform businesses and drive innovation across industries. Our expertise spans modern web development, cloud solutions, and enterprise software development.
                        </p>

                        <div style={styles.contactInfo}>
                            <div style={styles.contactItem}>
                                <div style={{ ...styles.contactIcon, ...styles.emailIcon }}>
                                    @
                                </div>
                                <a
                                    href="mailto:contact@suryashine.tech"
                                    style={styles.contactLink}
                                    onMouseOver={(e) => e.target.style.color = '#60a5fa'}
                                    onMouseOut={(e) => e.target.style.color = '#e2e8f0'}
                                >
                                    contact@suryashine.tech
                                </a>
                            </div>
                            <div style={styles.contactItem}>
                                <div style={{ ...styles.contactIcon, ...styles.phoneIcon }}>
                                    ☎
                                </div>
                                <span style={{ ...styles.contactLink, cursor: 'default' }}>
                                    +91-XXXXXXXXXX
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={styles.sectionTitle}>
                            Quick Links
                            <div style={styles.sectionTitleBorder}></div>
                        </h4>
                        <ul style={styles.linksList}>
                            {['Home', 'About Us', 'Services', 'Industries', 'Contact'].map((item, index) => (
                                <li key={index} style={styles.linkItem}>
                                    <Link
                                        to={`/${item.toLowerCase().replace(' ', '-')}`}
                                        style={styles.link}
                                        onMouseOver={(e) => {
                                            e.target.style.color = '#ffffff';
                                            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.color = '#cbd5e1';
                                            e.target.style.background = 'rgba(0, 0, 0, 0.2)';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div style={styles.socialSection}>
                        <h4 style={styles.sectionTitle}>
                            Connect With Us
                            <div style={styles.sectionTitleBorder}></div>
                        </h4>
                        <div style={styles.socialLinks}>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={styles.socialLink}
                                onMouseOver={(e) => {
                                    e.target.style.color = '#60a5fa';
                                    e.target.style.transform = 'translateX(8px)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.color = '#cbd5e1';
                                    e.target.style.transform = 'translateX(0)';
                                }}
                            >
                                <div style={{ ...styles.socialIcon, ...styles.linkedinIcon }}>
                                    in
                                </div>
                                LinkedIn
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={styles.socialLink}
                                onMouseOver={(e) => {
                                    e.target.style.color = '#60a5fa';
                                    e.target.style.transform = 'translateX(8px)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.color = '#cbd5e1';
                                    e.target.style.transform = 'translateX(0)';
                                }}
                            >
                                <div style={{ ...styles.socialIcon, ...styles.twitterIcon }}>
                                    X
                                </div>
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div style={styles.bottomSection}>
                    <div style={styles.copyright}>
                        © {new Date().getFullYear()} Suryashine Digital Solutions. All rights reserved.
                    </div>
                    <div style={styles.legalLinks}>
                        <Link to="/privacy" style={styles.legalLink}>
                            Privacy Policy
                        </Link>
                        <Link to="/terms" style={styles.legalLink}>
                            Terms of Service
                        </Link>
                        <Link to="/cookies" style={styles.legalLink}>
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}