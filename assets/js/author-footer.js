/**
 * Minimalist Author Footer System for I Want to Eat Your Pancreas Website Clone
 * Includes disclaimer, social media links, and author watermark in very small, subtle format
 * Author: Pry Uchiha
 */

// Initialize the minimalist footer system when DOM is ready
function initMinimalFooter() {
    addMinimalFooterStyles();
    addMinimalFooter();
}

/**
 * Add CSS styles for the minimal footer system
 */
function addMinimalFooterStyles() {
    if (document.querySelector('#minimal-footer-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'minimal-footer-styles';
    styles.textContent = `
        /* Minimal Footer System Styles */
        .minimal-footer-system {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 9999;
            font-family: 'Arial', sans-serif;
        }
        
        /* Clone Disclaimer - Very Small */
        .clone-disclaimer-minimal {
            background: rgba(0, 0, 0, 0.8);
            color: #ccc;
            text-align: center;
            padding: 3px 10px;
            font-size: 9px;
            line-height: 1.2;
            border-top: 1px solid rgba(255, 107, 157, 0.3);
        }
        
        .clone-disclaimer-minimal a {
            color: #ff6b9d;
            text-decoration: none;
            font-weight: normal;
        }
        
        .clone-disclaimer-minimal a:hover {
            text-decoration: underline;
        }
        
        /* Author Watermark - Very Subtle */
        .author-watermark-minimal {
            position: fixed;
            bottom: 25px;
            right: 10px;
            background: rgba(0, 0, 0, 0.6);
            color: rgba(255, 107, 157, 0.7);
            padding: 2px 8px;
            border-radius: 10px;
            font-size: 8px;
            font-weight: bold;
            letter-spacing: 0.5px;
            opacity: 0.7;
            transition: opacity 0.3s ease;
            z-index: 9998;
        }
        
        .author-watermark-minimal:hover {
            opacity: 1;
        }
        
        /* Social Media Links - Very Small Footer */
        .social-links-minimal {
            position: fixed;
            bottom: 25px;
            left: 10px;
            display: flex;
            gap: 8px;
            align-items: center;
            z-index: 9998;
        }
        
        .social-link-minimal {
            display: inline-block;
            width: 16px;
            height: 16px;
            background: rgba(0, 0, 0, 0.6);
            border-radius: 3px;
            text-decoration: none;
            color: #ff6b9d;
            font-size: 8px;
            font-weight: bold;
            text-align: center;
            line-height: 16px;
            transition: all 0.2s ease;
            opacity: 0.7;
        }
        
        .social-link-minimal:hover {
            opacity: 1;
            transform: scale(1.1);
            background: rgba(255, 107, 157, 0.2);
        }
        
        /* Individual social media colors on hover */
        .social-link-minimal.github:hover { background: rgba(51, 51, 51, 0.8); color: white; }
        .social-link-minimal.linkedin:hover { background: rgba(0, 119, 181, 0.8); color: white; }
        .social-link-minimal.instagram:hover { background: rgba(228, 64, 95, 0.8); color: white; }
        .social-link-minimal.discord:hover { background: rgba(114, 137, 218, 0.8); color: white; }
        .social-link-minimal.coffee:hover { background: rgba(255, 129, 63, 0.8); color: white; }
        
        /* Responsive Design - Even smaller on mobile */
        @media (max-width: 768px) {
            .clone-disclaimer-minimal {
                font-size: 8px;
                padding: 2px 8px;
            }
            
            .author-watermark-minimal {
                bottom: 20px;
                right: 8px;
                font-size: 7px;
                padding: 2px 6px;
            }
            
            .social-links-minimal {
                bottom: 20px;
                left: 8px;
                gap: 6px;
            }
            
            .social-link-minimal {
                width: 14px;
                height: 14px;
                font-size: 7px;
                line-height: 14px;
            }
        }
        
        /* Hide on very small screens if needed */
        @media (max-width: 480px) {
            .social-links-minimal {
                display: none;
            }
        }
    `;
    
    document.head.appendChild(styles);
}

/**
 * Add the minimal footer system to the page
 */
function addMinimalFooter() {
    // Check if already exists
    if (document.querySelector('.minimal-footer-system')) return;
    
    // Add clone disclaimer footer
    const disclaimer = document.createElement('div');
    disclaimer.className = 'clone-disclaimer-minimal';
    disclaimer.innerHTML = `
        ⚠️ This website is a clone of the original. Visit the 
        <a href="https://kimisui-anime.com/" target="_blank" rel="noopener noreferrer">original website</a> 
        for official content.
    `;
    
    // Add author watermark
    const watermark = document.createElement('div');
    watermark.className = 'author-watermark-minimal';
    watermark.innerHTML = 'Author: Pry Uchiha';
    
    // Add social media links - very small
    const socialLinks = document.createElement('div');
    socialLinks.className = 'social-links-minimal';
    socialLinks.innerHTML = `
        <a href="https://github.com/Priyanshu84iya" target="_blank" rel="noopener noreferrer" class="social-link-minimal github" title="GitHub">GH</a>
        <a href="https://www.linkedin.com/in/priyanshu-chaurasiya-8986a833b" target="_blank" rel="noopener noreferrer" class="social-link-minimal linkedin" title="LinkedIn">IN</a>
        <a href="https://www.instagram.com/pry_uchiha/" target="_blank" rel="noopener noreferrer" class="social-link-minimal instagram" title="Instagram">IG</a>
        <a href="https://discord.com/channels/@me/986668410685521940" target="_blank" rel="noopener noreferrer" class="social-link-minimal discord" title="Discord">DC</a>
        <a href="https://coff.ee/priyanshu6o" target="_blank" rel="noopener noreferrer" class="social-link-minimal coffee" title="Buy Me Coffee">☕</a>
    `;
    
    // Add elements to page
    document.body.appendChild(disclaimer);
    document.body.appendChild(watermark);
    document.body.appendChild(socialLinks);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMinimalFooter);
} else {
    initMinimalFooter();
}

// Global function for manual initialization
window.initMinimalFooter = initMinimalFooter;