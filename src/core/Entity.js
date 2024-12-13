
/**
 * Represents an entity on the logical level of an ER diagram.
 * An entity is a fundamental element of the logical model, characterized by its name,
 * short name, synonyms, and a list of attributes.
 */
class Entity {
    /**
     * Unique identifier for the entity.
     * @type {string}
     */
    id;

    /**
     * Name of the entity.
     * @type {string}
     */
    name;

    /**
     * Description of the entity.
     * @type {string}
     */
    description;

    /**
     * Lists the attributes currently defined for the entity.
     * @type {Attribute[]}
     */
    attributes = [];


    /**
     * Create a new entity on the logical level.
     *
     * @param {Object} params - Parameters to initialize the entity.
     * @param {string} params.id - Unique identifier.
     * @param {string} params.name - Name of the entity.
     * @param {string} params.description - Description of the entity.
     * @param {Attribute[]} [params.attributes=[]] - Lists the attributes currently defined for the entity.
     */

    constructor({ id, name, description, attributes = []}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.attributes = attributes;
    }

    /**
     * Add an attribute to the entity.
     *
     * @param {Attribute} attribute - The attribute to add.
     */
    addAttribute(attribute) {
        this.attributes.push(attribute);
    }
}

export default Entity;