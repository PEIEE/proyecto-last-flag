const fs = require('fs');
const chars = [
    {id:'arsenal', title:'Zone Controller', lore:'Genius inventor with a gleeful disregard for safety. Top of her class and only slightly unhinged — she floods the map with aggressive contraptions and corrosive tech.'},
    {id:'bounty-hunter', title:'Mobile All-Rounder', lore:'Bounty hunter, showman, part-time myth — Julius rides into every match with flair and firepower on his custom Z1000 motorcycle. Always playing for the highlight reel.'},
    {id:'banshee', title:'Precision Fighter', lore:'Heavy-metal frontwoman with deadly aim and a legendary temper. A high-risk, high-reward fighter who demands perfect shots — she\'s not here to win, she\'s here to dominate.'},
    {id:'roadie', title:'Support Tactician', lore:'Touring roadie turned battlefield engineer — builds, boosts, and blows things up with a backstage pass. His magnet-powered grenade launcher literally makes noise. Lots of it.'},
    {id:'scout', title:'Expert Tracker', lore:'Expert tracker and crack shot trained by his forest ranger grandfather. Supported by his cybernetic falcon Luther, he keeps eyes on the whole field and covers ground with breathtaking speed.'},
    {id:'tango', title:'Assault Specialist', lore:'On Last Flag for one reason only — to find his missing sister Maria Elana. Armed with an assault rifle, electric bolas, and proximity mines. No one is stopping him.'},
    {id:'skyfire', title:'Momentum Wildcard', lore:'Action hero and stunt legend who turns every match into a jetpack-fuelled blockbuster. Thrives on mobility, surprise entries, and chaotic close-quarters takedowns. Full throttle, always.'}
];

chars.forEach(c => {
    try {
        let text = fs.readFileSync(c.id+'.html', 'utf8');
        text = text.replace(/<div class="char-lore-block">[\s\S]*?<\/div>/, `<div class="char-lore-block">\n                    <p>${c.lore}</p>\n                </div>`);
        fs.writeFileSync(c.id+'.html', text);
    } catch(e) {
        console.error("Failed on " + c.id);
    }
});
