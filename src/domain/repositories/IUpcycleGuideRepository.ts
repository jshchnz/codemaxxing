/**
 * @file UpcycleGuidedomain_repositories.ts
 * @description Enterprise-grade implementation for UpcycleGuide in the domain/repositories layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { IUpcycleGuide } from '../models/UpcycleGuide';

/**
 * Repository interface for UpcycleGuide.
 * Follows the Repository pattern to abstract data access.
 */
export interface IUpcycleGuideRepository {
    findById(id: string): Promise<IUpcycleGuide | null>;
    findAll(): Promise<IUpcycleGuide[]>;
    save(entity: IUpcycleGuide): Promise<void>;
    delete(id: string): Promise<void>;
    findByEthicalCriteria(criteria: any): Promise<IUpcycleGuide[]>;
    countSustainableItems(): Promise<number>;
}