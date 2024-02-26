using System;
using System.Collections.Generic;

namespace NetCoreAPISample.Models.DomainModels;

public partial class Customer
{
    public int CustomerId { get; set; }

    public string? LastName { get; set; }

    public string? FirstName { get; set; }

    public DateTime? DateOfBirth { get; set; }

    public string? Email { get; set; }

    public string? PhoneNr { get; set; }

    public string? AddressLine { get; set; }
}
