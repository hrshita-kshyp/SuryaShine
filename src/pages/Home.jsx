export default function Home() {
    const styles = {
        page: {
            minHeight: '100vh',
            background: '#0f172a',
            color: 'white',
            paddingTop: '90px' // Adjusted for header height
        },
        hero: {
            padding: '140px 40px',
            textAlign: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative'
        },
        heroBg: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 75% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
            zIndex: -1
        },
        title: {
            fontSize: '3.2rem',
            fontWeight: '800',
            marginBottom: '24px',
            background: 'linear-gradient(90deg, #ffffff, #e0e7ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1.2'
        },
        subtitle: {
            fontSize: '1.2rem',
            maxWidth: '800px',
            margin: '0 auto 48px',
            color: '#cbd5e1',
            lineHeight: '1.6',
            opacity: 0.9
        },
        ctaButton: {
            display: 'inline-block',
            background: 'linear-gradient(90deg, #3b82f6, #2563eb)',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)',
            border: 'none',
            cursor: 'pointer'
        },
        features: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            padding: '100px 40px',
            maxWidth: '1200px',
            margin: '0 auto'
        },
        featureCard: {
            background: 'rgba(30, 41, 59, 0.5)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            padding: '40px 32px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            transition: 'all 0.3s ease'
        },
        featureTitle: {
            fontSize: '1.4rem',
            fontWeight: '600',
            color: 'white',
            marginBottom: '20px',
            position: 'relative',
            paddingBottom: '12px'
        },
        featureTitleBar: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '40px',
            height: '3px',
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
            borderRadius: '3px'
        },
        featureText: {
            color: '#94a3b8',
            fontSize: '1rem',
            lineHeight: '1.7',
            margin: 0
        }
    };

    return (
        <div style={styles.page}>
            {/* Hero Section */}
            <section style={styles.hero}>
                <div style={styles.heroBg}></div>
                <h1 style={styles.title}>Empowering Your Tech Edge</h1>
                <p style={styles.subtitle}>
                    At Suryashine Digital Solutions, we transform businesses through modern full-stack development,
                    enterprise solutions, and scalable innovation.
                </p>
                <button
                    style={styles.ctaButton}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 6px 25px rgba(59, 130, 246, 0.5)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.4)';
                    }}
                >
                    Explore Services
                </button>
            </section>

            {/* Features Section */}
            <div style={styles.features}>
                <div
                    style={styles.featureCard}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-8px)';
                        e.currentTarget.style.background = 'rgba(30, 41, 59, 0.7)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.background = 'rgba(30, 41, 59, 0.5)';
                    }}
                >
                    <h3 style={styles.featureTitle}>
                        What We Do
                        <span style={styles.featureTitleBar}></span>
                    </h3>
                    <p style={styles.featureText}>
                        We engineer high-performance web applications, cloud platforms, and AI-integrated systems tailored
                        to business goals — ensuring security, speed, and scalability.
                    </p>
                </div>

                <div
                    style={styles.featureCard}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-8px)';
                        e.currentTarget.style.background = 'rgba(30, 41, 59, 0.7)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.background = 'rgba(30, 41, 59, 0.5)';
                    }}
                >
                    <h3 style={styles.featureTitle}>
                        Why Choose Us
                        <span style={styles.featureTitleBar}></span>
                    </h3>
                    <p style={styles.featureText}>
                        Backed by 5+ years of hands-on experience and client trust across Europe, North America, and India,
                        we deliver digital excellence with every line of code.
                    </p>
                </div>
            </div>
        </div>
    );
}