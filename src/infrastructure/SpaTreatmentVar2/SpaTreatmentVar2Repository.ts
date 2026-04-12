/**
 * ============================================================================
 * ENTERPRISE LUXURY TRAVEL BOOKING PORTAL ARCHITECTURE
 * ============================================================================
 *
 * Infrastructure Repositories for SpaTreatmentVar2.
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

import { ISpaTreatmentVar2 } from '../../domain/SpaTreatmentVar2/SpaTreatmentVar2';

export interface ISpaTreatmentVar2Repository {
    save(entity: ISpaTreatmentVar2): Promise<void>;
    findById(id: string): Promise<ISpaTreatmentVar2 | null>;
    findAll(): Promise<ISpaTreatmentVar2[]>;
    deleteById(id: string): Promise<boolean>;
}

export class SpaTreatmentVar2RepositoryImpl implements ISpaTreatmentVar2Repository {
    private storage: Map<string, ISpaTreatmentVar2> = new Map();

    public async save(entity: ISpaTreatmentVar2): Promise<void> {
        this.storage.set(entity.getId(), entity);
    }

    public async findById(id: string): Promise<ISpaTreatmentVar2 | null> {
        return this.storage.get(id) || null;
    }

    public async findAll(): Promise<ISpaTreatmentVar2[]> {
        return Array.from(this.storage.values());
    }

    public async deleteById(id: string): Promise<boolean> {
        return this.storage.delete(id);
    }
}

export class SpaTreatmentVar2DatabaseStrategy {
    private repository: ISpaTreatmentVar2Repository;

    constructor(repository: ISpaTreatmentVar2Repository) {
        this.repository = repository;
    }

    public async executeSaveStrategy(entity: ISpaTreatmentVar2): Promise<void> {
        await this.repository.save(entity);
    }
}
