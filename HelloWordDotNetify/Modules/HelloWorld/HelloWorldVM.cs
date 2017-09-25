using System;
using System.Threading;
using Dotnetifiy.Messaging;
using HelloWorldDotNetify.Events;

namespace HelloWorldDotNetify.Modules.HelloWorld
{
    public class HelloWorldVM : BaseVM, IHelloWorldState
    {
        private readonly Timer _timer;

        public string Greetings
        {
            get => Get<string>();
            protected set
            {
                if (Greetings == value)
                    return;

                Set(value);
                Publish(new ShowMessageRequested(value));
            }
        }

        public DateTime ServerTime => DateTime.Now;

        public HelloWorldVM(IEventAggregator eventAggregator) : base(eventAggregator)
        {
            Greetings = "Hello world !";
            _timer = new Timer(state =>
            {
                Changed(nameof(ServerTime));
                PushUpdates();
            }, null, 0, 1000);
        }

        public Action<string> Submit => s =>
        {
            Greetings = $"Hello {s}!";
        };

        public override void Dispose()
        {
            _timer?.Dispose();
            Publish(new ShowMessageRequested("Bye bye Helloworld !"));

            base.Dispose();
        }
    }
}