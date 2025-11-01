import {Season, TeamTable} from "@/app/lib/billiard/definitions";
import {latestSeasonApi, teamsByLatestSeasonApi} from "@/app/lib/billiard/apis";

export default async function SeasonTeams() {
    const season: Season = await latestSeasonApi();
    const teams: TeamTable[] = await teamsByLatestSeasonApi();

    return (
        <>
            <div className="mb-4 text-2xl">Teams for Season {season.cycle}</div>
            <div className="flex flex-col">
                {teams.map((team: TeamTable) => {
                    return (
                        <div key={team.id}>
                            <span className="font-bold">{team.name}</span> from {team.venue_name}
                        </div>
                    );
                })}
            </div>
        </>
    );
}