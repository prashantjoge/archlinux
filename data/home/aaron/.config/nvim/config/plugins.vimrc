
filetype plugin indent on
filetype plugin on
"Start Python editor stuff
" To Prevent vim from applying normal styles
let g:autoformat_autoindent = 1
let g:autoformat_retab = 1
let g:autoformat_remove_trailing_spaces = 1
" path to your python 
let g:python3_host_prog = '/usr/bin/python3'
let g:python_host_prog = '/usr/bin/python2'
":setlocal buftype=nofile
let g:pymode = 1
let g:pymode_warnings = 1
let g:pymode_rope = 1
let g:pymode_options = 1
let g:pymode_options_colorcolumn = 1
let g:pymode_options_max_line_length = 79
let g:pymode_quickfix_minheight = 3
let g:pymode_quickfix_maxheight = 6
let g:pymode_python = 'python3'
let g:pymode_indent = 1
let g:pymode_folding = 0
let g:pymode_motion = 1
let g:pymode_syntax_all = 1
let g:pymode_rope_completion = 1
let g:pymode_rope_autoimport = 1 
let g:pymode_rope_autoimport_modules = ['os', 'shutil', 'datetime']
let g:pymode_rope_completion_bind = '<C-Space>'
let g:pymode_rope_goto_definition_cmd = 'new'
let g:pymode_rope_goto_definition_bind = '<C-c>g'
let g:pymode_rope_complete_on_dot = 1
let g:pymode_syntax_builtin_objs = g:pymode_syntax_all
let g:pymode_syntax_builtin_types = g:pymode_syntax_all
let g:pymode_syntax_highlight_exceptions = g:pymode_syntax_all
let g:pymode_syntax_highlight_self = g:pymode_syntax_all
let g:pymode_syntax_highlight_stars_operator = g:pymode_syntax_all
let g:pymode_syntax_highlight_equal_operator = g:pymode_syntax_all
let g:pymode_run = 1
let g:pymode_run_bind = '<leader>c' " leader is ,
let g:pymode_lint = 1
let g:pymode_lint_on_write = 1
let g:pymode_lint_message = 1
let g:pymode_lint_signs = 1
let g:pymode_lint_checkers = ['pyflakes', 'pep8', 'mccabe', 'pylint']
augroup autoformat_settings
""  autocmd FileType bzl AutoFormatBuffer buildifier
""  autocmd FileType c,cpp,proto,javascript AutoFormatBuffer clang-format
""  autocmd FileType dart AutoFormatBuffer dartfmt
""  autocmd FileType go AutoFormatBuffer gofmt
""  autocmd FileType gn AutoFormatBuffer gn
""  autocmd FileType html,css,json AutoFormatBuffer js-beautify
""   autocmd FileType java AutoFormatBuffer google-java-format
""    autocmd FileType python AutoFormatBuffer yapf
    autocmd FileType python AutoFormatBuffer autopep8
augroup END
"Definitions for |signs|
"" let g:pymode_lint_todo_symbol = 'WW'
"" let g:pymode_lint_comment_symbol = 'CC'
"" let g:pymode_lint_visual_symbol = 'RR'
"" let g:pymode_lint_error_symbol = 'EE'
"" let g:pymode_lint_info_symbol = 'II'
"" let g:pymode_lint_pyflakes_symbol = 'FF'
let g:pymode_lint_options_pyflakes = { 'builtins': '_' }
let g:pymode_lint_options_pep257 = {}
let g:pymode_rope_show_doc_bind = '<C-c>d'
let g:pymode_rope_regenerate_on_write = 1
let g:pymode_rope_complete_on_dot = 1
let g:pep8_ignore="E501,W601"
"End Python editor




"test line
" neomake config
"autocmd! BufWritePost * Neomake
" autocmd BufLeave * QFix

"let g:neomake_place_signs = 0

"let g:neomake_open_list = 2

"let g:neomake_javascript_enabled_makers = ['eslint']
"powerline stuff
"let g:powerline_pycmd="py3"
"let g:Powerline_symbols = 'fancy'
"let g:powerline_pycmd="py"
" Automatic tab completion without plugins 

"let g:tab_completion_keys = "\<c-x>\<c-p>"
"function! TabCompletion()
""  let l:col = max([col('.')-1, 1])
""  let l:char = matchstr(getline('.'), '\%' . l:col . 'c.')
""  if l:char =~# '\k'
""    return g:tab_completion_keys
""  else
"    return "\<tab>"
""  endif
"endfunction
"inoremap <expr> <tab> TabCompletion()

set background=dark
"colorscheme kalisi
":" add airline theme
:
"" let g:airline_theme='luna'
 " let g:airline_theme='atomic'

    
    
    
"let g:lightline.colorscheme = 'dracula'
 " let g:airline_theme='kalisi'
  let g:lightline = {
        \ 'colorscheme': 'molokai',
        \ }

colorscheme mango 
"" make background transparent

hi Normal guibg=NONE ctermbg=NONE
hi EndOfBuffer ctermbg=NONE
hi LineNr ctermbg=234

" CtrlP
let g:ctrlp_prompt_mappings={'PrtClearCache()':['<Leader><F5>']}
let g:ctrlp_prompt_mappings={'PrtdeleteEnt()':['<Leader><F7>']}
let g:ctrlp_match_window='bottom,order:btt,min:2,max:25'
set wildmenu " enhanced autocomplete
set wildignore+=*/tmp/*,*.so,*.swp,*.zip,*node_modules*,*.jpg,*.png,*.svg,*.ttf,*.woff,*.woff3,*.eot
",*public/css/*,*public/js*

" delimitMate options
let delimitMate_expand_cr=1

" enable matchit (for matching tags with %)
runtime macros/matchit.vim

" vim-sneak settings
"hi SneakPluginTarget ctermfg=black ctermbg=181818

" javascript libraries syntax
"let g:used_javascript_libs = 'jquery,underscore,react,flux,chai'

" completion
"augroup omnifuncs
""  autocmd!
""  autocmd FileType css setlocal omnifunc=csscomplete#CompleteCSS
""  autocmd FileType html,markdown setlocal omnifunc=htmlcomplete#CompleteTags
""  autocmd FileType python setlocal omnifunc=pythoncomplete#Complete
""  autocmd FileType xml setlocal omnifunc=xmlcomplete#CompleteTags
""  autocmd FileType php setlocal omnifunc=phpcomplete#CompletePHP
"augroup end

" tern
"if exists('g:plugs["tern_for_vim"]')
""  let g:deoplete#omni#functions = {}
""  let g:deoplete#omni#functions.javascript = [
""    \ 'tern#Complete',
""    \ 'jspc#omni'
""  \]
"endif

" deoplete
"let g:deoplete#enable_at_startup = 1
"let g:deoplete#sources = {}
"let g:deoplete#sources['javascript.jsx'] = ['file', 'ultisnips', 'ternjs']
"let g:tern#command = ['tern']
"let g:tern#arguments = ['--persistent']
"let g:tern_request_timeout = 1
"let g:SuperTabClosePreviewOnPopupClose = 1

" disable colorizer at startup
let g:colorizer_startup = 0
let g:colorizer_nomap = 1

" emmet-vim settings
" let g:user_emmet_settings = { "html": { "quote_char": "'"} }

" rust settings
"let g:racer_cmd = "$HOME/.cargo/bin/racer"
"let $RUST_SRC_PATH="/usr/src/rust/src"

" NERDTree Configuration

function OpenNERDTree()
  execute ":NERDTree"
endfunction
command -nargs=0 OpenNERDTree :call OpenNERDTree()

nmap <ESC>t :OpenNERDTree<CR>
let g:NERDTreeDirArrowExpandable = '+'
let g:NERDTreeDirArrowCollapsible = '-'
