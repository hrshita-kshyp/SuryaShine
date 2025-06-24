import React, { useState, useEffect } from 'react';

export default function Home() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const styles = {
        page: {
            background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(96, 165, 250, 0.15) 0%, transparent 50%),
            linear-gradient(135deg, #1e3a8a 0%, #16213e 50%, #1a1a2e 75%, #0a0a0a 100%)
        `,
            color: '#ffffff',
            fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
            position: 'relative',
            overflow: 'hidden',
        },

        backgroundGrid: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
                linear-gradient(rgba(96, 165, 250, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(96, 165, 250, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
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
            top: '10%',
            right: '15%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)',
            filter: 'blur(60px)',
            animation: 'float 20s ease-in-out infinite',
        },

        orb2: {
            position: 'absolute',
            bottom: '20%',
            left: '10%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(37, 99, 235, 0.1) 50%, transparent 100%)',
            filter: 'blur(40px)',
            animation: 'float 25s ease-in-out infinite reverse',
        },

        container: {
            position: 'relative',
            zIndex: 2,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
        },

        navbar: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            background: 'rgba(10, 10, 10, 0.8)',
            backdropFilter: 'blur(20px)',
            padding: '1rem 0',
        },

        navContent: {
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2rem',
        },

        logo: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.5rem',
            fontWeight: '700',
        },

        logoMain: {
            background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },

        logoSub: {
            color: '#94a3b8',
            fontWeight: '400',
        },

        navLinks: {
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
        },

        navLink: {
            color: '#e2e8f0',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.3s ease',
            cursor: 'pointer',
        },

        hero: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8rem 2rem 4rem',
            textAlign: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            opacity: isLoaded ? 1 : 0,
            transition: 'all 1s ease-out',
        },

        heroContent: {
            maxWidth: '900px',
        },

        badge: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(96, 165, 250, 0.1)',
            border: '1px solid rgba(96, 165, 250, 0.3)',
            borderRadius: '50px',
            padding: '0.5rem 1.5rem',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#93c5fd',
            marginBottom: '2rem',
            backdropFilter: 'blur(10px)',
        },

        badgeDot: {
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#22c55e',
            animation: 'pulse 2s infinite',
        },

        title: {
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 25%, #60a5fa 50%, #1d4ed8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em',
        },

        subtitle: {
            fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
            color: '#94a3b8',
            lineHeight: '1.7',
            marginBottom: '3rem',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            fontWeight: '400',
        },

        ctaGroup: {
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '4rem',
        },

        ctaPrimary: {
            background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
            color: 'white',
            padding: '1rem 2.5rem',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(96, 165, 250, 0.3)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
        },

        ctaSecondary: {
            background: 'rgba(255, 255, 255, 0.05)',
            color: 'white',
            padding: '1rem 2.5rem',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
        },

        features: {
            padding: '4rem 2rem',
            maxWidth: '1200px',
            margin: '0 auto',
        },

        featuresHeader: {
            textAlign: 'center',
            marginBottom: '4rem',
        },

        featuresTitle: {
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '700',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },

        featuresSubtitle: {
            fontSize: '1.25rem',
            color: '#94a3b8',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
        },

        featuresGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
        },

        featureCard: {
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '2.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.4s ease',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
        },

        featureIcon: {
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            fontSize: '1.5rem',
            transition: 'all 0.3s ease',
        },

        featureTitle: {
            fontSize: '1.5rem',
            fontWeight: '600',
            color: 'white',
            marginBottom: '1rem',
            lineHeight: '1.3',
        },

        featureDescription: {
            color: '#94a3b8',
            fontSize: '1.05rem',
            lineHeight: '1.7',
            margin: 0,
        },

        glowEffect: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            borderRadius: '20px',
        },

        stats: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            padding: '4rem 2rem',
            maxWidth: '1000px',
            margin: '0 auto',
            textAlign: 'center',
        },

        statItem: {
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out',
        },

        statNumber: {
            fontSize: '3rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem',
        },

        statLabel: {
            color: '#94a3b8',
            fontSize: '1.1rem',
            fontWeight: '500',
        },
    };

    const features = [
        {
            icon: '⚡',
            title: 'Enterprise Solutions',
            description: 'Custom-built software solutions designed to streamline operations, enhance productivity, and deliver measurable ROI for your business.'
        },
        {
            icon: '🚀',
            title: 'Digital Innovation',
            description: 'Leveraging cutting-edge technologies like AI, blockchain, and IoT to create competitive advantages and future-proof your business.'
        },
        {
            icon: '☁️',
            title: 'Cloud Architecture',
            description: 'Scalable, secure cloud infrastructure engineered for optimal performance, reliability, and cost-efficiency at enterprise scale.'
        }
    ];

    const stats = [
        { number: '500+', label: 'Projects Delivered' },
        { number: '98%', label: 'Client Satisfaction' },
        { number: '24/7', label: 'Support Available' },
        { number: '15+', label: 'Years Experience' }
    ];

    return (
        <div style={styles.page}>
            <div style={styles.backgroundGrid}></div>

            <div style={styles.floatingOrbs}>
                <div style={styles.orb1}></div>
                <div style={styles.orb2}></div>
            </div>

            <nav style={styles.navbar}>
                <div style={styles.navContent}>
                    <div style={styles.logo}>
                        <span style={styles.logoMain}>SuryaShine</span>
                        <span style={styles.logoSub}>Digital</span>
                    </div>
                    <div style={styles.navLinks}>
                        <a href="#" style={styles.navLink}>Solutions</a>
                        <a href="#" style={styles.navLink}>Services</a>
                        <a href="#" style={styles.navLink}>About</a>
                        <a href="#" style={styles.navLink}>Contact</a>
                    </div>
                </div>
            </nav>

            <div style={styles.container}>
                <section style={styles.hero}>
                    <div style={styles.heroContent}>
                        <div style={styles.badge}>
                            <div style={styles.badgeDot}></div>
                            Trusted by 500+ Companies Worldwide
                        </div>

                        <h1 style={styles.title}>
                            Empowering Your Digital Transformation
                        </h1>

                        <p style={styles.subtitle}>
                            We deliver cutting-edge technology solutions that accelerate business growth,
                            optimize operations, and create exceptional digital experiences that drive real results.
                        </p>

                        <div style={styles.ctaGroup}>
                            <button
                                style={styles.ctaPrimary}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 12px 40px rgba(96, 165, 250, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 8px 32px rgba(96, 165, 250, 0.3)';
                                }}
                            >
                                Get Started Today →
                            </button>
                            <button
                                style={styles.ctaSecondary}
                                onMouseEnter={(e) => {
                                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                View Our Work
                            </button>
                        </div>
                    </div>
                </section>

                <section style={styles.stats}>
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            style={{
                                ...styles.statItem,
                                transitionDelay: `${index * 0.1}s`
                            }}
                        >
                            <div style={styles.statNumber}>{stat.number}</div>
                            <div style={styles.statLabel}>{stat.label}</div>
                        </div>
                    ))}
                </section>

                <section style={styles.features}>
                    <div style={styles.featuresHeader}>
                        <h2 style={styles.featuresTitle}>Why Choose Our Solutions?</h2>
                        <p style={styles.featuresSubtitle}>
                            We combine technical excellence with strategic insight to deliver solutions that transform businesses.
                        </p>
                    </div>

                    <div style={styles.featuresGrid}>
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                style={styles.featureCard}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.border = '1px solid rgba(96, 165, 250, 0.3)';
                                    e.currentTarget.querySelector('.glow-effect').style.opacity = '1';
                                    e.currentTarget.querySelector('.feature-icon').style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.querySelector('.glow-effect').style.opacity = '0';
                                    e.currentTarget.querySelector('.feature-icon').style.transform = 'scale(1)';
                                }}
                            >
                                <div className="glow-effect" style={styles.glowEffect}></div>
                                <div className="feature-icon" style={styles.featureIcon}>
                                    {feature.icon}
                                </div>
                                <h3 style={styles.featureTitle}>{feature.title}</h3>
                                <p style={styles.featureDescription}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                
                @media (max-width: 768px) {
                    .hero { padding: 3rem 1rem !important; }
                    .features { padding: 2rem 1rem !important; }
                    .ctaGroup { flex-direction: column; }
                }
            `}</style>

        </div>
    );

}