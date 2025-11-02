// this file contains the data definitions for the pgbilliard.test website

export type SeasonTable = {
    id: bigint,
    cycle: string,
    players: number,
    created_at: string,
    updated_at: string,
}

export type DateTable = {
    id: bigint,
    season_id: bigint,
    date: string,
    regular: boolean,
    title: string,
    remark: string,
    created_at: string,
    updated_at: string,
}

export type VenueTable = {
    id: bigint,
    name: string,
    address: string,
    contact_name: string,
    created_at: string,
    updated_at: string,
};

export type TeamTable = {
    id: bigint,
    name: string,
    players_count: number,
    venue_id: bigint,
    season_id: bigint,
    remark: string | null,
    created_at: string,
    updated_at: string,
    venue_name: string,
};