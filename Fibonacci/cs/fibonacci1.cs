using System;
using System.Collections.Generic;
// how to run this file after making changes to the code lssjopm;l
class Program
{
    //============================================
    // Version 1: iterative/manual
    // returns one int for given n
    // 
    static int Fibonacci1(int n)
    {
        int
        n1 = 1,
        n2 = 0,
        r = 0;

        if (n == 0) return 0;
        if (n == 1) return 1;

        for (int i = 1; i < n; i++)
        {
            r = n1 + n2;
            n2 = n1;
            n1 = r;
        }
        return r;
    }
    //============================================
    // Version 2: iterative/manual
    // returns one int for given n
    // 
    static int Fibonacci2(int n)
    {
        int
        n1 = 1,
        n2 = 0,
        r = 0;

        if (n == 0) return 0;
        if (n == 1) return 1;

        for (int i = 1; i < n; i++)
        {
            r = n1 + n2;
            n2 = n1;
            n1 = r;
        }
        return r;
    }
    //============================================
    // Version 3: iterative/list-building
    static List<int> Fibonacci3(int count)
    {
        int
        n1 = 0,
        n2 = 1;

        List<int> fibList = new List<int>();
        if (count <= 0) return fibList;

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
        //============================================
        // Version 1
        int[] fibList1 = new int(10);
        for (int i = 0; i < 10; i++)
        {
            fibList1[i] = Fibonacci1(i);
        }

        Console.WriteLine("Version 1: ");
        Console.WriteLine(string.Join(", ", fibList1));
        Console.WriteLine("Is dataType a number? " + (fibList1[0].GetType() == typeof(int)));
        Console.WriteLine();
        //============================================
        // Version 2
        List<int> fibList2 = new List<int>();
        for (int i = 0; i < 10; i++)
        {
            fibList2.Add(Fibonacci2(i));
        }

        Console.WriteLine("Version 2: ");
        Console.WriteLine(string.Join(", ", fibList2));
        Console.WriteLine("Is dataType a number? " + (fibList2[0].GetType() == typeof(int)));
        Console.WriteLine();
        //============================================
        // Version 3
        int count = 10;
        List<int> fibonacciList = Fibonacci3(count);

        Console.WriteLine("Version 3:");
        Console.WriteLine(string.Join(", ", fibonacciList));
        Console.WriteLine("Is dataType a number? " + (fibonacciList[0].GetType() == typeof(int)));

        // shows all of the dataTypes of the given array
/*         foreach (var item in fibList1)
        {
            Console.WriteLine(item + " is a " + item.GetType());
        } */
    }
}





// C# Method format code
// class Program
//{
//    static List<int> MethodName(int count)
//    {
        //enter the method body
//    }

//    static void Main()
//    {
        // input the amount of numbers 
        // Run the method to Return the answer
//    }
//}