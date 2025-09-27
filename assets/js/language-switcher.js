/**
 * Universal Language Switcher for I Want to Eat Your Pancreas Website
 * Supports Japanese (default) and English translations across all pages
 */

// Global language state
let currentLanguage = 'ja'; // Default language is Japanese

// Comprehensive translation database
const translations = {
    // Navigation Menu
    '最新情報': 'Latest News',
    'イントロダクション': 'Introduction',
    'ストーリー': 'Story',
    'キャスト': 'Cast',
    'スタッフ': 'Staff',
    '主題歌': 'Theme Song',
    'Blu-ray&DVD': 'Blu-ray & DVD',
    'スペシャル': 'Special',
    'チケット情報': 'Ticket Info',
    '来場者特典': 'Theater Gifts',
    '劇場グッズ': 'Theater Goods',
    '舞台挨拶': 'Stage Greeting',
    '上映館情報': 'Theater Info',
    'トレーラー': 'Trailer',
    'タイアップ': 'Tie-up',
    
    // Page Titles and Meta
    '劇場アニメ「君の膵臓をたべたい」公式サイト｜2019年4月Blu-ray＆DVD発売決定！': 'I Want to Eat Your Pancreas - Official Anime Movie Site | Blu-ray & DVD Release April 2019!',
    '君の膵臓をたべたい': 'I Want to Eat Your Pancreas',
    '劇場アニメ': 'Anime Movie',
    '公式サイト': 'Official Site',
    
    // News and Updates
    '金曜ロードショーにて「君の膵臓をたべたい」放送決定！': '\'I Want to Eat Your Pancreas\' confirmed to air on Friday Roadshow!',
    '放送決定': 'Broadcasting Confirmed',
    
    // Content Sections
    'シェア': 'Share',
    'お問い合わせ': 'Contact',
    '著作権情報': 'Copyright Information',
    'プライバシーポリシー': 'Privacy Policy',
    'このサイトに掲載されている一切の文書・図版・写真等を、手段や形態を問わず複製、転載することを禁じます。': 'All documents, illustrations, and photographs posted on this site may not be reproduced or reprinted by any means or form.',
    
    // Common UI Elements
    'ニュース': 'News',
    'メディア情報': 'Media Information',
    'メディア': 'Media',
    'スタッフコメント': 'Staff Comments',
    '富山県・高岡市キャンペーン': 'Toyama Prefecture / Takaoka City Campaign',
    '福岡キャンペーン': 'Fukuoka Campaign',
    'キャンペーン': 'Campaign',
    
    // Content and Character Related
    '他人と深くかかわることをなるべく避けるようにして生きている高校生。読書を好む。病院で手にした「共病文庫」によって、桜良の秘密を知ってしまう。': 'A high school student who tries to avoid deep relationships with others. He enjoys reading. Through the \'Disease Coexistence Journal\' he finds at the hospital, he learns about Sakura\'s secret.',
    '高校生': 'High School Student',
    '読書': 'Reading',
    '病院': 'Hospital',
    '秘密': 'Secret',
    
    // Production Terms
    '監督': 'Director',
    '脚本': 'Screenplay',
    '原作': 'Original Work',
    '制作': 'Production',
    'アニメーション制作': 'Animation Studio',
    '配給': 'Distribution',
    '製作': 'Production Committee',
    'キャラクターデザイン': 'Character Design',
    '総作画監督': 'Chief Animation Director',
    '美術監督': 'Art Director',
    '色彩設計': 'Color Design',
    '撮影監督': 'Director of Photography',
    '編集': 'Editing',
    '音響監督': 'Sound Director',
    '音楽': 'Music',
    
    // Common Terms
    '公開': 'Release',
    '発売': 'On Sale',
    '決定': 'Confirmed',
    '情報': 'Information',
    '特典': 'Bonus',
    '限定': 'Limited',
    '初回': 'First Edition',
    '通常': 'Standard',
    '価格': 'Price',
    '収録': 'Included',
    '内容': 'Contents',
    '全国': 'Nationwide',
    '劇場': 'Theater',
    '上映': 'Screening',
    '映画': 'Movie',
    '作品': 'Work',
    
    // Dates and Time
    '年': 'Year',
    '月': 'Month',
    '日': 'Day',
    '時': 'Hour',
    '分': 'Minute',
    
    // Social Media and Sharing
    'Twitterでシェアする': 'Share on Twitter',
    'Facebookでシェアする': 'Share on Facebook',
    'LINEでシェアする': 'Share on LINE',
    'SNS': 'Social Media',
    
    // Categories and Classifications
    '雑誌': 'Magazine',
    'テレビ': 'TV',
    'ラジオ': 'Radio',
    'WEB': 'Web',
    'イベント': 'Event',
    'グッズ': 'Goods',
    'コメント': 'Comment',
    
    // Common Phrases
    'コメント': 'Comments',
    '応援': 'Support',
    '到着': 'Arrival',
    '各界から': 'From Various Fields',
    '応援コメントが到着！': 'Support Comments Have Arrived!',
    
    // Movie/Story Related
    '物語': 'Story',
    '感動': 'Emotional',
    '青春': 'Youth',
    '恋愛': 'Romance',
    'ドラマ': 'Drama',
    
    // Technical Terms
    'オープニングテーマ': 'Opening Theme',
    'エンディングテーマ': 'Ending Theme',
    '主題歌': 'Theme Song',
    '挿入歌': 'Insert Song',
    '劇伴': 'Background Music',
    'サウンドトラック': 'Soundtrack',
    
    // Regions and Places
    '東京': 'Tokyo',
    '大阪': 'Osaka',
    '名古屋': 'Nagoya',
    '福岡': 'Fukuoka',
    '富山': 'Toyama',
    '高岡': 'Takaoka',
    '全国': 'Nationwide',
    
    // Common Website Elements
    'トップ': 'Top',
    'ホーム': 'Home',
    'サイトマップ': 'Site Map',
    'プライバシー': 'Privacy',
    '利用規約': 'Terms of Use',
    '免責事項': 'Disclaimer'
};

/**
 * Initialize the language switcher
 */
function initLanguageSwitcher() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== 'ja') {
        currentLanguage = 'ja'; // Set to opposite so toggle works correctly
        toggleLanguage();
    }
    
    // Add language switcher if it doesn't exist
    if (!document.querySelector('.language-switcher')) {
        addLanguageSwitcher();
    }
}

/**
 * Add language switcher button to the page
 */
function addLanguageSwitcher() {
    const languageSwitcher = document.createElement('div');
    languageSwitcher.className = 'language-switcher';
    languageSwitcher.innerHTML = `
        <button id="lang-toggle" class="lang-btn" onclick="toggleLanguage()">
            <span class="lang-flag">🇺🇸</span>
            <span class="lang-text">EN</span>
        </button>
    `;
    
    // Insert at the beginning of the wrapper or body
    const wrapper = document.querySelector('.wrapper') || document.body;
    if (wrapper) {
        wrapper.insertBefore(languageSwitcher, wrapper.firstChild);
    }
}

/**
 * Toggle between Japanese and English
 */
function toggleLanguage() {
    const button = document.getElementById('lang-toggle');
    if (!button) return;
    
    const flagSpan = button.querySelector('.lang-flag');
    const textSpan = button.querySelector('.lang-text');
    
    // Add switching animation
    document.body.classList.add('lang-switching');
    
    // Toggle language
    if (currentLanguage === 'ja') {
        currentLanguage = 'en';
        if (flagSpan) flagSpan.textContent = '🇯🇵';
        if (textSpan) textSpan.textContent = '日本語';
        switchToLanguage('en');
    } else {
        currentLanguage = 'ja';
        if (flagSpan) flagSpan.textContent = '🇺🇸';
        if (textSpan) textSpan.textContent = 'EN';
        switchToLanguage('ja');
    }
    
    // Remove switching animation after delay
    setTimeout(() => {
        document.body.classList.remove('lang-switching');
    }, 300);
    
    // Save language preference
    localStorage.setItem('preferredLanguage', currentLanguage);
}

/**
 * Switch all content to specified language
 * @param {string} lang - Language code ('ja' or 'en')
 */
function switchToLanguage(lang) {
    // Update document language attribute
    document.documentElement.setAttribute('lang', lang);
    
    // Handle elements with explicit data attributes first
    const elementsWithLangData = document.querySelectorAll('[data-lang-ja], [data-lang-en]');
    elementsWithLangData.forEach(element => {
        const jaText = element.getAttribute('data-lang-ja');
        const enText = element.getAttribute('data-lang-en');
        
        if (lang === 'ja' && jaText) {
            updateElementContent(element, jaText);
        } else if (lang === 'en' && enText) {
            updateElementContent(element, enText);
        }
    });
    
    // Handle automatic translation for elements without explicit data attributes
    const allTextElements = document.querySelectorAll('*:not(script):not(style):not(.language-switcher)');
    allTextElements.forEach(element => {
        // Skip if element already has language data attributes
        if (element.hasAttribute('data-lang-ja') || element.hasAttribute('data-lang-en')) {
            return;
        }
        
        // Only process elements with direct text content (not nested elements)
        if (element.children.length === 0 || hasOnlyInlineChildren(element)) {
            translateElementContent(element, lang);
        }
    });
    
    // Update page title
    updatePageTitle(lang);
}

/**
 * Update element content based on its type
 * @param {Element} element - DOM element to update
 * @param {string} text - New text content
 */
function updateElementContent(element, text) {
    if (element.tagName.toLowerCase() === 'title') {
        element.textContent = text;
        document.title = text;
    } else if (element.hasAttribute('alt')) {
        element.setAttribute('alt', text);
    } else if (element.tagName.toLowerCase() === 'img' && !element.hasAttribute('alt')) {
        element.setAttribute('alt', text);
    } else {
        element.textContent = text;
    }
}

/**
 * Check if element has only inline children (no block elements)
 * @param {Element} element - Element to check
 * @returns {boolean}
 */
function hasOnlyInlineChildren(element) {
    const blockElements = ['DIV', 'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'UL', 'OL', 'LI', 'SECTION', 'ARTICLE', 'ASIDE', 'NAV', 'HEADER', 'FOOTER'];
    
    for (let child of element.children) {
        if (blockElements.includes(child.tagName)) {
            return false;
        }
    }
    return true;
}

/**
 * Translate element content using the translation database
 * @param {Element} element - Element to translate
 * @param {string} lang - Target language
 */
function translateElementContent(element, lang) {
    const text = element.textContent.trim();
    if (!text) return;
    
    // Handle alt attributes
    if (element.hasAttribute('alt')) {
        const altText = element.getAttribute('alt');
        const translatedAlt = translateText(altText, lang);
        if (translatedAlt !== altText) {
            element.setAttribute('alt', translatedAlt);
        }
    }
    
    // Handle text content
    const translatedText = translateText(text, lang);
    if (translatedText !== text) {
        element.textContent = translatedText;
    }
}

/**
 * Translate text using the translation database
 * @param {string} text - Text to translate
 * @param {string} lang - Target language
 * @returns {string} - Translated text or original if no translation found
 */
function translateText(text, lang) {
    if (lang === 'en') {
        // Japanese to English
        return translations[text] || text;
    } else {
        // English to Japanese (reverse lookup)
        for (const [ja, en] of Object.entries(translations)) {
            if (en === text) {
                return ja;
            }
        }
        return text;
    }
}

/**
 * Update page title based on current language
 * @param {string} lang - Target language
 */
function updatePageTitle(lang) {
    const titleElement = document.querySelector('title');
    if (!titleElement) return;
    
    const currentTitle = titleElement.textContent;
    const translatedTitle = translateText(currentTitle, lang);
    
    if (translatedTitle !== currentTitle) {
        titleElement.textContent = translatedTitle;
        document.title = translatedTitle;
    }
}

/**
 * Add CSS styles for the language switcher
 */
function addLanguageSwitcherStyles() {
    if (document.querySelector('#language-switcher-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'language-switcher-styles';
    styles.textContent = `
        /* Language Switcher Styles */
        .language-switcher {
            position: fixed;
            top: 10px;
            right: 20px;
            z-index: 10000;
        }
        
        .lang-btn {
            display: flex;
            align-items: center;
            gap: 5px;
            background: rgba(255, 255, 255, 0.9);
            border: 2px solid #ff6b9d;
            border-radius: 25px;
            padding: 8px 15px;
            cursor: pointer;
            font-family: 'Arial', sans-serif;
            font-size: 14px;
            font-weight: bold;
            color: #ff6b9d;
            box-shadow: 0 2px 10px rgba(255, 107, 157, 0.3);
            transition: all 0.3s ease;
        }
        
        .lang-btn:hover {
            background: #ff6b9d;
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(255, 107, 157, 0.5);
        }
        
        .lang-flag {
            font-size: 18px;
        }
        
        .lang-text {
            font-size: 12px;
            letter-spacing: 1px;
        }
        
        /* Animation for language switch */
        .lang-switching {
            opacity: 0.7;
            pointer-events: none;
            transition: opacity 0.3s ease;
        }
        
        /* Smooth transition for translated content */
        [data-lang-ja], [data-lang-en] {
            transition: opacity 0.3s ease;
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
            .language-switcher {
                top: 5px;
                right: 10px;
            }
            
            .lang-btn {
                padding: 6px 12px;
                font-size: 12px;
            }
            
            .lang-flag {
                font-size: 16px;
            }
        }
    `;
    
    document.head.appendChild(styles);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        addLanguageSwitcherStyles();
        initLanguageSwitcher();
    });
} else {
    addLanguageSwitcherStyles();
    initLanguageSwitcher();
}

// Global function for onclick handlers
window.toggleLanguage = toggleLanguage;