describe('main', () => {
    it('should return 0', () => {
        expect(0).toBe(0);
    });

    it('should get first div', () => {
        const div = document.querySelector<HTMLDivElement>('#app');
        expect(div).not.toBeNull();
    });
});