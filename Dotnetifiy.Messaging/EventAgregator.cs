using System;
using System.Collections.Concurrent;
using System.Linq;
using System.Threading;

namespace Dotnetifiy.Messaging
{
    public class EventAggregator : IEventAggregator
    {
        private static readonly AsyncLocal<string> LocalContext = new AsyncLocal<string>();
        private readonly ConcurrentDictionary<string, Delegate> _subscribers = new ConcurrentDictionary<string, Delegate>();
        private int _subscriberIdxCounter;

        public string Context
        {
            get => LocalContext.Value;
            set => LocalContext.Value = value;
        }

        public void Publish<T>(T message)
        {
            if (Context == null)
            {
                Console.WriteLine($"T={Thread.CurrentThread.ManagedThreadId}, message:{message.ToString()}");
                return;
            }

            _subscribers.Where(kvp => kvp.Key.StartsWith(Context) && kvp.Key.EndsWith(typeof(T).Name))
                .Select(kvp => kvp.Value)
                .ToList()
                .ForEach(handler => handler.DynamicInvoke(message));
        }

        public string Subscribe<T>(Action<T> handler)
        {
            if (Context == null)
                return null;

            var subscriberKey = $"{Context}.{Interlocked.Increment(ref _subscriberIdxCounter)}.{typeof(T)}";
            _subscribers.TryAdd(subscriberKey, handler);
            return subscriberKey;
        }

        public void Unsubscribe(string subscriberKey) => _subscribers.TryRemove(subscriberKey, out Delegate value);
    }
}