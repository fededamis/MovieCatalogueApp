using System;
using System.Collections.Generic;

namespace MovieCatalogueAPI.Models;

public partial class Movie
{
    public int Movieid { get; set; }

    public string? Title { get; set; }

    public int? Year { get; set; }

    public string? Posterurl { get; set; }

    public string? Director { get; set; }

    public string? Casts { get; set; }

    public string? Genre { get; set; }
}
