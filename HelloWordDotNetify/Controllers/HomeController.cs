using DotNetify;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace HelloWorldDotNetify.Controllers
{
    public class HomeController : Controller
    {
        private readonly IHostingEnvironment _hostingEnv;

        public HomeController(IHostingEnvironment hostingEnv)
        {
            _hostingEnv = hostingEnv;
        }

        // The single-page app's entry point - always starts from index.html.
        [Route("{*id}")]
        public IActionResult Index(string id)
        {
            ViewBag.StartupScript = BuildStateString(nameof(AppVM));
            return View("~/Index.cshtml");
        }

        // Returns JS file of a view, including initial view model states for faster client-side rendering.
        [Route("module/get/{vm?}")]
        public IActionResult Module(string vm)
        {
            var vmState = vm != null ? BuildStateString(vm) : null;
            return Content(vmState, "text/js");
        }

        private static string BuildStateString(string vm) 
            => $"window.vmStates = window.vmStates || {{}}; window.vmStates['{vm}'] = {VMController.GetInitialState(vm) ?? "{}"};";
    }
}