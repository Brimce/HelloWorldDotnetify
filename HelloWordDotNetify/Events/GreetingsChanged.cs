namespace HelloWorldDotNetify.Events
{
    public class GreetingsChanged
    {

        public string Message { get; }

        public GreetingsChanged(string message)
        {
            if (string.IsNullOrEmpty(message))
                throw new System.ArgumentException(nameof(message));

            Message = message;
        }
    }
}
