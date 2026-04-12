/**
 * @file CarbonOffsetinfrastructure_repositories.ts
 * @description Enterprise-grade implementation for CarbonOffset in the infrastructure/repositories layer.
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
import { ICarbonOffset } from '../../domain/models/CarbonOffset';

/**
 * Concrete implementation of ICarbonOffsetRepository using abstract infrastructure.
 */
export class CarbonOffsetRepositoryImpl implements ICarbonOffsetRepository {
    private storage: Map<string, ICarbonOffset> = new Map();

    public async findById(id: string): Promise<ICarbonOffset | null> {
        return this.storage.get(id) || null;
    }

    public async findAll(): Promise<ICarbonOffset[]> {
        return Array.from(this.storage.values());
    }

    public async save(entity: ICarbonOffset): Promise<void> {
        this.storage.set(entity.getId(), entity);
    }

    public async delete(id: string): Promise<void> {
        this.storage.delete(id);
    }
    public async findByEthicalCriteria(criteria: any): Promise<ICarbonOffset[]> {
        return Array.from(this.storage.values());
    }
    public async countSustainableItems(): Promise<number> {
        return this.storage.size;
    }
}