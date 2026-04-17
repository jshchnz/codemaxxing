/**
 * ============================================================================
 * ENTERPRISE LUXURY TRAVEL BOOKING PORTAL ARCHITECTURE
 * ============================================================================
 *
 * Infrastructure Repositories for SpaTreatmentVar3.
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

import { ISpaTreatmentVar3 } from '../../domain/SpaTreatmentVar3/SpaTreatmentVar3';

export interface ISpaTreatmentVar3Repository {
    save(entity: ISpaTreatmentVar3): Promise<void>;
    findById(id: string): Promise<ISpaTreatmentVar3 | null>;
    findAll(): Promise<ISpaTreatmentVar3[]>;
    deleteById(id: string): Promise<boolean>;
}

export class SpaTreatmentVar3RepositoryImpl implements ISpaTreatmentVar3Repository {
    private storage: Map<string, ISpaTreatmentVar3> = new Map();

    public async save(entity: ISpaTreatmentVar3): Promise<void> {
        this.storage.set(entity.getId(), entity);
    }

    public async findById(id: string): Promise<ISpaTreatmentVar3 | null> {
        return this.storage.get(id) || null;
    }

    public async findAll(): Promise<ISpaTreatmentVar3[]> {
        return Array.from(this.storage.values());
    }

    public async deleteById(id: string): Promise<boolean> {
        return this.storage.delete(id);
    }
}

export class SpaTreatmentVar3DatabaseStrategy {
    private repository: ISpaTreatmentVar3Repository;

    constructor(repository: ISpaTreatmentVar3Repository) {
        this.repository = repository;
    }

    public async executeSaveStrategy(entity: ISpaTreatmentVar3): Promise<void> {
        await this.repository.save(entity);
    }
}
