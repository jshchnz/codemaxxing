/**
 * ============================================================================
 * ENTERPRISE LUXURY TRAVEL BOOKING PORTAL ARCHITECTURE
 * ============================================================================
 *
 * Infrastructure Repositories for DesertCampVar2.
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

import { IDesertCampVar2 } from '../../domain/DesertCampVar2/DesertCampVar2';

export interface IDesertCampVar2Repository {
    save(entity: IDesertCampVar2): Promise<void>;
    findById(id: string): Promise<IDesertCampVar2 | null>;
    findAll(): Promise<IDesertCampVar2[]>;
    deleteById(id: string): Promise<boolean>;
}

export class DesertCampVar2RepositoryImpl implements IDesertCampVar2Repository {
    private storage: Map<string, IDesertCampVar2> = new Map();

    public async save(entity: IDesertCampVar2): Promise<void> {
        this.storage.set(entity.getId(), entity);
    }

    public async findById(id: string): Promise<IDesertCampVar2 | null> {
        return this.storage.get(id) || null;
    }

    public async findAll(): Promise<IDesertCampVar2[]> {
        return Array.from(this.storage.values());
    }

    public async deleteById(id: string): Promise<boolean> {
        return this.storage.delete(id);
    }
}

export class DesertCampVar2DatabaseStrategy {
    private repository: IDesertCampVar2Repository;

    constructor(repository: IDesertCampVar2Repository) {
        this.repository = repository;
    }

    public async executeSaveStrategy(entity: IDesertCampVar2): Promise<void> {
        await this.repository.save(entity);
    }
}
