using System;
using System.Collections.Generic;
// how to run this file after making changes to the code lssjopm;l
class Program
{
    static List<int> Fibonacci(int count)
    {
        List<int> fibList = new List<int>();

        if (count <= 0) return fibList;

        int n1 = 0, n2 = 1;

        fibList.Add(n1); // 0
        if (count == 1) return fibList;

        fibList.Add(n2); // 1

        for (int i = 2; i < count; i++)
        {
            int next = n1 + n2;
            fibList.Add(next);
            n1 = n2;
            n2 = next;
        }

        return fibList;
    }

    static void Main()
    {
        int count = 10;
        List<int> fibonacciList = Fibonacci(count);

        Console.WriteLine("Fibonacci Sequence:");
        Console.WriteLine(string.Join(", ", fibonacci));

        Console.WriteLine("Is dataType a number? " + (fibonacciList[0] is int));
    }
}





// C# Method format code
class Program
{
    static List<int> MethodName(int count)
    {
        //enter the method body
    }

    static void Main()
    {
        // input the amount of numbers 
        // Run the method to Return the answer
    }
}