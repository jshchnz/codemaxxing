/**
 * @file Categoryinfrastructure_repositories.ts
 * @description Enterprise-grade implementation for Category in the infrastructure/repositories layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { ICategoryRepository } from '../../domain/repositories/ICategoryRepository';
import { ICategory } from '../../domain/models/Category';

/**
 * Concrete implementation of ICategoryRepository using abstract infrastructure.
 */
export class CategoryRepositoryImpl implements ICategoryRepository {
    private storage: Map<string, ICategory> = new Map();

    public async findById(id: string): Promise<ICategory | null> {
        return this.storage.get(id) || null;
    }

    public async findAll(): Promise<ICategory[]> {
        return Array.from(this.storage.values());
    }

    public async save(entity: ICategory): Promise<void> {
        this.storage.set(entity.getId(), entity);
    }

    public async delete(id: string): Promise<void> {
        this.storage.delete(id);
    }
    public async findByEthicalCriteria(criteria: any): Promise<ICategory[]> {
        return Array.from(this.storage.values());
    }
    public async countSustainableItems(): Promise<number> {
        return this.storage.size;
    }
}