import {TeamTable} from "@/app/lib/billiard/definitions";


export async function latestSeasonApi(): Promise<any> {
    let req, data;
    req = await fetch('http://localhost:3000/api/mysql/latest-season',
        {
            method: 'GET',
            cache: 'no-store'
        });

    data = await req.json();
    return data.season.shift();
}

export async function teamsByLatestSeasonApi(): Promise<any> {
    const season: TeamTable = await latestSeasonApi();
    const req = await fetch('http://localhost:3000/api/mysql/teams/?season=' + season.id,
        {
            method: 'GET',
            cache: 'no-store'
        });
    let data = await req.json();
    data = data.teams;

    return data.filter((team: TeamTable) => team.name !== 'BYE');
}