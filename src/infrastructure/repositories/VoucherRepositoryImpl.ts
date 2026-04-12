/**
 * @file Voucherinfrastructure_repositories.ts
 * @description Enterprise-grade implementation for Voucher in the infrastructure/repositories layer.
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
import { IVoucher } from '../../domain/models/Voucher';

/**
 * Concrete implementation of IVoucherRepository using abstract infrastructure.
 */
export class VoucherRepositoryImpl implements IVoucherRepository {
    private storage: Map<string, IVoucher> = new Map();

    public async findById(id: string): Promise<IVoucher | null> {
        return this.storage.get(id) || null;
    }

    public async findAll(): Promise<IVoucher[]> {
        return Array.from(this.storage.values());
    }

    public async save(entity: IVoucher): Promise<void> {
        this.storage.set(entity.getId(), entity);
    }

    public async delete(id: string): Promise<void> {
        this.storage.delete(id);
    }
    public async findByEthicalCriteria(criteria: any): Promise<IVoucher[]> {
        return Array.from(this.storage.values());
    }
    public async countSustainableItems(): Promise<number> {
        return this.storage.size;
    }
}