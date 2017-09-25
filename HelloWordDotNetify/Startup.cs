using Autofac;
using Dotnetifiy.Messaging;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using DotNetify;
using HelloWorldDotNetify.Modules.HelloWorld;

namespace HelloWorldDotNetify
{
    public class Startup
    {
        public IConfiguration Configuration { get; }
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddMediatR();
            services.AddMemoryCache();
            services.AddSignalR();
            services.AddDotNetify();

            services.AddSingleton<IEventAggregator, EventAggregator>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            //loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true,
                    ReactHotModuleReplacement = true
                });
            }
            //else
            //{
            //    app.UseExceptionHandler("/Home/Error");
            //}

            app.UseStaticFiles();
            app.UseWebSockets();
            app.UseSignalR();

            //var provider = app.ApplicationServices;

            if (env.IsDevelopment())
                app.UseDotNetify(config =>
                {
                    // Middleware to log incoming/outgoing message; default to Sytem.Diagnostic.Trace.
                    config.UseDeveloperLogging();
                    //config.SetFactoryMethod(// Use ASP.NET Core DI to provide view model instances by default.
                    //(type, args) =>
                    //{
                    //     try
                    //     {
                    //        var finalArgs = args ?? new object[] { };
                    //        var instance = ActivatorUtilities.CreateInstance(provider, type, args ?? new object[] { });
                    //        var baseMediatrVM = instance as BaseMediatrVM;
                    //        if (baseMediatrVM == null)
                    //            return instance;

                    //        baseMediatrVM.ContextKey = "";
                    //        return baseMediatrVM;

                    //    }
                    //     catch (Exception ex)
                    //     {
                    //         Trace.Fail(ex.Message);
                    //         throw ex;
                    //     }
                    //}
                    //);
                    config.UseMiddleware<ContextMiddleware>();
                });
            else
                app.UseDotNetify();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });

            //var provider = new DotNetify.TinyIoCServiceProvider();
            //provider
            //   .AddTransient<IServiceA, ServiceA>()
            //   .AddSingleton<IServiceB, ServiceB>()
            //   .AddTransient<MyViewModel>();

        }

        // ConfigureContainer is where you can register things directly
        // with Autofac. This runs after ConfigureServices so the things
        // here will override registrations made in ConfigureServices.
        // Don't build the container; that gets done for you. If you
        // need a reference to the container, you need to use the
        // "Without ConfigureContainer" mechanism shown later.
        //public void ConfigureContainer(ContainerBuilder builder)
        //{
        //    builder.RegisterModule(new HellowordContainerModule());
        //}
    }

    public class HellowordContainerModule : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            //var assembly = typeof(BaseVM)
            //    .GetTypeInfo()
            //    .Assembly;
            // The generic ILogger<TCategoryName> service was added to the ServiceCollection by ASP.NET Core.
            // It was then registered with Autofac using the Populate method in ConfigureServices.
            //builder.RegisterAssemblyTypes(assembly)
            //    .Where(x => x.BaseType == typeof(BaseVM))
            //    .AsSelf()
            //    .SingleInstance();

            builder.RegisterType<AppVM>()
                .AsSelf()
                .SingleInstance().OwnedByLifetimeScope();

            builder.RegisterType<HelloWorldVM>()
                .AsSelf()
                .SingleInstance().OwnedByLifetimeScope();


        }
    }
}
