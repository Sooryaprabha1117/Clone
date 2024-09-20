import React from 'react';
import Footer from './Footer';
import logo1 from '../asset/facebook.png'; // Adjust the path as needed
import logo2 from '../asset/instagram.png';
import logo3 from '../asset/twitter.png';
import logo4 from '../asset/linkedin.png';

function Footer1() {
    const aboutLinks = [
        { href: '/home', text: 'Home' },
        { href: '/full-time-jobs', text: 'Full-time Jobs' },
        { href: '/part-time-jobs', text: 'Part-time Jobs' },
        { href: '/full-time-internships', text: 'Full-time Internships' },
        { href: '/part-time-internships', text: 'Part-time Internships' },
        { href: '/how-it-works', text: 'How It Works' },
        { href: '/contact-us', text: 'Contact Us' },
    ];

    const usefulLinks = [
        { href: '/mission', text: 'Our Mission' },
        { href: '/vision', text: 'Our Vision' },
        { href: '/faq', text: 'FAQ' },
        { href: '/privacy-policy', text: 'Privacy Policy' },
        { href: '/terms-conditions', text: 'Terms & Conditions' },
        { href: '/pricing-policy', text: 'Pricing Policy' },
        { href: '/cancellation-policy', text: 'Cancellation Policy' },
    ];

    const contactInfo = {
        email: 'info@thozhil.co.in',
        phone: '+91 784 592 1063',
    };

    const logos = [
        { src: logo1, alt: 'Logo 1' },
        { src: logo2, alt: 'Logo 2' },
        { src: logo3, alt: 'Logo 3' },
        { src: logo4, alt: 'Logo 4' }
    ];

    return (
        <div>
            {/* Other components and content */}
            <Footer
                mailingListText={["Join Our Mailing List To Receive The ", "News & Latest Trends"]}
                emailPlaceholder="Email Address..."
                subscribeButtonText="Subscribe Now"
                companyName="Thozhil"
                companyDescription="Find your relevant career that matches your skills and passion."
                aboutLinks={aboutLinks}
                usefulLinks={usefulLinks}
                contactInfo={contactInfo}
                developedBy="Developed By Oneyes Infotech Solutions"
                copyrightText="Copyright © 2023 Thozhil. All Rights Reserved."
                logos={logos}  // Pass the logos data here
            />
        </div>
    );
}

export default Footer1;
