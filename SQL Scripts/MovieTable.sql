CREATE TABLE Movie (
    MovieId SERIAL PRIMARY KEY,
    Title VARCHAR(255),
    Year INTEGER,
    PosterURL VARCHAR(1000),
    Director VARCHAR(255),
    Casts VARCHAR(1000),
    Genre VARCHAR(255)
)