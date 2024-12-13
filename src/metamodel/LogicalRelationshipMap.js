import * as CX from './Concept';

/**
 * Defines the relationships allowed in the Logical layer of the ER diagram.
 * This map specifies which elements can be connected and how.
 */

// Define the relationships allowed for each element type
const RELATIONSHIPS_ALLOWED_FROM_ENTITY = new Map([
    [CX.ENTITY, ['one-to-one', 'one-to-many', 'many-to-many']], // Entity-to-Entity relationships
    [CX.ATTRIBUTE, ['has']],                                    // Entity-to-Attribute relationships
]);

const RELATIONSHIPS_ALLOWED_FROM_ATTRIBUTE = new Map([
    [CX.ENTITY, []],    // Attributes typically do not connect back to entities
    [CX.ATTRIBUTE, []], // Attributes do not connect to other attributes
]);

// Combine all maps into a single structure for Logical Layer
const LogicalRelationshipMap = new Map([
    [CX.ENTITY, RELATIONSHIPS_ALLOWED_FROM_ENTITY],
    [CX.ATTRIBUTE, RELATIONSHIPS_ALLOWED_FROM_ATTRIBUTE],
]);

export default LogicalRelationshipMap;
