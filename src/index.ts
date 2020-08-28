declare global {
    interface Window { lqe: any; }
}

export default function bootstrap() {
    console.log("HELLO WORLD");
    window.lqe = new DOMParser();
}