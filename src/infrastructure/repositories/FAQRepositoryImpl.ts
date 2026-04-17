/**
 * @file FAQinfrastructure_repositories.ts
 * @description Enterprise-grade implementation for FAQ in the infrastructure/repositories layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { IFAQRepository } from '../../domain/repositories/IFAQRepository';
import { IFAQ } from '../../domain/models/FAQ';

/**
 * Concrete implementation of IFAQRepository using abstract infrastructure.
 */
export class FAQRepositoryImpl implements IFAQRepository {
    private storage: Map<string, IFAQ> = new Map();

    public async findById(id: string): Promise<IFAQ | null> {
        return this.storage.get(id) || null;
    }

    public async findAll(): Promise<IFAQ[]> {
        return Array.from(this.storage.values());
    }

    public async save(entity: IFAQ): Promise<void> {
        this.storage.set(entity.getId(), entity);
    }

    public async delete(id: string): Promise<void> {
        this.storage.delete(id);
    }
    public async findByEthicalCriteria(criteria: any): Promise<IFAQ[]> {
        return Array.from(this.storage.values());
    }
    public async countSustainableItems(): Promise<number> {
        return this.storage.size;
    }
}