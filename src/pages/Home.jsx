import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

    const orbStyle1 = {
        top: '10%',
        right: '15%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(96, 165, 250, 0.3), transparent 70%)',
        filter: 'blur(60px)',
        position: 'absolute',
        animation: 'float 20s ease-in-out infinite'
    };

    const orbStyle2 = {
        bottom: '20%',
        left: '10%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent 70%)',
        filter: 'blur(50px)',
        position: 'absolute',
        animation: 'float 25s ease-in-out infinite reverse'
    };

    const stats = [
        { number: '500+', label: 'Projects Delivered' },
        { number: '98%', label: 'Client Satisfaction' },
        { number: '24/7', label: 'Support Available' },
        { number: '15+', label: 'Years Experience' }
    ];

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

    return (
        <div
            className="home-page"
            style={{
                background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.02) 0%, transparent 50%), #0f172a`,
                color: '#ffffff',
                fontFamily: 'Inter, sans-serif',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div className="floating-orbs">
                <div className="orb orb1" style={orbStyle1}></div>
                <div className="orb orb2" style={orbStyle2}></div>
            </div>

            <div className="main-container">
                <section className="hero">
                    <div className="hero-content">
                        <div className="badge">
                            <div className="badge-dot"></div>
                            Trusted by 500+ Companies Worldwide
                        </div>
                        <h1 className="title">Empowering Your Digital Transformation</h1>
                        <p className="subtitle">
                            We deliver cutting-edge technology solutions that accelerate business growth, optimize operations,
                            and create exceptional digital experiences that drive real results.
                        </p>
                        <div className="cta-group">
                            <Link to="/contact" className="cta-primary">Get Started Today →</Link>
                            <Link to="/services" className="cta-secondary">View Our Work</Link>
                        </div>
                    </div>
                </section>

                <section className="stats">
                    {stats.map((stat, i) => (
                        <div
                            className="stat-item"
                            key={i}
                            style={{
                                opacity: isLoaded ? 1 : 0,
                                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                                transition: `all 0.8s ease-out ${i * 0.1}s`
                            }}
                        >
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </section>

                <section className="features">
                    <div className="features-header">
                        <h2 className="features-title">Why Choose Our Solutions?</h2>
                        <p className="features-subtitle">
                            We combine technical excellence with strategic insight to deliver solutions that transform businesses.
                        </p>
                    </div>
                    <div className="features-grid">
                        {features.map((f, idx) => (
                            <div className="feature-card" key={idx}>
                                <div className="feature-icon">{f.icon}</div>
                                <h3 className="feature-title">{f.title}</h3>
                                <p className="feature-description">{f.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <style>
                {`
                .main-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 80px 40px;
                }

                .hero {
                    text-align: center;
                    padding: 60px 0;
                }

                .badge {
                    display: inline-flex;
                    align-items: center;
                    background: rgba(255, 255, 255, 0.1);
                    padding: 8px 16px;
                    border-radius: 9999px;
                    font-size: 0.9rem;
                    margin-bottom: 16px;
                }

                .badge-dot {
                    width: 8px;
                    height: 8px;
                    background-color: #3b82f6;
                    border-radius: 50%;
                    margin-right: 8px;
                }

                .title {
                    font-size: 2.5rem;
                    font-weight: 800;
                    margin-bottom: 16px;
                    line-height: 1.2;
                }

                .subtitle {
                    font-size: 1.1rem;
                    color: #cbd5e1;
                    margin-bottom: 32px;
                    line-height: 1.6;
                    max-width: 700px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .cta-group {
                    display: flex;
                    justify-content: center;
                    gap: 16px;
                    flex-wrap: wrap;
                }

                .cta-primary,
                .cta-secondary {
                    padding: 12px 24px;
                    border-radius: 8px;
                    font-weight: 600;
                    text-decoration: none;
                    display: inline-block;
                }

                .cta-primary {
                    background: #3b82f6;
                    color: white;
                }

                .cta-secondary {
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .stats {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 24px;
                    margin: 60px 0;
                    text-align: center;
                }

                .stat-number {
                    font-size: 2rem;
                    font-weight: 700;
                }

                .stat-label {
                    font-size: 0.95rem;
                    color: #cbd5e1;
                }

                .features-header {
                    text-align: center;
                    margin-bottom: 40px;
                }

                .features-title {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-bottom: 12px;
                }

                .features-subtitle {
                    font-size: 1rem;
                    color: #94a3b8;
                    max-width: 700px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: 24px;
                }

                .feature-card {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 16px;
                    padding: 24px;
                    text-align: center;
                }

                .feature-icon {
                    font-size: 2rem;
                    margin-bottom: 16px;
                    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .feature-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 12px;
                }

                .feature-description {
                    font-size: 0.95rem;
                    color: #cbd5e1;
                    line-height: 1.6;
                }

                .floating-orbs {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 0;
                }

                @media (max-width: 768px) {
                    .main-container {
                        padding: 60px 20px;
                    }

                    .title {
                        font-size: 2rem;
                    }

                    .subtitle {
                        font-size: 1rem;
                    }

                    .cta-group {
                        flex-direction: column;
                        gap: 12px;
                    }

                    .features-grid {
                        grid-template-columns: 1fr;
                    }

                    .stats {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                @media (max-width: 480px) {
                    .stats {
                        grid-template-columns: 1fr;
                    }

                    .title {
                        font-size: 1.7rem;
                    }

                    .badge {
                        font-size: 0.8rem;
                    }

                    .feature-title {
                        font-size: 1.1rem;
                    }

                    .feature-description {
                        font-size: 0.9rem;
                    }
                }
            `}
            </style>
        </div>
    );
}
