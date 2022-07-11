import { API_HOST, JWT } from '../constants'
import { createURLQueryString, returnParser } from '../helpers/util'

export class PerformanceService {
    static async getData(token, accountId, queryStringParameters) {
        const queryString = createURLQueryString(queryStringParameters)
        const result = await fetch(`${API_HOST}/accounts/${accountId}/report/performance/data?${queryString}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        })
        return await returnParser(result)
    }

    static async getTotalsData(token, accountId, queryStringParameters) {
        const queryString = createURLQueryString(queryStringParameters)
        const result = await fetch(`${API_HOST}/accounts/${accountId}/report/performance/totals/data?${queryString}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        })
        return await returnParser(result)
    }
}
