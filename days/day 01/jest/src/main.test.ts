describe('main', () => {
    beforeAll(() => {
        jest.setTimeout(0)
    })

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

    it('should call and assert Promise',  async () => {
        const p = Promise.resolve(false)

        const result = await p
        expect(result).toBe(true)
    })

    it('should call and assert Promise bis',  async () => {
        const p = new Promise((resolve) => {
            setTimeout(() => {
                resolve(false)
            }, 1500);
        })

        const result = await p
        expect(result).toBe(true)
    })
});

test('test should display content', () => {
    document.body.innerHTML = '<div id="coucou"></div>'
    const div = document.querySelector('#coucou');
    expect(div).toBeTruthy();
})