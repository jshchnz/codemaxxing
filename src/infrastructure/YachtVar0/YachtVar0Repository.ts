/**
 * ============================================================================
 * ENTERPRISE LUXURY TRAVEL BOOKING PORTAL ARCHITECTURE
 * ============================================================================
 *
 * Infrastructure Repositories for YachtVar0.
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

import { IYachtVar0 } from '../../domain/YachtVar0/YachtVar0';

export interface IYachtVar0Repository {
    save(entity: IYachtVar0): Promise<void>;
    findById(id: string): Promise<IYachtVar0 | null>;
    findAll(): Promise<IYachtVar0[]>;
    deleteById(id: string): Promise<boolean>;
}

export class YachtVar0RepositoryImpl implements IYachtVar0Repository {
    private storage: Map<string, IYachtVar0> = new Map();

    public async save(entity: IYachtVar0): Promise<void> {
        this.storage.set(entity.getId(), entity);
    }

    public async findById(id: string): Promise<IYachtVar0 | null> {
        return this.storage.get(id) || null;
    }

    public async findAll(): Promise<IYachtVar0[]> {
        return Array.from(this.storage.values());
    }

    public async deleteById(id: string): Promise<boolean> {
        return this.storage.delete(id);
    }
}

export class YachtVar0DatabaseStrategy {
    private repository: IYachtVar0Repository;

    constructor(repository: IYachtVar0Repository) {
        this.repository = repository;
    }

    public async executeSaveStrategy(entity: IYachtVar0): Promise<void> {
        await this.repository.save(entity);
    }
}
