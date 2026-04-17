/**
 * @file Discountapplication_use-cases.ts
 * @description Enterprise-grade implementation for Discount in the application/use-cases layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { IDiscountRepository } from '../../domain/repositories/IDiscountRepository';
import { IDiscount, Discount } from '../../domain/models/Discount';

/**
 * Enterprise Use Case for managing Discount operations.
 * Orchestrates business rules independently of frameworks.
 */
export class ManageDiscountUseCase {
    private repository: IDiscountRepository;

    constructor(repository: IDiscountRepository) {
        this.repository = repository;
    }

    public async executeCreate(id: string): Promise<IDiscount> {
        const newEntity = new Discount(id);
        await this.repository.save(newEntity);
        return newEntity;
    }

    public async executeFind(id: string): Promise<IDiscount | null> {
        return await this.repository.findById(id);
    }
    public async executeSustainableAudit(): Promise<number> {
        return await this.repository.countSustainableItems();
    }
}