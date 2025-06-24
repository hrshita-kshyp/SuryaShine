import React from 'react';

export default function Industries() {
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
            padding: '0 20px' // Reduced padding for smaller screens
        },
        header: {
            textAlign: 'center',
            marginBottom: '40px'
        },
        title: {
            fontSize: '2.2rem',
            fontWeight: '800',
            background: 'linear-gradient(90deg, #ffffff, #e0e7ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '16px',
            lineHeight: '1.2'
        },
        subtitle: {
            fontSize: '1rem',
            color: '#cbd5e1',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
        },
        industriesGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            marginTop: '40px'
        },
        industryCard: {
            background: 'rgba(30, 41, 59, 0.5)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            padding: '30px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
        },
        cardHoverBg: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            zIndex: -1
        },
        industryIcon: {
            fontSize: '2rem',
            marginBottom: '16px',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        },
        industryTitle: {
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'white',
            marginBottom: '12px',
            position: 'relative',
            paddingBottom: '8px'
        },
        titleBar: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '40px',
            height: '3px',
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
            borderRadius: '3px'
        },
        industryDescription: {
            color: '#cbd5e1',
            fontSize: '0.95rem',
            lineHeight: '1.6',
            margin: 0
        }
    };

    const industries = [
        {
            title: "Financial Services & FinTech",
            description: "Build secure, compliant, and scalable digital platforms for banking, insurance, and fintech products.",
            icon: "💰"
        },
        {
            title: "Healthcare & Life Sciences",
            description: "Deliver HIPAA-compliant apps, health analytics systems, and AI-driven diagnostics platforms.",
            icon: "🏥"
        },
        {
            title: "Technology & SaaS",
            description: "Partner with product startups and SaaS companies to build scalable applications and manage cloud infra.",
            icon: "💻"
        },
        {
            title: "Retail & eCommerce",
            description: "Enhance customer experience with custom storefronts, backend systems, and payment integrations.",
            icon: "🛒"
        },
        {
            title: "Logistics & Supply Chain",
            description: "Build robust tracking systems, warehouse management platforms, and real-time logistics dashboards.",
            icon: "🚚"
        },
        {
            title: "Professional Services",
            description: "Empower service providers with scheduling apps, CRMs, client portals, and process automation.",
            icon: "👔"
        }
    ];

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <div style={styles.header}>
                    <h2 style={styles.title}>Industries We Serve</h2>
                    <p style={styles.subtitle}>
                        We bring tailored IT solutions to businesses across industries, combining deep domain knowledge with modern technologies.
                    </p>
                </div>

                <div style={styles.industriesGrid}>
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            style={styles.industryCard}
                            onMouseOver={(e) => {
                                e.currentTarget.querySelector('.card-hover-bg').style.opacity = '1';
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.querySelector('.card-hover-bg').style.opacity = '0';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div className="card-hover-bg" style={styles.cardHoverBg}></div>
                            <div style={styles.industryIcon}>{industry.icon}</div>
                            <h3 style={styles.industryTitle}>
                                {industry.title}
                                <span style={styles.titleBar}></span>
                            </h3>
                            <p style={styles.industryDescription}>{industry.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
