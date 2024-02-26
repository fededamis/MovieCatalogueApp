namespace NetCoreAPISample.Models.ViewModels
{
    public class CustomerViewModel
    {
        public int CustomerId { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Email { get; set; }
        public string PhoneNr { get; set; }
        public string AddressLine { get; set; }
    }
}
