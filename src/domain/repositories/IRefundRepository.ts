/**
 * @file Refunddomain_repositories.ts
 * @description Enterprise-grade implementation for Refund in the domain/repositories layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { IRefund } from '../models/Refund';

/**
 * Repository interface for Refund.
 * Follows the Repository pattern to abstract data access.
 */
export interface IRefundRepository {
    findById(id: string): Promise<IRefund | null>;
    findAll(): Promise<IRefund[]>;
    save(entity: IRefund): Promise<void>;
    delete(id: string): Promise<void>;
    findByEthicalCriteria(criteria: any): Promise<IRefund[]>;
    countSustainableItems(): Promise<number>;
}