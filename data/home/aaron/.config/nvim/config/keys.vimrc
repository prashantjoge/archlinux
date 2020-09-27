
" map Leader
let mapleader = ","
" keep backward f search, remapping it to ,;
nnoremap <Leader>; ,

" in-line scrolling
nmap <Leader>j gj
nmap <Leader>k gk
"inoremap <Tab> <C-X><C-F>
" buffer keys
nnoremap <Leader>bb :b#<CR>
nnoremap <Leader>bn :bn<CR>


nnoremap <Leader>bp :bp<CR>
nnoremap <Leader>bf :bf<CR>
nnoremap <Leader>bl :bl<CR>
nnoremap <Leader>bw :w<CR>:bd<CR>
nnoremap <Leader>bd :bd!<CR>
" new buffer/tab
nnoremap <Leader>e :enew<CR>
map <C-t><up> :tabr<cr>
map <C-t><down> :tabl<cr>
map <C-t><left> :tabp<cr>
map <C-t><right> :tabn<cr>
"window keys
"nnoremap <Leader>w< <C-w><
"nnoremap <Leader>w> <C-w>>
"nnoremap <Leader>w- <C-w>-
"nnoremap <Leader>w+ <C-w>+
"instead of ctrl-w then j, it’s just ctrl-j:
nnoremap <C-J> <C-W><C-J>
nnoremap <C-K> <C-W><C-K>
nnoremap <C-L> <C-W><C-L>
nnoremap <C-H> <C-W><C-H>
nnoremap <Leader>ws :split<CR>
nnoremap <Leader>wv :vsplit<CR>
nnoremap <Leader>wx :close<CR>

" %% to expand active buffer location on cmdline
cnoremap <expr> %% getcmdtype() == ':' ? expand('%:h').'/' : '%%'

" CtrlP keys
nnoremap <Leader>pp :CtrlP<CR>
" nnoremap <Leader>pf :CtrlP<CR>
nnoremap <Leader>pr :CtrlPMRUFiles<CR>
nnoremap <Leader>pb :CtrlPBuffer<CR>

" Function keys
nnoremap <silent> <F2> :let _s=@/<Bar>:%s/\s\+$//e<Bar>:let @/=_s<Bar>:nohl<CR>
nnoremap <F3> :set hlsearch!<CR>
"nnoremap <F5> :source $HOME/.config/nvim/init.vim<CR>
"nnoremap <F6> :NERDTreeToggle<CR>
"nnoremap <F7> :UndotreeToggle<CR>
"nnoremap <F8> :Geeknote<CR>
" indent whole file according to syntax rules
"noremap <F9> gg=G

" CTRL-U in insert mode deletes a lot.  Use CTRL-G u to first break undo,
" so that you can undo CTRL-U after inserting a line break.
inoremap <C-U> <C-G>u<C-U>
" Don't use Ex mode, use Q for formatting
map Q gq

" relative line numbers
nnoremap <Leader>3 :NumbersToggle<CR>

" remap number increment to C-s (C-a is already in use by tmux)
nmap <C-s> <C-a>

" Word count selection
vnoremap <Leader>w :w !wc -w<CR>

" vim paste mode toggle (for fixing indentation issues when pasting text)
nnoremap <F2> :set invpaste paste?<CR>
set pastetoggle=<F2>
set showmode

" override read-only permissions
"cmap w!! %!sudo tee > /dev/null %
cnoremap w!! execute 'silent! write !sudo tee % >/dev/null' <bar> edit!
" Sample command W

"command W :execute ':silent w !sudo tee % > /dev/null' | :edit!
" allow ,, for vimsneak
nmap <Leader>, <Plug>SneakPrevious

" camelCase motion settings
map <silent> w <Plug>CamelCaseMotion_w
map <silent> b <Plug>CamelCaseMotion_b
map <silent> e <Plug>CamelCaseMotion_e
sunmap w
sunmap b
sunmap e

" start interactive EasyAlign in visual mode (e.g. vip<Enter>)
vmap <Enter> <Plug>(EasyAlign)

" start interactive EasyAlign for a motion/text object (e.g. gaip)
nmap ga <Plug>(EasyAlign)

" neomake
"nmap <Leader><Space>o :lopen<CR>
"nmap <Leader><Space>c :lclose<CR>
"nmap <Leader><Space>, :ll<CR>
"nmap <Leader><Space>n :lnext<CR>
"nmap <Leader><Space>p :lprev<CR>

" folding
nmap <Leader>f zf%

" tern
"autocmd FileType javascript nnoremap <silent> <buffer> gb :TernDef<CR>

" autocomplete
"let g:SuperTabDefaultCompletionType = "<c-x><c-o>"
"let g:UltiSnipsExpandTrigger="<C-j>"
"inoremap <expr><TAB>  pumvisible() ? "\<C-n>" : "\<TAB>"

" colorizer
nmap <Leader>tc :ColorToggle<CR>
