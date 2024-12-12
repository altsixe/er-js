import ERDiagramRenderer from '../draw/ERDiagramRenderer';

class ERJS {
    render(container) {
        container.className = 'diagram-container';
        const renderer = new ERDiagramRenderer();
        renderer.draw(container);
    }
}

export default ERJS;
