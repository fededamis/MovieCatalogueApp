using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace MovieCatalogueAPI.Models;

public partial class MovieCatalogueDbContext : DbContext
{
    string _connectionstring;

    public MovieCatalogueDbContext(string connectionstring)
    {
        _connectionstring = connectionstring;
    }

    public MovieCatalogueDbContext(DbContextOptions<MovieCatalogueDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Movie> Movies { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(_connectionstring);
    }       

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
