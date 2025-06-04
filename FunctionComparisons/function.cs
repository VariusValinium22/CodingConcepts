/* C# EmailValidator  */

using System;
using System.Net.Mail;

public static class EmailValidator
{
    public static (bool isValid, string message) ValidateEmail(string email)
    {
        try
        {
            var mailAddress = new MailAddress(email);
            return (true, ""); // Valid email
        }
        catch (FormatException)
        {
            return (false, "Invalid email address"); // Invalid email
        }
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Input
        string emailToValidate = "test@example.com";

        // Triggering the function
        var result = EmailValidator.ValidateEmail(emailToValidate);

        // Debugging the result
        Console.WriteLine($"Validation Result: isValid={result.isValid}, message={result.message}");

        // Handling the result
        if (result.isValid)
        {
            Console.WriteLine("Email is valid!");
        }
        else
        {
            Console.WriteLine($"Error: {result.message}");
        }
    }
}
