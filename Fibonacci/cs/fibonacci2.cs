using System;
using System.Collections.Generic;

class Program
{
    static int[] Fibonacci2(int count)
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
        int[] fibonacci = Fibonacci2(10);
        Console.WriteLine(string.Join(", ", fibonacci));
    }
}