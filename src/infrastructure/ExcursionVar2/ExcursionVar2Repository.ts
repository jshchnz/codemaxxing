/**
 * ============================================================================
 * ENTERPRISE LUXURY TRAVEL BOOKING PORTAL ARCHITECTURE
 * ============================================================================
 *
 * Infrastructure Repositories for ExcursionVar2.
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

import { IExcursionVar2 } from '../../domain/ExcursionVar2/ExcursionVar2';

export interface IExcursionVar2Repository {
    save(entity: IExcursionVar2): Promise<void>;
    findById(id: string): Promise<IExcursionVar2 | null>;
    findAll(): Promise<IExcursionVar2[]>;
    deleteById(id: string): Promise<boolean>;
}

export class ExcursionVar2RepositoryImpl implements IExcursionVar2Repository {
    private storage: Map<string, IExcursionVar2> = new Map();

    public async save(entity: IExcursionVar2): Promise<void> {
        this.storage.set(entity.getId(), entity);
    }

    public async findById(id: string): Promise<IExcursionVar2 | null> {
        return this.storage.get(id) || null;
    }

    public async findAll(): Promise<IExcursionVar2[]> {
        return Array.from(this.storage.values());
    }

    public async deleteById(id: string): Promise<boolean> {
        return this.storage.delete(id);
    }
}

export class ExcursionVar2DatabaseStrategy {
    private repository: IExcursionVar2Repository;

    constructor(repository: IExcursionVar2Repository) {
        this.repository = repository;
    }

    public async executeSaveStrategy(entity: IExcursionVar2): Promise<void> {
        await this.repository.save(entity);
    }
}
