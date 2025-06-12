using System;
using System.Collections.Generic;

class Program
{
    //============================================
    static int[] FibonacciArray(int count)
    {
        int[] fibList = new int[count];

        if (count > 0) fibList[0] = 0;
        if (count > 1) fibList[1] = 1;
        for (int i = 2; i < count; i++)
        {
            fibList[i] = fibList[i - 1] + fibList[i - 2];
        }
        return fibList;
    }

    static void Main()
    {
        int count = 10;
        int[] fibonacciList = FibonacciArray(count);
        Console.WriteLine("Fibonacci Sequence:");
        Console.WriteLine(string.Join(", ", fibonacciList));
        Console.WriteLine("Is dataType a number? " + (fibonacciList[0].GetType() == typeof(int)));
    }
}


