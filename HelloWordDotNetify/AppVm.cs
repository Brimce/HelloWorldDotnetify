using System.Collections.Generic;
using HelloWorldDotNetify.Events;
using System;
using Dotnetifiy.Messaging;
using DotNetify.Routing;
using HelloWorldDotNetify.Modules.HelloWorld;
using HelloWorldDotNetify.Pages.About;
using HelloWorldDotNetify.Pages.Home;
using HelloWorldDotNetify.Pages.Test;

namespace HelloWorldDotNetify
{
    public class AppVM : BaseVM, IRoutable, IHandler<ShowMessageRequested>
    {
        public string Message { get; protected set; }

        public class Link
        {
            public string Id => Route.TemplateId;
            public Route Route { get; set; }
            public string Caption { get; set; }
            public string Description { get; set; }
        }

        public RoutingState RoutingState { get; set; }

        public List<Link> Links { get; }

        public AppVM(IEventAggregator eventAggregator) : base(eventAggregator)
        {
            InitSubscriptions();

            this.RegisterRoutes("App", new List<RouteTemplate>
            {
                new RouteTemplate("Home", $"/module/get/{nameof(HomeVM)}") {UrlPattern = ""},
                new RouteTemplate("SimpleTs"),
                new RouteTemplate("HelloWorld", $"/module/get/{nameof(HelloWorldVM)}"),
                new RouteTemplate("Test", $"/module/get/{nameof(TestVM)}"),
                new RouteTemplate("About", $"/module/get/{nameof(AboutVM)}"),
            });

            Links = new List<Link>
            {
                new Link
                {
                    Route = this.GetRoute("Home"),
                    Caption = "Home",
                    Description = "Getting familiar with the basics"
                },
                new Link
                {
                    Route = this.GetRoute("SimpleTs"),
                    Caption = "SimpleTs",
                    Description = "Getting familiar with the basics"
                },
                new Link
                {
                    Route = this.GetRoute("HelloWorld"),
                    Caption = "Hello World",
                    Description = "Getting familiar with the basics"
                },
                new Link
                {
                    Route = this.GetRoute("Test"),
                    Caption = "Test",
                    Description = "Getting familiar with the basics"
                },
                new Link
                {
                    Route = this.GetRoute("About"),
                    Caption = "About",
                    Description = "Getting familiar with the basics"
                }
            };
            //Message = "je suis un message";
        }
        
        protected void InitSubscriptions()
        {
            Subscribe<ShowMessageRequested>(Handle);
        }

        public void Handle(ShowMessageRequested notification)
        {
            ChangeMessage(notification.Message);
            Changed(nameof(Message));
            PushUpdates();
        }


        private void ChangeMessage(string notification)
        {
            Message = $"Nouveau message {DateTime.Now} : {notification}";
        }

        public Action<string> Submit => s =>
        {
            Changed(nameof(Message));
            PushUpdates();
        };

    }
}