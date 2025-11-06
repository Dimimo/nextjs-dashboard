import {SeasonTable, TeamTable} from "@/app/lib/billiard/definitions";

export async function latestSeasonApi(): Promise<SeasonTable> {
    const req = await fetch('http://localhost:3000/api/mysql/latest-season',
        {
            method: 'GET',
            cache: 'no-store'
        });

    const data = await req.json();
    return data.season.shift();
}

export async function teamsByLatestSeasonApi(): Promise<TeamTable[]> {
    const season: SeasonTable = await latestSeasonApi();
    const req: Response = await fetch('http://localhost:3000/api/mysql/teams/?season=' + season.id,
        {
            method: 'GET',
            cache: 'no-store'
        });
    let data: any = await req.json();
    const teams: TeamTable[] = data.teams;

    return teams.filter((team: TeamTable) => team.name !== 'BYE');
}