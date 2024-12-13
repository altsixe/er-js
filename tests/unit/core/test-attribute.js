import Attribute from '../../../src/core/Attribute.js';

describe('Attribute Class', () => {
    test('should create an attribute with correct properties', () => {
        const attribute = new Attribute({
            name: 'CustomerID',
            type: 'integer',
            isPrimaryKey: true,
            isNullable: false,
            defaultValue: 0
        });

        expect(attribute.name).toBe('CustomerID');
        expect(attribute.type).toBe('integer');
        expect(attribute.isPrimaryKey).toBe(true);
        expect(attribute.isNullable).toBe(false);
        expect(attribute.defaultValue).toBe(0);
    });

    test('should create an attribute with default properties', () => {
        const attribute = new Attribute({
            name: 'CustomerName',
            type: 'string'
        });

        expect(attribute.name).toBe('CustomerName');
        expect(attribute.type).toBe('string');
        expect(attribute.isPrimaryKey).toBe(false); // Default value
        expect(attribute.isNullable).toBe(true); // Default value
        expect(attribute.defaultValue).toBe(null); // Default value
    });

    test('should return correct string representation', () => {
        const attribute = new Attribute({
            name: 'CustomerID',
            type: 'integer',
            isPrimaryKey: true
        });

        expect(attribute.toString()).toBe('CustomerID: integer PK');

        const nullableAttribute = new Attribute({
            name: 'CustomerName',
            type: 'string',
            isNullable: false
        });

        expect(nullableAttribute.toString()).toBe('CustomerName: string NOT NULL');
    });

    test('should throw an error if name is not provided', () => {
        expect(() => {
            new Attribute({ type: 'string' });
        }).toThrow('Attribute name must be a non-empty string.');
    });

    test('should throw an error if type is not provided', () => {
        expect(() => {
            new Attribute({ name: 'CustomerID' });
        }).toThrow('Attribute type must be a non-empty string.');
    });
});
