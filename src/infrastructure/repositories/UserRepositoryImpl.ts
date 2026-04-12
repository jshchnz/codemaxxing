/**
 * @file Userinfrastructure_repositories.ts
 * @description Enterprise-grade implementation for User in the infrastructure/repositories layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { IUser } from '../../domain/models/User';

/**
 * Concrete implementation of IUserRepository using abstract infrastructure.
 */
export class UserRepositoryImpl implements IUserRepository {
    private storage: Map<string, IUser> = new Map();

    public async findById(id: string): Promise<IUser | null> {
        return this.storage.get(id) || null;
    }

    public async findAll(): Promise<IUser[]> {
        return Array.from(this.storage.values());
    }

    public async save(entity: IUser): Promise<void> {
        this.storage.set(entity.getId(), entity);
    }

    public async delete(id: string): Promise<void> {
        this.storage.delete(id);
    }
    public async findByEthicalCriteria(criteria: any): Promise<IUser[]> {
        return Array.from(this.storage.values());
    }
    public async countSustainableItems(): Promise<number> {
        return this.storage.size;
    }
}