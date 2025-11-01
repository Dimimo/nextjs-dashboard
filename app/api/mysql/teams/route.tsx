import {NextRequest, NextResponse} from 'next/server'
import {fetchTeams} from "@/app/lib/billiard/data";

export async function GET(request: NextRequest) {
    let season: string = request.nextUrl.searchParams.get('season')!;
    const teams = await fetchTeams(season);

    return NextResponse.json({teams});
}

