﻿using Microsoft.JSInterop;
using SqlFormatter;

namespace DevTools.Pages;

public partial class SqlFormatterPage : ComponentBase
{
    private string _sql = string.Empty;
    private string _formattedSql = string.Empty;

    private void OnClickFormatButton()
    {
        if ( _sql.TemConteudo() )
            _formattedSql = Formatter.Format( _sql );
    }

    private void OnClickClearButton()
    {
        _sql = string.Empty;
        _formattedSql = string.Empty;
    }

    private async Task OnClickCopyButton()
    {
        await JSRuntime.InvokeVoidAsync( "navigator.clipboard.writeText", _formattedSql );
    }
}