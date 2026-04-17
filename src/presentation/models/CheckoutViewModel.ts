/**
 * @file Checkoutpresentation_models.ts
 * @description Enterprise-grade implementation for Checkout in the presentation/models layer.
 * This component is part of the ethical fashion, sustainable, and recycled materials e-commerce platform.
 * It strictly adheres to Extreme Clean Architecture principles, ensuring decoupling,
 * testability, and high cohesion. The sustainable fashion industry requires robust,
 * scalable, and maintainable software to empower creators and consumers alike.
 *
 * @author Enterprise Sustainable Architecture Team
 * @version 1.0.0
 * @since 2023-10-27
 */

/**
 * View Model for Checkout.
 * Prepares data specifically for the presentation layer.
 */
export class CheckoutViewModel {
    public readonly displayId: string;
    public readonly formattedDate: string;
    public readonly ecoBadge: string;

    constructor(id: string, date: Date) {
        this.displayId = `ECO-VIEW-${id}`;
        this.formattedDate = date.toISOString();
        this.ecoBadge = 'Certified Sustainable';
    }
}