import {NextRequest, NextResponse} from 'next/server'
import {fetchTeams} from "@/app/lib/billiard/data";
import {TeamTable} from "@/app/lib/billiard/definitions";

export async function GET(request: NextRequest) {
    let season: bigint = request.nextUrl.searchParams.get('season')! as unknown as bigint;
    const teams: TeamTable[] = await fetchTeams(season);

    return NextResponse.json({teams});
}

