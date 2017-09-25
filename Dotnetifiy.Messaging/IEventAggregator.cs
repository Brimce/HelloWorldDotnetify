using System;

namespace Dotnetifiy.Messaging
{
    public interface IEventAggregator
    {
        string Context { get; set; }

        string Subscribe<T>(Action<T> handler);
        void Unsubscribe(string subscriberKey);
        void Publish<T>(T message);
    }
}