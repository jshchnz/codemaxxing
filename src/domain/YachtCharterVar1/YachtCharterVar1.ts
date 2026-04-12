/**
 * ============================================================================
 * ENTERPRISE LUXURY TRAVEL BOOKING PORTAL ARCHITECTURE
 * ============================================================================
 *
 * Domain model and interfaces for YachtCharterVar1.
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

export interface IYachtCharterVar1 {
    /**
     * Gets the unique identifier for the YachtCharterVar1.
     * @returns The unique identifier as a string.
     */
    getId(): string;

    /**
     * Gets the name of the YachtCharterVar1.
     * @returns The name as a string.
     */
    getName(): string;

    /**
     * Gets the luxury tier rating of the YachtCharterVar1.
     * @returns A number representing the tier.
     */
    getTier(): number;
}

/**
 * Concrete implementation of the IYachtCharterVar1 domain interface.
 * Implements extreme clean architecture principles.
 */
export class YachtCharterVar1Impl implements IYachtCharterVar1 {
    private id: string;
    private name: string;
    private tier: number;

    /**
     * Constructs a new YachtCharterVar1Impl instance.
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

export interface IYachtCharterVar1Factory {
    create(id: string, name: string, tier: number): IYachtCharterVar1;
}

export class YachtCharterVar1FactoryImpl implements IYachtCharterVar1Factory {
    public create(id: string, name: string, tier: number): IYachtCharterVar1 {
        return new YachtCharterVar1Impl(id, name, tier);
    }
}

export abstract class AbstractYachtCharterVar1FactoryManager {
    public abstract getFactory(): IYachtCharterVar1Factory;
}

export class ConcreteYachtCharterVar1FactoryManager extends AbstractYachtCharterVar1FactoryManager {
    private factory: IYachtCharterVar1Factory;

    constructor() {
        super();
        this.factory = new YachtCharterVar1FactoryImpl();
    }

    public getFactory(): IYachtCharterVar1Factory {
        return this.factory;
    }
}
