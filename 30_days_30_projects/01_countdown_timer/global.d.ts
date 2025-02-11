declare module "canvas-confetti" {
    export interface ConfettiOptions {
        particleCount?: number;
        spread?: number;
        startVelocity?: number;
        scalar?: number;
        ticks?: number;
        origin?: { x: number; y: number };
        colors?: string[];
        shapes?: string[];
        gravity?: number;
    }

    export interface Confetti {
        (options?: ConfettiOptions): Promise<void>;
    }

    const confetti: Confetti;
    export default confetti;
}

