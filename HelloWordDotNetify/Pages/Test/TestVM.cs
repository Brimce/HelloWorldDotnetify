using System;
using Dotnetifiy.Messaging;
using HelloWorldDotNetify.Events;

namespace HelloWorldDotNetify.Pages.Test
{
    public class TestVM : BaseVM, ITestState
    {
        public string Test
        {
            get => Get<string>();
            set => Set(value);
        }

        public DateTime Date
        {
            get => Get<DateTime>();
            set => Set(value);
        }
        
        public TestVM(IEventAggregator eventAggregator) : base(eventAggregator)
        {
            Publish(new ShowMessageRequested($"Bonjour test."));
            Test = "J'essaye";
            Date = DateTime.Today;
        }
    }
}