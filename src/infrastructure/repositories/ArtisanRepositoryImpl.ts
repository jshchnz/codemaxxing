/**
 * @file Artisaninfrastructure_repositories.ts
 * @description Enterprise-grade implementation for Artisan in the infrastructure/repositories layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { IArtisanRepository } from '../../domain/repositories/IArtisanRepository';
import { IArtisan } from '../../domain/models/Artisan';

/**
 * Concrete implementation of IArtisanRepository using abstract infrastructure.
 */
export class ArtisanRepositoryImpl implements IArtisanRepository {
    private storage: Map<string, IArtisan> = new Map();

    public async findById(id: string): Promise<IArtisan | null> {
        return this.storage.get(id) || null;
    }

    public async findAll(): Promise<IArtisan[]> {
        return Array.from(this.storage.values());
    }

    public async save(entity: IArtisan): Promise<void> {
        this.storage.set(entity.getId(), entity);
    }

    public async delete(id: string): Promise<void> {
        this.storage.delete(id);
    }
    public async findByEthicalCriteria(criteria: any): Promise<IArtisan[]> {
        return Array.from(this.storage.values());
    }
    public async countSustainableItems(): Promise<number> {
        return this.storage.size;
    }
}