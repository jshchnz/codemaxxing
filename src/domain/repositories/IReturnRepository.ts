/**
 * @file Returndomain_repositories.ts
 * @description Enterprise-grade implementation for Return in the domain/repositories layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { IReturn } from '../models/Return';

/**
 * Repository interface for Return.
 * Follows the Repository pattern to abstract data access.
 */
export interface IReturnRepository {
    findById(id: string): Promise<IReturn | null>;
    findAll(): Promise<IReturn[]>;
    save(entity: IReturn): Promise<void>;
    delete(id: string): Promise<void>;
    findByEthicalCriteria(criteria: any): Promise<IReturn[]>;
    countSustainableItems(): Promise<number>;
}