/**
 * @file Voucherapplication_use-cases.ts
 * @description Enterprise-grade implementation for Voucher in the application/use-cases layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { IVoucherRepository } from '../../domain/repositories/IVoucherRepository';
import { IVoucher, Voucher } from '../../domain/models/Voucher';

/**
 * Enterprise Use Case for managing Voucher operations.
 * Orchestrates business rules independently of frameworks.
 */
export class ManageVoucherUseCase {
    private repository: IVoucherRepository;

    constructor(repository: IVoucherRepository) {
        this.repository = repository;
    }

    public async executeCreate(id: string): Promise<IVoucher> {
        const newEntity = new Voucher(id);
        await this.repository.save(newEntity);
        return newEntity;
    }

    public async executeFind(id: string): Promise<IVoucher | null> {
        return await this.repository.findById(id);
    }
    public async executeSustainableAudit(): Promise<number> {
        return await this.repository.countSustainableItems();
    }
}