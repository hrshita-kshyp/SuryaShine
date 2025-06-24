export default function Contact() {
    const styles = {
        page: {
            minHeight: '100vh',
            background: '#0f172a',
            color: 'white',
            padding: '90px 0 80px'
        },
        container: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 40px'
        },
        header: {
            textAlign: 'center',
            marginBottom: '60px'
        },
        title: {
            fontSize: '2.8rem',
            fontWeight: '800',
            background: 'linear-gradient(90deg, #ffffff, #e0e7ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '16px',
            lineHeight: '1.2'
        },
        subtitle: {
            fontSize: '1.2rem',
            color: '#cbd5e1',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
        },
        formContainer: {
            background: 'rgba(30, 41, 59, 0.5)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            padding: '40px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            marginTop: '40px'
        },
        formGroup: {
            marginBottom: '24px'
        },
        label: {
            display: 'block',
            marginBottom: '8px',
            fontWeight: '500',
            color: '#e2e8f0'
        },
        input: {
            width: '100%',
            padding: '12px 16px',
            background: 'rgba(15, 23, 42, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            color: 'white',
            fontSize: '1rem',
        },
        textarea: {
            minHeight: '150px',
            resize: 'vertical'
        },
        submitButton: {
            background: 'linear-gradient(90deg, #3b82f6, #2563eb)',
            color: 'white',
            border: 'none',
            padding: '16px 32px',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            width: '100%',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <div style={styles.header}>
                    <h2 style={styles.title}>Contact Us</h2>
                    <p style={styles.subtitle}>
                        Ready to drive your next digital initiative? Let's connect and discuss how we can support your technology goals.
                    </p>
                </div>

                <div style={styles.formContainer}>
                    <form>
                        <div style={styles.formGroup}>
                            <label htmlFor="name" style={styles.label}>Name</label>
                            <input type="text" id="name" placeholder="Your full name" style={styles.input} />
                        </div>

                        <div style={styles.formGroup}>
                            <label htmlFor="company" style={styles.label}>Company</label>
                            <input type="text" id="company" placeholder="Company or organization name" style={styles.input} />
                        </div>

                        <div style={styles.formGroup}>
                            <label htmlFor="email" style={styles.label}>Email</label>
                            <input type="email" id="email" placeholder="your@example.com" style={styles.input} />
                        </div>

                        <div style={styles.formGroup}>
                            <label htmlFor="message" style={styles.label}>Message</label>
                            <textarea id="message" placeholder="Your message..." style={{ ...styles.input, ...styles.textarea }} />
                        </div>

                        <button
                            type="submit"
                            style={styles.submitButton}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.6)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.4)';
                            }}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Mobile Responsiveness */}
            <style>{`
                @media (max-width: 768px) {
                    h2 {
                        font-size: 2rem !important;
                    }
                    p {
                        font-size: 1rem !important;
                    }
                    input, textarea {
                        font-size: 1rem !important;
                        padding: 10px 14px !important;
                    }
                    button {
                        padding: 14px 24px !important;
                        font-size: 1rem !important;
                    }
                    .formContainer {
                        padding: 24px !important;
                    }
                }
            `}</style>
        </div>
    );
}
