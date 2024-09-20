import React from 'react';


const Footer = ({
    mailingListText,
    emailPlaceholder,
    subscribeButtonText,
    companyName,
    companyDescription,
    aboutLinks,
    usefulLinks,
    contactInfo,
    developedBy,
    copyrightText,
    logos,  // Add this line to accept logos data
}) => {
    return (
        <footer style={styles.footer}>
            <div style={styles.mailingListSection}>
                {mailingListText.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
                <div style={styles.mailingListForm}>
                    <input
                        type="email"
                        placeholder={emailPlaceholder}
                        style={styles.emailInput}
                    />
                    <button style={styles.subscribeButton}>{subscribeButtonText}</button>
                </div>
            </div>

            <div style={styles.topSection}>
                <div style={styles.section}>
                    <h4 style={styles.sectionTitle}>About Our Website</h4>
                    <p style={styles.companyName}>{companyName}</p>
                    <p style={styles.textContent}>{companyDescription}</p>
                </div>

                <div style={styles.section}>
                    <h4 style={styles.sectionTitle}>About Us</h4>
                    <ul style={styles.linksList}>
                        {aboutLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} style={styles.link}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={styles.section}>
                    <h4 style={styles.sectionTitle}>Useful Links</h4>
                    <ul style={styles.linksList}>
                        {usefulLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} style={styles.link}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={styles.section}>
                    <h4 style={styles.sectionTitle}>Join Us</h4>
                    <div style={styles.logoSection}>
                        {logos.map((logo, index) => (
                            <img key={index} src={logo.src} alt={logo.alt} style={styles.logo} />
                        ))}
                    </div>
                    <p style={styles.textContent}>Email: <a href={`mailto:${contactInfo.email}`} style={styles.link}>{contactInfo.email}</a></p>
                    <p style={styles.textContent}>Customer Support: {contactInfo.phone}</p>
                </div>
            </div>

            <div style={styles.bottomSection}>
                <p>{developedBy}</p>
                <p>{copyrightText}</p>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#1591ea',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
    },
    mailingListSection: {
        marginBottom: '20px',
        fontSize: "32px",
        fontWeight: "700",
        lineHeight: '0.9em',
        padding: "4px",
        marginBottom: "20px",
        marginTop: "20px",
        fontFamily: "sans-serif",
        letterSpacing: '-0.5px', // Brings the letters closer together
    },
    mailingListForm: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    emailInput: {
        padding: '10px 0',   // Top and bottom padding, no padding on sides
        fontSize: '16px',
        border: 'none',
        borderBottom: '2px solid white',  // Underline only
        backgroundColor: 'transparent',   // Transparent background
        color: '#fff',                   // White text color
        outline: 'none',
        width: '250px',
        marginBottom: "25px",
        marginTop: "35px",
        '::placeholder': {
            color: '#fff', // Placeholder text color
        }
        
    },
    
   
    
    subscribeButton: {
        fontSize: '16px',
        borderRadius: '25px',
        fontWeight: "600",
        border: 'none',
        backgroundColor: '#000',
        color: '#fff',
        cursor: 'pointer',
        paddingLeft: "75px",
        paddingRight: "75px",
        paddingTop: "7px",
        paddingBottom: "7px",
        marginLeft: "30px",
        marginBottom: "25px",
        marginTop: "35px"
    },
    topSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '20px',
        textAlign: 'left', // Aligns text to the left
    },
    section: {
        flex: '1',
        padding: '0 10px', // Uniform padding to control alignment
    },
    sectionTitle: {
        marginBottom: '10px',  // Space below the heading
        marginLeft: '10px',    // Consistent left margin for headings
    },
    textContent: {
        marginLeft: '10px', // Consistent left margin for all text content
    },
    companyName: {
        color: 'black', // Set "Thozhil" to black color
        fontWeight: "500",
        fontSize: "30px",
        marginLeft: '10px', // Consistent left margin for company name
    },
    linksList: {
        listStyleType: 'none',
        padding: 0,
        marginLeft: '10px', // Consistent left margin for all links
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        display: 'block',
        marginBottom: '5px',
    },
    bottomSection: {
       
        paddingTop: '10px',
    },
    logoSection: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px', // Adjust spacing between logos
        marginBottom: '10px',
        marginTop:"30px",
        marginLeft:"-130px"
    },
    logo: {
        width: "24px", // Adjust logo size as needed
        height: 'auto',
        
    },
};

export default Footer;
