
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'fade-out': {
					from: { opacity: '1' },
					to: { opacity: '0' }
				},
				'slide-in-right': {
					from: { transform: 'translateX(100%)' },
					to: { transform: 'translateX(0)' }
				},
				'slide-in-left': {
					from: { transform: 'translateX(-100%)' },
					to: { transform: 'translateX(0)' }
				},
				'slide-in-bottom': {
					from: { transform: 'translateY(100%)' },
					to: { transform: 'translateY(0)' }
				},
				'slide-in-top': {
					from: { transform: 'translateY(-100%)' },
					to: { transform: 'translateY(0)' }
				},
				'scale-in': {
					from: { transform: 'scale(0.95)', opacity: '0' },
					to: { transform: 'scale(1)', opacity: '1' }
				},
				'rotate': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'slide-in-left': 'slide-in-left 0.3s ease-out',
				'slide-in-bottom': 'slide-in-bottom 0.3s ease-out',
				'slide-in-top': 'slide-in-top 0.3s ease-out',
				'scale-in': 'scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
				'rotate': 'rotate 1s linear infinite',
				'pulse': 'pulse 1.5s ease-in-out infinite'
			},
			transitionProperty: {
				'height': 'height',
				'spacing': 'margin, padding',
				'width': 'width',
				'position': 'top, right, bottom, left',
			},
			transitionTimingFunction: {
				'spring': 'cubic-bezier(0.33, 1, 0.68, 1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
