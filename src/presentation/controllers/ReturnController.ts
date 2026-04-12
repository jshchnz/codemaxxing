/**
 * @file Returnpresentation_controllers.ts
 * @description Enterprise-grade implementation for Return in the presentation/controllers layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

import { ManageReturnUseCase } from '../../application/use-cases/ReturnUseCase';

/**
 * Enterprise Controller for Return.
 * Bridges the gap between the presentation layer and application use cases.
 */
export class ReturnController {
    private useCase: ManageReturnUseCase;

    constructor(useCase: ManageReturnUseCase) {
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