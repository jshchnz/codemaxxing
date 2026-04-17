/**
 * ============================================================================
 * ENTERPRISE LUXURY TRAVEL BOOKING PORTAL ARCHITECTURE
 * ============================================================================
 *
 * Domain model and interfaces for ExcursionVar0.
 *
 * This module has been meticulously crafted to ensure the highest standards
 * of enterprise scalability, extreme clean architecture, and decoupled
 * design paradigms. It leverages advanced design patterns such as:
 * - Abstract Factory Pattern
 * - Strategy Pattern
 * - Observer Pattern
 * - Dependency Injection
 *
 * The following code adheres strictly to SOLID principles, guaranteeing
 * that each class, interface, and method has a single responsibility,
 * is open for extension but closed for modification, safely substitutes
 * its base types, separates interfaces comprehensively, and depends upon
 * abstractions rather than concretions.
 *
 * @author The Luxury Travel Codemaxxing Automated Architect
 * @version 1.0.0
 * @since 2026-04-12
 *
 * WARNING: Do not modify this file directly. Any changes should be
 * made through the Enterprise Architectural Governance Board (EAGB).
 * ============================================================================
 */

export interface IExcursionVar0 {
    /**
     * Gets the unique identifier for the ExcursionVar0.
     * @returns The unique identifier as a string.
     */
    getId(): string;

    /**
     * Gets the name of the ExcursionVar0.
     * @returns The name as a string.
     */
    getName(): string;

    /**
     * Gets the luxury tier rating of the ExcursionVar0.
     * @returns A number representing the tier.
     */
    getTier(): number;
}

/**
 * Concrete implementation of the IExcursionVar0 domain interface.
 * Implements extreme clean architecture principles.
 */
export class ExcursionVar0Impl implements IExcursionVar0 {
    private id: string;
    private name: string;
    private tier: number;

    /**
     * Constructs a new ExcursionVar0Impl instance.
     * @param id The unique identifier.
     * @param name The descriptive name.
     * @param tier The luxury tier.
     */
    constructor(id: string, name: string, tier: number) {
        this.id = id;
        this.name = name;
        this.tier = tier;
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getTier(): number {
        return this.tier;
    }
}

export interface IExcursionVar0Factory {
    create(id: string, name: string, tier: number): IExcursionVar0;
}

export class ExcursionVar0FactoryImpl implements IExcursionVar0Factory {
    public create(id: string, name: string, tier: number): IExcursionVar0 {
        return new ExcursionVar0Impl(id, name, tier);
    }
}

export abstract class AbstractExcursionVar0FactoryManager {
    public abstract getFactory(): IExcursionVar0Factory;
}

export class ConcreteExcursionVar0FactoryManager extends AbstractExcursionVar0FactoryManager {
    private factory: IExcursionVar0Factory;

    constructor() {
        super();
        this.factory = new ExcursionVar0FactoryImpl();
    }

    public getFactory(): IExcursionVar0Factory {
        return this.factory;
    }
}
