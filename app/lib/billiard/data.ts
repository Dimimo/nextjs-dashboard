import mysql from 'mysql2/promise';
import {GetDBSettings, IDBSettings} from "@/app/lib/billiard/route";

const connectionParams: IDBSettings = GetDBSettings();

export async function fetchTeams(season: string) {
    try {
        const connection = await mysql.createConnection(connectionParams);
        const sql = `SELECT teams.*, venues.name AS venue_name
                     FROM teams
                              JOIN venues ON venues.id = teams.venue_id
                     WHERE teams.season_id = ?
                     ORDER BY teams.name`;
        let values: any[] = [season];
        const [rows] = await connection.execute(sql, values);
        connection.end();

        return rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch the team.');
    }
}

export async function fetchLatestSeason() {
    try {
        const connection = await mysql.createConnection(connectionParams);
        const sql = 'SELECT seasons.* FROM seasons ORDER BY id DESC LIMIT 1';
        let values: any[] = [];
        const [season] = await connection.execute(sql, values);
        connection.end();

        return season;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch the latest season.');
    }
}