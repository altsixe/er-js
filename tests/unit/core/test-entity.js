import Entity from '../../../src/core/Entity.js';
import Attribute from '../../../src/core/Attribute.js';


describe('Entity Class', () => {
    test('should create an entity with correct properties', () => {
        const entity = new Entity({
            id: '1',
            name: 'Customer',
            shortName: 'Cust',
            synonyms: ['Client', 'Buyer']
        });

        expect(entity.id).toBe('1');
        expect(entity.name).toBe('Customer');
        expect(entity.shortName).toBe('Cust');
        expect(entity.synonyms).toEqual(['Client', 'Buyer']);
        expect(entity.attributes).toEqual([]); // Default attributes
    });

    test('should add an attribute to the entity', () => {
        const entity = new Entity({
            id: '1',
            name: 'Customer',
            shortName: 'Cust'
        });

        const attribute = new Attribute({ name: 'CustomerID', type: 'integer', isPrimaryKey: true });
        entity.addAttribute(attribute);

        expect(entity.attributes.length).toBe(1);
        expect(entity.attributes[0]).toBe(attribute);
    });

    test('should remove an attribute by name', () => {
        const entity = new Entity({
            id: '1',
            name: 'Customer',
            shortName: 'Cust'
        });

        const attribute1 = new Attribute({ name: 'CustomerID', type: 'integer', isPrimaryKey: true });
        const attribute2 = new Attribute({ name: 'CustomerName', type: 'string', isNullable: false });

        entity.addAttribute(attribute1);
        entity.addAttribute(attribute2);

        entity.removeAttribute('CustomerID');

        expect(entity.attributes.length).toBe(1);
        expect(entity.attributes[0]).toBe(attribute2);
    });

    test('should throw an error when adding a non-Attribute object', () => {
        const entity = new Entity({
            id: '1',
            name: 'Customer',
            shortName: 'Cust'
        });

        expect(() => {
            entity.addAttribute({ name: 'InvalidAttribute' });
        }).toThrow('Only instances of Attribute can be added.');
    });

    test('should generate correct string representation', () => {
        const entity = new Entity({
            id: '1',
            name: 'Customer',
            shortName: 'Cust'
        });

        const attribute1 = new Attribute({ name: 'CustomerID', type: 'integer', isPrimaryKey: true });
        const attribute2 = new Attribute({ name: 'CustomerName', type: 'string', isNullable: false });

        entity.addAttribute(attribute1);
        entity.addAttribute(attribute2);

        const expectedString = `Customer (Cust)\nAttributes:\nCustomerID: integer PK\nCustomerName: string NOT NULL`;
        expect(entity.toString()).toBe(expectedString);
    });
});
