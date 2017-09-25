namespace Dotnetifiy.Messaging
{
    public interface IHandler<in TMessage>
    {
        void Handle(TMessage message);
    }
}