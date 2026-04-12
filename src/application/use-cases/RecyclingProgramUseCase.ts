/**
 * @file RecyclingProgramapplication_use-cases.ts
 * @description Enterprise-grade implementation for RecyclingProgram in the application/use-cases layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { IRecyclingProgramRepository } from '../../domain/repositories/IRecyclingProgramRepository';
import { IRecyclingProgram, RecyclingProgram } from '../../domain/models/RecyclingProgram';

/**
 * Enterprise Use Case for managing RecyclingProgram operations.
 * Orchestrates business rules independently of frameworks.
 */
export class ManageRecyclingProgramUseCase {
    private repository: IRecyclingProgramRepository;

    constructor(repository: IRecyclingProgramRepository) {
        this.repository = repository;
    }

    public async executeCreate(id: string): Promise<IRecyclingProgram> {
        const newEntity = new RecyclingProgram(id);
        await this.repository.save(newEntity);
        return newEntity;
    }

    public async executeFind(id: string): Promise<IRecyclingProgram | null> {
        return await this.repository.findById(id);
    }
    public async executeSustainableAudit(): Promise<number> {
        return await this.repository.countSustainableItems();
    }
}