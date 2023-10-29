using BibliotecaPublica.Core.Enums;
using BibliotecaPublica.Utils.Helpers;
using Microsoft.AspNetCore.Components;

namespace DevTools.Pages
{
    public partial class EncryptPage : ComponentBase
    {
        private CryptProvider _provider;
        private string? _input;
        private string? _output;
        private string? _keyWord;
        private bool _crypt = true;

        protected async override Task OnInitializedAsync() { }

        private async Task Execute()
        {
            if (_crypt)
                _output = CryptHelper.Encrypt(_input, _keyWord, _provider);
            else
                _output = CryptHelper.Decrypt(_input, _keyWord, _provider);
        }

        private async Task OnClickButton()
        {
            await Execute();
        } 
    }
}