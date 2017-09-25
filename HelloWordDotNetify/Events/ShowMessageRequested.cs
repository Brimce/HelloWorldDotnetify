namespace HelloWorldDotNetify.Events
{
    public class ShowMessageRequested
    {
        public string Message { get; }

        public ShowMessageRequested(string message)
        {
            if (string.IsNullOrEmpty(message))
                throw new System.ArgumentException(nameof(message));

            Message = message;
        }
    }
}
