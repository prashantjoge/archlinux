
call plug#begin('~/.vim/plugged')
set runtimepath^=~/.vim/bundle/ctrlp.vim

" colorschemes
Plug 'w0ng/vim-hybrid'
Plug 'flazz/vim-colorschemes'
Plug 'altercation/vim-colors-solarized'
Plug 'ervandew/supertab'
" Start Python plugins
" python mode is a bit slow in the beginning
" but it picks up for its slack as you start to use
" it. has more functionality than jedi-vim
"Plug 'python-mode/python-mode', { 'branch': 'develop' }
Plug 'nvie/vim-flake8'
""Plug 'davidhalter/jedi-vim'
Plug 'google/vim-maktaba'
Plug 'google/vim-codefmt'
Plug 'google/vim-glaive'
""""""""""""Plug 'vim-airline/vim-airline'
"""""""""""""  Plug 'vim-airline/vim-airline-themes' "Better Visual Guide
  Plug 'Yggdroot/indentLine'
  " syntax check
  Plug 'w0rp/ale'
  " Autocomplete
  Plug 'ncm2/ncm2'
  Plug 'roxma/nvim-yarp'
  Plug 'ncm2/ncm2-bufword'
  Plug 'ncm2/ncm2-path'
  Plug 'ncm2/ncm2-jedi'
  " Formater
  Plug 'Chiel92/vim-autoformat'

"Utils
Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' }
Plug 'haya14busa/incsearch.vim'
Plug 'mbbill/undotree'
Plug 'tpope/vim-commentary'
"Plug 'nathanaelkane/vim-indent-guides' " `,ig` to toggle
Plug 'Raimondi/delimitMate'
Plug 'tpope/vim-surround'
Plug 'vim-scripts/camelcasemotion'
Plug 'ciaranm/detectindent'

" eye candy
Plug 'myusuf3/numbers.vim'
Plug 'itchyny/lightline.vim'
Plug 'mgee/lightline-bufferline'

call plug#end()
"--------------------------------------------------------------------
"" END OF PLUGINS
"---------------------------------------------------------------------
"=====================================================================
"" GENERAL SETTINGS
"+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
autocmd FileType nerdtree setlocal nolist
set backup             " keep a backup file (restore to previous version)
set undodir=~/.config/nvim/undodir
set undofile
set undolevels=100
set undoreload=1000
set undofile           " keep an undo file (undo changes after closing)
set backupdir=~/.config/nvim/backup
set directory=~/.config/nvim/backup
set ruler              " show the cursor position all the time
set cursorline
set showcmd            " display incomplete commands
set ru " trurn on ruler"
set si "turn on smart indent"
set autoindent "Turn on auto indentation"
set sc "show commands"
set copyindent "copy the previous indentation on autoindenting"
set number "show numbers
set shiftround "Use multiple of shiftwidth when indenting with <,>/"
set showmatch "matching parenthesis"
set hidden "Hide buffers instead of closing them"
set autoread ""read filechanges when it happens outside vim
set so=5 " scroll lines above/below cursor
set sidescrolloff=5
set lazyredraw "buffer screen updates"
set ignorecase "when searching"
set nrformats-=octal
set ttimeout
set ttimeoutlen=100
if !has('gui_running')
  set t_Co=256
endif
set incsearch "turn on incremental search"
 " in case t_Co alone doesn't work, add this as well:
 let &t_AB="\e[48;5;%dm"
 let &t_AF="\e[38;5;%dm"
" Switch syntax highlighting on
syntax on
hi LineNr ctermbg=234
syntax enable
" Also switch on highlighting the last used search pattern.
set hlsearch
" Enable file type detection.
" Use the default filetype settings, so that mail gets 'textwidth' set to 72,
" 'cindent' is on in C files, etc.
" Also load indent files, to automatically do language-dependent indenting.
filetype plugin indent on
filetype plugin on
autocmd FileType python setlocal noexpandtab shiftwidth=4 softtabstop=4 tabstop=4
" Put these in an autocmd group, so that we can delete them easily.
augroup vimrcEx
 autocmd!
 " For all text files set 'textwidth' to 78 characters.
 autocmd FileType text setlocal textwidth=78
  " When editing a file, always jump to the last known cursor position.
  " Don't do it when the position is invalid or when inside an event handler
 autocmd BufReadPost *
    \ if line("'\"") >= 1 && line("'\"") <= line("$") |
    \   execute "normal! g`\"" |
    \ endif
  " Trim whitespace onsave
  autocmd BufWritePre * %s/\s\+$//e
augroup END
" Convenient command to see the difference between the current buffer and the
" file it was loaded from, thus the changes you made.
" Only define it when not defined already.
if !exists(":DiffOrig")
  command DiffOrig vert new | set buftype=nofile | read ++edit # | 0d_ | diffthis
                 \ | wincmd p | diffthis
endif
set wildmode=longest,list,full
set wildmenu
" Wildmenu
if has("wildmenu")
    set wildignore+=*.a,*.o
    set wildignore+=*.bmp,*.gif,*.ico,*.jpg,*.png
    set wildignore+=.DS_Store,.git,.hg,.svn
    set wildignore+=*~,*.swp,*.tmp
    set wildmenu
    set wildmode=longest,list
endif
" Unix as standard file type
set ffs=unix,dos,mac
" Always utf8
set termencoding=utf-8
set encoding=utf-8
set fileencoding=utf-8
" clipboard
set clipboard=unnamedplus
"vim completion option like pop up menu
set completeopt=longest,menuone,preview
set wrap        " wrap line
set cmdheight=1
set display+=lastline
set laststatus=2 " always show status line
set showtabline=2 " always show tabline set noshowmode " hide default mode text (e.g. INSERT) as airline already displays it
"Bad option if you want to use C-X C-K for dictionary completion
"set noshowmode
set formatoptions-=t "Insert line breaks after specified text width"

"set the dictionary ctrl-x ctrl-k for dictionary completion
"Download the dictionary("WORDS" from  AUR
set dictionary+=/usr/share/dict/words
" Set lang to en_US' Find [s, [S , ]S ]s, Correct ]=, add to dict zg
":set nospell cancel Spell like on this file
"set spell spelllang=en_us
"Google for the 'vim words.txt' file
autocmd FileType markdown setlocal spell
augroup markdownSpell
    autocmd!
    autocmd FileType markdown setlocal spell
    autocmd BufRead,BufNewFile *.txt setlocal spell
augroup END
set thesaurus+=~/.vim/words.txt
"=====================================================================
"        END OF GENERAL SETTINGS
"=====================================================================
"=====================================================================
"         PYTHON SETTINGS for Using VIM as a CODE EDITOR
"" vim-autoformat
noremap <F3> :Autoformat<CR>
" NCM2
augroup NCM2
  autocmd!
  " enable ncm2 for all buffers
  autocmd BufEnter * call ncm2#enable_for_buffer()
  " :help Ncm2PopupOpen for more information
  set completeopt=noinsert,menuone,noselect
  " When the <Enter> key is pressed while the popup menu is visible, it only
  " hides the menu. Use this mapping to close the menu and also start a new line.
  inoremap <expr> <CR> (pumvisible() ? "\<c-y>\<cr>" : "\<CR>")
  " uncomment this block if you use vimtex for LaTex
  " autocmd Filetype tex call ncm2#register_source({
  "           \ 'name': 'vimtex',
  "           \ 'priority': 8,
  "           \ 'scope': ['tex'],
  "           \ 'mark': 'tex',
  "           \ 'word_pattern': '\w+',
  "           \ 'complete_pattern': g:vimtex#re#ncm2,
  "           \ 'on_complete': ['ncm2#on_complete#omni', 'vimtex#complete#omnifunc'],
  "           \ })
augroup END
" Ale
let g:ale_lint_on_enter = 0
let g:ale_lint_on_text_changed = 'never'
let g:ale_echo_msg_error_str = 'E'
let g:ale_echo_msg_warning_str = 'W'
let g:ale_echo_msg_format = '[%linter%] %s [%severity%]'
let g:ale_linters = {'python': ['flake8']}
autocmd FileType python nnoremap <buffer> <F1> :w \| exec '!clear; python' shellescape(@%, 1)<cr>
""======================================================================
" Airline
"let g:airline_left_sep  = ''
"let g:airline_right_sep = ''
"let g:airline#extensions#ale#enabled = 1
"let airline#extensions#ale#error_symbol = 'E:'
"let airline#extensions#ale#warning_symbol = 'W:'
" let g:autoformat_autoindent = 1
" let g:autoformat_retab = 1
" let g:autoformat_remove_trailing_spaces = 1
" " path to your python
" let g:python3_host_prog = '/usr/bin/python3'
" let g:python_host_prog = '/usr/bin/python2'
"" let g:pymode = 1
" let g:pymode_warnings = 1
" let g:pymode_rope = 1
" let g:pymode_options = 1
" let g:pymode_options_colorcolumn = 1
" let g:pymode_options_max_line_length = 79
" let g:pymode_quickfix_minheight = 3
" let g:pymode_quickfix_maxheight = 6
" let g:pymode_python = 'python3'
" let g:pymode_indent = 1
" let g:pymode_folding = 0
" let g:pymode_motion = 1
" let g:pymode_syntax_all = 1
" let g:pymode_rope_completion = 1
" let g:pymode_rope_autoimport = 1
" let g:pymode_rope_autoimport_modules = ['os', 'shutil', 'datetime']
" let g:pymode_rope_completion_bind = '<C-Space>'
" let g:pymode_rope_goto_definition_cmd = 'new'
" let g:pymode_rope_goto_definition_bind = '<leader>g'
" let g:pymode_rope_complete_on_dot = 1
" let g:pymode_syntax_builtin_objs = g:pymode_syntax_all
" let g:pymode_syntax_builtin_types = g:pymode_syntax_all
" let g:pymode_syntax_highlight_exceptions = g:pymode_syntax_all
" let g:pymode_syntax_highlight_self = g:pymode_syntax_all
" let g:pymode_syntax_highlight_stars_operator = g:pymode_syntax_all
" let g:pymode_syntax_highlight_equal_operator = g:pymode_syntax_all
" let g:pymode_run = 1
 "let g:pymode_run_bind = '<leader>c' " leader is ,
" let g:pymode_lint = 1
" let g:pymode_lint_on_write = 1
" let g:pymode_lint_message = 1
" let g:pymode_lint_signs = 1
" let g:pymode_lint_checkers = ['pyflakes', 'pep8', 'mccabe', 'pylint']
 augroup autoformat_settings
     autocmd FileType python AutoFormatBuffer autopep8
   ""  autocmd FileType python AutoFormatBuffer yap
 augroup END
" let g:pymode_lint_options_pyflakes = { 'builtins': '_' }
" " let g:pymode_lint_options_pep257 = {}
" let g:pymode_rope_show_doc_bind = '<leader>d'
" let g:pymode_rope_regenerate_on_write = 1
" let g:pymode_rope_complete_on_dot = 1
" let g:pep8_ignore="E501,W601"
"========================================================================
"     END OF PYTHON SETTINGS
"=========================================================================
"     VIM EYE CANDY
" ========================================================================
set background=dark
" Given up on POWERLINE, AIRLINE, NERDFONTS & DEVICONS
" They don't work with URXVT
" LIGHLINE Seems to provide just the basic effects
" let g:lightline = {
        " \ 'colorscheme': 'gruvbox',
        " \ }
colorscheme gruvbox
"" make background transparent
hi Normal guibg=NONE ctermbg=NONE
""Remove tilde from blank lines "
hi EndOfBuffer ctermbg=NONE
"=============================================================================
"         Plugins: CONTROL-P, DelimitMate, NERDTREE, Numbers Options
"=============================================================================
" let g:ctrlp_prompt_mappings={'PrtClearCache()':['<Leader><F5>']}
" let g:ctrlp_prompt_mappings={'PrtdeleteEnt()':['<Leader><F7>']}
" let g:ctrlp_match_window='bottom,order:btt,min:2,max:25'
set wildmenu " enhanced autocomplete
set wildignore+=*/tmp/*,*.so,*.swp,*.zip,*node_modules*,*.jpg,*.png,*.svg,*.ttf,*.woff,*.woff3,*.eot
let g:ctrlp_working_path_mode = 'ra'

" delimitMate options
let delimitMate_expand_cr=1

" enable matchit (for matching tags with %)
runtime macros/matchit.vim

" disable colorizer at startup
let g:colorizer_startup = 0
let g:colorizer_nomap = 1

function OpenNERDTree()
  execute ":NERDTree"
endfunction
command -nargs=0 OpenNERDTree :call OpenNERDTree()

nmap <ESC>t :OpenNERDTree<CR>
let g:NERDTreeDirArrowExpandable = '+'
" Numbers
let g:numbers_exclude = ['tagbar', 'gundo', 'minibufexpl', 'nerdtree']

"======================================================================================
"          MAP KEYS
"======================================================================================
" map Leader
let mapleader = ","
nnoremap <Leader>; ,
" in-line scrolling
nmap <Leader>j gj
nmap <Leader>k gk
" buffer keys
nnoremap <Leader>bn :bn<CR>
nnoremap <Leader>bp :bp<CR>
nnoremap <Leader>bf :bf<CR>
nnoremap <Leader>bl :bl<CR>
"Open Last closed  buffer
nnoremap <Leader>bb :b#<CR>
" Close Buffer
nnoremap <Leader>bd :bd!<CR>
" new buffer/tab
nnoremap <Leader>e :enew<CR>
"Open Split Window
" CTRL-W s
nnoremap <Leader>ws :split<CR>
" Ctrl-W v
nnoremap <Leader>wv :vsplit<CR>
" CTRL-W q
nnoremap <Leader>wx :close<CR>

" CtrlP keys
let g:ctrlp_map = '<c-p>'
let g:ctrlp_cmd = 'CtrlP'
"nnoremap <Leader>pp :CtrlP<CR>
" nnoremap <Leader>pf :CtrlP<CR>
"nnoremap <Leader>pr :CtrlPMRUFiles<CR>
"nnoremap <Leader>pb :CtrlPBuffer<CR>
"cmap w!! %!sudo tee > /dev/null %
" doesnt always work
cnoremap w!! execute 'silent! write !sudo tee % >/dev/null' <bar> edit!

" camelCase motion settings
map <silent> w <Plug>CamelCaseMotion_w
map <silent> b <Plug>CamelCaseMotion_b
map <silent> e <Plug>CamelCaseMotion_e
sunmap w
sunmap b
sunmap e
"Numbers
nnoremap <Leader>nt :NumbersToggle<CR>
nnoremap <Leader>no :NumbersOnOff<CR>
" folding
nmap <Leader>f zf%
"====================================================================================
"     LIGHLINE Configs
"====================================================================================
let g:lightline                  = {}
let g:lightline.tabline          = {'left': [['buffers']], 'right': [['close']]}
let g:lightline.component_expand = {'buffers': 'lightline#bufferline#buffers'}
let g:lightline.component_type   = {'buffers': 'tabsel'}

let g:lightline.separator = { 'left': '', 'right': ' ' }
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
" DEVICONS DON'T WORK, DISABLE IT
let g:lightline#bufferline#enable_devicons =0
let g:lightline#bufferline#show_number  = 1
let g:lightline#bufferline#shorten_path = 1
let g:lightline#bufferline#unicode_symbols = 1
let g:lightline#bufferline#unnamed      = '[No Name]'
"=========================================================




