/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [],
	safelist: [
		'w-1/4',
		'w-[45%]'
	],

	theme: {					
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1400px',
			'3xl': '1600px',
			'4xl': '1900px'
		},
		fontSize: {
			'2xs': '0.6rem',
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'1.5xl': '1.375rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'3.5xl': '2rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'px8': '8px',
			'px15': '0.938rem',
			'px32': '32px',
			'px52': '3.25rem'
		},
		lineHeight: {
			none: '1',
			tight: '1.25',
			snug: '1.375',
			normal: '1.5',
			relaxed: '1.625',
			loose: '2',
			'3': '.75rem',
			'4': '1rem',
			'5': '1.25rem',
			'6': '1.5rem',
			'7': '1.75rem',
			'8': '2rem',
			'9': '2.25rem',
			'10': '2.5rem',
		},
		extend: {
			fontFamily: {
				'skin-default': 'var(--font-default)'
			},
			fontSize: {
				'11p': '11px',
				'13p': '13px',
				'base-15': '15px',
			},
			lineHeight: {
				'half': '0.5',
				'tighter': '1.15'
			},
			colors: {				
				skin: {
					'border-color': 'var(--border-color)',
				}
			},
			textColor: {
				skin: {
					base: 'var(--text-color--base)',
					heading: 'var(--text-color-heading)',
					'c4k-logo': 'var(--text-c4k-logo)',
					'c4k-logo-footer': 'var(--text-c4k-logo-footer)',
					icon: 'var(--text-icon-color)',
					'nav-action-icon': 'var(--text-nav-action-icon-color)',
					'icon-footer': 'var(--text-icon-footer-color)',
					'btn': 'var(--text-color-btn)',
					'btn-tertiary': 'var(--text-color-btn-tertiary)',
					'btn-inactive': 'var(--text-color-btn-inactive)',
					'favourite-count': 'var(--text-color-favourite-count)',
					'footer': 'var(--text-color-footer)',
					'site-menu-icon': 'var(--site-menu-icon-color)',
					'autocomplete-mark': 'var(--text-color-autocomplete-mark)',
					'top-level-hover': 'var(--text-color-top-level-hover)',
					'subnav-title': 'var(--text-color-subnav-title)',
					'homepage': 'var(--text-color-homepage)',
					'error': 'var(--text-color-error)',
					'grey': 'var(--text-color-grey)',
					'cacti': 'var(--text-color-cacti)',
					'bubble-gum': 'var(--text-color-bubble-gum)',
					'magenta': 'var(--text-color-magenta)',
					'eggplant': 'var(--text-color-eggplant)',
					'service-extra-custom': 'var(--text-color-service-extra-custom)'
				}
			},
			backgroundColor: {
				skin: {
					base: 'var(--text-color-base)',
					'footer': 'var(--bg-footer)',
					'btn-primary': 'var(--btn-bg-primary)',
					'btn-secondary': 'var(--btn-bg-secondary)',
					'btn-tertiary': 'var(--btn-bg-tertiary)',
					'btn-inactive': 'var(--btn-bg-inactive) ',
					'btn-special': 'var(--btn-bg-special) ',
					'btn-filter': 'var(--btn-bg-filter) ',
					'search-icon': 'var(--bg-search-icon)',
					'favourite-count': 'var(--bg-favourite-count)',
					'article-nav-bar': 'var(--bg-article-nav-bar)',
					'modal-overlay': 'var(--bg-modal-overlay)',
					'modal-box': 'var(--bg-modal-box)',
					'sub-nav': 'var(--bg-sub-nav)',
					'secondary': 'var(--color-blue-dark)',
					'site-header': 'var(--bg-site-header)',
					'homepage-hero': 'var(--bg-homepage-hero)',
					'homepage-searchbar': 'var(--bg-homepage-searchbar)',
					'eggplant': 'var(--bg-eggplant)',
					'whitesand': 'var(--bg-whitesand)',
					'poppy': 'var(--bg-poppy)',
					'bubblegum': 'var(--bg-bubblegum)',
					'search-result': 'var(--bg-search-result)',
					'fee-vacancy-box': 'var(--bg-fee-vacancy-box)',
					'filter-modal': 'var(--bg-filter-modal)',
					'centre-profile-overview': 'var(--bg-centre-profile-overview)',
					'profile-nav': 'var(--bg-profile-nav)',
					'srp-mobile': 'var(--bg-mobile-srp-background)',
					'light-cyan': 'var(--bg-light-cyan)',
					'lightest-blue': 'var(--bg-lightest-blue)',
					'light-purple': 'var(--bg-light-purple)',
					'cacti': 'var(--bg-color-cacti)',
					'magenta': 'var(--bg-magenta)',
					'compare-sidebar': 'var(--bg-compare-sidebar)',
					'plush': 'var(--bg-color-plush)',
					'vistawhite': '#FBF8F5',
					'alabaster': '#F8F8F8',
				}
			},
			width: {
				'9': '36px',
				'68p': '68px',
				'18': '72px',
				'68': '17rem',
				'166p': '166px',
				'328p': '328px',
				'px211': '211px',
				'px549': '549px',
				'px600': '600px',
				'px900': '900px',
				'px1100': '1100px',
			},
			maxWidth: {
				'555p': '555px',
				'xxs': '240px'
			},
			minWidth: {
				'24': '96px',
			},
			height: {
				'17p': '17px',
				'9': '36px',
				'13': '52px',
				'68p': '68px',
				'18': '72px',
				'152p': '152px',
				'405p': '405px',
				'780p': '780px',
				'px260': '260px',
				'px275': '275px',
				'px297': '297px',
				'px312': '312px',
				'px332': '332px',
				'360p': '360px',
				'px377': '377px',
				'px400': '400px',
				'px408': '408px',
				'px424': '424px',
				'px452': '452px',
				'px528': '528px',
			},
			maxHeight: {
				'18': '72px',
				'19': '76px',
				'360p': '360px',
				'500p': '500px',
				'550p': '550px',
				'585p': '585px',
				'80pc': '80%',
				'90pc': '90%',
			},
			minHeight: {
				'42p': '42px',
				'16': '4rem',
				'312p': '312px',
				'464p': '464px',
				'490p': '490px',
				'504p': '504px',
				'515p': '515px',
				'528p': '528px',
				'530p': '530px',
				'555p': '555px',
			},
			border: {
				'3': '3px'
			},
			borderRadius: {
				'4xl': '1.75rem',
				'40px': '40px',
				'96px': '96px',
				'14xl': '14px',
				'15xl': '15px',
			},
			borderColor: {
				white: 'var(--color-white)',
				skin: {
					'heading': 'var(--text-color-heading)',
					'site-menu-active': 'var(--bg-site-menu-active)',
					'neutral-light': 'var(--border-color)',
					'top-level-nav-item': 'var(--border-color-top-level-nav-item)',
					'filter': 'var(--btn-border-filter)',
					'cacti': 'var(--border-color-cacti)',
					'magenta': 'var(--border-color-magenta)',
					'highlights': 'var(--border-hightlights)'
				},
			},
			margin: {
				'-9': '-36px',
				'-15': '-58px',
				'-27': '-104px',
				'-60p': '-60px',
				'-18': '-72px',
				'-98p': '-98px',
				'-92p': '-92px',
				'-100p': '-100px',
			},
			marginTop:{
				'47': '47px',
			},
			transitionProperty: {
				'height': 'height'
			},
			backgroundImage: {
				'homepage-hero-bg': "url('/img/homepage/hero.jpg')",
				'homepage-hero-mobile-bg': "url('/img/homepage/hero-mobile.png')",
				'stats-hero-bg': "url('/img/homepage/stats-hero-bg.png')",
				'va-signup-bg': "url('/img/homepage/va-signup-bg.jpg')",
				'newsletter-bg': "url('/img/homepage/newsletter-bg.jpg')",
				'newsletter2-bg': "url('/img/homepage/newsletter2-bg.jpg')",
			},
			backgroundSize: {
				'100p': '100%',
				'300px': '300px',
				'332px': '332px',
			},
			padding: {
				'22': '88px',
				'26': '102px',
				'30': '120px'
			},
			paddingTop: {
				'19': '77px',
				'21': '84px',
				'23': '91px',
				'26': '102px',
			},
			paddingBottom: {
				'17': '67px',
				'18': '72px',
				'21': '84px',
				'23': '91px',
				'26': '102px',
				'35': '135px',
			},
			zIndex: {
				'5': 5,
				'12': 12,
				'15': 15,
				'70': 70,
				'75': 75,
				'100': 100,
				'102': 102,
				'103': 103,
				'200': 200
			},
			spacing: {
				'-23p': '-23px',
				'-50p': '-50px',
				'-70p': '-70px',
				'-96p': '-96px',
				'17': '4.25rem',
				'18': '4.5rem',
				'42': '10.5rem',
				'52p': '52px',
				'152p': '152px',
				'170p': '170px'
			}			
		},
	},

	plugins: [
		// install plugins via npm first before using
		// require('@tailwindcss/typography'),
		// require('@tailwindcss/forms'),
		// require('@tailwindcss/line-clamp'),
		// require('@tailwindcss/aspect-ratio')
	]
}
