import { Context } from "./context";
import { IpsEmitterOptions } from "./model/ips-emitter-options";
import { IpsCoordinates } from "./model/ips-coordinates";
import { MinMax } from "./model/min-max";
export declare class ParticleEmitter {
    private context;
    private options;
    private width;
    private height;
    private length;
    private index;
    private startPosition;
    private velocity;
    private startTime;
    private lifeTime;
    private size;
    private growth;
    private renderer;
    private renderCall;
    private updateParticles;
    private deltaLeft;
    private particlesSec;
    private renderMode;
    private positionType;
    private lifeTimeOption;
    private color;
    private alpha;
    private startOption;
    private _startOption;
    private velocityOption;
    private _velocityOption;
    private growthOption;
    private _growthOption;
    private sizeOption;
    private textureKey;
    private blendmodeSource;
    private blendmodeTarget;
    constructor(context: Context, options: IpsEmitterOptions, width: number, height: number);
    private setOptions(options);
    setStartOption(value: IpsCoordinates): void;
    setBlendmodeSource(value: number): void;
    setBlendmodeTarget(value: number): void;
    setTextureKey(value: string): void;
    setSizeOption(value: MinMax<number>): void;
    setVelocityOption(value: IpsCoordinates): void;
    setColor(colorHex: string): void;
    setGrowth(value: number): void;
    update(delta: number): void;
    render(time: number): void;
    private initPool(particlesSec, lifetime, growth);
    private generateParticles(nrOfParticles);
    private setParticleValues(startTime);
    private setTimeValue(startTime);
    private rand(min, max);
}
