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

export type EventTable = {
    id: bigint,
    date_id: bigint,
    venue_id: bigint,
    team1: bigint,
    team2: bigint,
    score1: number,
    confirmed: number,
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

export type UserTable = {
    id: bigint,
    name: string,
    email: string,
    contact_nr: string,
    gender: ['U', 'M', 'F', 'K']
    last_game: string
    email_verified_at: string,
    password: string,
    remember_token: string,
    created_at: string,
    updated_at: string,

}

export type PlayerTable = {
    id: bigint,
    user_id: bigint,
    team_id: bigint,
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
    player_id: bigint,
    user_id: bigint,
    position: number,
    home: boolean,
    win: boolean,
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
    details: string,
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
    assigned_by: bigint,
    super_admin: boolean,
    created_at: string,
    updated_at: string,
}