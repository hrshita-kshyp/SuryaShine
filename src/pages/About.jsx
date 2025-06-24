export default function About() {
    const styles = {
        page: {
            minHeight: '100vh',
            background: '#0f172a',
            color: 'white',
            padding: '90px 0 80px'
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 40px'
        },
        sectionHeader: {
            textAlign: 'center',
            marginBottom: '60px'
        },
        title: {
            fontSize: '2.8rem',
            fontWeight: '800',
            background: 'linear-gradient(90deg, #ffffff, #e0e7ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '24px',
            lineHeight: '1.2'
        },
        subtitle: {
            fontSize: '1.2rem',
            maxWidth: '800px',
            margin: '0 auto',
            color: '#cbd5e1',
            lineHeight: '1.6',
            opacity: 0.9
        },
        description: {
            fontSize: '1.1rem',
            color: '#94a3b8',
            maxWidth: '800px',
            margin: '0 auto 60px',
            lineHeight: '1.7'
        },
        cardsContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '32px',
            marginTop: '60px'
        },
        card: {
            background: 'rgba(30, 41, 59, 0.5)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            padding: '40px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            transition: 'all 0.3s ease',
            textAlign: 'left'
        },
        cardTitle: {
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#3b82f6',
            marginBottom: '20px',
            position: 'relative',
            paddingBottom: '12px'
        },
        cardTitleBar: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '40px',
            height: '3px',
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
            borderRadius: '3px'
        },
        cardText: {
            color: '#cbd5e1',
            fontSize: '1rem',
            lineHeight: '1.7',
            margin: 0
        },
        statsContainer: {
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginTop: '80px',
            flexWrap: 'wrap'
        },
        statItem: {
            textAlign: 'center'
        },
        statNumber: {
            fontSize: '3rem',
            fontWeight: '700',
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '8px'
        },
        statLabel: {
            color: '#94a3b8',
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '1px'
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <div style={styles.sectionHeader}>
                    <h2 style={styles.title}>About Suryashine</h2>
                    <p style={styles.subtitle}>
                        Suryashine Digital Solutions Assistance Pvt Ltd is a modern IT services and consulting firm,
                        serving clients across Europe, North America, and India.
                    </p>
                    <p style={styles.description}>
                        With a foundation built upon 5+ years of freelance success via DSAInfotech, we specialize in building
                        scalable applications, modernizing tech stacks, and delivering business-aligned software products
                        through expert engineering and full-stack solutions.
                    </p>
                </div>

                <div style={styles.cardsContainer}>
                    <div
                        style={styles.card}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.background = 'rgba(30, 41, 59, 0.7)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.background = 'rgba(30, 41, 59, 0.5)';
                        }}
                    >
                        <h3 style={styles.cardTitle}>
                            Our Mission
                            <span style={styles.cardTitleBar}></span>
                        </h3>
                        <p style={styles.cardText}>
                            Deliver measurable business value, modernize outdated legacy systems, provide scalable engineering platforms,
                            and enable operational agility & excellence.
                        </p>
                    </div>

                    <div
                        style={styles.card}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.background = 'rgba(30, 41, 59, 0.7)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.background = 'rgba(30, 41, 59, 0.5)';
                        }}
                    >
                        <h3 style={styles.cardTitle}>
                            Our Vision
                            <span style={styles.cardTitleBar}></span>
                        </h3>
                        <p style={styles.cardText}>
                            To become a globally trusted IT transformation partner that delivers innovation, speed, and digital impact
                            across industries and borders.
                        </p>
                    </div>
                </div>

                <div style={styles.statsContainer}>
                    <div style={styles.statItem}>
                        <div style={styles.statNumber}>5+</div>
                        <div style={styles.statLabel}>Years Experience</div>
                    </div>
                    <div style={styles.statItem}>
                        <div style={styles.statNumber}>50+</div>
                        <div style={styles.statLabel}>Projects Delivered</div>
                    </div>
                    <div style={styles.statItem}>
                        <div style={styles.statNumber}>3</div>
                        <div style={styles.statLabel}>Continents Served</div>
                    </div>
                    <div style={styles.statItem}>
                        <div style={styles.statNumber}>100%</div>
                        <div style={styles.statLabel}>Client Satisfaction</div>
                    </div>
                </div>
            </div>
        </div>
    );
}