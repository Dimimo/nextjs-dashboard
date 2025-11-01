export interface IDBSettings {
    host: string
    port: number
    user: string
    password: string
    database: string
    timezone: string
    supportBigNumbers: boolean
    rowsAsArray: boolean
}

export const GetDBSettings = (): IDBSettings => {
    return {
        host: process.env.DB_HOST!,
        port: parseInt(process.env.DB_PORT!),
        user: process.env.DB_USERNAME!,
        password: process.env.DB_PASSWORD!,
        database: process.env.DB_DATABASE!,
        timezone: "Z",
        supportBigNumbers: true,
        rowsAsArray: false,
    }
}