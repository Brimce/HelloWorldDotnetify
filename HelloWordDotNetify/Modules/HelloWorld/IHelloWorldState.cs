using System;

namespace HelloWorldDotNetify.Modules.HelloWorld
{
    public interface IHelloWorldState
    {
        string Greetings { get; }
        DateTime ServerTime { get; }

    }
}