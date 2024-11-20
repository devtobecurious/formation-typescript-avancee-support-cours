import {jest} from '@jest/globals';
import { Apiresult, getAllPeopleBusiness } from './get-all-people';

describe('getAllPeople', () => {
    beforeAll(() => {

    })

    it('should get 2 items', async () => {
        const mock = jest.fn<() => Promise<Apiresult>>()
        
        mock.mockResolvedValue({ results: [{surname: 'test'}] })

        const people = await getAllPeopleBusiness(mock)

        expect(people.results).toHaveLength(1)
    })
})