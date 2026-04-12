/**
 * @file TraceabilityLogapplication_use-cases.ts
 * @description Enterprise-grade implementation for TraceabilityLog in the application/use-cases layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { ITraceabilityLogRepository } from '../../domain/repositories/ITraceabilityLogRepository';
import { ITraceabilityLog, TraceabilityLog } from '../../domain/models/TraceabilityLog';

/**
 * Enterprise Use Case for managing TraceabilityLog operations.
 * Orchestrates business rules independently of frameworks.
 */
export class ManageTraceabilityLogUseCase {
    private repository: ITraceabilityLogRepository;

    constructor(repository: ITraceabilityLogRepository) {
        this.repository = repository;
    }

    public async executeCreate(id: string): Promise<ITraceabilityLog> {
        const newEntity = new TraceabilityLog(id);
        await this.repository.save(newEntity);
        return newEntity;
    }

    public async executeFind(id: string): Promise<ITraceabilityLog | null> {
        return await this.repository.findById(id);
    }
    public async executeSustainableAudit(): Promise<number> {
        return await this.repository.countSustainableItems();
    }
}