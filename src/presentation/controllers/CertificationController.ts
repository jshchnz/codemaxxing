/**
 * @file Certificationpresentation_controllers.ts
 * @description Enterprise-grade implementation for Certification in the presentation/controllers layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { ManageCertificationUseCase } from '../../application/use-cases/CertificationUseCase';

/**
 * Enterprise Controller for Certification.
 * Bridges the gap between the presentation layer and application use cases.
 */
export class CertificationController {
    private useCase: ManageCertificationUseCase;

    constructor(useCase: ManageCertificationUseCase) {
        this.useCase = useCase;
    }

    public async handleCreateRequest(req: any, res: any): Promise<void> {
        try {
            const result = await this.useCase.executeCreate(req.body.id);
            res.status(201).json(result);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
    public async handleAuditRequest(req: any, res: any): Promise<void> {
        try {
            const count = await this.useCase.executeSustainableAudit();
            res.status(200).json({ count });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}