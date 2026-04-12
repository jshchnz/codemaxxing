/**
 * @file Factoryapplication_use-cases.ts
 * @description Enterprise-grade implementation for Factory in the application/use-cases layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { IFactoryRepository } from '../../domain/repositories/IFactoryRepository';
import { IFactory, Factory } from '../../domain/models/Factory';

/**
 * Enterprise Use Case for managing Factory operations.
 * Orchestrates business rules independently of frameworks.
 */
export class ManageFactoryUseCase {
    private repository: IFactoryRepository;

    constructor(repository: IFactoryRepository) {
        this.repository = repository;
    }

    public async executeCreate(id: string): Promise<IFactory> {
        const newEntity = new Factory(id);
        await this.repository.save(newEntity);
        return newEntity;
    }

    public async executeFind(id: string): Promise<IFactory | null> {
        return await this.repository.findById(id);
    }
    public async executeSustainableAudit(): Promise<number> {
        return await this.repository.countSustainableItems();
    }
}