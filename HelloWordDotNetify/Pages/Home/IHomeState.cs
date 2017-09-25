using System.Collections.Generic;

namespace HelloWorldDotNetify.Pages.Home
{
    public interface IHomeState
    {
        string Title { get; set; }
        string Content { get; }
        string SubContent { get; }
        List<ParagrapheStateDTO> Paragraphes { get; }
    }
}
    