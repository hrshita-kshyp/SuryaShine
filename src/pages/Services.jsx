import React from 'react';

export default function Services() {
    const styles = {
        page: {
            minHeight: '100vh',
            background: '#0f172a',
            color: 'white',
            padding: '90px 0 80px',
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px', // reduced from 40px
        },
        header: {
            textAlign: 'center',
            marginBottom: '60px',
        },
        title: {
            fontSize: '2.4rem',
            fontWeight: '800',
            background: 'linear-gradient(90deg, #ffffff, #e0e7ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px',
            lineHeight: '1.2',
        },
        subtitle: {
            fontSize: '1rem',
            color: '#cbd5e1',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
        },
        servicesGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
        },
        serviceCard: {
            background: 'rgba(30, 41, 59, 0.5)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            padding: '30px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
            zIndex: 1,
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
            zIndex: -1,
        },
        serviceIcon: {
            fontSize: '2rem',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '16px',
        },
        serviceTitle: {
            fontSize: '1.3rem',
            fontWeight: '600',
            color: 'white',
            marginBottom: '12px',
            position: 'relative',
            paddingBottom: '10px',
        },
        titleBar: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '40px',
            height: '3px',
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
            borderRadius: '3px',
        },
        serviceDescription: {
            color: '#cbd5e1',
            fontSize: '0.95rem',
            lineHeight: '1.6',
            margin: 0,
        },
    };

    const services = [
        {
            title: "Software Development & Engineering",
            description: "Full-stack web and mobile app development. Build high-quality frontend, scalable backend systems, and enterprise-ready solutions using React, Angular, and more.",
            icon: "💻",
        },
        {
            title: "Cloud Engineering",
            description: "Cloud-native architecture, migration, and automation on AWS, Azure, and GCP. Infrastructure as Code using Terraform, Ansible.",
            icon: "☁️",
        },
        {
            title: "DevOps & CI/CD Automation",
            description: "Implement CI/CD pipelines, automate infrastructure, and ensure cloud operations reliability through DevOps best practices.",
            icon: "🔄",
        },
        {
            title: "AI & Data Engineering",
            description: "Integrate AI/ML models, automate workflows, build data pipelines, and deliver business intelligence through reporting dashboards.",
            icon: "🧠",
        },
        {
            title: "Custom Software Solutions",
            description: "ERP/CRM integration, legacy system modernization, and bespoke platform development tailored to business needs.",
            icon: "🛠️",
        },
        {
            title: "IT Consulting & Team Augmentation",
            description: "Hire expert engineering teams for full-project execution or augmentation. Choose remote or hybrid models as per your business needs.",
            icon: "👥",
        },
    ];

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <div style={styles.header}>
                    <h2 style={styles.title}>Our Core Services</h2>
                    <p style={styles.subtitle}>
                        Comprehensive digital solutions tailored to drive your business forward in the modern technological landscape
                    </p>
                </div>

                <div style={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            style={styles.serviceCard}
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
                            <div style={styles.serviceIcon}>{service.icon}</div>
                            <h3 style={styles.serviceTitle}>
                                {service.title}
                                <span style={styles.titleBar}></span>
                            </h3>
                            <p style={styles.serviceDescription}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Optional: Media query support */}
            <style>
                {`
                    @media (max-width: 768px) {
                        h2 {
                            font-size: 2rem !important;
                        }

                        .serviceCard {
                            padding: 24px !important;
                        }

                        .serviceTitle {
                            font-size: 1.1rem !important;
                        }

                        .serviceDescription {
                            font-size: 0.9rem !important;
                        }
                    }

                    @media (max-width: 480px) {
                        h2 {
                            font-size: 1.8rem !important;
                        }

                        .serviceIcon {
                            font-size: 1.5rem !important;
                        }

                        .serviceCard {
                            padding: 20px !important;
                        }
                    }
                `}
            </style>
        </div>
    );
}
