using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;

namespace Dotnetifiy.Messaging
{

    public abstract class BaseVM : DotNetify.BaseVM
    {
        private readonly IEventAggregator _eventAggregator;
        private readonly List<string> _subscriberKeys = new List<string>();

        protected BaseVM(IEventAggregator eventAggregator)
        {
                   // var instance = ActivatorUtilities.CreateInstance(provider,  typeof(IEventAggregator));

            _eventAggregator = eventAggregator ?? throw new ArgumentNullException(nameof(eventAggregator));
        }

        //protected abstract void InitSubscriptions();

        protected void Subscribe<T>(Action<T> handler)
        {
            _subscriberKeys.Add(_eventAggregator.Subscribe(handler));
        }

        protected void Publish<T>(T notification)
        {
            _eventAggregator.Publish(notification);
        }

        public override void Dispose()
        {
            foreach (var key in _subscriberKeys)
                _eventAggregator.Unsubscribe(key);
        }
    }
}
