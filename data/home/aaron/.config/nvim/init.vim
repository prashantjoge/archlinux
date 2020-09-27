
call plug#begin('~/.vim/plugged')
Plug 'chrisbra/vim-autosave'
let g:auto_save = 1
Plug 'tpope/vim-fugitive'
Plug 'tpope/vim-rhubarb'
" colorschemes
Plug 'w0ng/vim-hybrid'
Plug 'flazz/vim-colorschemes'

Plug 'ctrlpvim/ctrlp.vim'

" Displays thin vertical lines at each indentation level for code indented with spaces.
Plug 'Yggdroot/indentLine'
" Autocomplete
Plug 'ncm2/ncm2'

"buffer based completions
Plug 'ncm2/ncm2-bufword'

"for file path completions
Plug 'ncm2/ncm2-path'

" Look.vim completion plugin. dictionary completions
Plug 'filipekiss/ncm2-look.vim'

"Docker
" Plug 'moby/moby' , {'rtp': '/contrib/syntax/vim/'}

"Utils
Plug 'scrooloose/nerdtree' , { 'on':  'NERDTreeToggle' }

" incsearch.vim incrementally highlights ALL pattern matches unlike default 'incsearch'.
Plug 'haya14busa/incsearch.vim'
Plug 'mbbill/undotree'

" comment out lines gcc
Plug 'tpope/vim-commentary'

" Tab completion
Plug 'ervandew/supertab'

" Automatic closing of quotes, parenthesis, brackets, etc., - cs'"
Plug 'Raimondi/delimitMate'

" Change surrounding characters cs'"
Plug 'tpope/vim-surround'

" - or * in text files to start a bulleted list
Plug 'dkarter/bullets.vim'

" eye candy
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'bling/vim-bufferline'
Plug 'ryanoasis/vim-devicons'

" English Language and grammar
Plug 'reedes/vim-wordy'
Plug 'reedes/vim-pencil'
Plug 'reedes/vim-litecorrect'
" Thesaurus and dictionary
" <leader> cs to invoke
Plug 'ron89/thesaurus_query.vim'

Plug 'dhruvasagar/vim-table-mode'
" ,tm
""| name | address | phone |
""||
""|------+---------+-------|

" :FZF
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'
Plug 'junegunn/vim-easy-align'
call plug#end()
nnoremap <C-p> :FZF<CR>
let g:fzf_action = {
  \ 'ctrl-t': 'tab split',
  \ 'ctrl-s': 'split',
  \ 'ctrl-v': 'vsplit'
  \}
"--------------------------------------------------------------------
"" END OF PLUGINS
"---------------------------------------------------------------------
"=====================================================================
"" GENERAL SETTINGS
"+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
" let $PYTHONPATH="/usr/lib/python2.7/site-packages"
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
"colorscheme wal
"" set sc show commands
set copyindent "copy the previous indentation on autoindenting"
set number "show numbers
set relativenumber " relative line numbers
" set shiftround "Use multiple of shiftwidth when indenting with <,>/"
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
" Also load indent files, to automatically do language-dependent indenting.
filetype plugin indent on
filetype plugin on
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
" Display all matching files when we tab complete
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

" Search down into subfolders
" Providers tab-completion for all file-related tasks
set path+=**
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
"set laststatus=2 " always show status line
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
" Not a good idea to look up dictionary when programming (set to 1 if needed)`
let g:tq_openoffice_en_file="~/.config/nvim/MyThes-1.0/th_en_US_new"
let g:tq_enabled_backends=["openoffice_en"]
let g:ncm2_look_enabled = 0
augroup markdownSpell
    autocmd!
    autocmd FileType markdown setlocal spell
    autocmd BufRead,BufNewFile *.txt setlocal spell
    autocmd BufRead,BufNewFile *.txt let g:ncm2_look_enabled=1
augroup END
"set thesaurus+=~/.vim/words.txt
let g:pencil#autoformat = 1      " 0=disable, 1=enable (def)
augroup pencil
  autocmd!
  autocmd FileType markdown call pencil#init({'wrap': 'hard', 'autoformat': 1})
  autocmd FileType text     call pencil#init({'wrap': 'soft', 'autoformat': 1})
augroup END
let g:airline_section_x = '%{PencilMode()}'
let user_dict = {
  \ 'maybe': ['mabye'],
  \ 'medieval': ['medival', 'mediaeval', 'medevil'],
  \ 'then': ['hten'],
  \ 'I''m' : ['Im', 'im'],
  \ }
augroup litecorrect
  autocmd!
  autocmd FileType markdown call litecorrect#init(user_dict)
  autocmd FileType text call litecorrect#init(user_dict)
augroup END
" Vim Auto-Captitalization
func! WordProcessorMode()
    " Load Markdown syntax highlighting but with custom hashtag support
    set filetype=mkd
    syn match htmlBoldItalic "#[-_a-zA-Z0-9]\+"

    " Other options
    set nonumber
    set wrap
    set linebreak
    set breakat=\
    set display=lastline

    " Indenting
	set si "turn on smart indent"
	set autoindent "Turn on auto indentation"
	set tabstop=4
    	set softtabstop=4
    	set shiftwidth=4
	set expandtab
    	set spell spelllang=en_gb
    set complete+=k
   "" source ~/.vim/abbreviations.vim

    " Auto-capitalize script (after full stops)
    augroup SENTENCES
        au!
        autocmd InsertCharPre * if search('\v(%^|[.!?]\_s+|\_^\-\s|\_^title\:\s|\n\n)%#', 'bcnw') != 0 | let v:char = toupper(v:char) | endif
    augroup END
endfu

com! WP call WordProcessorMode()
au BufNewFile,BufRead *.mkd call WordProcessorMode()
au BufNewFile,BufRead *.md call WordProcessorMode()
au BufNewFile,BufRead *.txt call WordProcessorMode()
au BufNewFile,BufRead *.py
    \ set tabstop=4 |
    \ set softtabstop=4 |
    \ set shiftwidth=4 |
    \ set textwidth=79 |
    \ set expandtab |
    \ set fo+=t |
    \ set autoindent |
    \ set fileformat=unix |


" Set python environments
"let g:python_host_prog  = "/usr/bin/python2"


" Do flake8 check on file write of python files
"autocmd BufWritePost *.py call Flake8()
"=====================================================================
"
"        END OF GENERAL SETTINGS
"=====================================================================


" Indentline plugin
let g:indentLine_setColors = 0
"let g:indentLine_color_term = 239
let g:indentLine_char = '|'
"let g:indentLine_bgcolor_term = 202
"========================================================================
"     END OF PYTHON SETTINGS
"=========================================================================
"     VIM EYE CANDY
" ========================================================================
set background=dark
"colorscheme gruvbox, badwolf
colorscheme hybrid
"" make background transparent
"hi Normal guibg=NONE ctermbg=NONE
""Remove tilde from blank lines "
hi EndOfBuffer ctermbg=NONE

"=============================================================================
"         Plugins: CONTROL-P, DelimitMate, NERDTREE, Numbers Options, Bullets
"=============================================================================
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
map <C-n> :NERDTreeToggle<CR>
" nmap <ESC>t :OpenNERDTree<CR>
let g:NERDTreeDirArrowExpandable = '▸'
let g:NERDTreeDirArrowCollapsible = '▾'
let NERDTreeShowHidden=1
" NERDTress File highlighting
function! NERDTreeHighlightFile(extension, fg, bg, guifg, guibg)
 exec 'autocmd FileType nerdtree highlight ' . a:extension .' ctermbg='. a:bg .' ctermfg='. a:fg .' guibg='. a:guibg .' guifg='. a:guifg
 exec 'autocmd FileType nerdtree syn match ' . a:extension .' #^\s\+.*'. a:extension .'$#'
endfunction

call NERDTreeHighlightFile('jade', 'green', 'none', 'green', '#151515')
call NERDTreeHighlightFile('ini', 'yellow', 'none', 'yellow', '#151515')
call NERDTreeHighlightFile('md', 'blue', 'none', '#3366FF', '#151515')
call NERDTreeHighlightFile('yml', 'yellow', 'none', 'yellow', '#151515')
call NERDTreeHighlightFile('config', 'yellow', 'none', 'yellow', '#151515')
call NERDTreeHighlightFile('conf', 'yellow', 'none', 'yellow', '#151515')
call NERDTreeHighlightFile('json', 'yellow', 'none', 'yellow', '#151515')
call NERDTreeHighlightFile('html', 'yellow', 'none', 'yellow', '#151515')
call NERDTreeHighlightFile('styl', 'cyan', 'none', 'cyan', '#151515')
call NERDTreeHighlightFile('css', 'cyan', 'none', 'cyan', '#151515')
call NERDTreeHighlightFile('coffee', 'Red', 'none', 'red', '#151515')
call NERDTreeHighlightFile('js', 'Red', 'none', '#ffa500', '#151515')
call NERDTreeHighlightFile('php', 'Magenta', 'none', '#ff00ff', '#151515')
call NERDTreeHighlightFile('ds_store', 'Gray', 'none', '#686868', '#151515')
call NERDTreeHighlightFile('gitconfig', 'Gray', 'none', '#686868', '#151515')
call NERDTreeHighlightFile('gitignore', 'Gray', 'none', '#686868', '#151515')
call NERDTreeHighlightFile('bashrc', 'Gray', 'none', '#686868', '#151515')
call NERDTreeHighlightFile('bashprofile', 'Gray', 'none', '#686868', '#151515')
autocmd VimEnter * call NERDTreeHighlightFile('jade', 'green', 'none', 'green', '#151515')
" Numbers
let g:numbers_exclude = ['tagbar', 'gundo', 'minibufexpl', 'nerdtree']
" close Nerdtree with q if its the last window
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif
"supertab starts from the bottom instead of the top. This starts from the
"beginning
let g:SuperTabDefaultCompletionType = "<c-n>"
" Bullets.vim
let g:bullets_enabled_file_types = [
    \ 'markdown',
    \ 'text',
    \ 'gitcommit',
    \ 'scratch'
    \]
let g:bullets_outline_levels = ['num', 'abc', 'std*']
" Example [keys pressed to get this bullet]:
" 1. first parent
"   a. child bullet [ <cr><C-t> ]
"     - unordered bullet [ <cr><C-t> ]
"   b. second child bullet [ <cr><C-d> ]
" 2. second parent [ <cr><C-d> ]
" configure Jedi-vim
"let g:jedi#use_tabs_not_buffers = 1
"let g:jedi#use_splits_not_buffers = "right"
"let g:jedi#show_call_signatures = "1"
"======================================================================================
"          MAP KEYS
"======================================================================================
" map Leader
let mapleader = ","
nnoremap <Leader>; ,
" in-line scrolling
"nmap <Leader>j gj
"nmap <Leader>k gk

" buffer keys
nnoremap <Leader>bn :bn<CR>
nnoremap <Leader>bp :bp<CR>
nnoremap <Leader>bf :bf<CR>
nnoremap <Leader>bl :bl<CR>
"Open Last closed  buffer
nnoremap <Leader>bb :b#<CR>
" Close Buffer
nnoremap <Leader>bd :bd<CR>
nnoremap <Leader>bc :bw<CR>
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
"let g:ctrlp_map = '<c-p>'
"let g:ctrlp_cmd = 'CtrlP'
cnoremap w!! execute 'silent! write !sudo tee % >/dev/null' <bar> edit!

" use alt+hjkl to move between split/vsplit panels
tnoremap <A-h> <C-\><C-n><C-w>h
tnoremap <A-j> <C-\><C-n><C-w>j
tnoremap <A-k> <C-\><C-n><C-w>k
tnoremap <A-l> <C-\><C-n><C-w>l
nnoremap <A-h> <C-w>h
nnoremap <A-j> <C-w>j
nnoremap <A-k> <C-w>k
nnoremap <A-l> <C-w>l

" camelCase motion settings
"map <silent> w <Plug>CamelCaseMotion_w
"map <silent> b <Plug>CamelCaseMotion_b
"map <silent> e <Plug>CamelCaseMotion_e
"sunmap w
"sunmap b
"sunmap e
"Numbers
nnoremap <Leader>nt :NumbersToggle<CR>
nnoremap <Leader>no :NumbersOnOff<CR>
" folding
set foldenable
set foldmethod=indent
nmap <Leader>f zc
nmap <Leader>u zo
nmap <Leader>F zM
nmap <Leader>U zR
"Wordy
if !&wildcharm | set wildcharm=<C-z> | endif
execute 'nnoremap <leader>w :Wordy<space>'.nr2char(&wildcharm)

let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#tabline#left_sep = ' '
let g:airline#extensions#tabline#left_alt_sep = '|'
let g:airline_powerline_fonts = 1
let g:airline_theme='badwolf'
:nnoremap <Tab> :bnext<CR>
:nnoremap <S-Tab> :bprevious<CR>

let g:webdevicons_enable = 1
let g:webdevicons_enable_nerdtree = 1
" adding the column to vimfiler
let g:webdevicons_enable_vimfiler = 1
" adding to vim-airline's tabline
let g:webdevicons_enable_airline_tabline = 1
" adding to vim-airline's statusline
let g:webdevicons_enable_airline_statusline = 1
" ctrlp glyphs
let g:webdevicons_enable_ctrlp = 1
" enable open and close folder/directory glyph flags (disabled by default with 0)
let g:DevIconsEnableFoldersOpenClose = 1
" enable folder/directory glyph flag (disabled by default with 0)
let g:WebDevIconsUnicodeDecorateFolderNodes = 1
" change the default folder/directory glyph/icon
let g:WebDevIconsUnicodeDecorateFolderNodesDefaultSymbol = ''
let g:airline_statusline_ontop=1
set statusline=%<%f\ %h%m%r%{kite#statusline()}%=%-14.(%l,%c%V%)\ %P
let g:webdevicons_enable_startify = 1
" Force extra padding in NERDTree so that the filetype icons line up vertically
let g:WebDevIconsNerdTreeGitPluginForceVAlign = 1
" enable file extension pattern matching glyphs on folder/directory (disabled by default with 0)
let g:DevIconsEnableFolderExtensionPatternMatching = 1

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
"Kite-code completion for python Settings
"set statusline+=%{kite#statusline()}
set laststatus=2  " always display the status line
let g:kite_tab_complete=1
set completeopt+=menuone   " show the popup menu even when there is only 1 match
set completeopt+=noinsert  " don't insert any text until user chooses a match
set completeopt-=longest   " don't insert the longest common text
set completeopt+=preview
autocmd CompleteDone * if !pumvisible() | pclose | endif

"kite docs
nmap <silent> <buffer> gK <Plug>(kite-docs)
let g:kite_documentation_continual=1
"let g:pymode_python = 'python3'
"end kite
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
