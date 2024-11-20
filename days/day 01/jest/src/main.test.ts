describe('main', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="coucou"></div>'
    })

    it('should return 0', () => {
        expect(0).toBe(0);
    });

    it('should get first div', () => {
        console.info('body',document.body.innerHTML)
        const div = document.querySelector('#coucou');
        console.info(div)
        expect(div).toBeTruthy();
    });
});

test('test should display content', () => {
    document.body.innerHTML = '<div id="coucou"></div>'
    const div = document.querySelector('#coucou');
    expect(div).toBeTruthy();
})