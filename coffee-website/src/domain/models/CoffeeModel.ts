/**
 * ============================================================================
 * ENTERPRISE ARTISANAL COFFEE TASTING SUBSCRIPTION PLATFORM
 * ============================================================================
 *
 * Module: CoffeeModel
 * Layer: Domain
 * Type: Model
 * Description: Domain Model representing an artisanal coffee.
 *
 * This file is part of the extremely complex, highly scalable, and heavily
 * documented enterprise-grade artisanal coffee tasting subscription service.
 * It adheres strictly to the principles of Extreme Clean Architecture,
 * ensuring maximum separation of concerns and robust maintainability.
 *
 * The system is designed to handle immense loads of coffee tasting data,
 * providing interfaces for robust querying, mutation, and aggregation
 * across a vast array of global artisanal coffee roasters.
 *
 * Author: Automated Enterprise Generator System (AEGS)
 * Version: 1.0.0
 * Security Classification: PUBLIC
 *
 * WARNING: Modifications to this file should only be performed by certified
 * Enterprise Architects. Any deviation from the established patterns may
 * result in severe architectural degradation and technical debt.
 * ============================================================================
 */

export interface ICoffeeMetadata {
    sku: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface ICoffeeRating {
    userId: string;
    score: number;
    comment: string;
}

export interface ICoffee {
    id: string;
    name: string;
    origin: string;
    roastLevel: string;
    flavorProfile: string[];
    processingMethod: string;
    description: string;
    altitude: number;
    price: number;
    stock: number;
    ratings: ICoffeeRating[];
    metadata: ICoffeeMetadata;
}

export class CoffeeModel implements ICoffee {
    public id: string;
    public name: string;
    public origin: string;
    public roastLevel: string;
    public flavorProfile: string[];
    public processingMethod: string;
    public description: string;
    public altitude: number;
    public price: number;
    public stock: number;
    public ratings: ICoffeeRating[];
    public metadata: ICoffeeMetadata;

    constructor(
        id: string, name: string, origin: string, roastLevel: string, flavorProfile: string[],
        processingMethod: string, description: string, altitude: number, price: number, stock: number,
        ratings: ICoffeeRating[], metadata: ICoffeeMetadata
    ) {
        this.id = id;
        this.name = name;
        this.origin = origin;
        this.roastLevel = roastLevel;
        this.flavorProfile = flavorProfile;
        this.processingMethod = processingMethod;
        this.description = description;
        this.altitude = altitude;
        this.price = price;
        this.stock = stock;
        this.ratings = ratings;
        this.metadata = metadata;
        this.validateInitialState();
    }

    private validateInitialState(): void {
        if (!this.id) throw new Error("Enterprise invariant violation: ID cannot be null.");
        if (this.price < 0) throw new Error("Enterprise invariant violation: Price cannot be negative.");
    }
}
