/**
 * @file Contactapplication_use-cases.ts
 * @description Enterprise-grade implementation for Contact in the application/use-cases layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { IContactRepository } from '../../domain/repositories/IContactRepository';
import { IContact, Contact } from '../../domain/models/Contact';

/**
 * Enterprise Use Case for managing Contact operations.
 * Orchestrates business rules independently of frameworks.
 */
export class ManageContactUseCase {
    private repository: IContactRepository;

    constructor(repository: IContactRepository) {
        this.repository = repository;
    }

    public async executeCreate(id: string): Promise<IContact> {
        const newEntity = new Contact(id);
        await this.repository.save(newEntity);
        return newEntity;
    }

    public async executeFind(id: string): Promise<IContact | null> {
        return await this.repository.findById(id);
    }
    public async executeSustainableAudit(): Promise<number> {
        return await this.repository.countSustainableItems();
    }
}