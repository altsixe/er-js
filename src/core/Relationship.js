/**
 * Represents a relationship between two entities in an ER diagram.
 */
class Relationship {
    /**
     * Create a new relationship.
     * @param {Entity} source - The source entity in the relationship.
     * @param {Entity} target - The target entity in the relationship.
     * @param {string} type - The type of the relationship (e.g., 'one-to-one', 'one-to-many').
     * @param {string} [name] - An optional name for the relationship.
     */
    constructor({ source, target, type, name = '' }) {
        this.source = source; // Entity initiating the relationship
        this.target = target; // Entity receiving the relationship
        this.type = type; // Relationship type: one-to-one, one-to-many, etc.
        this.name = name; // Optional name for the relationship
    }

    /**
     * Returns a string representation of the relationship.
     * @returns {string}
     */
    toString() {
        return `${this.source.name} ${this.type} ${this.target.name}`;
    }
}

export default Relationship;
