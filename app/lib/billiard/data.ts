import mysql from 'mysql2/promise';
import {GetDBSettings, IDBSettings} from "@/app/lib/billiard/route";
import {SeasonTable, TeamTable} from "@/app/lib/billiard/definitions";

const connectionParams: IDBSettings = GetDBSettings();

export async function fetchTeams(season: bigint): Promise<TeamTable[]> {
    try {
        const connection = await mysql.createConnection(connectionParams);
        const sql = `SELECT teams.*, venues.name AS venue_name
                     FROM teams
                              JOIN venues ON venues.id = teams.venue_id
                     WHERE teams.season_id = ?
                     ORDER BY teams.name`;
        let values: [SeasonTable['id']] = [season];
        const [rows] = await connection.execute(sql, values) as [TeamTable[], any];
        connection.end();

        return rows;
    } catch (error: unknown) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch the team.');
    }
}

export async function fetchLatestSeason(): Promise<SeasonTable> {
    try {
        const connection = await mysql.createConnection(connectionParams);
        const sql = 'SELECT seasons.* FROM seasons ORDER BY id DESC LIMIT 1';
        const [seasons] = await connection.execute(sql) as [SeasonTable[], any];
        connection.end();

        return seasons[0];
    } catch (error: unknown) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch the latest season.');
    }
}