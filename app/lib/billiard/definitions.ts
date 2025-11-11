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
    title: string | null | undefined,
    remark: string | null | undefined,
    created_at: string,
    updated_at: string,
}

export type EventTable = {
    id: bigint,
    date_id: bigint,
    venue_id: bigint,
    team1: bigint,
    team2: bigint,
    score1: number | null | undefined,
    score2: number | null | undefined,
    confirmed: boolean,
    remark: string | null | undefined,
    created_at: string,
    updated_at: string,
}

export type VenueTable = {
    id: bigint,
    name: string,
    user_id: bigint | null | undefined
    address: string | null | undefined,
    contact_name: string | null | undefined,
    lat: string | null | undefined,
    lng: string | null | undefined,
    created_at: string,
    updated_at: string,
};

export type TeamTable = {
    id: bigint,
    name: string,
    players_count: number,
    venue_id: bigint,
    season_id: bigint,
    remark: string | null | undefined,
    created_at: string,
    updated_at: string,
    venue_name: string,
};

export type UserTable = {
    id: bigint,
    name: string,
    email: string,
    contact_nr: string | null | undefined,
    gender: ['U', 'M', 'F', 'K']
    last_game: Date,
    email_verified_at: string | null | undefined,
    password: string,
    remember_token: string | null | undefined,
    created_at: string,
    updated_at: string,

}

export type PlayerTable = {
    id: bigint,
    user_id: bigint | null | undefined,
    team_id: bigint | null | undefined,
    captain: boolean,
    active: boolean,
    created_at: string,
    updated_at: string,
}

export type GameTable = {
    id: bigint,
    schedule_id: bigint,
    event_id: bigint,
    team_id: bigint,
    player_id: bigint | null | undefined,
    user_id: bigint | null | undefined,
    position: number,
    home: boolean,
    win: boolean | null | undefined,
    created_at: string,
    updated_at: string,
}

export type RankTable = {
    id: bigint,
    season_id: bigint,
    player_id: bigint,
    user_id: bigint,
    max_games: number,
    participated: number,
    won: number,
    lost: number,
    played: number,
    percentage: number,
    created_at: string,
    updated_at: string,
}

export type FormatTable = {
    id: bigint,
    name: string,
    user_id: bigint,
    details: string | null | undefined,
    created_at: string,
    updated_at: string,
}

export type ScheduleTable = {
    id: bigint,
    format_id: bigint,
    position: number,
    player: number,
    home: boolean,
    created_at: string,
    updated_at: string,
}

export type PositionTable = {
    id: bigint,
    event_id: bigint,
    player_id: bigint,
    rank: number,
    home: boolean,
    created_at: string,
    updated_at: string,
}

export type AdminTable = {
    id: bigint,
    user_id: bigint,
    assigned_by: bigint | null | undefined,
    super_admin: boolean,
    created_at: string,
    updated_at: string,
}