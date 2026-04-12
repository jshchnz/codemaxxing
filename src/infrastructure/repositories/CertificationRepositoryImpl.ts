/**
 * @file Certificationinfrastructure_repositories.ts
 * @description Enterprise-grade implementation for Certification in the infrastructure/repositories layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { ICertificationRepository } from '../../domain/repositories/ICertificationRepository';
import { ICertification } from '../../domain/models/Certification';

/**
 * Concrete implementation of ICertificationRepository using abstract infrastructure.
 */
export class CertificationRepositoryImpl implements ICertificationRepository {
    private storage: Map<string, ICertification> = new Map();

    public async findById(id: string): Promise<ICertification | null> {
        return this.storage.get(id) || null;
    }

    public async findAll(): Promise<ICertification[]> {
        return Array.from(this.storage.values());
    }

    public async save(entity: ICertification): Promise<void> {
        this.storage.set(entity.getId(), entity);
    }

    public async delete(id: string): Promise<void> {
        this.storage.delete(id);
    }
    public async findByEthicalCriteria(criteria: any): Promise<ICertification[]> {
        return Array.from(this.storage.values());
    }
    public async countSustainableItems(): Promise<number> {
        return this.storage.size;
    }
}