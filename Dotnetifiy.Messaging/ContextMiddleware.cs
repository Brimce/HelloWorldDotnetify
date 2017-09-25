using System.Threading.Tasks;
using DotNetify;

namespace Dotnetifiy.Messaging
{
    public class ContextMiddleware : IMiddleware
    {
        private readonly IEventAggregator _eventAggregator;
        public ContextMiddleware(IEventAggregator eventAggregator)
        {
            _eventAggregator = eventAggregator;
        }
        public Task Invoke(DotNetifyHubContext context, NextDelegate next)
        {
            _eventAggregator.Context = context.CallerContext.ConnectionId;

            return next(context);
        }
    }
}