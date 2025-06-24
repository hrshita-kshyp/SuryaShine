import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
    const styles = {
        footer: {
            background: '#0f172a',
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
        linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
        linear-gradient(350deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
      `,
            backgroundSize: '3vw 3vw',
            pointerEvents: 'none',
            zIndex: 1,
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
            width: '20vw',
            height: '20vw',
            borderRadius: '50%',
            background:
                'radial-gradient(circle, rgba(96, 165, 250, 0.2) 0%, transparent 70%)',
            filter: 'blur(4vw)',
            animation: 'float 20s ease-in-out infinite reverse',
        },
        container: {
            width: '100%',
            maxWidth: '90vw',
            margin: '0 auto',
            padding: '5rem 5vw 2.5rem',
            position: 'relative',
            zIndex: 2,
        },
        topSection: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
        },
        brandHeader: {
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1rem',
        },
        logo: {
            height: '3.5rem',
            width: 'auto',
            objectFit: 'contain',
        },
        logoText: {
            fontSize: '2rem',
            fontWeight: '700',
            background: 'white',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
            letterSpacing: '-0.02em',
        },
        tagline: {
            fontSize: '1.1rem',
            color: '#93c5fd',
            fontWeight: '500',
            marginBottom: '1.5rem',
        },
        description: {
            color: '#cbd5e1',
            fontSize: '0.95rem',
            lineHeight: '1.6',
            marginBottom: '2rem',
        },
        contactInfo: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        },
        contactItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
        },
        contactIcon: {
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            fontWeight: 'bold',
            background: 'rgba(96, 165, 250, 0.1)',
            border: '1px solid rgba(96, 165, 250, 0.2)',
            backdropFilter: 'blur(10px)',
            color: '#93c5fd',
        },
        contactLink: {
            color: '#e2e8f0',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '500',
        },
        sectionTitle: {
            fontSize: '1.3rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '1.75rem',
            position: 'relative',
            paddingBottom: '0.75rem',
        },
        sectionTitleBorder: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '15%',
            height: '3px',
            background: 'linear-gradient(90deg, #60a5fa, #3b82f6)',
            borderRadius: '0.2vw',
        },
        link: {
            color: '#cbd5e1',
            textDecoration: 'none',
            fontSize: '1rem',
            padding: '0.5rem 0',
            display: 'block',
            fontWeight: '500',
        },
        socialLink: {
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            color: '#cbd5e1',
            textDecoration: 'none',
            padding: '0.75rem 0',
        },
        socialIcon: {
            width: '3rem',
            height: '3rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            background: 'rgba(96, 165, 250, 0.1)',
            border: '1px solid rgba(96, 165, 250, 0.2)',
            color: '#93c5fd',
        },
        bottomSection: {
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
        },
        copyright: {
            color: '#94a3b8',
            fontSize: '0.85rem',
            fontWeight: '500',
        },
        legalLinks: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
        },
        legalLink: {
            color: '#94a3b8',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontWeight: '500',
        },
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.overlay}></div>
            <div style={styles.floatingOrbs}>
                <div style={styles.orb1}></div>
            </div>
            <div style={styles.container}>
                <div style={styles.topSection}>
                    <div>
                        <div style={styles.brandHeader}>
                            <img src={logo} alt="Suryashine Logo" style={styles.logo} />
                            <h2 style={styles.logoText}>Suryashine</h2>
                        </div>
                        <p style={styles.tagline}>Empowering Your Digital Transformation</p>
                        <p style={styles.description}>
                            We deliver cutting-edge technology solutions that accelerate business
                            growth, optimize operations, and create exceptional digital experiences.
                        </p>
                        <div style={styles.contactInfo}>
                            <div style={styles.contactItem}>
                                <div style={styles.contactIcon}>@</div>
                                <a href="mailto:contact@suryashine.tech" style={styles.contactLink}>
                                    contact@suryashine.tech
                                </a>
                            </div>
                            <div style={styles.contactItem}>
                                <div style={styles.contactIcon}>☎</div>
                                <span style={{ ...styles.contactLink, cursor: 'default' }}>+91-XXXXXXXXXX</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 style={styles.sectionTitle}>
                            Quick Links
                            <div style={styles.sectionTitleBorder}></div>
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['Home', 'About Us', 'Services', 'Contact'].map((link, index) => (
                                <li key={index}>
                                    <Link to={`/${link.toLowerCase().replace(' ', '-')}`} style={styles.link}>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 style={styles.sectionTitle}>
                            Connect With Us
                            <div style={styles.sectionTitleBorder}></div>
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[{ name: 'LinkedIn', icon: 'in', url: 'https://linkedin.com' }, { name: 'Twitter', icon: 'X', url: 'https://twitter.com' }].map((social, index) => (
                                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                                    <div style={styles.socialIcon}>{social.icon}</div>
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={styles.bottomSection}>
                    <div style={styles.copyright}>
                        © {new Date().getFullYear()} Suryashine Digital. All rights reserved.
                    </div>
                    <div style={styles.legalLinks}>
                        {['Privacy Policy', 'Terms of Service'].map((link, index) => (
                            <Link key={index} to={`/${link.toLowerCase().replace(' ', '-')}`} style={styles.legalLink}>
                                {link}
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
          footer div[style*='grid'] {
            grid-template-columns: 1fr !important;
          }

          footer div[style*='flex'] {
            flex-direction: column !important;
            text-align: center !important;
            align-items: center !important;
          }
        }
      `}</style>
        </footer>
    );
}
