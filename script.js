const commands = {};

const term = $('body').terminal(commands);

const greetings = ' /$$   /$$                                               /$$                                                                                                         /$$                  /$$$$$$                                                                        /$$            
| $$$ | $$                                              | $$                                                                                                        |__/                 /$$__  $$                                                                      | $$            
| $$$$| $$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$   /$$$$$$$ /$$$$$$    /$$$$$$            /$$$$$$/$$$$  /$$   /$$       /$$$$$$$   /$$$$$$  /$$$$$$/$$$$   /$$$$$$        /$$  /$$$$$$$      | $$  \__/ /$$   /$$  /$$$$$$  /$$   /$$  /$$$$$$   /$$$$$$  /$$$$$$$   /$$$$$$$| $$$$$$$       
| $$ $$ $$ |____  $$| $$_  $$_  $$ |____  $$ /$$_____/|_  $$_/   /$$__  $$          | $$_  $$_  $$| $$  | $$      | $$__  $$ |____  $$| $$_  $$_  $$ /$$__  $$      | $$ /$$_____/      |  $$$$$$ | $$  | $$ /$$__  $$| $$  | $$ |____  $$ |____  $$| $$__  $$ /$$_____/| $$__  $$      
| $$  $$$$  /$$$$$$$| $$ \ $$ \ $$  /$$$$$$$|  $$$$$$   | $$    | $$$$$$$$          | $$ \ $$ \ $$| $$  | $$      | $$  \ $$  /$$$$$$$| $$ \ $$ \ $$| $$$$$$$$      | $$|  $$$$$$        \____  $$| $$  | $$| $$  \__/| $$  | $$  /$$$$$$$  /$$$$$$$| $$  \ $$|  $$$$$$ | $$  \ $$      
| $$\  $$$ /$$__  $$| $$ | $$ | $$ /$$__  $$ \____  $$  | $$ /$$| $$_____/          | $$ | $$ | $$| $$  | $$      | $$  | $$ /$$__  $$| $$ | $$ | $$| $$_____/      | $$ \____  $$       /$$  \ $$| $$  | $$| $$      | $$  | $$ /$$__  $$ /$$__  $$| $$  | $$ \____  $$| $$  | $$      
| $$ \  $$|  $$$$$$$| $$ | $$ | $$|  $$$$$$$ /$$$$$$$/  |  $$$$/|  $$$$$$$ /$$      | $$ | $$ | $$|  $$$$$$$      | $$  | $$|  $$$$$$$| $$ | $$ | $$|  $$$$$$$      | $$ /$$$$$$$/      |  $$$$$$/|  $$$$$$/| $$      |  $$$$$$$|  $$$$$$$|  $$$$$$$| $$  | $$ /$$$$$$$/| $$  | $$      
|__/  \__/ \_______/|__/ |__/ |__/ \_______/|_______/    \___/   \_______/| $/      |__/ |__/ |__/ \____  $$      |__/  |__/ \_______/|__/ |__/ |__/ \_______/      |__/|_______/        \______/  \______/ |__/       \____  $$ \_______/ \_______/|__/  |__/|_______/ |__/  |__/      
                                                                          |_/                      /$$  | $$                                                                                                           /$$  | $$                                                        
                                                                                                  |  $$$$$$/                                                                                                          |  $$$$$$/                                                        
                                                                                                   \______/                                                                                                            \______/                                                        
'

const font = 'Slant';

figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
figlet.preloadFonts([font], ready)



const term = $('body').terminal(commands, {
    greetings: false
});



function render(text) {
    const cols = term.cols();
    return trim(figlet.textSync(text, {
        font: font,
        width: cols,
        whitespaceBreak: true
    }));
}

function trim(str) {
    return str.replace(/[\n\s]+$/, '');
}

function rainbow(string) {
    return lolcat.rainbow(function(char, color) {
        char = $.terminal.escape_brackets(char);
        return `[[;${hex(color)};]${char}]`;
    }, string).join('\n');
}

function hex(color) {
    return '#' + [color.red, color.green, color.blue].map(n => {
        return n.toString(16).padStart(2, '0');
    }).join('');
}

function ready() {
   term.echo(() => rainbow(render('Terminal Portfolio')))
       .echo('Welcome to my Terminal Portfolio\n').resume();
}
