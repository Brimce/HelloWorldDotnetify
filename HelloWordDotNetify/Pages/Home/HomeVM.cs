using System.Collections.Generic;
using Dotnetifiy.Messaging;
using HelloWorldDotNetify.Events;

namespace HelloWorldDotNetify.Pages.Home
{
    public class HomeVM : BaseVM, IHomeState
    {
        public string Title
        {
            get => Get<string>();
            set => Set(value);
        }

        public string Content => "contenu";
        public string SubContent => "Sub contenu";

        public List<ParagrapheStateDTO> Paragraphes { get; } = 
            new List<ParagrapheStateDTO> {
            new ParagrapheStateDTO("J'adore les nems","oiudcvkjshdfkjshdvkjsdvskjbghnv"),
            new ParagrapheStateDTO("Je n'aime pas les nems","oiudcvkjshdfkjshdvkjsdvskjbghnv"),
            new ParagrapheStateDTO("Je ne sais plus si j'adore les nems","oiudcvkjshdfkjshdvkjsdvskjbghnv"),
            new ParagrapheStateDTO("J'adore les nems",@"oiudcvkjshdfkjshdvkjsdvskjbghnv"),
            new ParagrapheStateDTO("J'adore les nems","oiudcvkjshdfkjshdvkjsdvskjbghnv")
        };

        public HomeVM(IEventAggregator eventAggregator) :  base(eventAggregator)
        {
            Title = "Home sweet home";
            Publish(new ShowMessageRequested($"{Paragraphes.Count} paragraphes affichés."));
        }


    }
}
