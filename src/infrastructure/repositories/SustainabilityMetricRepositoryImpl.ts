/**
 * @file SustainabilityMetricinfrastructure_repositories.ts
 * @description Enterprise-grade implementation for SustainabilityMetric in the infrastructure/repositories layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { ISustainabilityMetricRepository } from '../../domain/repositories/ISustainabilityMetricRepository';
import { ISustainabilityMetric } from '../../domain/models/SustainabilityMetric';

/**
 * Concrete implementation of ISustainabilityMetricRepository using abstract infrastructure.
 */
export class SustainabilityMetricRepositoryImpl implements ISustainabilityMetricRepository {
    private storage: Map<string, ISustainabilityMetric> = new Map();

    public async findById(id: string): Promise<ISustainabilityMetric | null> {
        return this.storage.get(id) || null;
    }

    public async findAll(): Promise<ISustainabilityMetric[]> {
        return Array.from(this.storage.values());
    }

    public async save(entity: ISustainabilityMetric): Promise<void> {
        this.storage.set(entity.getId(), entity);
    }

    public async delete(id: string): Promise<void> {
        this.storage.delete(id);
    }
    public async findByEthicalCriteria(criteria: any): Promise<ISustainabilityMetric[]> {
        return Array.from(this.storage.values());
    }
    public async countSustainableItems(): Promise<number> {
        return this.storage.size;
    }
}