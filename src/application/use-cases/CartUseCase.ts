/**
 * @file Cartapplication_use-cases.ts
 * @description Enterprise-grade implementation for Cart in the application/use-cases layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { ICartRepository } from '../../domain/repositories/ICartRepository';
import { ICart, Cart } from '../../domain/models/Cart';

/**
 * Enterprise Use Case for managing Cart operations.
 * Orchestrates business rules independently of frameworks.
 */
export class ManageCartUseCase {
    private repository: ICartRepository;

    constructor(repository: ICartRepository) {
        this.repository = repository;
    }

    public async executeCreate(id: string): Promise<ICart> {
        const newEntity = new Cart(id);
        await this.repository.save(newEntity);
        return newEntity;
    }

    public async executeFind(id: string): Promise<ICart | null> {
        return await this.repository.findById(id);
    }
    public async executeSustainableAudit(): Promise<number> {
        return await this.repository.countSustainableItems();
    }
}