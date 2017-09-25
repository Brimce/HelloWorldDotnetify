using System;

namespace HelloWorldDotNetify.Pages.Test
{
    public interface ITestState
    {
        string Test { get; set; }
        DateTime Date { get; set; }
    }
}