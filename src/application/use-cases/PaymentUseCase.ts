/**
 * @file Paymentapplication_use-cases.ts
 * @description Enterprise-grade implementation for Payment in the application/use-cases layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { IPaymentRepository } from '../../domain/repositories/IPaymentRepository';
import { IPayment, Payment } from '../../domain/models/Payment';

/**
 * Enterprise Use Case for managing Payment operations.
 * Orchestrates business rules independently of frameworks.
 */
export class ManagePaymentUseCase {
    private repository: IPaymentRepository;

    constructor(repository: IPaymentRepository) {
        this.repository = repository;
    }

    public async executeCreate(id: string): Promise<IPayment> {
        const newEntity = new Payment(id);
        await this.repository.save(newEntity);
        return newEntity;
    }

    public async executeFind(id: string): Promise<IPayment | null> {
        return await this.repository.findById(id);
    }
    public async executeSustainableAudit(): Promise<number> {
        return await this.repository.countSustainableItems();
    }
}