/**
 * Represents an attribute of an entity on the logical level of an ER diagram.
 * An attribute defines a property of an entity, such as its name, type, and constraints.
 */
class Attribute {
    /**
     * Name of the attribute.
     * @type {string}
     */
    name;

    /**
     * Data type of the attribute (e.g., string, integer).
     * @type {string}
     */
    type;

    /**
     * Whether the attribute is a primary key.
     * @type {boolean}
     */
    isPrimaryKey = false;

    /**
     * Whether the attribute can have a NULL value.
     * @type {boolean}
     */
    isNullable = true;

    /**
     * Default value for the attribute.
     * @type {*}
     */
    defaultValue = null;

    /**
     * Create a new attribute.
     *
     * @param {Object} params - Parameters to initialize the attribute.
     * @param {string} params.name - Name of the attribute.
     * @param {string} params.type - Data type of the attribute.
     * @param {boolean} [params.isPrimaryKey=false] - Whether the attribute is a primary key.
     * @param {boolean} [params.isNullable=true] - Whether the attribute can have a NULL value.
     * @param {*} [params.defaultValue=null] - Default value for the attribute.
     */
    constructor({ name, type, isPrimaryKey = false, isNullable = true, defaultValue = null }) {
        this.name = name;
        this.type = type;
        this.isPrimaryKey = isPrimaryKey;
        this.isNullable = isNullable;
        this.defaultValue = defaultValue;
    }

    /**
     * Returns a string representation of the attribute.
     *
     * @returns {string} String representation of the attribute.
     */
    toString() {
        return `${this.name}: ${this.type}${this.isNullable ? '' : ' NOT NULL'}${this.isPrimaryKey ? ' PK' : ''}`;
    }
}

export default Attribute;
