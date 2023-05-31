CREATE TABLE GameScoreBoard (
  id SERIAL PRIMARY KEY,
  game TEXT NOT NULL,
  player_name TEXT NOT NULL,
  finished_in_seconds INT NOT NULL
);
