$('.openmodale').click(function (e) {
         e.preventDefault();
         $(".modal-footer").css("display", "block");
         $(".modal-body").css("display", "block");
    $('.object').text(idea(game.haz));
      $('.place').text(idea(game.desc) + ' '+ idea(game.place));
   $('.type').text(idea(game.type));
   $('.tweet').attr('href','https://twitter.com/intent/tweet?text="'+ $('.modal-body').text() +'", thanks @rahulr047 @skillnationco&source=webclient');
   $( ".project-name" ).replaceWith( $( ".modal-body" ) );
   $(".modal-body").typed({
     strings: [$('.modal-body').html()],
     typeSpeed: 20
   });

    });

var game = {type : ['realistic', 'stylized', 'historical', 'text based', 'fast paced', 'realtime', 'turn based', 'relaxed', 'cooperative', 'multiplayer', 'simulator', 'management', 'god', 'beat em up', 'tycoon', 'strategy', 'board', 'shooter', 'shoot em up', 'survival horror', 'stealth action', 'beat em-up', 'survival', 'platformer', 'adventure', 'colourful', 'adult', 'noir','adam Sandler', 'retro', 'funny','satirical', 'scary', 'disturbing', 'cartoon','sandbox', 'open world','RPG', 'action adventure', 'role playing game', 'text adventure', 'point and click game', 'action RPG','rally cars', 'sports cars', 'F1 cars', 'karts', 'SUVs', 'trucks', 'hovercraft', 'row boats', 'boats', 'canoes', 'planes', 'rockets', 'shopping carts', 'spaceships', 'hovercars', 'flying saucers', 'helicopters', 'hang gliders','unicycles', 'segways', 'horses', 'jetskis', 'camels', 'elephants', 'dolphins', 'eagles', 'motorbikes','bikes', 'tricycles','birds', 'jewels', 'maps', 'coins', 'clans', 'knights', 'dragons', 'words', 'blocks', 'poker chips', 'playing cards', 'candy', 'colors', 'trains', 'dots', 'shapes', 'icons', 'letters', 'monsters', 'aeroplanes', 'heroes', 'pigs', 'cows', 'goo', 'plants', 'zombies', 'doodles', 'cookies', 'farm animals', 'animals', 'fruit', 'vegetables', 'creatures', 'dragons', 'spiders', 'worms', 'zombies', 'robots', ], haz : ['plants', 'trees', 'animals', 'people', 'workers', 'employees', 'citizens', 'slaves', 'gems', 'gold', 'crystals', 'coins', 'resources', 'tokens', 'mana', 'water', 'food', 'power', 'influence', 'sheep', 'timber', 'components', 'machinery', 'books', 'knowledge', 'data', 'secrets', 'supplies', 'nutrients', 'organs', 'bonds', 'stocks', 'ingredients', 'ore', 'drugs', 'metals', 'fuel','adam Sandler', 'souls', 'experiences', 'monsters', 'herbs', 'spices', 'magic', 'nazis', 'zombies', 'dragons', 'bugs', 'insects', 'dinosaurs', 'yetis', 'orcs', 'goblins', 'constructs', 'hitler', 'monkeys', 'sharks', 'aliens', 'rats', 'bats', 'samurais', 'ninjas', 'pirates', 'terrorists', 'wasps', 'golems', 'elementals', 'fairies', 'lizards', 'lizardmen', 'spiders', 'spies', 'government agents', 'skeletons', 'ghosts', 'vampires', 'werewolves', 'reptilians', 'birds', 'cats', 'dogs', 'fish', 'soldiers', 'vikings', 'old people', 'townsfolk', 'scientists', 'gangsters', 'prisoners', 'drug dealers', 'robots', 'demons', 'devils', 'ghouls', 'illusions', 'cultists', 'horrors', 'blobs of ooze', 'animals', 'villagers', 'insurgents', 'hillbillies', 'devils', 'reporters','knives', 'blades', 'bullets', 'fireballs', 'ice shards', 'energy blasts', 'blasts', 'energy beams', 'beams', 'particles', 'jets', 'music instruments', 'bombs', 'fireworks', 'lasers', 'blobs of goop', 'healing rays', 'sound waves', 'rockets', 'shrink rays', 'grenades', 'land mines', 'bees', 'sharks', ], desc : ['desolate', 'dreary', 'dangerous', 'sinister', 'treacherous', 'collapsing', 'spooky', 'abandoned', 'flooded', 'dimly lit', 'dark', 'toxic', 'radioactive', 'war torn', 'scary', 'odd looking', 'strange', 'mysterious', 'weird', 'horrible', 'special', 'impressive', 'militarized', 'once great', 'destroyed', 'ruined', 'haunted', 'futuristic', 'steampunk', 'hostile','rugged', 'grizzled', 'psychotic', 'depressed', 'angry', 'genocidal', 'lost', 'lonely', 'new', 'old', 'decaying', 'living', 'dead', 'retired', 'famous', 'paranoid', 'starving', 'far away', 'vengeful', 'manic', 'depressed', 'jealous', 'muscular', 'skinny', 'stocky', 'dilligent', 'attentive', 'sketchy', 'shadowy', 'mysterious', 'friendly', 'hostile', 'out of place', 'comical', 'disguised', 'desperate', 'illiterate', 'sickly', 'mean', 'miserly', 'generous', 'loud', 'quiet','delapidated', 'shiny new', 'battle damaged', 'corporate sponsored', 'steampunk', 'futuristic', 'colorful', 'cartoony', 'modified', 'customizable', 'fragile', 'speedy', 'sluggish','giant', 'huge', 'large', 'massive', 'big','muggle' ], place : ['hospital', 'theme park', 'dungeon', 'tower', 'zoo', 'farm', 'civilization', 'society', 'gang', 'business', 'company', 'empire', 'kingdom', 'island', 'territory', 'forest', 'space station', 'moon base', 'railroad', 'house', 'camp', 'village', 'settlement', 'town', 'city', 'country side', 'alien planet', 'galaxy', 'restaurant','facility', 'office', 'street', 'factory', 'asylum', 'car park', 'mall','cavern', 'cave', 'laboratory', 'colisseum', 'arena','jungle', 'desert', 'field', 'mine', 'quarry', 'sewer', 'warehouse', 'war zone', ] };

   function idea(el) {  /*var i = el.length, j, temp;
     console.log(el.length);
    if ( i == 0 ) return;//Once the string has been travsersed
    while ( --i ) {
      j = Math.floor( Math.random() * ( i + 1 ) );
    temp = el[i]; el[i] =el[j]; el[j] = temp;
            }
      return el[0];*/
       return el[Math.floor(Math.random() * el.length)]; 
        }
