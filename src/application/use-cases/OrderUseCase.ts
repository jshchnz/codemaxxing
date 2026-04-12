/**
 * @file Orderapplication_use-cases.ts
 * @description Enterprise-grade implementation for Order in the application/use-cases layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { IOrderRepository } from '../../domain/repositories/IOrderRepository';
import { IOrder, Order } from '../../domain/models/Order';

/**
 * Enterprise Use Case for managing Order operations.
 * Orchestrates business rules independently of frameworks.
 */
export class ManageOrderUseCase {
    private repository: IOrderRepository;

    constructor(repository: IOrderRepository) {
        this.repository = repository;
    }

    public async executeCreate(id: string): Promise<IOrder> {
        const newEntity = new Order(id);
        await this.repository.save(newEntity);
        return newEntity;
    }

    public async executeFind(id: string): Promise<IOrder | null> {
        return await this.repository.findById(id);
    }
    public async executeSustainableAudit(): Promise<number> {
        return await this.repository.countSustainableItems();
    }
}