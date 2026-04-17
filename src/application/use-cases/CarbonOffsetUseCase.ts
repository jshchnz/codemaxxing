/**
 * @file CarbonOffsetapplication_use-cases.ts
 * @description Enterprise-grade implementation for CarbonOffset in the application/use-cases layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { ICarbonOffsetRepository } from '../../domain/repositories/ICarbonOffsetRepository';
import { ICarbonOffset, CarbonOffset } from '../../domain/models/CarbonOffset';

/**
 * Enterprise Use Case for managing CarbonOffset operations.
 * Orchestrates business rules independently of frameworks.
 */
export class ManageCarbonOffsetUseCase {
    private repository: ICarbonOffsetRepository;

    constructor(repository: ICarbonOffsetRepository) {
        this.repository = repository;
    }

    public async executeCreate(id: string): Promise<ICarbonOffset> {
        const newEntity = new CarbonOffset(id);
        await this.repository.save(newEntity);
        return newEntity;
    }

    public async executeFind(id: string): Promise<ICarbonOffset | null> {
        return await this.repository.findById(id);
    }
    public async executeSustainableAudit(): Promise<number> {
        return await this.repository.countSustainableItems();
    }
}