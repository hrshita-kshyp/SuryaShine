import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
    const styles = {
        footer: {
            background: 'linear-gradient(245deg, #1e3a8a 0%, #16213e 50%, #1a1a2e 75%, #0a0a0a 100%)',
            color: '#ffffff',
            fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
            position: 'relative',
            overflow: 'hidden',
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
                linear-gradient(rgba(250, 165, 96, 0.03) 1px, transparent 1px),
                linear-gradient(350deg, rgba(250, 165, 96, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            pointerEvents: 'none',
            zIndex: 1
        },
        floatingOrbs: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            pointerEvents: 'none',
        },
        orb1: {
            position: 'absolute',
            bottom: '5%',
            left: '10%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
            filter: 'blur(40px)',
            animation: 'float 20s ease-in-out infinite reverse'
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '80px 30px 40px',
            position: 'relative',
            zIndex: 2
        },
        topSection: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '60px',
            marginBottom: '60px'
        },
        brandSection: {
            maxWidth: '500px'
        },
        brandHeader: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '16px'
        },
        logo: {
            height: '60px',
            width: 'auto',
            objectFit: 'contain'
        },
        logoText: {
            fontSize: '2.5rem',
            fontWeight: '700',
            background: 'white',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
            letterSpacing: '-0.02em'
        },
        tagline: {
            fontSize: '1.25rem',
            color: '#93c5fd',
            fontWeight: '500',
            marginBottom: '24px',
            letterSpacing: '0.5px'
        },
        description: {
            color: '#cbd5e1',
            fontSize: '1rem',
            lineHeight: '1.7',
            marginBottom: '32px'
        },
        contactInfo: {
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
        },
        contactItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            transition: 'transform 0.3s ease'
        },
        contactIcon: {
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            fontWeight: 'bold',
            background: 'rgba(96, 165, 250, 0.1)',
            border: '1px solid rgba(96, 165, 250, 0.2)',
            backdropFilter: 'blur(10px)',
            color: '#93c5fd'
        },
        contactLink: {
            color: '#e2e8f0',
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            fontWeight: '500'
        },
        sectionTitle: {
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '28px',
            position: 'relative',
            paddingBottom: '12px'
        },
        sectionTitleBorder: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '50px',
            height: '3px',
            background: 'linear-gradient(90deg, #60a5fa, #3b82f6)',
            borderRadius: '2px'
        },
        linksList: {
            listStyle: 'none',
            padding: 0,
            margin: 0
        },
        linkItem: {
            marginBottom: '16px',
            position: 'relative',
            overflow: 'hidden'
        },
        link: {
            color: '#cbd5e1',
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            padding: '8px 0',
            display: 'block',
            fontWeight: '500',
            position: 'relative',
            zIndex: 1
        },
        linkHoverEffect: {
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, rgba(96, 165, 250, 0.1), transparent)',
            transition: 'transform 0.3s ease',
            zIndex: 0
        },
        socialSection: {
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
        },
        socialLinks: {
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
        },
        socialLink: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            color: '#cbd5e1',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            padding: '12px 0',
            position: 'relative',
            overflow: 'hidden'
        },
        socialIcon: {
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            background: 'rgba(96, 165, 250, 0.1)',
            border: '1px solid rgba(96, 165, 250, 0.2)',
            backdropFilter: 'blur(10px)',
            color: '#93c5fd'
        },
        socialHoverEffect: {
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, rgba(96, 165, 250, 0.1), transparent)',
            transition: 'transform 0.3s ease',
            zIndex: 0
        },
        bottomSection: {
            paddingTop: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
        },
        copyright: {
            color: '#94a3b8',
            fontSize: '0.95rem',
            fontWeight: '500'
        },
        legalLinks: {
            display: 'flex',
            gap: '28px',
            flexWrap: 'wrap'
        },
        legalLink: {
            color: '#94a3b8',
            textDecoration: 'none',
            fontSize: '0.95rem',
            transition: 'color 0.3s ease',
            fontWeight: '500',
            position: 'relative'
        },
        legalLinkUnderline: {
            position: 'absolute',
            bottom: '-2px',
            left: 0,
            width: '0%',
            height: '1px',
            background: '#60a5fa',
            transition: 'width 0.3s ease'
        }
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.overlay}></div>
            <div style={styles.floatingOrbs}>
                <div style={styles.orb1}></div>
            </div>
            <div style={styles.container}>
                <div style={styles.topSection}>
                    {/* Brand Section */}
                    <div style={styles.brandSection}>
                        <div style={styles.brandHeader}>
                            <img src={logo} alt="Suryashine Logo" style={styles.logo} />
                            <h2 style={styles.logoText}>Suryashine</h2>
                        </div>
                        <p style={styles.tagline}>Empowering Your Digital Transformation</p>
                        <p style={styles.description}>
                            We deliver cutting-edge technology solutions that accelerate business growth,
                            optimize operations, and create exceptional digital experiences.
                        </p>

                        <div style={styles.contactInfo}>
                            <div style={styles.contactItem}>
                                <div style={styles.contactIcon}>@</div>
                                <a
                                    href="mailto:contact@suryashine.tech"
                                    style={styles.contactLink}
                                    onMouseOver={(e) => {
                                        e.target.style.color = '#60a5fa';
                                        e.target.style.transform = 'translateX(5px)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.color = '#e2e8f0';
                                        e.target.style.transform = 'translateX(0)';
                                    }}
                                >
                                    contact@suryashine.tech
                                </a>
                            </div>
                            <div style={styles.contactItem}>
                                <div style={styles.contactIcon}>☎</div>
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
                            {['Home', 'About Us', 'Services', 'Contact'].map((link, index) => (
                                <li key={index} style={styles.linkItem}>
                                    <div className="link-hover-effect" style={styles.linkHoverEffect}></div>
                                    <Link
                                        to={`/${link.toLowerCase().replace(' ', '-')}`}
                                        style={styles.link}
                                        onMouseOver={(e) => {
                                            e.target.style.color = '#ffffff';
                                            e.target.parentElement.querySelector('.link-hover-effect').style.transform = 'translateX(100%)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.color = '#cbd5e1';
                                            e.target.parentElement.querySelector('.link-hover-effect').style.transform = 'translateX(0)';
                                        }}
                                    >
                                        {link}
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
                            {[
                                { name: 'LinkedIn', icon: 'in', url: 'https://linkedin.com' },
                                { name: 'Twitter', icon: 'X', url: 'https://twitter.com' },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.socialLink}
                                    onMouseOver={(e) => {
                                        e.target.style.color = '#60a5fa';
                                        e.target.querySelector('.social-hover-effect').style.transform = 'translateX(100%)';
                                        e.target.querySelector('div').style.background = 'rgba(96, 165, 250, 0.2)';
                                        e.target.querySelector('div').style.color = '#ffffff';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.color = '#cbd5e1';
                                        e.target.querySelector('.social-hover-effect').style.transform = 'translateX(0)';
                                        e.target.querySelector('div').style.background = 'rgba(96, 165, 250, 0.1)';
                                        e.target.querySelector('div').style.color = '#93c5fd';
                                    }}
                                >
                                    <div className="social-hover-effect" style={styles.socialHoverEffect}></div>
                                    <div style={styles.socialIcon}>{social.icon}</div>
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div style={styles.bottomSection}>
                    <div style={styles.copyright}>
                        © {new Date().getFullYear()} Suryashine Digital. All rights reserved.
                    </div>
                    <div style={styles.legalLinks}>
                        {['Privacy Policy', 'Terms of Service'].map((link, index) => (
                            <Link
                                key={index}
                                to={`/${link.toLowerCase().replace(' ', '-')}`}
                                style={styles.legalLink}
                                onMouseOver={(e) => {
                                    e.target.style.color = '#60a5fa';
                                    e.target.querySelector('.legal-underline').style.width = '100%';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.color = '#94a3b8';
                                    e.target.querySelector('.legal-underline').style.width = '0%';
                                }}
                            >
                                {link}
                                <span className="legal-underline" style={styles.legalLinkUnderline}></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                
                @media (max-width: 768px) {
                    .top-section {
                        grid-template-columns: 1fr !important;
                        gap: 40px !important;
                    }
                    
                    .brand-section {
                        max-width: 100% !important;
                    }
                    
                    .bottom-section {
                        flex-direction: column;
                        text-align: center;
                        gap: 16px !important;
                    }
                    
                    .legal-links {
                        justify-content: center;
                        gap: 20px !important;
                    }
                }
            `}</style>
        </footer>
    );
}