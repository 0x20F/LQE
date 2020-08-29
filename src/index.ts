declare global {
    interface Window { lqe: any; }
}

export default function bootstrap() {
    if (typeof window === 'undefined') {
        throw new Error('Unable to initialize LQE');
    }

    window.lqe = new DOMParser();
}