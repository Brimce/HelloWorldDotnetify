using Dotnetifiy.Messaging;

namespace HelloWorldDotNetify.Pages.About
{
    public class AboutVM : BaseVM, IAboutState
    {
        public string Auteur
        {
            get => Get<string>();
            set => Set(value);
        }

        public AboutVM(IEventAggregator eventAggregator) : base(eventAggregator)
        {
            Auteur = "Quelqu'un de bien";
            //Publish(new ShowMessageRequested($"{Paragraphes.Count} paragraphes affichés."));
        }


    }
}