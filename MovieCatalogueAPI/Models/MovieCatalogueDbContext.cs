using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace MovieCatalogueAPI.Models;

public partial class MovieCatalogueDbContext : DbContext
{
    public MovieCatalogueDbContext()
    {
    }

    public MovieCatalogueDbContext(DbContextOptions<MovieCatalogueDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Movie> Movies { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Host=dpg-co0pn5da73kc73ccqo30-a.oregon-postgres.render.com;Database=movie_catalogue_db;Username=movie_catalogue_db_user;Password=LIr1zyMFpc0haUVI3X3nX2fjackZHAkU");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Movie>(entity =>
        {
            entity.HasKey(e => e.Movieid).HasName("movie_pkey");

            entity.ToTable("movie");

            entity.Property(e => e.Movieid).HasColumnName("movieid");
            entity.Property(e => e.Casts)
                .HasMaxLength(1000)
                .HasColumnName("casts");
            entity.Property(e => e.Director)
                .HasMaxLength(255)
                .HasColumnName("director");
            entity.Property(e => e.Genre)
                .HasMaxLength(255)
                .HasColumnName("genre");
            entity.Property(e => e.Posterurl)
                .HasMaxLength(1000)
                .HasColumnName("posterurl");
            entity.Property(e => e.Title)
                .HasMaxLength(255)
                .HasColumnName("title");
            entity.Property(e => e.Year).HasColumnName("year");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
