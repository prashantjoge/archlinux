
" All status line configuration goes here

set cmdheight=1
set display+=lastline
" let g:webdevicons_enable =0 
" let g:webdevicons_enable_nerdtree = 1
" let g:webdevicons_enable_ctrlp = 1
" let g:WebDevIconsUnicodeGlyphDoubleWidth = 1
" let g:webdevicons_conceal_nerdtree_brackets = 1
" let g:WebDevIconsNerdTreeGitPluginForceVAlign = 1
" let g:WebDevIconsUnicodeDecorateFolderNodes = 1
" let g:DevIconsEnableFoldersOpenClose = 1
" general config
"
set laststatus=2 " always show status line
set showtabline=2 " always show tabline set noshowmode " hide default mode text (e.g. INSERT) as airline already displays it
set noshowmode
		let g:lightline.separator = { 'left': '', 'right': '' }
		let g:lightline.subseparator = { 'left': '|', 'right': '|' }
		let g:lightline.tabline_separator = g:lightline.separator
		let g:lightline.tabline_subseparator = g:lightline.subseparator


		let g:lightline.enable = {
		    \ 'statusline': 1,
		    \ 'tabline': 1
		    \ }
nmap <Leader>1 <Plug>lightline#bufferline#go(1)
nmap <Leader>2 <Plug>lightline#bufferline#go(2)
nmap <Leader>3 <Plug>lightline#bufferline#go(3)
nmap <Leader>4 <Plug>lightline#bufferline#go(4)
nmap <Leader>5 <Plug>lightline#bufferline#go(5)
nmap <Leader>6 <Plug>lightline#bufferline#go(6)
nmap <Leader>7 <Plug>lightline#bufferline#go(7)
nmap <Leader>8 <Plug>lightline#bufferline#go(8)
nmap <Leader>9 <Plug>lightline#bufferline#go(9)
nmap <Leader>0 <Plug>lightline#bufferline#go(10)
let g:lightline#bufferline#enable_devicons =0
let g:lightline#bufferline#show_number  = 1
let g:lightline#bufferline#shorten_path = 1
let g:lightline#bufferline#unicode_symbols = 1
let g:lightline#bufferline#unnamed      = '[No Name]'

  let g:lightline = {
        \ 'component_function': {
        \   'filetype': 'MyFiletype',
        \   'fileformat': 'MyFileformat',
        \ }
        \ }
  
  function! MyFiletype()
    return winwidth(0) > 70 ? (strlen(&filetype) ? &filetype . ' ' . WebDevIconsGetFileTypeSymbol() : 'no ft') : ''
  endfunction
  
  function! MyFileformat()
    return winwidth(0) > 70 ? (&fileformat . ' ' . WebDevIconsGetFileFormatSymbol()) : ''
  endfunction
let g:lightline                  = {}
"" lightline bufferline
let g:lightline.tabline          = {'left': [['buffers']], 'right': [['close']]}
let g:lightline.component_expand = {'buffers': 'lightline#bufferline#buffers'}
let g:lightline.component_type   = {'buffers': 'tabsel'}

" ----------------------------------------------------
" airline config
" let g:airline#extensions#tabline#enabled=1  " buffers at the top as tabs
" let g:airline#extensions#tabline#show_tabs=1
" let g:airline#extensions#tabline#show_tab_type=1
" -----------------------------------------------------

"let g:airline#extensions#tmuxline#enabled=0
"let g:airline_theme = 'badwolf'

" let g:airline_powerline_fonts= 1
""" let g:airline_theme = 'raven'
" if !exists('g:airline_symbols')
  " let g:airline_symbols = {}
" endif
"let g:airline_symbols.linenr = ''
"let g:airline_symbols.paste = 'ρ'
"let g:airline_symbols.readonly = ''
"let g:powerline_pycmd="py3"
" let g:airline#extensions#quickfix#quickfix_text = 'QF'
" let g:airline#extensions#quickfix#location_text = 'LL'

" disable unused extensions (performance)
" let g:airline#extensions#ctrlp#color_template = 'insert'
" let g:airline#extensions#bufferline#enabled = 1
" let g:airline#extensions#capslock#enabled   = 1
"let g:airline#extensions#csv#enabled        = 1
" let g:airline#extensions#ctrlspace#enabled  = 1
"let g:airline#extensions#eclim#enabled      = 1
"let g:airline#extensions#hunks#enabled      = 1
"let g:airline#extensions#nrrwrgn#enabled    = 1
" let g:airline#extensions#promptline#enabled = 0
"let g:airline#extensions#syntastic#enabled  = 0
"let g:airline#extensions#taboo#enabled      = 0
" let g:airline#extensions#tagbar#enabled     = 0
"let g:airline#extensions#virtualenv#enabled = 0
" let g:airline#extensions#whitespace#enabled = 0

" tmuxline config
" let g:tmuxline_preset = {
"         \ 'a': '#S',
"         \ 'b': '#F',
"         \ 'c': '#W',
"         \ 'win': ['#I', '#W'],
"         \ 'cwin': ['#I', '#W'],
"         \ 'x': '#h',
"         \ 'y': '%b %d',
"         \ 'z': '%R'}
"         
""  if !exists('g:airline_symbols')
 ""   let g:airline_symbols = {}
""  endif

  " unicode symbols
"let g:airline_left_sep = '»'
"let g:airline_left_sep = '▶'
"let g:airline_right_sep = '«'
"let g:airline_right_sep = '◀'
"let g:airline_symbols.crypt = '🔒'
"" let g:airline_symbols.linenr = '☰'
"" let g:airline_symbols.linenr = '␊'
""  let g:airline_symbols.linenr = '␤'
""  let g:airline_symbols.linenr = '¶'
""  let g:airline_symbols.maxlinenr = ''
""  let g:airline_symbols.maxlinenr = '㏑'
""  let g:airline_symbols.branch = '⎇'
""  let g:airline_symbols.paste = 'ρ'
""  let g:airline_symbols.paste = 'Þ'
""  let g:airline_symbols.paste = '∥'
""  let g:airline_symbols.spell = 'Ꞩ'
""  let g:airline_symbols.notexists = 'Ɇ'
""  let g:airline_symbols.whitespace = 'Ξ'

  " powerline symbols
  " let g:airline_left_sep = ''
  " let g:airline_left_alt_sep = ''
  " let g:airline_right_sep = ''
  " let g:airline_right_alt_sep = ''
  " let g:airline_symbols.branch = ''
  " let g:airline_symbols.readonly = ''
  " let g:airline_symbols.linenr = '☰'
  


