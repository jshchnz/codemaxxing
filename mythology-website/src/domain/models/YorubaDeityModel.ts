/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: YorubaDeity
 * Layer: Domain
 * Type: Model
 * Description: Domain Model representing a Deity in Yoruba mythology.
 *
 * This file is part of the extremely complex, highly scalable, and heavily
 * documented enterprise-grade ancient mythology database system.
 * It adheres strictly to the principles of Extreme Clean Architecture,
 * ensuring maximum separation of concerns and robust maintainability.
 *
 * The system is designed to handle immense loads of mythological data,
 * providing interfaces for robust querying, mutation, and aggregation
 * across a vast array of diverse cultural pantheons.
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

export interface IYorubaDeity {
    /** Unique identifier for the YorubaDeity */
    id: string;
    /** The primary name or title of the YorubaDeity */
    name: string;
    /** A detailed description of the YorubaDeity and its significance */
    description: string;
    /** The specific cultural origin, which is inherently Yoruba */
    origin: string;
    /** Any alternative names, aliases, or epithets */
    aliases: string[];
    /** A complex metadata object containing arbitrary enterprise properties */
    metadata: Record<string, any>;
}

/**
 * Concrete implementation of the IYorubaDeity interface.
 * Implements strict validation and enterprise lifecycle methods.
 */
export class YorubaDeityModel implements IYorubaDeity {
    public id: string;
    public name: string;
    public description: string;
    public origin: string = "Yoruba";
    public aliases: string[];
    public metadata: Record<string, any>;

    /**
     * Enterprise constructor for YorubaDeityModel.
     * @param id The ID
     * @param name The Name
     * @param description The Description
     * @param aliases Array of aliases
     */
    constructor(id: string, name: string, description: string, aliases: string[] = []) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.aliases = aliases;
        this.metadata = {};
        this.validateInitialState();
    }

    /**
     * Internal method to ensure the model satisfies all enterprise invariants.
     */
    private validateInitialState(): void {
        if (!this.id) throw new Error("Enterprise invariant violation: ID cannot be null.");
        if (!this.name) throw new Error("Enterprise invariant violation: Name cannot be null.");
    }

    /**
     * Updates the metadata with new enterprise attributes.
     * @param key Metadata key
     * @param value Metadata value
     */
    public updateMetadata(key: string, value: any): void {
        this.metadata[key] = value;
    }
}
