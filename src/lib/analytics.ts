import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAnalytics, logEvent, type Analytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY || 'AIzaSyDHFNmxK5N8KFDrc0LlT0D2mXuNvOlBW-w',
	//authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN || 'brian-cho.firebaseapp.com',
	projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID || 'brian-cho',
	//storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET || 'brian-cho.firebasestorage.app',
	messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '346649456841',
	appId: import.meta.env.PUBLIC_FIREBASE_APP_ID || '1:346649456841:web:598bf0db3061a4e339dd18',
	measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID || 'G-TF1CDEFRM4' // Required for Analytics
};

let app: FirebaseApp | undefined;
let analytics: Analytics | undefined;

export const initializeAnalytics = () => {
	if (typeof window === 'undefined') return;

	if (!app) {
		app = initializeApp(firebaseConfig);
	}

	if (!analytics) {
		analytics = getAnalytics(app);
	}

	return analytics;
};

export const trackPageView = (path: string) => {
	if (typeof window !== 'undefined' && analytics) {
		logEvent(analytics, 'page_view', {
			page_path: path,
			page_title: document.title
		});
	}
};

export { analytics, logEvent };
