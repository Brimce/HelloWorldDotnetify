namespace HelloWorldDotNetify.Pages.Home
{
    public class ParagrapheStateDTO
    {
        public string Title { get; }
        public string Content { get; }

        public ParagrapheStateDTO(string title, string content)
        {
            if (string.IsNullOrWhiteSpace(title))
                throw new System.ArgumentException("message", nameof(title));

            Title = title;
            Content = content;
        }
    }
}
