export type Apiresult = {results: {surname: string}[]}

export default async function getAllPeople(): Promise<Apiresult> {
    const response = await fetch('')
    const result = await response.json()

    return result as Apiresult
}

export function getAllPeopleBusiness(callback: () => Promise<Apiresult>) {
    return callback()
}