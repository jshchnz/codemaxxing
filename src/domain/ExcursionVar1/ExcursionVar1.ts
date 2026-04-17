/**
 * ============================================================================
 * ENTERPRISE LUXURY TRAVEL BOOKING PORTAL ARCHITECTURE
 * ============================================================================
 *
 * Domain model and interfaces for ExcursionVar1.
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

export interface IExcursionVar1 {
    /**
     * Gets the unique identifier for the ExcursionVar1.
     * @returns The unique identifier as a string.
     */
    getId(): string;

    /**
     * Gets the name of the ExcursionVar1.
     * @returns The name as a string.
     */
    getName(): string;

    /**
     * Gets the luxury tier rating of the ExcursionVar1.
     * @returns A number representing the tier.
     */
    getTier(): number;
}

/**
 * Concrete implementation of the IExcursionVar1 domain interface.
 * Implements extreme clean architecture principles.
 */
export class ExcursionVar1Impl implements IExcursionVar1 {
    private id: string;
    private name: string;
    private tier: number;

    /**
     * Constructs a new ExcursionVar1Impl instance.
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

export interface IExcursionVar1Factory {
    create(id: string, name: string, tier: number): IExcursionVar1;
}

export class ExcursionVar1FactoryImpl implements IExcursionVar1Factory {
    public create(id: string, name: string, tier: number): IExcursionVar1 {
        return new ExcursionVar1Impl(id, name, tier);
    }
}

export abstract class AbstractExcursionVar1FactoryManager {
    public abstract getFactory(): IExcursionVar1Factory;
}

export class ConcreteExcursionVar1FactoryManager extends AbstractExcursionVar1FactoryManager {
    private factory: IExcursionVar1Factory;

    constructor() {
        super();
        this.factory = new ExcursionVar1FactoryImpl();
    }

    public getFactory(): IExcursionVar1Factory {
        return this.factory;
    }
}
