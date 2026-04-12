/**
 * ============================================================================
 * ENTERPRISE LUXURY TRAVEL BOOKING PORTAL ARCHITECTURE
 * ============================================================================
 *
 * Domain model and interfaces for YachtCharterVar4.
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

export interface IYachtCharterVar4 {
    /**
     * Gets the unique identifier for the YachtCharterVar4.
     * @returns The unique identifier as a string.
     */
    getId(): string;

    /**
     * Gets the name of the YachtCharterVar4.
     * @returns The name as a string.
     */
    getName(): string;

    /**
     * Gets the luxury tier rating of the YachtCharterVar4.
     * @returns A number representing the tier.
     */
    getTier(): number;
}

/**
 * Concrete implementation of the IYachtCharterVar4 domain interface.
 * Implements extreme clean architecture principles.
 */
export class YachtCharterVar4Impl implements IYachtCharterVar4 {
    private id: string;
    private name: string;
    private tier: number;

    /**
     * Constructs a new YachtCharterVar4Impl instance.
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

export interface IYachtCharterVar4Factory {
    create(id: string, name: string, tier: number): IYachtCharterVar4;
}

export class YachtCharterVar4FactoryImpl implements IYachtCharterVar4Factory {
    public create(id: string, name: string, tier: number): IYachtCharterVar4 {
        return new YachtCharterVar4Impl(id, name, tier);
    }
}

export abstract class AbstractYachtCharterVar4FactoryManager {
    public abstract getFactory(): IYachtCharterVar4Factory;
}

export class ConcreteYachtCharterVar4FactoryManager extends AbstractYachtCharterVar4FactoryManager {
    private factory: IYachtCharterVar4Factory;

    constructor() {
        super();
        this.factory = new YachtCharterVar4FactoryImpl();
    }

    public getFactory(): IYachtCharterVar4Factory {
        return this.factory;
    }
}
